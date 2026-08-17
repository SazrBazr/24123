export interface Option {
  id: string;
  emoji: string;
  en: string;
  zh: string;
}

export interface Question {
  id: string;
  category: string;
  enTitle: string;
  zhTitle: string;
  options: Option[];
}

export const questions: Question[] = [
  {
    id: "vibe",
    category: "Vibe & Rhythm / 节奏与氛围",
    enTitle: "If you could pick the rhythm of our day, what feels best?",
    zhTitle: "你希望我们这一天是什么样的节奏？",
    options: [
      {
        id: "A",
        emoji: "☕",
        en: "Relaxed & Chill — Sleep in, grab coffee/tea, stroll slowly without rush.",
        zh: "慢节奏：睡到自然醒，喝咖啡/果茶，慢慢闲逛，毫无压力",
      },
      {
        id: "B",
        emoji: "🍢",
        en: "Food Explorer — Hit iconic street spots, try delicious local snacks.",
        zh: "美食探索：打卡地道街头小吃与宝藏老店，一路吃过去",
      },
      {
        id: "C",
        emoji: "🌊",
        en: "Scenic & Picturesque — Sea breezes, photography spots, seaside strolls.",
        zh: "浪漫风景：吹海风、拍照打卡、海边/老街漫步",
      },
      {
        id: "D",
        emoji: "🎨",
        en: "Interactive & Fun — Exploring cultural spots, indie shops & hidden gems.",
        zh: "互动体验：文艺街区、特色小店、发现有趣的小众据点",
      },
    ],
  },
  {
    id: "feast",
    category: "The Main Feast / 今日投喂指南",
    enTitle: "What kind of meal sounds most delicious to you today?",
    zhTitle: "今日份肚子的小心愿，你最想吃哪一种？",
    options: [
      {
        id: "A",
        emoji: "🥩",
        en: "Lean & tender Chaoshan fresh beef hotpot (zero fat, pure tender cuts + chili dip)!",
        zh: "鲜嫩纯瘦牛肉火锅（无肥肉/纯嫩肉+秘制辣椒蘸料，鲜香过瘾）",
      },
      {
        id: "B",
        emoji: "🍢",
        en: "Sizzling spicy skewers & street BBQ (flavorful, tender meats with no fishy odors)!",
        zh: "香辣炭火烤串/特色小烧烤（香辣够味，肉质紧实无异味）",
      },
      {
        id: "C",
        emoji: "🥢",
        en: "Street snack trail: Crispy rice rolls, fried taro, and local spicy noodle bowls!",
        zh: "街头小吃漫游：香脆蚝烙、反沙芋头、特色香辣干粿条",
      },
      {
        id: "D",
        emoji: "✨",
        en: "Cozy aesthetic bistro with flavorful fusion dishes and great ambience.",
        zh: "老街里的氛围感融合餐厅，精致入味，好吃又好拍",
      },
    ],
  },
  {
    id: "drinks",
    category: "Fruit & Fuel / 水果与能量补给",
    enTitle: "When it's time for a sweet refill, what are you grabbing first?",
    zhTitle: "逛累了需要能量补充，你第一反应最想来点什么？",
    options: [
      {
        id: "A",
        emoji: "🥭",
        en: "Fresh mango heaven: Mango pomelo sago, mango shaved ice, or fresh mango cups!",
        zh: "芒果控狂喜：满杯多肉芒芒、杨枝甘露或鲜切大芒果！",
      },
      {
        id: "B",
        emoji: "🧋",
        en: "Refreshing Duck Shit Aroma iced lemon tea or iced fruit oolong tea!",
        zh: "清爽解腻：特调鸭屎香手打柠檬茶/多汁鲜果茶",
      },
      {
        id: "C",
        emoji: "☕",
        en: "A quiet, aesthetic café for iced coffee or fruit tonic to relax.",
        zh: "躲进安静的文艺咖啡馆，喝杯果香特调或清爽气泡水",
      },
      {
        id: "D",
        emoji: "🍧",
        en: "Traditional Chaoshan sweet soup: Sweet taro, grass jelly, or Yamu Nian!",
        zh: "传统甜汤铺：反沙芋头、鸭母捻、清甜草粿冰",
      },
    ],
  },
  {
    id: "scenery",
    category: "Exploration / 探索取向",
    enTitle: "Which setting would you enjoy exploring most together?",
    zhTitle: "如果选一个最想停留散步的场景，你会选？",
    options: [
      {
        id: "A",
        emoji: "🏛️",
        en: "Vintage Arcade Architecture & Old Town charm (Small Park historic area).",
        zh: "小公园骑楼老街 — 复古南洋风情、复古招牌与街景",
      },
      {
        id: "B",
        emoji: "🌅",
        en: "Seaside Promenade & Coastal Breeze — Watching the ocean and sunset.",
        zh: "海滨长廊/海湾 — 吹风看海看夕阳",
      },
      {
        id: "C",
        emoji: "📸",
        en: "Indie Creative Arts Park — Trendy shops, cute murals, and photo spots.",
        zh: "文创艺术街区 — 潮流买手店、出片拍照点与特色展",
      },
      {
        id: "D",
        emoji: "🍵",
        en: "Traditional Tea Courtyard — Relaxed, historic, and peaceful garden vibe.",
        zh: "古风庭院茶舍 — 听曲品茗，闲适惬意",
      },
    ],
  },
  {
    id: "evening",
    category: "Evening Vibe / 晚间微醺与收尾",
    enTitle: "How should we wrap up our evening?",
    zhTitle: "夜晚的美好收尾，你更期待哪一种氛围？",
    options: [
      {
        id: "A",
        emoji: "🍹",
        en: "Sweet, fruity low-alcohol cocktail / fruit cider at a cozy, quiet lounge.",
        zh: "微醺慢调：安静小酒馆，来杯甜甜的低度数果味特调/果酒",
      },
      {
        id: "B",
        emoji: "🍢",
        en: "Late-night spicy supper street: Fresh midnight snacks and city night lights.",
        zh: "深夜烟火气：热气腾腾的香辣夜宵摊/特色小吃街",
      },
      {
        id: "C",
        emoji: "🌙",
        en: "Waterfront night walk with the gentle sea breeze and good conversation.",
        zh: "浪漫夜景：沿着海滨内湾散步吹晚风，静静聊天",
      },
      {
        id: "D",
        emoji: "🍰",
        en: "Rooftop night view with fresh fruit desserts and cool drinks.",
        zh: "高空天台夜景：吹风俯瞰城市，搭配精致水果甜品",
      },
    ],
  },
];