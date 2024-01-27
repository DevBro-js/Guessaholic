"use strict";
const userId = document.querySelector(".user-id");
const select = document.getElementById("quizType");
const startBtn = document.querySelector(".start__quiz");
const submitBtn = document.querySelector(".btn--submit");
const ongoingQuizBtn = document.querySelectorAll(".ongoing__quiz-btns");
const nextBtn = document.querySelector(".btn__next");
const correctionBtn = document.querySelector(".btn--correction");
const newQuizBtn = document.querySelector(".btn--new-quiz");
const resultBtns = document.querySelectorAll(".btn-results");
const message = document.querySelector("h1");
const message2 = document.querySelector(".secondary-heading");
const quizContentContainers = document.querySelectorAll(".quiz__content");
const tabBtn = document.querySelectorAll(".quiz-btn");
const quizOptionsContainer = document.querySelector(".quiz__questions");
const quizOptions = document.querySelectorAll(".questions");
const quizCounter = document.querySelector(".quiz__number");
const timerLabel = document.querySelector(".timer__value");
const resultContainers = document.querySelectorAll(".results");
const ongoingResultContainer = document.querySelector(".ongoing__quiz");
const quizOptionContainer = document.querySelector(
  ".quiz__questions-container"
);

const quizCorrectionContainer = document.querySelector(".quiz__results");
let username,
  selectedQuizType,
  currentQuizType,
  currentQuiz,
  currentQuizQuestion,
  currentQuizOption,
  currentQuizTypeLength,
  quizTimer,
  createEl,
  createEl2,
  html,
  currentRandomNumber,
  currentQuestion,
  clickedButton,
  clickedButton_02,
  t,
  newHtml,
  createEl3;

const haveIt = [];
const nodeList = [];
const selectedAnswerArray = [];
const selectedQuestion = [];
const f = [];
const h = [];

const globalArray = { capital, flag, governor, slogan };

const app = function () {
  let quizNumber = 1;
  nextBtn.classList.add("hidden");
  quizCounter.textContent = quizNumber;
  quizOptionContainer.innerHTML = "";
  quizCorrectionContainer.innerHTML = "";
  timerLabel.textContent = "";
  userId.focus();

  const generateRandomNumber = function (min, max) {
    //Generate random number
    let random = Math.floor(Math.random() * (max - min + 1) + min);

    //Coerce to number by boxing

    if (!haveIt.includes(random)) {
      haveIt.push(random);
      return random;
    } else {
      if (haveIt.length < max) {
        //Recursively generate number
        return generateRandomNumber(min, max);
      } else {
        return false;
      }
    }
  };

  const updateResultUI = function () {
    nodeList.forEach((list) => {
      if (list.classList.contains("selected")) {
        tempAnswerHolder = list.textContent;
        selectedQuestion.push({
          question: tempQuesHolder,
          answer: tempAnswerHolder,
        });
      }
    });

    createEl3 = document.createElement("div");

    selectedQuestion.forEach((selection) => {
      t = currentQuiz.find((quiz) => {
        return (
          quiz.question === selection.question &&
          quiz.answer !== selection.answer
        );
      });

      h.push(t);
    });

    h.forEach((h) => {
      if (!h) return;

      f.push(h);
    });

    if (f.length !== 0) {
      document.querySelector(".user-score").textContent = String(
        quizNumber - f.length
      ).padStart(2, 0);

      f.forEach((f) => {
        newHtml = `
                <div class="question-1__answer">
                    <h3>Question: ${f.question}</h3>
                    <p>Answer: ${f.answer}</p>
                </div>
              `;

        quizCorrectionContainer.insertAdjacentHTML("afterbegin", newHtml);
      });
    } else {
      newHtml = `
            <div class="question-1__answer">
                <h3>Keep It Up ${username}</h3>
            </div>
          `;

      document.querySelector(".user-score").textContent = String(
        quizNumber
      ).padStart(2, 0);
      quizCorrectionContainer.insertAdjacentHTML("afterbegin", newHtml);
    }
  };

  const toggleResultTabUI = function () {
    resultBtns.forEach((btn) => {
      btn.addEventListener("click", (e) => {
        const clickedBtn = e.target.dataset.tab;
        resultContainers.forEach((result) => (result.style.display = "none"));
        document.querySelector(`.results-${clickedBtn}`).style.display = "grid";
      });
    });
  };

  const startQuizTimer = function () {
    let time = currentQuizType[1].quizTime;

    const tick = () => {
      const min = String(Math.trunc(time / 60)).padStart(2, 0);
      const sec = String(Math.trunc(time % 60)).padStart(2, 0);

      timerLabel.textContent = `${min}:${sec}`;

      if (time === 0) {
        clearInterval(quizTimer);
        ongoingResultContainer.classList.add("hidden");
        document.querySelector(".quiz__result-tab").classList.remove("hidden");
        document.querySelector(".btn--quiz").classList.add("hidden");
        resultBtns.forEach((btn) => btn.classList.toggle("hidden"));

        submitBtn.classList.add("hidden");
        nextBtn.classList.add("hidden");

        toggleResultTabUI();

        //update result tab

        updateResultUI();
      }

      time--;
    };
    tick();

    quizTimer = setInterval(tick, 1000);
  };

  const updateQuestionUI = function () {
    currentQuizType = globalArray[selectedQuizType];
    currentQuiz = currentQuizType[0];
    currentQuizTypeLength = currentQuizType[0].length;
    currentRandomNumber = generateRandomNumber(0, currentQuizTypeLength - 1);
    currentQuizQuestion = currentQuiz[currentRandomNumber].question;
    currentQuizOption = currentQuiz[currentRandomNumber].option;
    html = `
        <h3 class="quiz__main-question">
          ${currentQuizQuestion}
        </h3>
      `;

    quizOptionContainer.insertAdjacentHTML("afterbegin", html);

    createEl = document.createElement("div");

    createEl.classList.add("quiz__questions");

    quizOptionContainer.appendChild(createEl);

    currentQuizOption.forEach((opt) => {
      createEl2 = document.createElement("p");
      createEl2.classList.add("questions");
      createEl2.textContent = `${opt}`;
      createEl.appendChild(createEl2);

      nodeList.push(createEl2);
    });

    const quizOptionUI = function () {
      createEl.addEventListener("click", (e) => {
        e.preventDefault();
        const clicked = e.target.closest(".questions");
        if (!clicked) return;

        nodeList.forEach((option) => option.classList.remove("selected"));
        clicked.classList.add("selected");
      });
    };

    quizOptionUI();
  };

  const updateUI = (e, text) => {
    clickedButton = e.target.dataset.value;

    //welcome message
    message.textContent = text;

    //tab contents
    quizContentContainers.forEach((cont) => cont.classList.add("hidden"));
    document
      .querySelector(`.quiz-content-${clickedButton}`)
      .classList.toggle("hidden");

    //tab button
    tabBtn.forEach((tab) => tab.classList.add("hidden"));
    document.querySelector(`.tab-${clickedButton}`).classList.toggle("hidden");
  };

  let tempQuesHolder, tempAnswerHolder;

  startBtn.addEventListener("click", (e) => {
    e.preventDefault();

    if (userId.value !== "" && select.value !== "selected") {
      username = userId.value;
      selectedQuizType = select.value;

      updateUI(e, `Good luck ${username}`);

      updateQuestionUI();

      nodeList.forEach((btn) => {
        btn.addEventListener("click", (e) => {
          nextBtn.classList.remove("hidden");
        });
      });

      tempQuesHolder = currentQuizQuestion;

      startQuizTimer();
    } else {
      alert("Hey champ, you need to fill all details to continue.");
    }
  });

  nextBtn.addEventListener("click", (e) => {
    e.preventDefault();

    quizOptionContainer.innerHTML = "";

    quizNumber++;
    quizCounter.textContent = quizNumber;
    updateQuestionUI();

    nodeList.forEach((list) => {
      if (list.classList.contains("selected")) {
        tempAnswerHolder = list.textContent;
        selectedQuestion.push({
          question: tempQuesHolder,
          answer: tempAnswerHolder,
        });
      }
    });

    tempQuesHolder = currentQuizQuestion;

    nodeList.forEach((option) => option.classList.remove("selected"));
    nextBtn.classList.add("hidden");

    nodeList.forEach((btn) => {
      btn.addEventListener("click", (e) => {
        nextBtn.classList.remove("hidden");
      });
    });

    if (quizNumber === 10) {
      submitBtn.classList.remove("hidden");
      nodeList.forEach((btn) => {
        btn.addEventListener("click", (e) => {
          nextBtn.classList.add("hidden");
        });
      });
    }
  });

  submitBtn.addEventListener("click", (e) => {
    e.preventDefault();

    updateResultUI();
    updateUI(e, `You are doing great ${username}`);

    correctionBtn.classList.toggle("hidden");

    clearInterval(quizTimer);

    toggleResultTabUI();
  });

  newQuizBtn.addEventListener("click", (e) => {
    e.preventDefault();

    select.value = "selected";
    quizOptionContainer.innerHTML = "";
    quizCorrectionContainer.innerHTML = "";
    quizNumber = 1;
    quizCounter.textContent = quizNumber;
    timerLabel.textContent = "";
    message2.textContent = `Lets go ${username}`;
    userId.classList.add("hidden");
    correctionBtn.classList.toggle("hidden");
    updateUI(e, "Welcome to Guessaholic");

    submitBtn.classList.add("hidden");
    nextBtn.classList.add("hidden");

    haveIt.length = 0;
    nodeList.length = 0;
    f.length = 0;
    h.length = 0;

    selectedQuestion.length = 0;
  });
};

app();
