(() => {
  const QUESTION_COUNT = 16;
  const data = window.SANGUO_QUIZ_DATA;
  const characterById = Object.fromEntries(data.characters.map((item) => [item.id, item]));
  const characterIds = data.characters.map((item) => item.id);

  const state = {
    currentIndex: 0,
    answers: [],
    audioPlaying: false,
  };

  const introPanel = document.getElementById("introPanel");
  const quizPanel = document.getElementById("quizPanel");
  const resultPanel = document.getElementById("resultPanel");
  const startButton = document.getElementById("startButton");
  const restartButton = document.getElementById("restartButton");
  const questionTag = document.getElementById("questionTag");
  const questionCategory = document.getElementById("questionCategory");
  const questionTitle = document.getElementById("questionTitle");
  const optionsContainer = document.getElementById("optionsContainer");
  const progressFill = document.getElementById("progressFill");
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
  const shareTitle = document.getElementById("shareTitle");
  const shareHint = document.getElementById("shareHint");
  const heroQuote = document.getElementById("heroQuote");

  const SITE_URL = "https://yaokx520.github.io/HOMM3/docs/sanguo/";

  function buildQuiz() {
    clearSharedResultUrl();
    state.currentIndex = 0;
    state.answers = [];
    pauseAudio();
    introPanel.classList.add("hidden");
    resultPanel.classList.add("hidden");
    quizPanel.classList.remove("hidden");
    renderQuestion();
  }

  function renderQuestion() {
    const question = data.questions[state.currentIndex];
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
    const axisTotals = { power: 0, loyalty: 0, rage: 0, grace: 0, guile: 0, theater: 0 };
    state.answers.forEach((answer) => {
      Object.entries(answer.axes).forEach(([axis, value]) => {
        axisTotals[axis] += value;
      });
    });

    const scored = data.characters.map((character) => {
      const affinity = Object.entries(character.axes).reduce(
        (sum, [axis, value]) => sum + value * axisTotals[axis],
        0
      );
      const tieBreakerSource = `${character.id}-${state.answers.map((answer) => answer.label).join("|")}`;
      const tieBreaker =
        [...tieBreakerSource].reduce((sum, char) => sum + char.charCodeAt(0), 0) % 29;
      return { character, score: affinity * 10 + tieBreaker };
    });

    scored.sort((a, b) => b.score - a.score);
    return scored[0].character;
  }

  function buildMood(character) {
    if (character.music === "guanyu") return "结果人物：武烈压场型";
    if (character.music === "xiaoqiao") return "结果人物：风流控场型";
    return "结果人物：乱世执棋型";
  }

  function pickQuote(character) {
    const pool = character.quoteIndexes.map((index) => data.quotePool[index]).filter(Boolean);
    const merged = [...new Set([...pool, ...data.quotePool])];
    const seedSource = `${character.id}-${state.answers.map((answer) => answer.label[0]).join("")}`;
    const seed = [...seedSource].reduce((sum, char) => sum + char.charCodeAt(0), 0);
    return merged[seed % merged.length];
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

  function buildShareUrl(characterId) {
    const current = window.location.href.startsWith("file:")
      ? SITE_URL
      : `${window.location.origin}${window.location.pathname}`;
    const url = new URL(current);
    url.searchParams.set("hero", characterId);
    return url.toString();
  }

  function updateSharedResultUrl(characterId) {
    const url = new URL(window.location.href);
    url.searchParams.set("hero", characterId);
    window.history.replaceState({}, "", url.toString());
  }

  function clearSharedResultUrl() {
    const url = new URL(window.location.href);
    url.searchParams.delete("hero");
    window.history.replaceState({}, "", url.toString());
  }

  function renderResult(character) {
    const music = data.musicThemes[character.music];
    resultMood.textContent = buildMood(character);
    heroImage.src = character.image;
    heroImage.alt = `${character.name} 剧照`;
    heroFaction.textContent = character.faction;
    heroName.textContent = character.name;
    heroTitle.textContent = character.title;
    heroSummary.textContent = character.summary;
    heroBattleStyle.textContent = character.battleStyle;
    heroFriendView.textContent = character.friendView;
    heroMeltdown.textContent = character.meltdown;
    heroTags.innerHTML = character.tags.map((tag) => `<span>${tag}</span>`).join("");
    musicLabel.textContent = music.name;
    shareTitle.textContent = `分享你的 ${character.name} 判词`;
    shareHint.textContent = "链接会直达当前人物结果页，适合单发群聊。";
    heroQuote.textContent = `结语：${pickQuote(character)}`;
    audio.src = music.file;
    updateSharedResultUrl(character.id);
    tryPlayAudio();
  }

  function showResult() {
    const winner = computeResult();
    quizPanel.classList.add("hidden");
    resultPanel.classList.remove("hidden");
    renderResult(winner);
  }

  async function shareCurrentResult() {
    const characterId = new URL(window.location.href).searchParams.get("hero");
    if (!characterId || !characterById[characterId]) return;
    const character = characterById[characterId];
    const url = buildShareUrl(characterId);
    const payload = {
      title: `${character.name} | 新三国人物测试`,
      text: `我测出来是 ${character.name}：${character.title}`,
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
    const characterId = new URL(window.location.href).searchParams.get("hero");
    if (!characterId || !characterById[characterId]) return;
    const character = characterById[characterId];
    const url = buildShareUrl(characterId);
    try {
      await navigator.clipboard.writeText(url);
      copyShareButton.textContent = "链接已复制";
      shareHint.textContent = `已复制 ${character.name} 的分享链接，直接发给朋友就行。`;
    } catch (error) {
      shareHint.textContent = `复制失败了，但你仍可手动分享：${url}`;
    }
  }

  function toggleAudio() {
    if (!audio.src) return;
    if (state.audioPlaying) {
      pauseAudio();
      return;
    }
    tryPlayAudio();
  }

  function renderSharedCharacter(character) {
    introPanel.classList.add("hidden");
    quizPanel.classList.add("hidden");
    resultPanel.classList.remove("hidden");
    renderResult(character);
  }

  function initFromUrl() {
    const characterId = new URL(window.location.href).searchParams.get("hero");
    if (!characterId || !characterById[characterId]) return;
    renderSharedCharacter(characterById[characterId]);
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
