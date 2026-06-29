(() => {
  const QUESTION_COUNT = 12;
  const data = window.QUIZ_DATA;
  const heroById = Object.fromEntries(data.heroes.map((hero) => [hero.id, hero]));
  const heroIds = data.heroes.map((hero) => hero.id);

  const state = {
    selectedQuestions: [],
    currentIndex: 0,
    answers: [],
    audioPlaying: false,
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

  function shuffle(list) {
    const copy = [...list];
    for (let i = copy.length - 1; i > 0; i -= 1) {
      const j = Math.floor(Math.random() * (i + 1));
      [copy[i], copy[j]] = [copy[j], copy[i]];
    }
    return copy;
  }

  function generateAssignmentSequence() {
    const rounds = [];
    for (let round = 0; round < 8; round += 1) {
      const shift = (round * 5) % heroIds.length;
      const rotated = heroIds.slice(shift).concat(heroIds.slice(0, shift));
      rounds.push(round % 2 === 0 ? rotated : [...rotated].reverse());
    }
    return rounds.flat();
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

  function buildQuiz() {
    clearSharedResultUrl();
    state.selectedQuestions = shuffle(fullQuestionSet).slice(0, QUESTION_COUNT);
    state.currentIndex = 0;
    state.answers = [];
    pauseAudio();
    introPanel.classList.add("hidden");
    resultPanel.classList.add("hidden");
    quizPanel.classList.remove("hidden");
    renderQuestion();
  }

  function renderQuestion() {
    const question = state.selectedQuestions[state.currentIndex];
    const progress = ((state.currentIndex + 1) / QUESTION_COUNT) * 100;
    questionTag.textContent = `第 ${state.currentIndex + 1} 题 / 共 ${QUESTION_COUNT} 题`;
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
    state.currentIndex += 1;
    if (state.currentIndex >= QUESTION_COUNT) {
      showResult();
      return;
    }
    renderQuestion();
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
    heroQuote.textContent = `总结金句：${hero.quote}`;
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
