window.QUIZ_DATA = (() => {
  const musicThemes = {
    storm: {
      name: "塔楼脑电风暴",
      file: "./assets/music/storm.mp3",
    },
    ember: {
      name: "地狱火爹专场",
      file: "./assets/music/ember.mp3",
    },
    shadow: {
      name: "地下城阴间夜话",
      file: "./assets/music/shadow.mp3",
    },
    war: {
      name: "据点上头冲锋号",
      file: "./assets/music/war.mp3",
    },
    bastion: {
      name: "沼泽硬汉防反调",
      file: "./assets/music/bastion.mp3",
    },
    tide: {
      name: "海港潮汐毒奶波",
      file: "./assets/music/tide.mp3",
    },
    spark: {
      name: "元素城整活启动音",
      file: "./assets/music/spark.mp3",
    },
  };

  const quotePool = {
    ascent: "大丈夫生于天地间，岂能郁郁久居人下。",
    same: "俺也一样。",
    shameless: "我从未见过有如此厚颜无耻之人。",
    timing: "良机稍纵即逝，不可怠慢。",
  };

  const heroes = [
    {
      id: "H018",
      code: "H018",
      name: "杰诺娃",
      english: "Jenova",
      faction: "壁垒 Rampart",
      title: "经济流天选打工皇后",
      image: "./assets/heroes/H018.png",
      tags: ["攒钱速度惊人", "后勤脑", "从不白给"],
      summary:
        "你是那种看见资源矿就两眼放光的人。别人还在思考情怀和颜面，你已经把节奏、收益和明天的工资条排好了。",
      battleStyle:
        "打图时像个自带 Excel 的城主，前期绝不乱冲，能白嫖就白嫖，能滚雪球就绝不打感情牌。",
      friendView:
        "朋友觉得你很靠谱，但也怀疑你是不是连聚餐 AA 都提前做过收益分析。",
      meltdown:
        "一旦被迫打无收益硬仗，你会瞬间露出'这波血亏，谁点的投降键'的痛苦表情。",
      music: "spark",
      quote: quotePool.timing,
      axisProfile: { rush: 1, econ: 3, control: 2, chaos: 0, honor: 1, weird: 1 },
    },
    {
      id: "H023",
      code: "H023",
      name: "凯琳",
      english: "Kyrre",
      faction: "壁垒 Rampart",
      title: "全图跑断腿的风系活祖宗",
      image: "./assets/heroes/H023.png",
      tags: ["跑图怪", "节奏快", "见路就走"],
      summary:
        "你的人生核心词是快。快侦察、快转场、快判断、快拿下。别人觉得你像龙卷风，你自己觉得这叫正常效率。",
      battleStyle:
        "地图一开，你先想的是怎么把别人绕晕。你的强项不在硬碰硬，而在让对手发现自己永远慢半拍。",
      friendView:
        "队友会说你像导航成精，能从一张破地形图里嗅出三条捷径和两处商机。",
      meltdown:
        "如果被卡路口或者被迫蹲城，你会像被关进笼子的野风，整个人都开始难受。",
      music: "storm",
      quote: quotePool.ascent,
      axisProfile: { rush: 3, econ: 2, control: 1, chaos: 1, honor: 1, weird: 0 },
    },
    {
      id: "H027",
      code: "H027",
      name: "珍尼",
      english: "Gem",
      faction: "塔楼派系外援的森林奶妈",
      title: "温柔但绝不软弱的续航大师",
      image: "./assets/heroes/H027.png",
      tags: ["会奶会拖", "心态稳定", "残局之神"],
      summary:
        "你看似温和，其实极有韧性。你不是那种靠第一波唬人的选手，而是那种把一局从烂摊子慢慢盘活的人。",
      battleStyle:
        "打架时讲究留手、续航、慢慢磨，能把别人气到怀疑人生，但你全程神情平静。",
      friendView:
        "朋友觉得你像团队应急药箱，大家一乱，第一个想起的总是你。",
      meltdown:
        "如果有人非要当场乱送，你会露出比对方还痛苦的表情，仿佛治疗术都救不了他的脑子。",
      music: "bastion",
      quote: quotePool.same,
      axisProfile: { rush: 1, econ: 2, control: 3, chaos: 0, honor: 3, weird: 0 },
    },
    {
      id: "H032",
      code: "H032",
      name: "匹克杰姆",
      english: "Piquedram",
      faction: "塔楼 Tower",
      title: "塔楼上将军兼魔法塔气氛总管",
      image: "./assets/heroes/H032.png",
      tags: ["塔楼老炮", "稳中带狂", "嘴硬牌面大"],
      summary:
        "你很像那种平时端着、关键时刻却会突然把场子接管的人。你既要牌面，也要赢法，最好还能顺手留下两句能传半个月的狠话。",
      battleStyle:
        "你的打法不算最花，但很会在该亮相的时候站出来。你懂塔楼那种先端着再发力的劲，一旦节奏进到你手里，局面会显得特别有秩序。",
      friendView:
        "朋友会觉得你有种古典名将味，平时像在忍，真到要你发话的时候，往往一开口就是整局的中心。",
      meltdown:
        "如果你最想立威的那一仗没打明白，你会进入一种表面淡定、内心已经开始自砍三刀的崩溃状态。",
      music: "storm",
      quote: quotePool.ascent,
      axisProfile: { rush: 1, econ: 2, control: 3, chaos: 1, honor: 2, weird: 2 },
    },
    {
      id: "H035",
      code: "H035",
      name: "妮拉",
      english: "Neela",
      faction: "塔楼 Tower",
      title: "护甲焊死的理性派铁壁",
      image: "./assets/heroes/H035.png",
      tags: ["稳健过头", "防御宗师", "不爱失误"],
      summary:
        "你不是不敢冲，你只是讨厌无意义的送。你天生擅长把局势变成一道很难被破开的数学题。",
      battleStyle:
        "你会优先修正风险，把能堵的洞全堵上，再考虑怎么把对面闷死。四大天王来了都得先打申请。",
      friendView:
        "朋友嘴上说你保守，真到关键时刻还是想站你身后，因为你太像一道墙。",
      meltdown:
        "要是连续吃两次低级失误，你会进入自闭复盘状态，像在给自己开军事法庭。",
      music: "bastion",
      quote: quotePool.timing,
      axisProfile: { rush: 0, econ: 2, control: 3, chaos: 0, honor: 2, weird: 1 },
    },
    {
      id: "H045",
      code: "H045",
      name: "索姆拉",
      english: "Solmyr",
      faction: "塔楼 Tower",
      title: "连锁闪电的人间代言",
      image: "./assets/heroes/H045.png",
      tags: ["法术爆破", "牌面拉满", "老传奇"],
      summary:
        "你属于那种只要条件一成熟，就会用一波足够华丽的操作把全场打成静音的人。",
      battleStyle:
        "你喜欢高上限，喜欢爆点，喜欢那种按下去之后大家一起喊'卧槽'的操作感。",
      friendView:
        "在朋友眼里，你像个随时可能起飞的隐藏 boss，平时安静，出手时电闪雷鸣。",
      meltdown:
        "如果最该发光的回合没打出效果，你会当场陷入'这不科学'的精神震荡。",
      music: "storm",
      quote: quotePool.ascent,
      axisProfile: { rush: 2, econ: 1, control: 2, chaos: 2, honor: 1, weird: 2 },
    },
    {
      id: "H047",
      code: "H047",
      name: "埃尔尼",
      english: "Aine",
      faction: "塔楼 Tower",
      title: "金库和法术书一起起飞的精致财阀",
      image: "./assets/heroes/H047.png",
      tags: ["有钱有法", "投资脑", "体面玩家"],
      summary:
        "你很懂资源的美感，也很懂什么叫以更轻松的姿态把事情做成。你不爱狼狈，爱稳稳地赢。",
      battleStyle:
        "能靠经济和法术完成的事，你绝不愿意靠低级硬换。打图要赢，也要赢得漂亮。",
      friendView:
        "朋友觉得你表面优雅，实际算盘拨得飞起，是一种带香水味的现实主义。",
      meltdown:
        "遇到资源断档、魔法哑火、计划崩盘时，你会气得像高脚杯里突然掉进了泥点子。",
      music: "spark",
      quote: quotePool.timing,
      axisProfile: { rush: 1, econ: 3, control: 2, chaos: 0, honor: 1, weird: 2 },
    },
    {
      id: "H049",
      code: "H049",
      name: "瑞斯卡",
      english: "Rashka",
      faction: "地狱 Inferno",
      title: "火爹附体的点燃型人格",
      image: "./assets/heroes/H049.png",
      tags: ["火爹", "爆脾气", "第一波就想点"],
      summary:
        "你有一种非常直接的热量。面对问题，你的第一反应不是绕，而是先给它来一下，最好还能烧出节目效果。",
      battleStyle:
        "你擅长抢主动权，主打一个先手点火。场面越乱你越来劲，别人越喊离谱你越觉得顺手。",
      friendView:
        "朋友说你像带着火星子说话的人，热情、冲动、上头，但真的能把气氛拉满。",
      meltdown:
        "如果该炸的东西没炸开，你会进入'今天这火怎么哑了'的自我怀疑。",
      music: "ember",
      quote: quotePool.ascent,
      axisProfile: { rush: 3, econ: 0, control: 1, chaos: 3, honor: 1, weird: 1 },
    },
    {
      id: "H051",
      code: "H051",
      name: "伊格纳蒂斯",
      english: "Ignatius",
      faction: "地狱 Inferno",
      title: "地狱流水线监工兼火焰执行官",
      image: "./assets/heroes/H051.png",
      tags: ["压迫感", "硬推流", "凶得很稳定"],
      summary:
        "你不是单纯冲动，你更像一台会持续施压的机器。你不追求偶像包袱，只追求把局面烤熟。",
      battleStyle:
        "你爱用稳定、粗暴、带点工业质感的方式推进，像一座地狱工厂不紧不慢地向前碾。",
      friendView:
        "朋友会觉得你有种'别惹我，我真能一直压着你打'的低温威慑力。",
      meltdown:
        "如果局势被迫拖成烂泥潭，你会非常烦，因为你喜欢的是有压强的胜利。",
      music: "ember",
      quote: quotePool.shameless,
      axisProfile: { rush: 2, econ: 1, control: 2, chaos: 2, honor: 1, weird: 0 },
    },
    {
      id: "H057",
      code: "H057",
      name: "希瑞尔",
      english: "Xyron",
      faction: "地下城 Dungeon",
      title: "阴间法学派资深讲师",
      image: "./assets/heroes/H057.png",
      tags: ["黑火法师", "爱搞折磨", "气质偏邪门"],
      summary:
        "你天生对那些不按常理出牌的东西有兴趣。大家都想走大路时，你会默默研究哪里能开一扇暗门。",
      battleStyle:
        "你喜欢通过法术和节奏把对手带进你的回合，让别人不是输给面板，而是输给精神状态。",
      friendView:
        "朋友觉得你人其实挺聪明，就是思路偶尔阴得让人想先离你远一点。",
      meltdown:
        "要是有人用最朴素的方式把你正面砸穿，你会有一种理论体系被羞辱的感觉。",
      music: "shadow",
      quote: quotePool.shameless,
      axisProfile: { rush: 1, econ: 1, control: 3, chaos: 2, honor: 0, weird: 3 },
    },
    {
      id: "H059",
      code: "H059",
      name: "奥力马",
      english: "Olema",
      faction: "地下城 Dungeon",
      title: "慢性折磨型女王",
      image: "./assets/heroes/H059.png",
      tags: ["毒奶", "持续掉血", "温柔地送走你"],
      summary:
        "你不一定要在第一秒赢，但你很会让别人一边打，一边意识到自己正在往坏结果滑下去。",
      battleStyle:
        "你偏爱持久战、压血线和心理折磨。场面看似平静，其实你已经把对面安排得明明白白。",
      friendView:
        "朋友觉得你说话经常很客气，但做决定时有种'不声不响就判了'的狠劲。",
      meltdown:
        "如果连你都开始急着求速战速决，那说明事情真的快失控了。",
      music: "shadow",
      quote: quotePool.timing,
      axisProfile: { rush: 0, econ: 1, control: 3, chaos: 1, honor: 1, weird: 3 },
    },
    {
      id: "H093",
      code: "H093",
      name: "蒂玛",
      english: "Deemer",
      faction: "地下城 Dungeon",
      title: "陨石一响全场坐下的爆破专家",
      image: "./assets/heroes/H093.png",
      tags: ["陨石雨", "高爆发", "节目效果之神"],
      summary:
        "你的魅力在于突然。平时看着像在观察，一旦找到窗口，整局的画风就会因你而转向。",
      battleStyle:
        "你对那种一锤定音的爆发特别敏感，出手往往不多，但每次都想让人记很久。",
      friendView:
        "朋友觉得你很有戏剧性，属于不出手则已，一出手就直奔高光镜头的人。",
      meltdown:
        "要是观众都坐好了结果你没把舞台炸开，你会怀疑今天是不是天象不对。",
      music: "shadow",
      quote: quotePool.ascent,
      axisProfile: { rush: 2, econ: 0, control: 2, chaos: 3, honor: 0, weird: 3 },
    },
    {
      id: "H094",
      code: "H094",
      name: "萨费罗斯",
      english: "Sephinroth",
      faction: "地下城 Dungeon",
      title: "带着剧本感的黑幕型策士",
      image: "./assets/heroes/H094.png",
      tags: ["深谋远虑", "像反派", "不爱解释"],
      summary:
        "你身上有一种'我先看懂三步之后再说'的冷静。别人眼里的偶然，在你这往往只是布置得更早。",
      battleStyle:
        "你偏爱长线布局和阴影中的控制，很多决定都不吵闹，但过一会儿会发现它们特别致命。",
      friendView:
        "朋友觉得你看起来总像知道些什么不肯立刻说，气人，但靠谱。",
      meltdown:
        "若被迫频繁临场救火，你会烦到想把整个剧本重写一遍。",
      music: "shadow",
      quote: quotePool.shameless,
      axisProfile: { rush: 0, econ: 2, control: 3, chaos: 1, honor: 0, weird: 3 },
    },
    {
      id: "H096",
      code: "H096",
      name: "约克",
      english: "Yog",
      faction: "据点 Stronghold",
      title: "嘴上朴素实则很会整活的反魔直男",
      image: "./assets/heroes/H096.png",
      tags: ["不吃花活", "刚正面", "土法解决问题"],
      summary:
        "你信奉能抡的事就少绕。你并不排斥技巧，但你更相信简单直接的路线有时才是真正的王道。",
      battleStyle:
        "你重视执行、重视稳定、重视能落地的战术。法爷在你面前飘半天，你一句话：说完了吗。",
      friendView:
        "朋友会觉得你有种很直给的安全感，虽然偶尔也会突然说出让人发愣的野路子方案。",
      meltdown:
        "当你不得不和一堆玄学机制斗智斗勇时，会露出'这都什么乱七八糟'的疲惫神情。",
      music: "war",
      quote: quotePool.same,
      axisProfile: { rush: 2, econ: 1, control: 1, chaos: 1, honor: 3, weird: 0 },
    },
    {
      id: "H099",
      code: "H099",
      name: "希娃",
      english: "Shiva",
      faction: "据点 Stronghold",
      title: "狼骑侦察部门唯一真神",
      image: "./assets/heroes/H099.png",
      tags: ["快到离谱", "边跑边看", "先手欲望重"],
      summary:
        "你不喜欢被动等待，你喜欢在信息还没完全展开时就先动起来。你的安全感来自视野和速度。",
      battleStyle:
        "你常常不是最狠的那个，但几乎总是最先闻到机会的人。你永远想先看见、先靠近、先决定。",
      friendView:
        "朋友觉得你像个永动侦察兵，休息五分钟都像在浪费侦察术。",
      meltdown:
        "如果被蒙在鼓里，或者只能靠别人传话打图，你会难受到像失去了半个脑子。",
      music: "war",
      quote: quotePool.ascent,
      axisProfile: { rush: 3, econ: 1, control: 1, chaos: 2, honor: 1, weird: 0 },
    },
    {
      id: "H102",
      code: "H102",
      name: "肯洛·哈格",
      english: "Crag Hack",
      faction: "据点 Stronghold",
      title: "一拳超人型上头战神",
      image: "./assets/heroes/H102.png",
      tags: ["战斗英雄", "硬刚到底", "不服就干"],
      summary:
        "你的人格关键词是硬。硬气、硬打、硬扛。你未必每次都想得最细，但你几乎总是最先站出来的人。",
      battleStyle:
        "你看重爆发、士气和正面兑现。真到拼命时，你是那种让队友忍不住喊'这哥们真冲啊'的人。",
      friendView:
        "朋友会说你像一块滚烫的大石头，笨重的时候也有，但砸下去是真疼。",
      meltdown:
        "若连续被人用花活拉扯，你会暴躁到想把桌子掀了：有本事出来正面碰一下。",
      music: "war",
      quote: quotePool.ascent,
      axisProfile: { rush: 3, econ: 0, control: 0, chaos: 3, honor: 3, weird: 0 },
    },
    {
      id: "H106",
      code: "H106",
      name: "德萨",
      english: "Dessa",
      faction: "要塞 Fortress",
      title: "路网规划比人生规划还清楚的行军工程师",
      image: "./assets/heroes/H106.png",
      tags: ["后勤学霸", "一步不浪费", "节能主义"],
      summary:
        "你对效率的执念近乎本能。你可以接受辛苦，但不能接受白走、白做、白亏。",
      battleStyle:
        "别人看图靠感觉，你看图像在测路线成本。谁敢浪费你一步，你都觉得那是对后勤学的侮辱。",
      friendView:
        "朋友常说你是那种会为了少走两格路而重新做整套计划的人，但最后又不得不承认你是对的。",
      meltdown:
        "如果队友乱点移动力、资源链和接力位，你会陷入近乎生理性的痛苦。",
      music: "bastion",
      quote: quotePool.timing,
      axisProfile: { rush: 2, econ: 3, control: 1, chaos: 0, honor: 2, weird: 0 },
    },
    {
      id: "H115",
      code: "H115",
      name: "泰泽",
      english: "Tazar",
      faction: "要塞 Fortress",
      title: "防反体系的镇山太岁",
      image: "./assets/heroes/H115.png",
      tags: ["硬得离谱", "耐打", "持久战王者"],
      summary:
        "你最大的优点不是会不会赢，而是很难输得难看。你像一只缓慢但不容忽视的铁壳怪物。",
      battleStyle:
        "你擅长把别人最兴奋的那一下变成无事发生，再让对方在回合交换里一点点失血。",
      friendView:
        "朋友觉得你像老干部型安全感，可能没那么炫，但关键时刻真的扛得住。",
      meltdown:
        "如果在你最擅长的耐久局里被人爆穿，你会沉默很久，像堡垒被人从内部拆了。",
      music: "bastion",
      quote: quotePool.same,
      axisProfile: { rush: 0, econ: 1, control: 3, chaos: 0, honor: 3, weird: 0 },
    },
    {
      id: "H126",
      code: "H126",
      name: "安洁儿",
      english: "Andra",
      faction: "海港 Cove",
      title: "海风里带毒的潮汐操盘手",
      image: "./assets/heroes/H126.png",
      tags: ["深渊号角味很足", "施压", "海战脑"],
      summary:
        "你很擅长在看似轻快的节奏里埋一点针。别人以为你是在吹海风，你已经顺手把局势染上自己的颜色。",
      battleStyle:
        "你喜欢灵巧、磨血、持续施压和柔中带狠的打法，不一定一锤子，但绝对会慢慢让人难受。",
      friendView:
        "朋友觉得你外表不凶，实际特别会把人安排得服服帖帖。",
      meltdown:
        "若被迫陷入纯拼数值的直男局，你会觉得这局一点艺术性都没有。",
      music: "tide",
      quote: quotePool.timing,
      axisProfile: { rush: 1, econ: 1, control: 3, chaos: 1, honor: 1, weird: 2 },
    },
    {
      id: "H127",
      code: "H127",
      name: "蒂娃",
      english: "Tiva",
      faction: "海港 Cove",
      title: "海上风暴指挥官",
      image: "./assets/heroes/H127.png",
      tags: ["节奏感强", "控制欲", "打架不慌"],
      summary:
        "你对局面的理解像潮汐：该进时进，该拖时拖，既不会白白上头，也不会畏手畏脚。",
      battleStyle:
        "你讲究火候和波次，不爱无脑莽，但也绝不喜欢当窝囊废。机会一到，出手非常利索。",
      friendView:
        "朋友会觉得你像个能在混乱里稳稳掌舵的人，偶尔一句话就能把所有人拉回正轨。",
      meltdown:
        "如果局势一直不让你进入自己的节拍，你会烦躁得像逆风硬开船。",
      music: "tide",
      quote: quotePool.same,
      axisProfile: { rush: 2, econ: 1, control: 2, chaos: 1, honor: 2, weird: 1 },
    },
  ];

  const questions = [
    {
      category: "开局精神状态",
      title: "新图开局只给你一座破城、几只兵和一堆雾，你最像哪种人？",
      options: [
        { label: "先探路", detail: "能不能赢以后再说，视野必须先开。", axes: { rush: 2, control: 1 }, followUps: ["f1", "f2"] },
        { label: "先盘收益", detail: "木头矿、水银和钱袋子，一个都得算明白。", axes: { econ: 2, control: 1 }, followUps: ["f3", "f4"] },
        { label: "先找爆点", detail: "只要有机会一波开张，今天就不是窝囊废。", axes: { rush: 1, chaos: 2 }, followUps: ["f5", "f6", "f7"] },
        { label: "先保底", detail: "先把该补的防线补齐，别让低级失误偷家。", axes: { honor: 2, control: 1 }, followUps: ["f8", "f9"] },
      ],
    },
    {
      category: "带队方式",
      title: "你带朋友开荒时，通常扮演什么角色？",
      options: [
        { label: "导航型队长", detail: "你画路线比别人画饼还快。", axes: { rush: 2, econ: 1 }, followUps: ["f1", "f2"] },
        { label: "保姆型指挥", detail: "谁漏兵谁断链，你全看在眼里。", axes: { control: 2, honor: 1 }, followUps: ["f8", "f9"] },
        { label: "节目效果担当", detail: "能赢最好，不能赢也得炸得响。", axes: { chaos: 2, weird: 1 }, followUps: ["f16", "f17"] },
        { label: "幕后军师", detail: "嘴上话不多，心里已经演了三轮。", axes: { control: 1, weird: 2 }, followUps: ["f14", "f15"] },
      ],
    },
    {
      category: "打架气质",
      title: "看到对面主力突然露头，你第一反应是什么？",
      options: [
        { label: "绕", detail: "先估算距离和后续接力，别白给。", axes: { rush: 1, econ: 1, control: 1 }, followUps: ["f1", "f14"] },
        { label: "点", detail: "先给他来一波大的，火爹精神永不熄灭。", axes: { rush: 2, chaos: 1 }, followUps: ["f5", "f6"] },
        { label: "拖", detail: "让他急，你不急，回合数也是武器。", axes: { control: 2, honor: 1 }, followUps: ["f9", "f15"] },
        { label: "算", detail: "我得知道他法力、兵力、地形和心态。", axes: { control: 1, weird: 1, econ: 1 }, followUps: ["f13", "f18"] },
      ],
    },
    {
      category: "资源态度",
      title: "地图上出现一个有点亏、但也不是完全不能打的资源点，你会？",
      options: [
        { label: "拿了再说", detail: "资源躺地上不捡，晚上睡不着。", axes: { econ: 2, rush: 1 } },
        { label: "等等看", detail: "先记账，回头看看有没有更划算的路线。", axes: { econ: 1, control: 2 } },
        { label: "拼节目效果", detail: "亏点血算什么，得把节奏点亮。", axes: { chaos: 2, honor: 1 } },
        { label: "留给后手", detail: "现在不拿，不代表永远不拿。", axes: { control: 2, weird: 1 } },
      ],
    },
    {
      category: "朋友评价",
      title: "如果让朋友用一句话形容你的打法，最可能是哪种？",
      options: [
        { label: "这人太快了", detail: "他到底什么时候跑过去的。", axes: { rush: 2, weird: 1 } },
        { label: "这人太稳了", detail: "跟着他一般死不了。", axes: { honor: 2, control: 1 } },
        { label: "这人太能算了", detail: "每步都像提前做过题。", axes: { econ: 1, control: 2 } },
        { label: "这人太会整了", detail: "打不过也得给你整点活。", axes: { chaos: 2, weird: 1 } },
      ],
    },
    {
      category: "地狱试炼",
      title: "你更容易在哪种情况下突然上头？",
      options: [
        { label: "机会摆脸上", detail: "看到能冲的窗口，脚会自己动。", axes: { rush: 2, honor: 1 } },
        { label: "计划被打断", detail: "明明能稳稳来，偏偏有人乱动。", axes: { control: 2, econ: 1 } },
        { label: "别人太装", detail: "你那副嘴脸让我很想给你来下狠的。", axes: { chaos: 2, honor: 1 } },
        { label: "节奏太慢", detail: "再磨下去我都快长蘑菇了。", axes: { rush: 1, weird: 2 } },
      ],
    },
    {
      category: "梗浓度",
      title: "听到“窝囊废”三个字时，你的内心弹幕最像哪句？",
      options: [
        { label: "不可能是我", detail: "我宁可亏，也不能怂成那样。", axes: { honor: 2, chaos: 1 }, followUps: ["f10", "f11"] },
        { label: "先别急", detail: "窝囊不窝囊，要看这波收益。", axes: { econ: 2, control: 1 }, followUps: ["f12", "f13"] },
        { label: "看情况演", detail: "该怂时怂，该狠狠干时狠狠干。", axes: { control: 2, rush: 1 }, followUps: ["f14", "f15"] },
        { label: "拿来造梗", detail: "输赢其次，这词先记进今日语录。", axes: { weird: 2, chaos: 1 }, followUps: ["f16", "f17", "f18"] },
      ],
    },
    {
      category: "四大天王会议",
      title: "如果你被拉去给“四大天王”开作战会，你最想负责哪一块？",
      options: [
        { label: "侦察与开图", detail: "先把地图撕开，后面都好说。", axes: { rush: 2, control: 1 }, followUps: ["f1", "f2"] },
        { label: "财政与补给", detail: "兵马未动，账本先行。", axes: { econ: 3 }, followUps: ["f3", "f4"] },
        { label: "爆破与斩首", detail: "会开会有什么用，关键时刻得有人上。", axes: { chaos: 2, rush: 1 }, followUps: ["f5", "f16"] },
        { label: "防线与兜底", detail: "大家上头的时候，总得有人把锅盖盖住。", axes: { honor: 2, control: 1 }, followUps: ["f8", "f9"] },
      ],
    },
    {
      category: "阵营偏好",
      title: "你最欣赏哪种“赢法”？",
      options: [
        { label: "速度碾过去", detail: "还没反应过来，局就结束了。", axes: { rush: 3 } },
        { label: "运营滚起来", detail: "资源和节奏同步起飞，舒服。", axes: { econ: 3 } },
        { label: "法术把人洗了", detail: "场上响一下，世界就安静。", axes: { chaos: 1, weird: 2 } },
        { label: "磨到对面崩", detail: "能把别人打到气绝，何尝不是一种艺术。", axes: { control: 2, honor: 1 } },
      ],
    },
    {
      category: "复盘风格",
      title: "你复盘一局的方式更像哪种？",
      options: [
        { label: "看路径", detail: "哪一步多走了，我必须知道。", axes: { rush: 1, econ: 2 } },
        { label: "看战斗", detail: "那几个关键回合有没有更帅的解。", axes: { chaos: 2, control: 1 } },
        { label: "看大局", detail: "我输的不是这一仗，是前面三天的铺垫。", axes: { control: 2, weird: 1 } },
        { label: "看心态", detail: "是不是那一瞬间上头，把局送穿了。", axes: { honor: 2, weird: 1 } },
      ],
    },
    {
      category: "气氛组属性",
      title: "队友打出神仙操作时，你通常会？",
      options: [
        { label: "立刻夸爆", detail: "这波必须给牌面。", axes: { honor: 2, rush: 1 } },
        { label: "默默记住", detail: "有用，我以后也要这样用。", axes: { econ: 1, control: 2 } },
        { label: "顺势接梗", detail: "今天的节目效果有了。", axes: { weird: 2, chaos: 1 } },
        { label: "想更狠的", detail: "能不能在这个基础上再过分一点。", axes: { chaos: 2, rush: 1 } },
      ],
    },
    {
      category: "风险偏好",
      title: "一次高风险高收益的抢节奏机会摆在面前，你会？",
      options: [
        { label: "梭哈", detail: "这种局面不冲，何时冲。", axes: { rush: 2, chaos: 1 }, followUps: ["f5", "f7"] },
        { label: "半冲半留", detail: "我可以冒险，但得给自己留后手。", axes: { control: 2, honor: 1 }, followUps: ["f14", "f15"] },
        { label: "除非血赚", detail: "没有充分收益，不值得。", axes: { econ: 2, control: 1 }, followUps: ["f3", "f12"] },
        { label: "看观众多不多", detail: "要是够戏剧性，我愿意。", axes: { weird: 2, chaos: 1 }, followUps: ["f16", "f18"] },
      ],
    },
    {
      category: "社交观感",
      title: "别人第一次接触你，最容易被哪一点迷惑？",
      options: [
        { label: "以为我冲动", detail: "其实我只是反应快。", axes: { rush: 2, honor: 1 } },
        { label: "以为我佛系", detail: "其实我在默默控节奏。", axes: { control: 2, weird: 1 } },
        { label: "以为我随和", detail: "其实账算得比谁都细。", axes: { econ: 2, control: 1 } },
        { label: "以为我整活", detail: "其实我有时真的是认真想这么干。", axes: { chaos: 1, weird: 2 } },
      ],
    },
    {
      category: "输法容忍度",
      title: "哪种输法最让你耿耿于怀？",
      options: [
        { label: "被慢一拍", detail: "我居然没先到，不能接受。", axes: { rush: 2, weird: 1 } },
        { label: "被白嫖资源", detail: "这种亏法能让我夜里醒。", axes: { econ: 3 } },
        { label: "被花活秀了", detail: "他居然用这种方式赢我。", axes: { chaos: 1, honor: 2 } },
        { label: "被稳稳磨死", detail: "这说明我整局都在别人掌心。", axes: { control: 2, weird: 1 } },
      ],
    },
    {
      category: "高光定义",
      title: "对你来说，什么才叫真正的高光时刻？",
      options: [
        { label: "一日千里", detail: "路线和节奏全部踩在点上。", axes: { rush: 2, econ: 1 } },
        { label: "收益爆表", detail: "从此资源再也不缺。", axes: { econ: 3 } },
        { label: "一波核平", detail: "所有人都知道这局我来过。", axes: { chaos: 2, weird: 1 } },
        { label: "绝境翻盘", detail: "对面以为稳了，结果我还活着。", axes: { honor: 2, control: 1 } },
      ],
    },
    {
      category: "精神抗压",
      title: "遇到连续两次不顺时，你更像哪种反应？",
      options: [
        { label: "立刻提速", detail: "越不顺越要主动找机会。", axes: { rush: 2, chaos: 1 } },
        { label: "重做计划", detail: "先把乱掉的部分重新排一下。", axes: { control: 2, econ: 1 } },
        { label: "假装没事", detail: "嘴硬，但心里已经开始冒烟。", axes: { honor: 2, weird: 1 } },
        { label: "直接开整", detail: "既然都这样了，不如往离谱里冲。", axes: { chaos: 2, weird: 1 } },
      ],
    },
    {
      category: "魔法理解",
      title: "你更信哪一种“力量来源”？",
      options: [
        { label: "速度", detail: "快，就是一种法术。", axes: { rush: 3 } },
        { label: "金钱", detail: "没钱，再强都是梦。", axes: { econ: 3 } },
        { label: "知识", detail: "知道得多，打起来就不慌。", axes: { control: 2, weird: 1 } },
        { label: "胆量", detail: "关键时刻敢按下去，那才叫本事。", axes: { honor: 2, chaos: 1 } },
      ],
    },
    {
      category: "深渊号角味道",
      title: "如果你是海港英雄，别人最容易记住你哪点？",
      options: [
        { label: "灵活", detail: "像潮水一样，总能换角度。", axes: { rush: 1, control: 2 } },
        { label: "阴人", detail: "表面温和，实际上刀藏水里。", axes: { control: 1, weird: 2 } },
        { label: "有韵律", detail: "你很会等节拍，也很会卡节拍。", axes: { honor: 1, control: 2 } },
        { label: "有节目", detail: "打着打着就开始像在拍海盗片。", axes: { chaos: 1, weird: 2 } },
      ],
    },
    {
      category: "压迫感来源",
      title: "你觉得自己最吓人的地方是哪一种？",
      options: [
        { label: "来得太快", detail: "别人刚想明白，我已经到脸上了。", axes: { rush: 2, honor: 1 } },
        { label: "打得太细", detail: "每一步都不浪费，很折磨。", axes: { econ: 2, control: 1 } },
        { label: "波次太狠", detail: "突然一轮爆发能把人魂都打没。", axes: { chaos: 2, rush: 1 } },
        { label: "硬得太久", detail: "别人打我像在打一堵会还手的墙。", axes: { honor: 2, control: 1 } },
      ],
    },
    {
      category: "观众视角",
      title: "如果有人给你做实况标题，哪句最贴切？",
      options: [
        { label: "《他又飞了》", detail: "全图穿梭，没有一分钟闲着。", axes: { rush: 2, weird: 1 } },
        { label: "《这也能省》", detail: "每一格移动力都不舍得浪费。", axes: { econ: 2, control: 1 } },
        { label: "《这一炮真不当人》", detail: "高光时刻直接把观众打醒。", axes: { chaos: 2, honor: 1 } },
        { label: "《全程都在算》", detail: "明面平静，暗地全是设计。", axes: { control: 2, weird: 1 } },
      ],
    },
    {
      category: "队伍矛盾",
      title: "队友说想打得“开心一点”，你会怎么理解？",
      options: [
        { label: "多开图", detail: "跑起来当然开心。", axes: { rush: 2, honor: 1 } },
        { label: "多拿资源", detail: "口袋鼓起来，笑容自然就有。", axes: { econ: 3 } },
        { label: "多来几波高光", detail: "不炸点东西叫什么开心。", axes: { chaos: 2, weird: 1 } },
        { label: "少犯低级错", detail: "别把开心建立在送头上。", axes: { control: 2, honor: 1 } },
      ],
    },
    {
      category: "口碑建设",
      title: "你更想被人记成哪种高手？",
      options: [
        { label: "最会跑图的", detail: "看见路线就像看见诗。", axes: { rush: 3 } },
        { label: "最会运营的", detail: "资源像从天上掉进包里。", axes: { econ: 3 } },
        { label: "最会法爆的", detail: "人没到，特效先到。", axes: { chaos: 1, weird: 2 } },
        { label: "最会控局的", detail: "对面怎么打都像在你设计里。", axes: { control: 3 } },
      ],
    },
    {
      category: "社死现场",
      title: "哪种失误会让你最想当场关掉语音？",
      options: [
        { label: "多走一步卡死", detail: "纯后勤事故，太丢脸。", axes: { rush: 1, econ: 2 } },
        { label: "账没算清", detail: "明明差一点就能全拿。", axes: { econ: 3 } },
        { label: "高光放空", detail: "全场都在等你炸，你哑火了。", axes: { chaos: 2, weird: 1 } },
        { label: "兜底没兜住", detail: "本来最不该崩的地方崩了。", axes: { honor: 2, control: 1 } },
      ],
    },
    {
      category: "牌面哲学",
      title: "你对“牌面”这件事的理解更像？",
      options: [
        { label: "先到就是牌面", detail: "别人还在门口，我已经进城了。", axes: { rush: 2, chaos: 1 } },
        { label: "富有就是牌面", detail: "经济一开，气场自来。", axes: { econ: 3 } },
        { label: "稳住就是牌面", detail: "乱局里还能不变形，这才是真功夫。", axes: { control: 2, honor: 1 } },
        { label: "炸裂就是牌面", detail: "没有观众惊呼，不算真正牌面。", axes: { weird: 1, chaos: 2 } },
      ],
    },
    {
      category: "奇招接受度",
      title: "你对离谱套路的态度通常是？",
      options: [
        { label: "只要能赢，我学", detail: "奇不奇不重要，落地最重要。", axes: { control: 2, econ: 1 } },
        { label: "只要够帅，我试", detail: "失败可以，不能无聊。", axes: { chaos: 2, weird: 1 } },
        { label: "只要够快，我上", detail: "省时间就是道理。", axes: { rush: 2, econ: 1 } },
        { label: "只要够稳，我留", detail: "怪招再怪，也得能兜回来。", axes: { honor: 2, control: 1 } },
      ],
    },
    {
      category: "阵地观",
      title: "面对一座边城，你的想法更接近？",
      options: [
        { label: "抢下来当跳板", detail: "城是用来提速的。", axes: { rush: 2, honor: 1 } },
        { label: "占下来养资源", detail: "城是长期现金流。", axes: { econ: 3 } },
        { label: "拿下来做诱饵", detail: "对面要是上头就更好。", axes: { control: 1, weird: 2 } },
        { label: "拿下来就硬守", detail: "来都来了，试试能不能啃动。", axes: { honor: 2, control: 1 } },
      ],
    },
    {
      category: "抽象程度",
      title: "你最容易在哪种时刻爆发“抽象灵感”？",
      options: [
        { label: "看到捷径时", detail: "这地方绝对还能钻。", axes: { rush: 2, weird: 1 } },
        { label: "看到便宜时", detail: "这波要是抠出来就赚大了。", axes: { econ: 2, weird: 1 } },
        { label: "看到人多时", detail: "观众到位，那我来整波大的。", axes: { chaos: 2, weird: 1 } },
        { label: "看到漏洞时", detail: "这种小口子最适合慢慢撬。", axes: { control: 2, weird: 1 } },
      ],
    },
    {
      category: "英雄感",
      title: "你更像哪一种“主角叙事”？",
      options: [
        { label: "少年快马", detail: "先把天下跑一遍。", axes: { rush: 3 } },
        { label: "理财圣手", detail: "没有钱解决不了的问题。", axes: { econ: 3 } },
        { label: "天命法师", detail: "这一发下去，天意自明。", axes: { chaos: 1, weird: 2 } },
        { label: "铁壁老将", detail: "打不穿我，就别谈后面。", axes: { honor: 2, control: 1 } },
      ],
    },
    {
      category: "观念差异",
      title: "别人说“差不多就行”时，你心里最容易冒出什么？",
      options: [
        { label: "还能再快点", detail: "差不多不等于到位。", axes: { rush: 2, honor: 1 } },
        { label: "还能再省点", detail: "这种说法通常意味着浪费。", axes: { econ: 3 } },
        { label: "还能再狠点", detail: "都到这了，不如一步到位。", axes: { chaos: 2, honor: 1 } },
        { label: "还能再细点", detail: "很多输局就死在差不多。", axes: { control: 3 } },
      ],
    },
    {
      category: "施压方式",
      title: "你更擅长用什么方法让对手不舒服？",
      options: [
        { label: "压时间", detail: "让他一直追着你的节奏跑。", axes: { rush: 2, control: 1 } },
        { label: "压经济", detail: "我拿得比你多，你自然会急。", axes: { econ: 3 } },
        { label: "压血线", detail: "不必秒你，慢慢折磨更香。", axes: { control: 2, weird: 1 } },
        { label: "压心态", detail: "一波超模操作足够把人点炸。", axes: { chaos: 2, weird: 1 } },
      ],
    },
    {
      category: "成就需求",
      title: "什么样的胜利会让你忍不住保存录像？",
      options: [
        { label: "极致机动", detail: "每一步都在正确的时间点。", axes: { rush: 2, econ: 1 } },
        { label: "资源滚满", detail: "看着资产表我就幸福。", axes: { econ: 3 } },
        { label: "法术封神", detail: "观众都知道这局的 MVP 是特效。", axes: { chaos: 1, weird: 2 } },
        { label: "残局翻盘", detail: "越像不可能，越值得回味。", axes: { honor: 2, control: 1 } },
      ],
    },
    {
      category: "兵种气质",
      title: "如果把你的人格换成兵种，你更像？",
      options: [
        { label: "狼骑", detail: "先看先咬先跑路。", axes: { rush: 2, chaos: 1 } },
        { label: "宝库看门人", detail: "我站这儿，就是要你交路费。", axes: { honor: 2, control: 1 } },
        { label: "施法者", detail: "人还没碰到我，事情已经结束。", axes: { weird: 2, chaos: 1 } },
        { label: "工兵", detail: "别问帅不帅，问效率高不高。", axes: { econ: 2, control: 1 } },
      ],
    },
    {
      category: "临门一脚",
      title: "决胜前夜，你最关注哪件事？",
      options: [
        { label: "脚程够不够", detail: "差一格就是两个故事。", axes: { rush: 2, econ: 1 } },
        { label: "资源够不够", detail: "没有补给的高光只是烟花。", axes: { econ: 3 } },
        { label: "火力够不够", detail: "我要一回合把故事讲完。", axes: { chaos: 2, honor: 1 } },
        { label: "兜底够不够", detail: "不怕一万，就怕那一下。", axes: { control: 2, honor: 1 } },
      ],
    },
    {
      category: "脾气阈值",
      title: "哪种人最容易触发你的“今天非得赢你”模式？",
      options: [
        { label: "磨磨唧唧的人", detail: "效率低会让我很难受。", axes: { rush: 2, honor: 1 } },
        { label: "乱花资源的人", detail: "你是在烧我的命。", axes: { econ: 3 } },
        { label: "装神弄鬼的人", detail: "我就想把你那层皮掀开。", axes: { chaos: 1, honor: 2 } },
        { label: "假装稳重的人", detail: "我最喜欢拆穿这种表演。", axes: { control: 2, weird: 1 } },
      ],
    },
    {
      category: "故事节奏",
      title: "你更喜欢哪种战局叙事？",
      options: [
        { label: "快刀斩乱麻", detail: "简单，直接，气势足。", axes: { rush: 2, chaos: 1 } },
        { label: "一步一个台阶", detail: "看着雪球越滚越大特别爽。", axes: { econ: 3 } },
        { label: "前面铺垫，后面核爆", detail: "慢慢攒，最后轰一下。", axes: { control: 1, chaos: 1, weird: 1 } },
        { label: "稳到最后一口气", detail: "别人先崩，我就赢了。", axes: { control: 2, honor: 1 } },
      ],
    },
    {
      category: "英雄滤镜",
      title: "你最羡慕哪种名场面？",
      options: [
        { label: "全图飞奔抢节奏", detail: "每一步都像提前写好的。", axes: { rush: 3 }, followUps: ["f1", "f2"] },
        { label: "坐城数钱看别人急", detail: "富才是最大的自由。", axes: { econ: 3 }, followUps: ["f4", "f13"] },
        { label: "一发把人点静音", detail: "高光就是要响。", axes: { chaos: 2, weird: 1 }, followUps: ["f6", "f16"] },
        { label: "硬扛一切然后反杀", detail: "别人越急，我越稳。", axes: { honor: 2, control: 1 }, followUps: ["f9", "f10"] },
      ],
    },
    {
      category: "心态调色盘",
      title: "你觉得自己更接近哪种底色？",
      options: [
        { label: "风", detail: "自由、迅速、很难被抓住。", axes: { rush: 3 }, followUps: ["f2", "f11"] },
        { label: "金", detail: "现实、冷静、看重价值。", axes: { econ: 3 }, followUps: ["f3", "f12"] },
        { label: "火", detail: "热烈、直接、容易点燃全场。", axes: { chaos: 2, honor: 1 }, followUps: ["f6", "f10"] },
        { label: "潮", detail: "灵巧、克制、会等时机。", axes: { control: 2, weird: 1 }, followUps: ["f15", "f18"] },
      ],
    },
    {
      category: "终局判断",
      title: "到了最后一战，你最想听见别人怎么评价你？",
      options: [
        { label: "这人快得离谱", detail: "节奏彻底被他吃住了。", axes: { rush: 2, control: 1 } },
        { label: "这人太会经营", detail: "从头到尾都没穷过。", axes: { econ: 3 } },
        { label: "这人太敢了", detail: "关键一按直接改命。", axes: { chaos: 2, honor: 1 } },
        { label: "这人真难啃", detail: "想赢他得先把自己耗没。", axes: { control: 2, honor: 1 } },
      ],
    },
  ];

  const followUpQuestions = [
    {
      id: "f1",
      category: "追问：飞线本能",
      title: "你探路时最想优先确认哪件事？",
      options: [
        { label: "有没有捷径", detail: "地图不可能只有设计稿那一条路。", axes: { rush: 2, weird: 1 } },
        { label: "有没有人偷矿", detail: "视野就是安全感。", axes: { control: 2, honor: 1 } },
        { label: "有没有宝屋", detail: "探路也得讲收益。", axes: { econ: 2, rush: 1 } },
        { label: "有没有节目效果", detail: "最好顺手还能把朋友吓一跳。", axes: { chaos: 1, weird: 2 } },
      ],
    },
    {
      id: "f2",
      category: "追问：跑路哲学",
      title: "如果全图跑图只能选一项加成，你更想拿哪种？",
      options: [
        { label: "稳定脚程", detail: "别整虚的，步子大才是王道。", axes: { rush: 3 } },
        { label: "额外视野", detail: "先看到，才配决定。", axes: { control: 2, rush: 1 } },
        { label: "接力链子", detail: "效率来自整体，不只来自个人。", axes: { econ: 2, control: 1 } },
        { label: "赌一条暗门", detail: "正路太普通了。", axes: { weird: 2, chaos: 1 } },
      ],
    },
    {
      id: "f3",
      category: "追问：抠门艺术",
      title: "你最难容忍哪一种资源浪费？",
      options: [
        { label: "多走一步路", detail: "这是对后勤学的侮辱。", axes: { rush: 1, econ: 2 } },
        { label: "多花一口兵", detail: "白换就是白亏。", axes: { econ: 2, control: 1 } },
        { label: "多交一轮税", detail: "明明可以先拿矿。", axes: { econ: 3 } },
        { label: "多讲一句废话", detail: "时间也是资源。", axes: { rush: 1, control: 2 } },
      ],
    },
    {
      id: "f4",
      category: "追问：财阀审美",
      title: "你最喜欢哪种“富起来”的方式？",
      options: [
        { label: "稳定滚雪球", detail: "慢一点，但真安心。", axes: { econ: 3 } },
        { label: "抢大节奏点", detail: "一下赚大的，呼吸都顺。", axes: { econ: 2, chaos: 1 } },
        { label: "边跑边拿", detail: "收益和速度得一起飞。", axes: { econ: 1, rush: 2 } },
        { label: "让别人穷", detail: "你少了，也算我多了。", axes: { control: 2, weird: 1 } },
      ],
    },
    {
      id: "f5",
      category: "追问：上头判定",
      title: "你准备狠狠干一波之前，最想先确认什么？",
      options: [
        { label: "对面会不会懵", detail: "只要懵一秒，就够我下手。", axes: { chaos: 2, rush: 1 } },
        { label: "我能不能赢帅", detail: "高光和结果最好一起到。", axes: { chaos: 1, weird: 2 } },
        { label: "值不值得赌", detail: "再上头也得有赔率。", axes: { econ: 2, control: 1 } },
        { label: "死不死得体面", detail: "可以输，但不能窝囊。", axes: { honor: 2, chaos: 1 } },
      ],
    },
    {
      id: "f6",
      category: "追问：火力分布",
      title: "如果你是火爹流选手，最想在哪种场面出手？",
      options: [
        { label: "对面站满一团", detail: "不炸都对不起队形。", axes: { chaos: 3 } },
        { label: "对面自以为稳", detail: "这种最适合一键改命。", axes: { chaos: 2, weird: 1 } },
        { label: "朋友都在围观", detail: "那必须给点节目效果。", axes: { weird: 2, chaos: 1 } },
        { label: "只差临门一脚", detail: "漂亮收尾也算修养。", axes: { honor: 2, rush: 1 } },
      ],
    },
    {
      id: "f7",
      category: "追问：莽夫边界",
      title: "什么情况下你会暂时收手，不再硬冲？",
      options: [
        { label: "朋友说先别送", detail: "行，这次给兄弟一个面子。", axes: { honor: 2, control: 1 } },
        { label: "真算不过账", detail: "冲归冲，破产不行。", axes: { econ: 2, chaos: 1 } },
        { label: "戏不够大", detail: "不够炸裂我不想演。", axes: { weird: 2, chaos: 1 } },
        { label: "感觉有埋伏", detail: "莽也得莽在对的时候。", axes: { control: 2, rush: 1 } },
      ],
    },
    {
      id: "f8",
      category: "追问：兜底人格",
      title: "当别人开始乱送时，你最像哪种反应？",
      options: [
        { label: "立刻补洞", detail: "先救局，再骂人。", axes: { control: 2, honor: 1 } },
        { label: "记在小本上", detail: "这账以后要算。", axes: { control: 1, weird: 2 } },
        { label: "默默接锅", detail: "先活下来再说。", axes: { honor: 3 } },
        { label: "当场教育", detail: "今天谁都别想跑。", axes: { chaos: 1, honor: 2 } },
      ],
    },
    {
      id: "f9",
      category: "追问：城墙信仰",
      title: "你最欣赏哪一种防守胜利？",
      options: [
        { label: "一丝不漏", detail: "对面根本没有窗口。", axes: { control: 3 } },
        { label: "硬扛到底", detail: "你打任你打，我不掉层皮。", axes: { honor: 3 } },
        { label: "拖到他急", detail: "人一急就会送。", axes: { control: 2, weird: 1 } },
        { label: "最后反咬", detail: "守不是目的，杀回来才是。", axes: { honor: 2, chaos: 1 } },
      ],
    },
    {
      id: "f10",
      category: "追问：不当窝囊废",
      title: "你认定自己不是窝囊废的主要证据是什么？",
      options: [
        { label: "关键时刻敢按", detail: "该冲的时候我真上。", axes: { honor: 2, chaos: 1 } },
        { label: "就算输也不怂", detail: "体面是底线。", axes: { honor: 3 } },
        { label: "不让别人白秀", detail: "你玩花的，我就跟你碰。", axes: { chaos: 2, honor: 1 } },
        { label: "该狠时真狠", detail: "别拿平时状态衡量我。", axes: { rush: 1, chaos: 2 } },
      ],
    },
    {
      id: "f11",
      category: "追问：硬话来源",
      title: "你最容易在哪种语境下说出狠话？",
      options: [
        { label: "被人嘲讽时", detail: "嘴可以输，气势不能。", axes: { honor: 2, chaos: 1 } },
        { label: "要拼命时", detail: "这时候就别装温柔了。", axes: { rush: 2, honor: 1 } },
        { label: "准备翻盘时", detail: "先把气场立住。", axes: { chaos: 1, weird: 2 } },
        { label: "朋友怂了时", detail: "得有人把胆子抬回来。", axes: { honor: 2, control: 1 } },
      ],
    },
    {
      id: "f12",
      category: "追问：收益主义",
      title: "如果忍一手能换更大利益，你会怎么说服自己？",
      options: [
        { label: "这是投资", detail: "现在不爽，后面起飞。", axes: { econ: 3 } },
        { label: "这是控节奏", detail: "不急，轮到我时再说。", axes: { control: 2, econ: 1 } },
        { label: "这是兵法", detail: "退一步是为了后面让他退十步。", axes: { weird: 2, control: 1 } },
        { label: "这是体面", detail: "瞎冲才真掉价。", axes: { honor: 2, econ: 1 } },
      ],
    },
    {
      id: "f13",
      category: "追问：算盘声",
      title: "你听见哪种声音最像胜利前奏？",
      options: [
        { label: "金库进账", detail: "钱声最安神。", axes: { econ: 3 } },
        { label: "脚步接力", detail: "队伍流转顺起来最爽。", axes: { rush: 1, econ: 2 } },
        { label: "对面慌了", detail: "收益开始显现了。", axes: { control: 2, weird: 1 } },
        { label: "朋友夸你会算", detail: "终于有人懂我的辛苦。", axes: { econ: 2, honor: 1 } },
      ],
    },
    {
      id: "f14",
      category: "追问：能屈能伸",
      title: "你眼里的“暂时认怂”更像什么？",
      options: [
        { label: "换档", detail: "不是退，是换一种赢法。", axes: { control: 2, rush: 1 } },
        { label: "伏笔", detail: "前面低一点，后面才有反差。", axes: { weird: 2, control: 1 } },
        { label: "省损", detail: "白亏才叫真怂。", axes: { econ: 3 } },
        { label: "让他得意一会", detail: "待会儿收的时候更香。", axes: { chaos: 1, control: 2 } },
      ],
    },
    {
      id: "f15",
      category: "追问：演员修养",
      title: "如果你要演一手，最想演给谁看？",
      options: [
        { label: "演给对面", detail: "骗到一步就是赚。", axes: { control: 2, weird: 1 } },
        { label: "演给队友", detail: "先稳住军心。", axes: { honor: 2, control: 1 } },
        { label: "演给观众", detail: "都来了，不得整点层次。", axes: { weird: 2, chaos: 1 } },
        { label: "演给自己", detail: "我喜欢这种掌控感。", axes: { control: 2, weird: 1 } },
      ],
    },
    {
      id: "f16",
      category: "追问：造梗技术",
      title: "你最喜欢哪种梗的诞生方式？",
      options: [
        { label: "自己打出来", detail: "名场面得靠战绩撑着。", axes: { chaos: 1, honor: 2 } },
        { label: "别人送上门", detail: "对面一抽象，我就来精神。", axes: { weird: 2, control: 1 } },
        { label: "边输边造", detail: "输了也不能白输。", axes: { weird: 2, chaos: 1 } },
        { label: "朋友一起抬", detail: "好梗要有共鸣才飞。", axes: { honor: 1, weird: 2 } },
      ],
    },
    {
      id: "f17",
      category: "追问：群聊存在感",
      title: "你最像哪种群聊选手？",
      options: [
        { label: "冷不丁一句封神", detail: "平时潜水，出手封喉。", axes: { weird: 2, control: 1 } },
        { label: "边看边接梗", detail: "气氛得有人续上。", axes: { honor: 1, weird: 2 } },
        { label: "败局也能讲成评书", detail: "嘴不能输。", axes: { chaos: 1, weird: 2 } },
        { label: "偶尔认真复盘", detail: "闹完还得落回技术。", axes: { control: 2, econ: 1 } },
      ],
    },
    {
      id: "f18",
      category: "追问：抽象终点",
      title: "你觉得抽象和实力的最好关系是什么？",
      options: [
        { label: "有实力才配抽象", detail: "不然就是白闹。", axes: { honor: 2, control: 1 } },
        { label: "抽象本身也是实力", detail: "能把气氛带飞就是本事。", axes: { weird: 3 } },
        { label: "最好两手都硬", detail: "赢也要赢得有梗。", axes: { chaos: 1, weird: 1, honor: 1 } },
        { label: "看场合切换", detail: "该正经时我也很正经。", axes: { control: 2, weird: 1 } },
      ],
    },
  ];

  return { heroes, questions, followUpQuestions, musicThemes };
})();
