(() => {
  const BASE_QUESTION_COUNT = 12;
  const MAX_QUESTION_COUNT = 20;
  const BRANCH_BASE_COUNT = 4;
  const data = window.QUIZ_DATA;
  const heroById = Object.fromEntries(data.heroes.map((hero) => [hero.id, hero]));
  const heroIds = data.heroes.map((hero) => hero.id);
  const followUpQuestionById = Object.fromEntries(
    (data.followUpQuestions || []).map((question) => [question.id, question])
  );

  const state = {
    selectedQuestions: [],
    currentIndex: 0,
    answers: [],
    audioPlaying: false,
    injectedFollowUps: new Set(),
  };

  const startButton = document.getElementById("startButton");
  const introPanel = document.getElementById("introPanel");
  const quizPanel = document.getElementById("quizPanel");
  const resultPanel = document.getElementById("resultPanel");
  const questionTag = document.getElementById("questionTag");
  const questionCategory = document.getElementById("questionCategory");
  const questionTitle = document.getElementById("questionTitle");
  const optionsContainer = document.getElementById("optionsContainer");
  const progressFill = document.getElementById("progressFill");
  const restartButton = document.getElementById("restartButton");
  const musicToggle = document.getElementById("musicToggle");
  const nativeShareButton = document.getElementById("nativeShareButton");
  const copyShareButton = document.getElementById("copyShareButton");
  const audio = document.getElementById("resultAudio");

  const resultMood = document.getElementById("resultMood");
  const heroImage = document.getElementById("heroImage");
  const heroFaction = document.getElementById("heroFaction");
  const heroName = document.getElementById("heroName");
  const heroTitle = document.getElementById("heroTitle");
  const heroSummary = document.getElementById("heroSummary");
  const heroTags = document.getElementById("heroTags");
  const heroBattleStyle = document.getElementById("heroBattleStyle");
  const heroFriendView = document.getElementById("heroFriendView");
  const heroMeltdown = document.getElementById("heroMeltdown");
  const musicLabel = document.getElementById("musicLabel");
  const heroQuote = document.getElementById("heroQuote");
  const shareTitle = document.getElementById("shareTitle");
  const shareHint = document.getElementById("shareHint");

  const SITE_URL = "https://yaokx520.github.io/HOMM3/";
  const quoteLibrary = {
    general: [
      "叉出去。",
      "接着奏乐，接着舞。",
      "来人，换大盏。",
      "你恨不得劈自己一刀啊。",
      "龙可是帝王之征啊，恭喜爹可以撑地了。",
      "我二弟天下无敌。",
      "我从未见过有如此厚颜无耻之人。",
      "大丈夫生于天地间，岂能郁郁久居人下。",
      "俺也一样。",
      "良机稍纵即逝，不可怠慢。",
    ],
    byMusic: {
      storm: [
        "{name}这路数，接着奏乐接着舞，舞着舞着就一道雷劈下来了。",
        "来人，给{name}换大盏，今天这电表肯定要转飞。",
      ],
      ember: [
        "叉出去，别让{name}再点火了，再点地图都熟了。",
        "{name}这火力还真不是节目效果，是奔着把桌子烤化去的。",
      ],
      shadow: [
        "{name}这人还是个忠厚人呀，只不过忠厚得有点阴间。",
        "来人，换大盏，今晚得听{name}讲一宿黑暗兵法。",
        "没了耿健将，我要这地下城又有何用啊。",
      ],
      war: [
        "我二弟天下无敌，而{name}负责把这个无敌落到实处。",
        "叉出去，谁把{name}放正面了，这不是欺负人吗。",
      ],
      bastion: [
        "{name}这xx还是个忠厚人呀，忠厚到你打半天都不掉血。",
        "接着奏乐接着舞，反正对面迟早会被{name}磨到不会跳。",
      ],
      tide: [
        "{name}就是个 wanna free，嘴上吹海风，手上全是脏活。",
        "来人，换大盏，今晚这潮汐局得配点大杯的才压得住。",
      ],
      spark: [
        "{name}这人最会一边数钱一边放法，真是接着奏乐接着舞。",
        "叉出去，别让{name}再算账了，再算连路边箱子都要入表。",
      ],
    },
    byHero: {
      H045: [
        "索姆拉一出手，那真是接着奏乐接着舞，舞台和对面一起没了。",
        "来人，换大盏，今天给索姆拉上个能导电的杯。",
      ],
      H049: [
        "瑞斯卡不是火爹附体，瑞斯卡就是火爹本人。",
        "叉出去，别让瑞斯卡再摸火球了，城墙要保不住了。",
      ],
      H102: [
        "我二弟天下无敌，肯洛·哈格看完都得点头说这话没毛病。",
        "谁说肯洛·哈格只会硬冲？这叫把道理用拳头讲清楚。",
      ],
      H023: [
        "凯琳就是个 wanna free，主打一个人还没看清她就跑出地图边了。",
      ],
      H126: [
        "安洁儿这人还是个忠厚人呀，就是忠厚里掺了点海盐和毒。",
      ],
      H127: [
        "蒂娃不窝囊，蒂娃只是等风，风一到她就来收人。",
      ],
      H032: [
        "我乃塔楼上将军，匹克杰姆是也。",
        "我乃塔楼上将匹克杰姆，可温酒斩暴龙。",
      ],
      H093: [
        "你让牛将军带五百迎敌，岂不是有去无回啊。",
        "没了耿健将，我要这地下城又有何用啊。",
      ],
    },
  };

  function shuffle(list) {
    const copy = [...list];
    for (let i = copy.length - 1; i > 0; i -= 1) {
      const j = Math.floor(Math.random() * (i + 1));
      [copy[i], copy[j]] = [copy[j], copy[i]];
    }
    return copy;
  }

  function generateAssignmentSequence() {
    const totalSlots = fullQuestionSlots();
    const rounds = [];
    const fullRounds = Math.floor(totalSlots / heroIds.length);
    const remainder = totalSlots % heroIds.length;
    for (let round = 0; round < fullRounds; round += 1) {
      const shift = (round * 5) % heroIds.length;
      const rotated = heroIds.slice(shift).concat(heroIds.slice(0, shift));
      rounds.push(round % 2 === 0 ? rotated : [...rotated].reverse());
    }
    const tailShift = (fullRounds * 3) % heroIds.length;
    const tail = heroIds.slice(tailShift).concat(heroIds.slice(0, tailShift)).slice(0, remainder);
    return rounds.flat().concat(tail);
  }

  function fullQuestionSlots() {
    return data.questions.length * 4;
  }

  function attachHeroAssignments(questions) {
    const assignments = generateAssignmentSequence();
    return questions.map((question, questionIndex) => ({
      ...question,
      options: question.options.map((option, optionIndex) => ({
        ...option,
        heroId: assignments[questionIndex * 4 + optionIndex],
      })),
    }));
  }

  const fullQuestionSet = attachHeroAssignments(data.questions);
  const branchQuestionSet = fullQuestionSet.filter((question) =>
    question.options.some((option) => Array.isArray(option.followUps) && option.followUps.length)
  );
  const plainQuestionSet = fullQuestionSet.filter((question) => !branchQuestionSet.includes(question));

  function buildQuiz() {
    clearSharedResultUrl();
    const guaranteedBranch = shuffle(branchQuestionSet).slice(
      0,
      Math.min(BRANCH_BASE_COUNT, branchQuestionSet.length)
    );
    const remainingPool = shuffle(
      fullQuestionSet.filter((question) => !guaranteedBranch.includes(question))
    ).slice(0, BASE_QUESTION_COUNT - guaranteedBranch.length);
    state.selectedQuestions = shuffle([...guaranteedBranch, ...remainingPool]);
    state.currentIndex = 0;
    state.answers = [];
    state.injectedFollowUps = new Set();
    pauseAudio();
    introPanel.classList.add("hidden");
    resultPanel.classList.add("hidden");
    quizPanel.classList.remove("hidden");
    renderQuestion();
  }

  function renderQuestion() {
    const question = state.selectedQuestions[state.currentIndex];
    const progress = ((state.currentIndex + 1) / MAX_QUESTION_COUNT) * 100;
    questionTag.textContent = `第 ${state.currentIndex + 1} 题 / 当前已展开 ${state.selectedQuestions.length} 题`;
    questionCategory.textContent = question.category;
    questionTitle.textContent = question.title;
    progressFill.style.width = `${progress}%`;
    optionsContainer.innerHTML = "";

    question.options.forEach((option) => {
      const button = document.createElement("button");
      button.className = "option-button";
      button.innerHTML = `<strong>${option.label}</strong><span>${option.detail}</span>`;
      button.addEventListener("click", () => handleAnswer(option));
      optionsContainer.appendChild(button);
    });
  }

  function handleAnswer(option) {
    state.answers.push(option);
    appendFollowUpQuestions(option.followUps || []);
    state.currentIndex += 1;
    if (state.currentIndex >= state.selectedQuestions.length) {
      showResult();
      return;
    }
    renderQuestion();
  }

  function appendFollowUpQuestions(followUpIds) {
    for (const followUpId of followUpIds) {
      if (state.selectedQuestions.length >= MAX_QUESTION_COUNT) break;
      if (state.injectedFollowUps.has(followUpId)) continue;
      const followUp = followUpQuestionById[followUpId];
      if (!followUp) continue;
      state.injectedFollowUps.add(followUpId);
      state.selectedQuestions.push(followUp);
    }
  }

  function computeResult() {
    const heroScores = Object.fromEntries(heroIds.map((id) => [id, 0]));
    const axisTotals = { rush: 0, econ: 0, control: 0, chaos: 0, honor: 0, weird: 0 };

    state.answers.forEach((answer, index) => {
      heroScores[answer.heroId] += 5;
      Object.entries(answer.axes).forEach(([axis, value]) => {
        axisTotals[axis] += value;
      });
      heroScores[heroIds[(heroIds.indexOf(answer.heroId) + index + 3) % heroIds.length]] += 0.35;
    });

    const scoredHeroes = data.heroes.map((hero) => {
      const affinity = Object.entries(hero.axisProfile).reduce(
        (sum, [axis, value]) => sum + axisTotals[axis] * value,
        0
      );
      const jitterBase = `${hero.id}-${state.answers.map((answer) => answer.label[0]).join("")}`;
      const jitter =
        [...jitterBase].reduce((sum, char) => sum + char.charCodeAt(0), 0) % 17;
      const score = heroScores[hero.id] * 100 + affinity * 3 + jitter;
      return { hero, score };
    });

    scoredHeroes.sort((a, b) => b.score - a.score);
    return {
      winner: scoredHeroes[0].hero,
      scoreboard: scoredHeroes,
      axisTotals,
    };
  }

  function buildMoodLine(hero) {
    if (hero.music === "storm") return "结果人格：电光火石型";
    if (hero.music === "ember") return "结果人格：点火开冲型";
    if (hero.music === "shadow") return "结果人格：阴间策动型";
    if (hero.music === "war") return "结果人格：正面碾压型";
    if (hero.music === "bastion") return "结果人格：稳健壁垒型";
    if (hero.music === "tide") return "结果人格：潮汐控场型";
    return "结果人格：资源起飞型";
  }

  function uniqueQuotes(quotes) {
    return [...new Set(quotes.filter(Boolean))];
  }

  function pickQuote(hero) {
    const heroQuotes = quoteLibrary.byHero[hero.id] || [];
    const musicQuotes = quoteLibrary.byMusic[hero.music] || [];
    const merged = uniqueQuotes([...heroQuotes, ...musicQuotes, hero.quote, ...quoteLibrary.general]);
    const seedSource = `${hero.id}-${hero.name}-${state.answers.map((answer) => answer.label).join("|")}`;
    const seed = [...seedSource].reduce((sum, char) => sum + char.charCodeAt(0), 0);
    const rawQuote = merged[seed % merged.length];
    return rawQuote.replaceAll("{name}", hero.name).replace("xx", hero.name);
  }

  async function tryPlayAudio() {
    try {
      await audio.play();
      state.audioPlaying = true;
      musicToggle.textContent = "暂停音乐";
    } catch (error) {
      state.audioPlaying = false;
      musicToggle.textContent = "点我播放";
    }
  }

  function pauseAudio() {
    audio.pause();
    audio.currentTime = 0;
    state.audioPlaying = false;
    musicToggle.textContent = "播放音乐";
  }

  function renderResult(result) {
    const hero = result.winner;
    const music = data.musicThemes[hero.music];
    resultMood.textContent = buildMoodLine(hero);
    heroImage.src = hero.image;
    heroImage.alt = `${hero.name} 立绘`;
    heroFaction.textContent = `${hero.faction} | 英文名 ${hero.english}`;
    heroName.textContent = hero.name;
    heroTitle.textContent = hero.title;
    heroSummary.textContent = hero.summary;
    heroBattleStyle.textContent = hero.battleStyle;
    heroFriendView.textContent = hero.friendView;
    heroMeltdown.textContent = hero.meltdown;
    musicLabel.textContent = music.name;
    heroQuote.textContent = `总结金句：${pickQuote(hero)}`;
    shareTitle.textContent = `分享你的 ${hero.name} 结果`;
    shareHint.textContent = "链接会直达当前英雄结果页，朋友点开就能看到同款判词。";
    heroTags.innerHTML = hero.tags.map((tag) => `<span>${tag}</span>`).join("");
    audio.src = music.file;
    updateSharedResultUrl(hero.id);
    tryPlayAudio();
  }

  function showResult() {
    const result = computeResult();
    quizPanel.classList.add("hidden");
    resultPanel.classList.remove("hidden");
    renderResult(result);
  }

  function toggleAudio() {
    if (!audio.src) return;
    if (state.audioPlaying) {
      pauseAudio();
      return;
    }
    tryPlayAudio();
  }

  function buildShareUrl(heroId) {
    const current = window.location.href.startsWith("file:")
      ? SITE_URL
      : `${window.location.origin}${window.location.pathname}`;
    const url = new URL(current);
    url.searchParams.set("hero", heroId);
    return url.toString();
  }

  function updateSharedResultUrl(heroId) {
    const url = new URL(window.location.href);
    url.searchParams.set("hero", heroId);
    window.history.replaceState({}, "", url.toString());
  }

  function clearSharedResultUrl() {
    const url = new URL(window.location.href);
    url.searchParams.delete("hero");
    window.history.replaceState({}, "", url.toString());
  }

  function renderSharedHero(hero) {
    introPanel.classList.add("hidden");
    quizPanel.classList.add("hidden");
    resultPanel.classList.remove("hidden");
    renderResult({ winner: hero });
  }

  async function shareCurrentResult() {
    const heroId = new URL(window.location.href).searchParams.get("hero");
    if (!heroId || !heroById[heroId]) return;
    const hero = heroById[heroId];
    const url = buildShareUrl(heroId);
    const payload = {
      title: `${hero.name} | 英雄无敌3趣味人格测试`,
      text: `我测出来是 ${hero.name}：${hero.title}`,
      url,
    };
    if (navigator.share) {
      try {
        await navigator.share(payload);
        nativeShareButton.textContent = "已调起分享";
        return;
      } catch (error) {
        nativeShareButton.textContent = "系统分享";
      }
    }
    await copyCurrentResultLink();
  }

  async function copyCurrentResultLink() {
    const heroId = new URL(window.location.href).searchParams.get("hero");
    if (!heroId || !heroById[heroId]) return;
    const hero = heroById[heroId];
    const url = buildShareUrl(heroId);
    try {
      await navigator.clipboard.writeText(url);
      copyShareButton.textContent = "链接已复制";
      shareHint.textContent = `已复制 ${hero.name} 的分享链接，直接发群就行。`;
    } catch (error) {
      shareHint.textContent = `复制失败了，但你仍可以手动分享：${url}`;
    }
  }

  function initFromUrl() {
    const heroId = new URL(window.location.href).searchParams.get("hero");
    if (!heroId || !heroById[heroId]) return;
    renderSharedHero(heroById[heroId]);
  }

  startButton.addEventListener("click", buildQuiz);
  restartButton.addEventListener("click", buildQuiz);
  musicToggle.addEventListener("click", toggleAudio);
  nativeShareButton.addEventListener("click", shareCurrentResult);
  copyShareButton.addEventListener("click", copyCurrentResultLink);
  audio.addEventListener("ended", () => {
    state.audioPlaying = false;
    musicToggle.textContent = "重新播放";
  });

  initFromUrl();
})();
