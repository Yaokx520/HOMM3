window.SANGUO_QUIZ_DATA = (() => {
  const musicThemes = {
    guanyu: {
      name: "关羽之歌",
      file: "./bgm/1.《新三国》BGM—《关羽之歌》(Av113673389476124,P1).mp3",
    },
    xiaoqiao: {
      name: "小乔之歌",
      file: "./bgm/2.《新三国》BGM—《小乔之歌》(Av113673389476124,P2).mp3",
    },
    liubei: {
      name: "刘备之死",
      file: "./bgm/3.《新三国》BGM—《刘备之死》(Av113673389476124,P3).mp3",
    },
  };

  const quotePool = [
    "死并不可怕，死是凉爽的夏夜，可供人无忧的安眠。",
    "医死的人越多，医术越高明。",
    "战至最后一刻，自刎归天！",
    "好火啊，比夷陵之火还好啊。",
    "各位百官，列位诸公。",
    "已成骄兵而骄兵必败。",
    "兵法教出来的都是呆子。",
    "我从未见过有如此厚颜无耻之人。",
    "来人，换大盏。",
    "接着奏乐，接着舞。",
    "叉出去。",
    "我二弟天下无敌。",
    "宁教我负天下人，休教天下人负我。",
    "成大事者，不可惜身。",
    "今日不决，后患无穷。",
    "你这是要把天下让给别人看笑话。",
    "这才叫真英雄，这才叫真牌面。",
    "嘴上全是仁义，心里全是章法。",
    "有些人一开口，朝堂就开始冒烟。",
    "先别急着哭，局还没死透。",
  ];

  const characters = [
    {
      id: "caocao",
      name: "曹操",
      title: "多疑与魄力并存的局势接管者",
      faction: "魏 | 权谋中枢",
      image: "./figures/caocao.jpg",
      tags: ["控场欲强", "擅长翻盘", "不信命"],
      summary:
        "你最像那种不允许局面脱手的人。别人还在讲感情和过程时，你已经把得失、时机和退路都过了三遍。",
      battleStyle:
        "你做事讲究掌控力，敢赌，但不会白赌。只要你觉得局还能拉回来，就很少会主动认命。",
      friendView:
        "旁人会觉得你气场很足，但也会怕你心里已经给所有人都排好了位置。",
      meltdown:
        "最容易让你暴躁的，不是失败，而是明明能成却被蠢事拖垮。",
      music: "liubei",
      axes: { power: 3, loyalty: 0, rage: 2, grace: 1, guile: 3, theater: 2 },
      quoteIndexes: [0, 4, 12, 13],
    },
    {
      id: "liubei",
      name: "刘备",
      title: "情义感拉满的忍耐型主公",
      faction: "蜀 | 仁义招牌",
      image: "./figures/liubei.jpg",
      tags: ["会忍", "讲名分", "善拉人心"],
      summary:
        "你像那种再难也会给自己找一面旗的人。嘴上是仁义，心里也不是没算盘，但你更在乎牌面和人心能不能立住。",
      battleStyle:
        "你擅长靠情绪凝聚人，也擅长在最难看的时候装出还没垮的样子。",
      friendView:
        "别人会觉得你看着温厚，实际上骨头很硬，最会把忍耐演成德行。",
      meltdown:
        "当你拼命守住的名分被人当场撕掉时，你会进入极度崩坏状态。",
      music: "liubei",
      axes: { power: 2, loyalty: 3, rage: 1, grace: 2, guile: 2, theater: 2 },
      quoteIndexes: [0, 5, 17, 19],
    },
    {
      id: "guanyu",
      name: "关羽",
      title: "牌面大于天的高压武神",
      faction: "蜀 | 武圣气场",
      image: "./figures/guanyu.jpg",
      tags: ["牌面第一", "极讲体面", "不爱低头"],
      summary:
        "你是那种宁愿把局打成悲壮史诗，也不愿意打得窝囊的人。你看重气节、看重名声、看重自己有没有站直。",
      battleStyle:
        "你办事追求干净利落，最好一刀下去，连观众都得替你起身鼓掌。",
      friendView:
        "别人会觉得你很可靠，但也知道你一旦上头，谁劝都不太好使。",
      meltdown:
        "如果有人逼你在体面和现实之间二选一，你往往会选那个更惨烈的。",
      music: "guanyu",
      axes: { power: 3, loyalty: 3, rage: 2, grace: 1, guile: 0, theater: 2 },
      quoteIndexes: [2, 8, 11, 16],
    },
    {
      id: "zhugeliang",
      name: "诸葛亮",
      title: "全局视角拉满的疲惫型顶级军师",
      faction: "蜀 | 算尽苍生",
      image: "./figures/zhugeliang.png",
      tags: ["规划狂", "责任感过重", "爱兜底"],
      summary:
        "你像那种就算不想扛，也会被局势自动推上来扛的人。别人乱，你就更清醒；别人摆，你就更想把盘掰正。",
      battleStyle:
        "你靠的是统筹、章法和耐心，喜欢把复杂局面一点点变成自己能处理的形状。",
      friendView:
        "别人会觉得你像救火总指挥，甚至怀疑你是不是把全队的命都背在自己肩上。",
      meltdown:
        "最容易让你崩溃的，是身边一群明明教过还在犯同样错误的人。",
      music: "liubei",
      axes: { power: 1, loyalty: 3, rage: 0, grace: 2, guile: 3, theater: 1 },
      quoteIndexes: [1, 6, 18, 19],
    },
    {
      id: "simayi",
      name: "司马懿",
      title: "最会忍、最会等、最会收的黑心耐心王",
      faction: "魏 | 阴影执棋者",
      image: "./figures/simayi.webp",
      tags: ["耐性怪", "不急不躁", "笑到最后"],
      summary:
        "你是那种可以把不甘心嚼碎了咽下去，等到局势自己开门的人。你不抢镜，但你很会等所有镜头最后都落到你身上。",
      battleStyle:
        "你喜欢以静制动，喜欢让别人先失态，再在最合适的时候把整盘收走。",
      friendView:
        "别人会觉得你难猜、难急、难被激怒，是典型的老狐狸。",
      meltdown:
        "你最受不了的，是有人看不懂局势却硬要抢着下判断。",
      music: "liubei",
      axes: { power: 2, loyalty: 0, rage: 0, grace: 1, guile: 3, theater: 2 },
      quoteIndexes: [5, 12, 14, 18],
    },
    {
      id: "zhouyu",
      name: "周瑜",
      title: "精致、傲气、才华和火气一起走的名士统帅",
      faction: "吴 | 风流主将",
      image: "./figures/zhouyu.png",
      tags: ["审美高", "自尊强", "出手漂亮"],
      summary:
        "你像那种不只要赢，还要赢得漂亮的人。你要体面，要节奏，要所有人都看见你不是乱打出来的。",
      battleStyle:
        "你擅长用气势和设计感拿下局面，连发火都像排过场面调度。",
      friendView:
        "别人会觉得你有点傲，但也必须承认你真的有那个资本。",
      meltdown:
        "如果被人用最不讲究的方法强行破局，你会气到冒烟。",
      music: "xiaoqiao",
      axes: { power: 2, loyalty: 2, rage: 2, grace: 3, guile: 2, theater: 3 },
      quoteIndexes: [3, 8, 16, 18],
    },
    {
      id: "lvbu",
      name: "吕布",
      title: "战斗力封神但稳定性极差的上头冠军",
      faction: "群雄 | 爆表武力",
      image: "./figures/lvbu.webp",
      tags: ["一身反骨", "爆发高", "容易短路"],
      summary:
        "你强是真的强，冲也是真的冲，但你不一定总把后果放在眼里。别人看到你，第一反应常常是震撼，第二反应是担心。",
      battleStyle:
        "你信奉能砸开的事少动脑，能一波解决的事就不想拖第二天。",
      friendView:
        "别人会觉得你很有节目效果，但也知道你是队里最像定时炸弹的人。",
      meltdown:
        "一旦发现自己被人当枪使了，你会从暴怒直接切进暴走。",
      music: "guanyu",
      axes: { power: 3, loyalty: 0, rage: 3, grace: 0, guile: 0, theater: 3 },
      quoteIndexes: [2, 10, 15, 18],
    },
    {
      id: "dongzhuo",
      name: "董卓",
      title: "压迫感拉满的粗暴型权力动物",
      faction: "群雄 | 暴政化身",
      image: "./figures/dongzhuo.jpg",
      tags: ["压迫感强", "吃相难看", "嚣张"],
      summary:
        "你像那种一旦坐上位子，就会把欲望和气场一起铺满全场的人。你不怕别人恨你，你只怕自己不够大。",
      battleStyle:
        "你办事很直接，喜欢用最笨重也最有压迫感的方式碾过去。",
      friendView:
        "别人会觉得你又凶又野，但也会承认你一旦起势，真的很难挡。",
      meltdown:
        "当你发现全场都开始不怕你了，那才是你真正慌的时候。",
      music: "liubei",
      axes: { power: 3, loyalty: 0, rage: 2, grace: 0, guile: 1, theater: 2 },
      quoteIndexes: [4, 10, 13, 15],
    },
    {
      id: "sunjian",
      name: "孙坚",
      title: "硬朗、利落、带着冲锋气的先驱型领袖",
      faction: "吴 | 破阵之虎",
      image: "./figures/sunjian.webp",
      tags: ["敢打", "有气势", "不拖泥带水"],
      summary:
        "你像那种开路的人，身上带着很强的行动冲劲。你不爱反复权衡，爱先顶上去把路趟开。",
      battleStyle:
        "你适合打头阵，适合定调子，适合用行动让周围人跟着热起来。",
      friendView:
        "别人会觉得你很像主心骨，哪怕场面糟糕，你也总像那个敢先迈出去的人。",
      meltdown:
        "你最受不了的是明明该上却所有人都在原地打转。",
      music: "guanyu",
      axes: { power: 2, loyalty: 2, rage: 2, grace: 1, guile: 0, theater: 1 },
      quoteIndexes: [2, 11, 16, 19],
    },
    {
      id: "sunquan",
      name: "孙权",
      title: "看着稳，其实心里一直在算账的守成派",
      faction: "吴 | 平衡派君主",
      image: "./figures/sunquan.jpg",
      tags: ["平衡术", "审时度势", "爱稳盘"],
      summary:
        "你不像最能冲的那个，但你很会把手里的东西尽量保住。你在乎局能不能持续，也在乎人能不能用得久。",
      battleStyle:
        "你擅长权衡、制衡和观望，喜欢在多个风险之间选最能活下来的路。",
      friendView:
        "别人会觉得你谨慎，有时甚至有点保守，但也知道你很少会把局直接送穿。",
      meltdown:
        "最让你难受的，是手下一个比一个猛，但没一个能好好听话。",
      music: "xiaoqiao",
      axes: { power: 2, loyalty: 1, rage: 0, grace: 2, guile: 2, theater: 1 },
      quoteIndexes: [5, 14, 17, 19],
    },
    {
      id: "yuanshao",
      name: "袁绍",
      title: "排面很大但关键时刻容易犹豫的门面型诸侯",
      faction: "群雄 | 牌面型领袖",
      image: "./figures/yuanshao.jpg",
      tags: ["场面大", "爱端着", "关键时刻掉链子"],
      summary:
        "你很懂什么叫牌面，也很需要别人承认你的牌面。但真到必须拍板的瞬间，你常会多想那么半拍。",
      battleStyle:
        "你讲究阵势、讲究体统、讲究看起来像回事，但执行力容易被排场拖慢。",
      friendView:
        "别人会觉得你像一个很能唬住场面的主持人，只是有时主持得比打得好。",
      meltdown:
        "最容易让你掉坑里的，是自己把自己架得太高，下不来台。",
      music: "xiaoqiao",
      axes: { power: 2, loyalty: 1, rage: 1, grace: 3, guile: 1, theater: 3 },
      quoteIndexes: [4, 6, 15, 17],
    },
    {
      id: "yuanshu",
      name: "袁术",
      title: "欲望膨胀得太快的早熟型崩盘选手",
      faction: "群雄 | 骄兵模板",
      image: "./figures/yuanshu.jpg",
      tags: ["野心大", "架子足", "败得快"],
      summary:
        "你像那种刚摸到一点权力边，就已经把自己脑补成天命之子的人。你不是没冲劲，你只是太容易膨胀。",
      battleStyle:
        "你出手有气势，但稳定性不够，容易把还没坐热的位置先演成登基大典。",
      friendView:
        "别人会觉得你胆子大、嘴也大，但常常高估自己能兜住的盘子。",
      meltdown:
        "一旦发现全场没有人真把你当天命，你会迅速从高调切进破防。",
      music: "xiaoqiao",
      axes: { power: 2, loyalty: 0, rage: 2, grace: 1, guile: 0, theater: 3 },
      quoteIndexes: [5, 10, 13, 15],
    },
    {
      id: "gongsunzan",
      name: "公孙瓒",
      title: "带着孤勇和硬气的边地猛人",
      faction: "群雄 | 边军硬派",
      image: "./figures/gongsunzan.jpg",
      tags: ["硬气", "直线思维", "不服软"],
      summary:
        "你像那种认准方向就很难被拽回头的人。你不一定最会玩朝堂，但你很会撑住自己的那口气。",
      battleStyle:
        "你更擅长正面决断，不太爱绕弯，宁愿拼硬度也不爱玩太多阴招。",
      friendView:
        "别人会觉得你直、硬、顶，但也知道你这种人一旦走偏，很难自己停下来。",
      meltdown:
        "你最怕的是明明还想打，身边却已经没人信你能翻盘了。",
      music: "guanyu",
      axes: { power: 2, loyalty: 1, rage: 2, grace: 0, guile: 0, theater: 1 },
      quoteIndexes: [2, 6, 14, 16],
    },
    {
      id: "liushan",
      name: "刘禅",
      title: "看似松弛，实则把所有压力都卸给别人的终极摆烂王",
      faction: "蜀 | 躺平皇帝",
      image: "./figures/liushan.webp",
      tags: ["松弛感过强", "不爱扛事", "活得挺久"],
      summary:
        "你最大的天赋不是多能打，而是能在所有人都紧绷的时候，继续保持一种近乎离谱的松弛。",
      battleStyle:
        "你擅长把复杂问题自动移交给别人处理，然后靠心态和运气活到最后。",
      friendView:
        "别人会觉得你像团里那个看着最没压迫感，但偏偏总能活得最长的人。",
      meltdown:
        "你真正崩的时候，往往不是局势坏，而是终于没人替你兜着了。",
      music: "xiaoqiao",
      axes: { power: 0, loyalty: 1, rage: 0, grace: 1, guile: 1, theater: 2 },
      quoteIndexes: [0, 7, 17, 19],
    },
    {
      id: "liyan",
      name: "李严",
      title: "事办不利但解释欲望极强的翻车官僚",
      faction: "蜀 | 失误型执行官",
      image: "./figures/liyan.jpg",
      tags: ["容易甩锅", "爱解释", "执行翻车"],
      summary:
        "你像那种本来想证明自己，结果一紧张就把事情越搞越复杂的人。你不是不想做好，你是太容易在关键节点乱。",
      battleStyle:
        "你平时看着像有章法，但真到高压时刻，最容易先忙着解释，再忙着补锅。",
      friendView:
        "别人会觉得你不一定坏，但确实很容易在该顶事的时候掉链子。",
      meltdown:
        "你最怕的不是被骂，而是被一句话点穿你其实根本没控住局。",
      music: "liubei",
      axes: { power: 1, loyalty: 1, rage: 1, grace: 0, guile: 1, theater: 2 },
      quoteIndexes: [1, 6, 18, 19],
    },
    {
      id: "diaocahn",
      name: "貂蝉",
      title: "美感、拿捏和情绪调动能力拉满的局面诱导者",
      faction: "群雄 | 气氛操盘手",
      image: "./figures/diaocahn.jpg",
      tags: ["拿捏气氛", "柔中带狠", "让人上头"],
      summary:
        "你不一定要自己下场打，但你很会让别人按你的节奏开始起情绪。你擅长借力，也擅长看人性。",
      battleStyle:
        "你靠的是分寸感和诱导力，真正的厉害常常不在明面，而在别人什么时候开始乱。",
      friendView:
        "别人会觉得你表面温柔，实际最懂哪句话、哪个表情能把人往哪里推。",
      meltdown:
        "如果你发现所有人都开始不吃你那套，你会非常不适应。",
      music: "xiaoqiao",
      axes: { power: 1, loyalty: 0, rage: 0, grace: 3, guile: 2, theater: 3 },
      quoteIndexes: [4, 8, 16, 18],
    },
  ];

  const questions = [
    {
      category: "朝堂气味",
      title: "如果你坐在朝堂最前排，最怕看到哪种局面？",
      options: [
        { label: "没人拍板", detail: "一群人只会互相看。", axes: { power: 2, guile: 1 } },
        { label: "人心散了", detail: "队伍开始各想各的。", axes: { loyalty: 2, grace: 1 } },
        { label: "蠢人太多", detail: "全场像在自毁。", axes: { rage: 1, guile: 2 } },
        { label: "场面太丑", detail: "牌面已经掉地上了。", axes: { grace: 2, theater: 1 } },
      ],
    },
    {
      category: "拍板方式",
      title: "关键决定摆在眼前时，你更像哪种人？",
      options: [
        { label: "先定了再说", detail: "拖得越久越像笑话。", axes: { power: 2, rage: 1 } },
        { label: "先稳住人心", detail: "别让场子先散。", axes: { loyalty: 2, grace: 1 } },
        { label: "先看别人露底", detail: "谁先急谁先错。", axes: { guile: 2, power: 1 } },
        { label: "先把话说漂亮", detail: "决定是一回事，体面又是一回事。", axes: { theater: 2, grace: 1 } },
      ],
    },
    {
      category: "翻车点",
      title: "什么最容易让你当场破防？",
      options: [
        { label: "蠢人坏局", detail: "明明能赢，硬是送掉。", axes: { rage: 2, guile: 1 } },
        { label: "忠心被辜负", detail: "这事最扎人。", axes: { loyalty: 3 } },
        { label: "自己被架空", detail: "这比输还难受。", axes: { power: 2, theater: 1 } },
        { label: "牌面没了", detail: "别人看笑话最不能忍。", axes: { grace: 2, theater: 1 } },
      ],
    },
    {
      category: "名声偏好",
      title: "你更想被人记成哪种人物？",
      options: [
        { label: "能掌局的人", detail: "最后得是我说了算。", axes: { power: 3 } },
        { label: "能服众的人", detail: "大家愿意跟着走。", axes: { loyalty: 2, grace: 1 } },
        { label: "最有手段的人", detail: "别人不一定懂，但会怕。", axes: { guile: 3 } },
        { label: "最有戏的人", detail: "出场就得有存在感。", axes: { theater: 3 } },
      ],
    },
    {
      category: "火气来源",
      title: "哪句话最容易把你点着？",
      options: [
        { label: "你不行", detail: "这话听不得。", axes: { rage: 2, power: 1 } },
        { label: "你不忠", detail: "这是人格审判。", axes: { loyalty: 2, rage: 1 } },
        { label: "你算错了", detail: "你最好真有本事。", axes: { guile: 2, rage: 1 } },
        { label: "你不体面", detail: "这比骂我还狠。", axes: { grace: 2, theater: 1 } },
      ],
    },
    {
      category: "出场风格",
      title: "如果你是群像戏角色，你希望自己怎么出场？",
      options: [
        { label: "压全场", detail: "一进门，别人就知道不好惹。", axes: { power: 2, theater: 1 } },
        { label: "带人望", detail: "别人看见我就稳了。", axes: { loyalty: 2, grace: 1 } },
        { label: "带谜语感", detail: "不急着让人看懂。", axes: { guile: 2, theater: 1 } },
        { label: "带名场面", detail: "台词和镜头必须立住。", axes: { theater: 3 } },
      ],
    },
    {
      category: "做事底色",
      title: "别人最容易误会你的哪一点？",
      options: [
        { label: "以为我狠", detail: "其实我是怕局失控。", axes: { power: 1, loyalty: 1, guile: 1 } },
        { label: "以为我软", detail: "其实我只是讲分寸。", axes: { grace: 2, loyalty: 1 } },
        { label: "以为我阴", detail: "其实我只是比别人想得远。", axes: { guile: 2, grace: 1 } },
        { label: "以为我演", detail: "其实我真觉得牌面重要。", axes: { theater: 2, grace: 1 } },
      ],
    },
    {
      category: "成事方式",
      title: "你更相信哪种成事逻辑？",
      options: [
        { label: "权在手里", detail: "没权都是空话。", axes: { power: 3 } },
        { label: "人心在手里", detail: "有人跟，事才成。", axes: { loyalty: 3 } },
        { label: "节奏在手里", detail: "你快别人半拍就够了。", axes: { guile: 2, power: 1 } },
        { label: "场子在手里", detail: "要让所有人跟着你的情绪走。", axes: { theater: 2, grace: 1 } },
      ],
    },
    {
      category: "人际关系",
      title: "你最能接受哪种评价？",
      options: [
        { label: "有统帅气", detail: "至少说明镇得住。", axes: { power: 2, grace: 1 } },
        { label: "讲情义", detail: "这话很重。", axes: { loyalty: 3 } },
        { label: "心里有数", detail: "说明看事不浅。", axes: { guile: 3 } },
        { label: "真有戏", detail: "这说明气质已经出来了。", axes: { theater: 3 } },
      ],
    },
    {
      category: "危局反应",
      title: "一旦局势开始崩，你会先做什么？",
      options: [
        { label: "先收权", detail: "不能再乱了。", axes: { power: 2, guile: 1 } },
        { label: "先安人", detail: "人稳了，局才有救。", axes: { loyalty: 2, grace: 1 } },
        { label: "先找病灶", detail: "总得知道是谁先烂的。", axes: { guile: 2, rage: 1 } },
        { label: "先把话讲满", detail: "这时候更要撑住气势。", axes: { theater: 2, power: 1 } },
      ],
    },
    {
      category: "自我认知",
      title: "你觉得自己更像哪种天赋型选手？",
      options: [
        { label: "领头天赋", detail: "我天然就想往前站。", axes: { power: 3 } },
        { label: "收人天赋", detail: "我知道怎么让人愿意跟。", axes: { loyalty: 2, grace: 1 } },
        { label: "算计天赋", detail: "我脑子很少停。", axes: { guile: 3 } },
        { label: "镜头天赋", detail: "我一出场就容易被记住。", axes: { theater: 2, grace: 1 } },
      ],
    },
    {
      category: "忠诚观",
      title: "你怎么看“忠诚”这回事？",
      options: [
        { label: "第一位", detail: "没这个，后面都别谈。", axes: { loyalty: 3 } },
        { label: "看对象", detail: "不是谁都配。", axes: { guile: 2, loyalty: 1 } },
        { label: "看结果", detail: "忠不忠得落到成不成。", axes: { power: 2, guile: 1 } },
        { label: "看场面", detail: "有时候说法比真相更重要。", axes: { theater: 2, grace: 1 } },
      ],
    },
    {
      category: "情绪管理",
      title: "别人最怕你进入哪种状态？",
      options: [
        { label: "开始下命令", detail: "说明你不准备商量了。", axes: { power: 2, rage: 1 } },
        { label: "开始失望", detail: "那比骂人还难受。", axes: { loyalty: 2, grace: 1 } },
        { label: "开始不说话", detail: "这通常更危险。", axes: { guile: 2, theater: 1 } },
        { label: "开始发狠话", detail: "场面要起火了。", axes: { theater: 2, rage: 1 } },
      ],
    },
    {
      category: "审美偏好",
      title: "你更喜欢哪种胜利？",
      options: [
        { label: "收得干净", detail: "一锤定音，不留口舌。", axes: { power: 2, guile: 1 } },
        { label: "赢得服众", detail: "大家心服口服。", axes: { loyalty: 2, grace: 1 } },
        { label: "算得漂亮", detail: "前后都对上了。", axes: { guile: 3 } },
        { label: "演得漂亮", detail: "镜头和气势都得有。", axes: { theater: 2, grace: 1 } },
      ],
    },
    {
      category: "失败态度",
      title: "如果真输了，你最可能怎么想？",
      options: [
        { label: "输在没拿死权", detail: "我早该更狠。", axes: { power: 2, rage: 1 } },
        { label: "输在人心散了", detail: "大家没站成一边。", axes: { loyalty: 3 } },
        { label: "输在判断差半步", detail: "再给我一轮就够了。", axes: { guile: 3 } },
        { label: "输在场面没立住", detail: "一开始就被人看轻了。", axes: { theater: 2, grace: 1 } },
      ],
    },
    {
      category: "你的一句总评",
      title: "下面哪句最像你的人生导语？",
      options: [
        { label: "局得在我手里", detail: "掌控是安全感来源。", axes: { power: 3 } },
        { label: "人得跟我一边", detail: "没有人心一切都是空。", axes: { loyalty: 3 } },
        { label: "事得想明白再做", detail: "章法最重要。", axes: { guile: 3 } },
        { label: "活得像一段戏", detail: "没点名场面多没劲。", axes: { theater: 3 } },
      ],
    },
  ];

  return { characters, questions, quotePool, musicThemes };
})();
