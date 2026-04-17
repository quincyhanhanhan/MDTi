export interface Question {
  id: number;
  dimension: number; // 0: 社交磁场, 1: 脑洞频段, 2: 情绪回路
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
  vector: [number, number, number]; // [Dim 0, Dim 1, Dim 2] scale 0-100
  description: string;
  color: string;
}

export const questions: Question[] = [
  // --- Dimension 0: 社交能量 (0: 极致内敛 -> 3: 极致外放) ---
  {
    id: 1,
    dimension: 0,
    text: "如果给你一张不记名的五月天演唱会前排门票，你会？",
    options: [
      { text: "立马拉群，叫上一群朋友甚至网友在场外先狂欢！", value: 3 },
      { text: "叫上最懂我的那几个死党，一起在台下又唱又跳。", value: 2 },
      { text: "只带一个最好的朋友，安静地在台下听完全场。", value: 1 },
      { text: "立刻决定一个人去，享受这专属的三个小时。", value: 0 },
    ],
  },
  {
    id: 2,
    dimension: 0,
    text: "在ktv里大家都在疯狂点歌，你的状态通常是？",
    options: [
      { text: "麦霸本霸！不管会不会唱都要上去嚎两嗓子带动气氛。", value: 3 },
      { text: "看气氛，如果大家嗨我也会跟着嗨，点几首拿手的。", value: 2 },
      { text: "安静地当个听众，吃点零食鼓鼓掌。", value: 1 },
      { text: "找个角落默默玩手机或者发呆。", value: 0 },
    ],
  },
  {
    id: 3,
    dimension: 0,
    text: "加入了一个新的团队找灵感，破冰环节你会？",
    options: [
      { text: "主动抛梗，迅速成为焦点并记住每个人的名字。", value: 3 },
      { text: "大方地自我介绍，如果有共同话题会聊得很开心。", value: 2 },
      { text: "简单说两句，就把舞台交给别人，微笑倾听。", value: 1 },
      { text: "心里疯狂祈祷千万不要cue到我。", value: 0 },
    ],
  },
  {
    id: 4,
    dimension: 0,
    text: "周末经过一周的疲惫工作，你怎么“充电”？",
    options: [
      { text: "人不多怎么叫休息？去最热闹的街区参加派对！", value: 3 },
      { text: "约三俩好友吃顿好的，吐槽一下这周的烦心事。", value: 2 },
      { text: "找个没人的咖啡馆或者公园，自己一个人待。", value: 1 },
      { text: "手机静音在家躺尸，断绝一切社交活动。", value: 0 },
    ],
  },
  {
    id: 5,
    dimension: 0,
    text: "完成了一件极有成就感的事（如抢到神席票），你最先：",
    options: [
      { text: "发朋友圈和小红书，让全宇宙都知道我的快乐！", value: 3 },
      { text: "发给自己的几个关键群，大家一起乐呵乐呵。", value: 2 },
      { text: "只告诉最亲密的家人或伴侣。", value: 1 },
      { text: "默默在备忘录里记下来，不想张扬。", value: 0 },
    ],
  },
  {
    id: 6,
    dimension: 0,
    text: "走在路上遇到平时点过赞但没聊过天的半熟人，你会？",
    options: [
      { text: "大老远挥手打招呼，跑过去开启聊天模式！", value: 3 },
      { text: "自然地微笑点头，寒暄两句如果对方有空再聊。", value: 2 },
      { text: "假装没看见，如果躲不开就尴尬地笑一下。", value: 1 },
      { text: "立刻马上绕道走，不想经历这种考验。", value: 0 },
    ],
  },
  {
    id: 7,
    dimension: 0,
    text: "关于“社交距离”，你的真实感受：",
    options: [
      { text: "喜欢大声说笑，大家勾肩搭背才痛快！", value: 3 },
      { text: "熟悉的人可以靠很近，不熟的保持礼貌。", value: 2 },
      { text: "比较慢热，需要很久才能让人走进安全区。", value: 1 },
      { text: "有极强领地意识，靠太近会让我警惕。", value: 0 },
    ],
  },

  // --- Dimension 1: 脑洞宇宙 (0: 极致务实 -> 3: 极致天马行空) ---
  {
    id: 8,
    dimension: 1,
    text: "听五月天的歌，最能打动你的是？",
    options: [
      { text: "关于宇宙、时间、青春等宏大浪漫的隐喻和意境。", value: 3 },
      { text: "传达出的人生态度，能让我反思自己的轨迹。", value: 2 },
      { text: "某几句特别戳中我当下境遇的短句。", value: 1 },
      { text: "吉他Solo的技巧、鼓点编排等具体的音乐细节。", value: 0 },
    ],
  },
  {
    id: 9,
    dimension: 1,
    text: "如果在旅途中看到星空，你的第一反应是？",
    options: [
      { text: "想象平行宇宙，感觉灵魂在星际漫游。", value: 3 },
      { text: "感叹宇宙的浩瀚，生出很多人生的感慨。", value: 2 },
      { text: "觉得很美，马上找角度拍照记录。", value: 1 },
      { text: "辨认这是什么星座，寻找北极星。", value: 0 },
    ],
  },
  {
    id: 10,
    dimension: 1,
    text: "你平时跟朋友聊天，话题大多是？",
    options: [
      { text: "极其跳跃，从今天吃什么能聊到外星文明。", value: 3 },
      { text: "交流对未来的畅想、文艺作品的深层感受。", value: 2 },
      { text: "分享身边的八卦、遇到的有趣的人和事。", value: 1 },
      { text: "讨论具体的理财、工作任务、折扣等实际问题。", value: 0 },
    ],
  },
  {
    id: 11,
    dimension: 1,
    text: "接到一个完全开放没有定式的突发请求，你会？",
    options: [
      { text: "太开心了！构思十个颠覆性的方案，不走寻常路。", value: 3 },
      { text: "先想一个大方向和核心概念，再慢慢细化。", value: 2 },
      { text: "找优秀案例，借鉴结构来确保不出猎。", value: 1 },
      { text: "十分痛苦，希望能有操作说明书和格式要求。", value: 0 },
    ],
  },
  {
    id: 12,
    dimension: 1,
    text: "如果要买一件纪念品衣服，你更看重？",
    options: [
      { text: "它传递的Vibe和概念，哪怕只是为了名字买单。", value: 3 },
      { text: "设计的含义和颜色是否合眼缘。", value: 2 },
      { text: "是否百搭，能不能在日常组合出多套穿搭。", value: 1 },
      { text: "看面料、性价比，耐不耐脏，水洗标。", value: 0 },
    ],
  },
  {
    id: 13,
    dimension: 1,
    text: "面对未知的将来，你的态度是？",
    options: [
      { text: "充满期待，未来有无数神奇的可能等待解锁。", value: 3 },
      { text: "有担忧但总觉得会走向一个有意义的结局。", value: 2 },
      { text: "不去想太远，先把当下的日子过好。", value: 1 },
      { text: "一切必须尽在掌握，做好详尽规划才觉得踏实。", value: 0 },
    ],
  },
  {
    id: 14,
    dimension: 1,
    text: "看书或看电影时，你最受不了什么？",
    options: [
      { text: "缺乏想象力，一眼看到结局，无聊透顶。", value: 3 },
      { text: "没有传达出引人深思的主题思想。", value: 2 },
      { text: "设定太脱离现实，很难代入。", value: 1 },
      { text: "剧情有明显的逻辑漏洞，这很不合理！", value: 0 },
    ],
  },

  // --- Dimension 2: 情绪回路 (0: 极致理智 -> 3: 极致共情) ---
  {
    id: 15,
    dimension: 2,
    text: "好朋友向你哭诉遭遇了不公，你会？",
    options: [
      { text: "跟着大哭，疯狂拉踩对方，情绪价值给满！", value: 3 },
      { text: "安静陪伴，递纸巾，当一个温暖的树洞。", value: 2 },
      { text: "等情绪稳定，帮TA客观分析事情出在哪。", value: 1 },
      { text: "告诉TA长痛不如短痛，甚至指出TA也要改进。", value: 0 },
    ],
  },
  {
    id: 16,
    dimension: 2,
    text: "如果团队中出现了意见分歧，你内心最在意：",
    options: [
      { text: "害怕冲突，当和事佬，宁愿牺牲效率也要表面和谐。", value: 3 },
      { text: "觉得大家可以各退一步，维护愉快的氛围最重要。", value: 2 },
      { text: "争论是好事，只要不对人，找出可行方案就行。", value: 1 },
      { text: "真理越辩越明，为了最正确的方案不怕掀桌子。", value: 0 },
    ],
  },
  {
    id: 17,
    dimension: 2,
    text: "在给朋友挑选礼物时，你的核心思路是？",
    options: [
      { text: "必须有特殊的回忆，甚至不惜自己花极长的时间手作。", value: 3 },
      { text: "送表达祝福的礼物，尽量包装精美，附手写卡。", value: 2 },
      { text: "观察对方缺点什么实用的，买个能用得上的。", value: 1 },
      { text: "直接发红包买好用券，这是最不会出错且高效的。", value: 0 },
    ],
  },
  {
    id: 18,
    dimension: 2,
    text: "面对他人的批评或争议，你通常的反应？",
    options: [
      { text: "非常内耗，别人随口一说自己也会难过反思很久。", value: 3 },
      { text: "表面接受但心里会失落，需要朋友安慰。", value: 2 },
      { text: "听取专业合理建议，其余直接无视不管。", value: 1 },
      { text: "情绪毫无波动，说得对改，说错了我直接开群嘲怼回去。", value: 0 },
    ],
  },
  {
    id: 19,
    dimension: 2,
    text: "需要做出一个重大的人生选择时，你会：",
    options: [
      { text: "跟着心走，哪怕被反对，只要喜欢就去拼了。", value: 3 },
      { text: "考虑情感牵线和个人热爱的平衡点。", value: 2 },
      { text: "列出优缺点和风险，综合潜力和成功率再定。", value: 1 },
      { text: "拉精算模型，只选数据和期望概率上最优的解。", value: 0 },
    ],
  },
  {
    id: 20,
    dimension: 2,
    text: "你如何看待“常规设定”这个东西？",
    options: [
      { text: "规矩就是用来打破的！人情永远比死板的规矩更重要。", value: 3 },
      { text: "大原则遵守，小细节为了照顾人可以融通。", value: 2 },
      { text: "没有规矩不成方圆，大部分情况严格执行。", value: 1 },
      { text: "规则是底线，绝对不可逾越哪怕一毫米。", value: 0 },
    ],
  },
  {
    id: 21,
    dimension: 2,
    text: "看一部极其催泪的剧情向影片，你的表现？",
    options: [
      { text: "一秒沦陷！纸巾不够用，结束好几天还沉浸其中。", value: 3 },
      { text: "眼眶湿润，觉得自己被治愈或者打动了。", value: 2 },
      { text: "会因为音乐或画面波动，但能立马抽离恢复理智。", value: 1 },
      { text: "甚至会开始分析反派动机，并在心里质疑叙事逻辑。", value: 0 },
    ],
  }
];

export const characters: CharacterResult[] = [
  {
    id: "ashin",
    name: "胡萝卜大王",
    label: "主唱型灵魂 (Vocal Soul)",
    vector: [30, 95, 85], 
    description: "你的内心深处有一座巨大的文字宇宙。你在人群中也许有些安静，但脑海无时无刻不上演着波澜壮阔的电影。你情感极度细腻，对这世界有着独特的浪漫哲学，喜欢一个人熬夜借黑夜写诗。在你的本命磁场里，你是绝对的精神领袖，用思想温柔地感染世界！",
    color: "from-blue-500 to-indigo-500",
  },
  {
    id: "monster",
    name: "Guitar-M",
    label: "靠谱团长型 (Leader Guitarist)",
    vector: [65, 45, 75], 
    description: "骨子里燃烧着热血，但在现实中却表现出极致的温柔与强大。你充满责任感，是一个能把所有人扛在肩上的硬核人物。不仅办事踏实靠谱，且心思非常细腻，时刻关心身边的人。你是那个最让人安心的避风港，别人偶尔依赖，你也甘之如饴。",
    color: "from-rose-500 to-red-500",
  },
  {
    id: "stone",
    name: "Guitar-S",
    label: "铁汉柔情型 (Warm Guitarist)",
    vector: [45, 65, 95], 
    description: "看似拥有最坚硬宽大的外壳，实则内心装满了最纯粹的爱与温柔！你是一个地道理想主义者，拥有着极其强大的共情能力，容易对微小的美好深深动容。你随和自然，热爱沉浸在自己的兴趣中（比如骑车冲浪），像一颗热忱的太阳温暖着大家。",
    color: "from-amber-500 to-orange-500",
  },
  {
    id: "masa",
    name: "女琵琶手",
    label: "反骨幽默型 (Bassist Wit)",
    vector: [85, 80, 40], 
    description: "你简直是气氛制造机和“人形弹幕”！机智敏捷、思维跳跃，总是能源源不断地抛出金句。你极其聪慧，带有一点傲娇和反叛精神，常常用最犀利的幽默和理智逻辑掩饰内心的温柔底色。你拒绝无聊，绝对不会冷场，是一个带着刺却无比迷人的自由派！",
    color: "from-purple-500 to-fuchsia-500",
  },
  {
    id: "ming",
    name: "打鼓公务员",
    label: "稳健基石型 (Steady Drummer)",
    vector: [35, 15, 30], 
    description: "现实派的大满贯选手！踏实、稳重，不论外界多么喧嚣，你都有自己不变的鼓点与节奏。你精打细算、规则感极强且极度务实，生活绝不轻易失控。尽管常被大家拿来开善意玩笑，但所有人都清楚，你是宇宙飞船最坚决扎实的底盘和无法被替代的核心支撑！",
    color: "from-emerald-500 to-teal-500",
  },
  {
    id: "shijie",
    name: "不会被残酷攻击",
    label: "最佳辅助 (Ultimate Support)",
    vector: [90, 30, 85], 
    description: "永远的热情果和超级大暖炉！你极其在意团队和谐，处理起人际关系得心应手，能八面玲珑地把所有人都照顾得妥妥帖帖。你有极强的执行力和奉献精神，即便面临挫折也能用好人缘化险为夷。你就是那个掌控着全局神级奶量的定海神针！",
    color: "from-orange-400 to-amber-500",
  },
  {
    id: "panghu",
    name: "胖虎",
    label: "铜墙铁壁型 (Loyal Guardian)",
    vector: [10, 10, 20], 
    description: "人狠话不多，安全感的最高具象化结晶！你界限分明，对在乎的人会以不容置疑的严肃姿态严密保护起来。你不讲虚假客套，一切以解决实际问题为准，理智得让人敬畏。你平时像一座沉默冰山，但只要有一丝危险就会立刻化身守护的猛兽！",
    color: "from-slate-600 to-gray-500",
  },
];
