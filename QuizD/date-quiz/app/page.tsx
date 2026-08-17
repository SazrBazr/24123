"use client";

import React, { useState } from "react";
import { questions } from "@/lib/questions";

export default function DatePlannerQuiz() {
  // Step flow: 'auth' -> 'quiz' -> 'completed'
  const [stage, setStage] = useState<"auth" | "quiz" | "completed">("auth");
  const [authForm, setAuthForm] = useState({
    name: "",
    email: "",
    password: "",
  });

  const [currentIndex, setCurrentIndex] = useState(0);
  const [answers, setAnswers] = useState<Record<number, number>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);

  const currentQ = questions[currentIndex];
  const progress = ((currentIndex + 1) / questions.length) * 100;

  const handleStartQuiz = (e: React.FormEvent) => {
    e.preventDefault();
    if (!authForm.name.trim()) return;
    setStage("quiz");
  };

  const handleSelectOption = (optionIndex: number) => {
    const questionNum = currentIndex + 1;
    const optionNum = optionIndex + 1;

    const updatedAnswers = {
      ...answers,
      [questionNum]: optionNum,
    };
    setAnswers(updatedAnswers);

    if (currentIndex < questions.length - 1) {
      setCurrentIndex((prev) => prev + 1);
    } else {
      handleSubmit(updatedAnswers);
    }
  };

  const handleSubmit = async (finalAnswers: Record<number, number>) => {
    setIsSubmitting(true);
    try {
      const res = await fetch("/api/submit", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          user: authForm,
          answers: finalAnswers,
        }),
      });

      if (!res.ok) {
        throw new Error("Failed to submit");
      }
    } catch (error) {
      console.error("Submission error:", error);
    } finally {
      setIsSubmitting(false);
      setStage("completed");
    }
  };

  // 1. Completed Screen
  if (stage === "completed") {
    return (
      <main className="min-h-screen bg-rose-50/50 flex items-center justify-center p-4">
        <div className="max-w-md w-full bg-white/95 backdrop-blur-md rounded-3xl p-8 shadow-xl border border-rose-100 text-center">
          <div className="w-16 h-16 bg-rose-100 text-rose-500 rounded-full flex items-center justify-center text-3xl mx-auto mb-4">
            ✨
          </div>
          <h2 className="text-2xl font-bold text-gray-800 mb-1">
            收到啦，{authForm.name || "美女"}！
          </h2>
          <p className="text-sm font-semibold text-rose-500 mb-2">
            专属约会计划正在定制生成中……
          </p>
          <p className="text-xs text-gray-400 mb-6">
            Preferences locked in! Generating our custom plan...
          </p>
          
          <div className="bg-rose-50/60 rounded-2xl p-4 text-xs text-rose-800 border border-rose-100">
            🏖️ 准备好开启一段悠闲又美味的汕头之旅吧～
          </div>
        </div>
      </main>
    );
  }

  // 2. Login / Sign-up Screen
  if (stage === "auth") {
    return (
      <main className="min-h-screen bg-gradient-to-b from-rose-50 via-white to-amber-50 flex items-center justify-center p-4">
        <div className="max-w-md w-full bg-white rounded-3xl p-6 sm:p-8 shadow-xl border border-rose-100">
          
          <div className="text-center mb-6">
            <span className="inline-block p-3 bg-rose-100/80 rounded-2xl text-2xl mb-3">
              💌
            </span>
            <h1 className="text-xl sm:text-2xl font-bold text-gray-800">
              开启专属约会定制
            </h1>
            <p className="text-xs sm:text-sm text-gray-400 mt-1 font-medium">
              Create your profile to unlock our Shantou plan
            </p>
          </div>

          <form onSubmit={handleStartQuiz} className="space-y-4">
            <div>
              <label className="block text-xs font-bold text-gray-700 mb-1">
                你的名字 / 昵称 (Name or Nickname)
              </label>
              <input
                type="text"
                required
                placeholder="怎么称呼你？"
                value={authForm.name}
                onChange={(e) => setAuthForm({ ...authForm, name: e.target.value })}
                className="w-full px-4 py-3 rounded-2xl border border-gray-200 text-sm focus:outline-none focus:ring-2 focus:ring-rose-400 focus:border-transparent transition-all"
              />
            </div>

            <div>
              <label className="block text-xs font-bold text-gray-700 mb-1">
                邮箱 (Email)
              </label>
              <input
                type="email"
                required
                placeholder="example@mail.com"
                value={authForm.email}
                onChange={(e) => setAuthForm({ ...authForm, email: e.target.value })}
                className="w-full px-4 py-3 rounded-2xl border border-gray-200 text-sm focus:outline-none focus:ring-2 focus:ring-rose-400 focus:border-transparent transition-all"
              />
            </div>

            <div>
              <label className="block text-xs font-bold text-gray-700 mb-1">
                专属密码 / 暗号 (Passcode)
              </label>
              <input
                type="password"
                required
                placeholder="设置一个专属暗号"
                value={authForm.password}
                onChange={(e) => setAuthForm({ ...authForm, password: e.target.value })}
                className="w-full px-4 py-3 rounded-2xl border border-gray-200 text-sm focus:outline-none focus:ring-2 focus:ring-rose-400 focus:border-transparent transition-all"
              />
            </div>

            <button
              type="submit"
              className="w-full mt-2 py-3.5 px-4 bg-rose-500 hover:bg-rose-600 active:scale-[0.99] text-white text-sm font-bold rounded-2xl shadow-md shadow-rose-200 transition duration-150 cursor-pointer"
            >
              开启答题 ✨ (Start Quiz)
            </button>
          </form>

        </div>
      </main>
    );
  }

  // 3. Quiz Questions Screen
  return (
    <main className="min-h-screen bg-gradient-to-b from-rose-50 via-white to-amber-50 flex items-center justify-center p-4">
      <div className="max-w-lg w-full bg-white rounded-3xl p-6 sm:p-8 shadow-xl border border-rose-100 relative">
        
        {/* Progress Bar */}
        <div className="mb-6">
          <div className="flex justify-between items-center text-xs font-semibold text-gray-400 tracking-wider mb-2">
            <span>第 {currentIndex + 1} / {questions.length} 题</span>
            <span>{Math.round(progress)}%</span>
          </div>
          <div className="h-2 w-full bg-gray-100 rounded-full overflow-hidden">
            <div
              className="h-full bg-rose-400 transition-all duration-300 ease-out"
              style={{ width: `${progress}%` }}
            />
          </div>
        </div>

        {/* Category Badge */}
        <div className="inline-block px-3.5 py-1 bg-rose-100/80 text-rose-600 rounded-full text-xs font-semibold mb-4">
          {currentQ.category}
        </div>

        {/* Question Titles */}
        <div className="mb-6">
          <h1 className="text-xl sm:text-2xl font-bold text-gray-800 mb-1 leading-snug">
            {currentQ.zhTitle}
          </h1>
          <p className="text-xs sm:text-sm text-gray-400 font-medium">
            {currentQ.enTitle}
          </p>
        </div>

        {/* Options */}
        <div className="space-y-3">
          {currentQ.options.map((option, idx) => (
            <button
              key={option.id}
              onClick={() => handleSelectOption(idx)}
              disabled={isSubmitting}
              className="w-full text-left p-4 rounded-2xl border border-gray-100 bg-white hover:border-rose-300 hover:bg-rose-50/40 active:scale-[0.99] transition duration-150 flex items-start gap-3.5 group shadow-sm hover:shadow cursor-pointer"
            >
              <span className="text-2xl pt-0.5 group-hover:scale-110 transition-transform">
                {option.emoji}
              </span>
              <div className="flex-1">
                <p className="text-base font-bold text-gray-800 group-hover:text-rose-600 transition-colors leading-snug">
                  {option.zh}
                </p>
                <p className="text-xs text-gray-400 mt-1 font-medium">
                  {option.en}
                </p>
              </div>
            </button>
          ))}
        </div>

        {/* Back Button */}
        {currentIndex > 0 && (
          <button
            onClick={() => setCurrentIndex((prev) => prev - 1)}
            className="mt-6 text-xs text-gray-400 hover:text-gray-600 font-medium transition-colors cursor-pointer"
          >
            ← 返回上一题 (Previous Question)
          </button>
        )}
      </div>
    </main>
  );
}