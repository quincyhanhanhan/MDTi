export interface Question {
  id: number;
  dimension: number; // 0: I/E (内敛/外放), 1: S/N (务实/发散), 2: T/F (理智/共情), 3: J/P (计划/随性)
  text: string;
  options: {
    text: string;
    value: number;
  }[];
}

export interface CharacterResult {
  id: string;
  name: string;
  label: string;
  vector: [number, number, number, number]; // [Dim 0, Dim 1, Dim 2, Dim 3] from 1 to 10
  description: string;
  color: string;
}

export const questions: Question[] = [
  // Introvert vs Extrovert (Dimension 0, High is Extroverted)
  {
    id: 1,
    dimension: 0,
    text: "周末难得没有安排，你通常会怎么度过？",
    options: [
      { text: "呼朋唤友组大局，人越多越好！", value: 3 },
      { text: "约一两个密友找个咖啡馆或酒吧聊聊天。", value: 2 },
      { text: "偶尔去比较安静的展览或公园走走。", value: 1 },
      { text: "绝对是在家躺平，与床死磕到底。", value: 0 },
    ],
  },
  {
    id: 2,
    dimension: 0,
    text: "如果突然被cue上台表演或发言，你的第一反应是？",
    options: [
      { text: "毫不怯场人来疯，甚至能顺带整活！", value: 3 },
      { text: "稍微有点紧张，但很快就能融入氛围发挥。", value: 2 },
      { text: "脑子一片空白，只想尽快敷衍过去下台。", value: 1 },
      { text: "疯狂推脱连连摆手拒绝，试图遁地逃跑。", value: 0 },
    ],
  },
  {
    id: 3,
    dimension: 0,
    text: "在一个聚会上遇到不熟的人，你通常会怎样？",
    options: [
      { text: "开启社牛模式，迅速破冰拿到对方微信。", value: 3 },
      { text: "如果别人搭话我也能接得上，聊得比较愉快。", value: 2 },
      { text: "默默吃东西或看手机，尽量降低存在感。", value: 1 },
      { text: "感到极度内耗，想找借口提前溜走。", value: 0 },
    ],
  },
  // Realistic vs Imaginative (Dimension 1, High is Imaginative)
  {
    id: 4,
    dimension: 1,
    text: "听一首新歌时，你最先注意到什么？",
    options: [
      { text: "歌曲营造的整体意境，能让我脑补出一部电影。", value: 3 },
      { text: "歌词的深层寓意是否能呼应我的人生哲理。", value: 2 },
      { text: "歌手的咬字发音，或是某段旋律的起伏好不好听。", value: 1 },
      { text: "编排、和弦走向，以及鼓点、贝斯等具体的录音细节。", value: 0 },
    ],
  },
  {
    id: 5,
    dimension: 1,
    text: "当脑子里冒出一个新想法时，你更倾向于：",
    options: [
      { text: "开始无限发散，联想到星辰大海甚至改变世界！", value: 3 },
      { text: "觉得很有趣，会在脑海里把它勾勒成一个大致的蓝图。", value: 2 },
      { text: "会觉得不错，但很快又回到手头正在做的现实工作中。", value: 1 },
      { text: "立刻马上分析它要怎么落地，第一步该干嘛，预算多少。", value: 0 },
    ],
  },
  {
    id: 6,
    dimension: 1,
    text: "你平时跟朋友说话交流的方式是怎样的？",
    options: [
      { text: "天马行空，经常使用奇妙的比喻和跳跃的逻辑。", value: 3 },
      { text: "喜欢讲故事和描绘大愿景，有时会忽略细节。", value: 2 },
      { text: "叙事明确，有一说一，偶尔加一点点修饰。", value: 1 },
      { text: "直奔主题，精准罗列数据或事实，像说明书一样清晰。", value: 0 },
    ],
  },
  // Logical vs Emotional (Dimension 2, High is Emotional)
  {
    id: 7,
    dimension: 2,
    text: "朋友向你抱怨生活和工作不顺心，你第一反应是？",
    options: [
      { text: "完全共情，跟着TA一起痛哭/大骂，彻底释放情绪！", value: 3 },
      { text: "温柔地安抚，给TA递纸巾，认真倾听当好树洞。", value: 2 },
      { text: "等情绪稍微稳定后，帮TA分析这事儿的问题究竟出在哪。", value: 1 },
      { text: "直接指出客观现实甚至TA自身的问题，并给出解决方案。", value: 0 },
    ],
  },
  {
    id: 8,
    dimension: 2,
    text: "如果在团队合作中出现了分歧，你内心会更在意什么？",
    options: [
      { text: "极其害怕冲突，想尽一切办法当和事佬调停大家。", value: 3 },
      { text: "觉得大家可以各退一步，维护团队感情和氛围最重要。", value: 2 },
      { text: "觉得适度争论是好事，有利于找出可行路线和折中方案。", value: 1 },
      { text: "坚信真理越辩越明，为了最正确的方案不怕掀桌子吵架。", value: 0 },
    ],
  },
  {
    id: 9,
    dimension: 2,
    text: "看一部很感人的悲伤电影，你的表现是？",
    options: [
      { text: "一秒沦陷！纸巾不够用，甚至电影结束好几天还缓不过来。", value: 3 },
      { text: "会感动眼眶湿润，觉得这是一部很有温度的好电影。", value: 2 },
      { text: "觉得导演煽情手法不错，但能立马抽离恢复理智。", value: 1 },
      { text: "面无表情，甚至在心里一直吐槽剧情刚才的决策太不讲逻辑了。", value: 0 },
    ],
  },
  // Planned vs Spontaneous (Dimension 3, High is Spontaneous)
  {
    id: 10,
    dimension: 3,
    text: "你平时常用的工作桌面/房间通常是呈现怎样的状态？",
    options: [
      { text: "随性而为，东西堆在哪就算哪，这叫自由生长的艺术！", value: 3 },
      { text: "看起来有一点乱，但我自己完全知道每样东西藏在哪个角落。", value: 2 },
      { text: "大部分时间保持整齐，偶尔特别忙的时候才顾不上收拾。", value: 1 },
      { text: "收纳强迫症晚期，所有物品必须按照固定的分类和规律摆放。", value: 0 },
    ],
  },
  {
    id: 11,
    dimension: 3,
    text: "对于出远门旅行，你的习惯路线图是：",
    options: [
      { text: "走到哪算哪，说不定下一个转角就有奇遇，完全不看攻略。", value: 3 },
      { text: "定个大概的目的地和大方向，其他细节全凭当天的心情。", value: 2 },
      { text: "会提前把主要的行程以及必须要吃的/逛的点都大概列好。", value: 1 },
      { text: "随身携带详尽到“分钟”级别的行程EXCEL表格，严格执行！", value: 0 },
    ],
  },
  {
    id: 12,
    dimension: 3,
    text: "面对工作或学习的最后期限（Deadline），你的真实表现？",
    options: [
      { text: "DDL是什么？不到最后五分钟我绝对爆发不出灵感！", value: 3 },
      { text: "会拖延一下，但基本上能在最后期限前集中精力突击完成。", value: 2 },
      { text: "习惯性把任务按进度分配到每一天，基本能稳扎稳打向前推。", value: 1 },
      { text: "极度焦虑并厌恶赶工，必定要提前好几天甚至一周完美交付。", value: 0 },
    ],
  },
];

export const characters: CharacterResult[] = [
  {
    id: "ashin",
    name: "阿信",
    label: "主唱型灵魂 (Vocal Soul)",
    vector: [3, 9, 8, 6],
    description: "你的内心深处有一座巨大的文字宇宙。你可能在人群中显得有些安静甚至神秘，但你的脑海里无时无刻不在上演着波澜壮阔的电影。你情感极度细腻，对这世界有着自己独特的浪漫哲学。有时候你喜欢一个人熬夜，借着黑夜的掩护把那些敏感的思绪写成诗。在你的本命磁场里，你是绝对的精神领袖，总能在不经意间用你的思想和文字给周围的人带来温柔的共鸣与巨大的力量！",
    color: "from-blue-500 to-indigo-500",
  },
  {
    id: "monster",
    name: "怪兽",
    label: "靠谱团长型 (Leader Guitarist)",
    vector: [5, 4, 7, 3],
    description: "骨子里燃烧着热血，但在现实中却表现出极致的温柔与强大。你充满责任感，是一个能把所有人扛在肩上的硬核人物。不仅思维务实、办事靠谱，而且心思非常细腻，时刻关心着身边每个人的感受。别人常常依赖你的稳重，你可能偶尔也会觉得疲惫，但看到大家开心的样子，你就会觉得所有的付出都值得。你是那个最让人安心的存在，有你在，大家永远都有避风港。",
    color: "from-rose-500 to-red-500",
  },
  {
    id: "stone",
    name: "石头",
    label: "铁汉柔情型 (Warm Guitarist)",
    vector: [4, 7, 9, 5],
    description: "看似拥有最坚硬的外壳，实则内心装满了最柔软的爱与感性！你是一个纯粹的理想主义者，拥有着极其强大的共情能力，甚至很容易因为一件微小而美好的事物感动流泪。你随和自然，喜欢沉浸在自己的小世界里（比如专注地热爱某项运动），对整个世界始终保持着温柔与善意。你就像一颗小太阳，用那几乎没有杂质的真诚在温暖着身边的每一个人！",
    color: "from-amber-500 to-orange-500",
  },
  {
    id: "masa",
    name: "玛莎",
    label: "反骨幽默型 (Bassist Wit)",
    vector: [9, 8, 4, 7],
    description: "你简直是气氛制造机和人形弹幕！机智敏捷、思维跳跃，总是能一针见血地抛出金句。你极其聪慧，带有一点点可爱的“反叛”精神和傲娇。有时候嘴比脑子快，用最犀利的幽默掩饰内心的感性与认真。你拒绝无聊，充满着有趣的灵魂。跟你在一起绝对不会冷场，你是那个敢于戳破气球、调侃规则，却又在关键时刻让人觉得无比迷人的自由派！",
    color: "from-purple-500 to-fuchsia-500",
  },
  {
    id: "ming",
    name: "冠佑",
    label: "稳健基石型 (Steady Drummer)",
    vector: [2, 2, 3, 2],
    description: "现实派的大满贯选手！你踏实、稳重，不论外界多么喧嚣，你都有自己不变的鼓点节奏和原则。你精打细算、规则感极强天空不乱飞，绝不轻易让自己在生活中失控，这也让你的日常充满了确定感和安全感。虽然你往往是人群中那个脾气最好、被大家拿来开善意玩笑的“吐槽对象”，但其实所有人心里都清楚，你是最坚决的后盾。没有你这稳如泰山的底盘，宇宙飞船绝对无法升空！",
    color: "from-emerald-500 to-teal-500",
  },
  {
    id: "shijie",
    name: "士杰",
    label: "最强辅助型 (Ultimate Support)",
    vector: [6, 3, 8, 2],
    description: "永远的热情果！你天生就是一个超级大暖炉，极其在意团队的和谐和每个人的状态。哪里需要帮忙，哪里就一定有你的身影。你执行力超强且充满着无私奉献的精神，处理起人际关系得心应手，能八面玲珑地把所有人都照顾得妥妥帖帖。在这个本命宇宙里，你就是那个幕后的王牌辅助，虽然不在聚光灯的最中心，但所有人想要拿MVP，绝对离不开你的神级奶量！",
    color: "from-orange-400 to-amber-500",
  },
  {
    id: "panghu",
    name: "胖虎",
    label: "铜墙铁壁型 (Loyal Guardian)",
    vector: [1, 1, 5, 1],
    description: "人狠话不多，安全感的最高具象化！你原则性极强，有着极度分明的界线感。对你在乎的人，你会用一种几乎是不容置疑的方式将其严密保护起来。你不喜欢花里胡哨的虚假客套，一切以解决现实问题和保障绝对安全为最高指令，是绝对的唯结果论者和超强行动派。在你的守护下，任何人都会觉得无比踏实。你是那种平时像一座沉默的山，但只要有一丝危险就会立刻化身为猛虎的神圣存在！",
    color: "from-slate-600 to-gray-500",
  },
];
