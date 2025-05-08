// اطلاعات بازی
const cases = [
  { name: "دنچر کامل", steps: [
    { question: "مرحله اول دنچر کامل چیست؟", options: ["قالب‌گیری اولیه", "ارزیابی دندان‌های باقی‌مانده", "ثبت بایت", "سمیتیشن"], answer: "قالب‌گیری اولیه" },
    { question: "مرحله دوم دنچر کامل چیست؟", options: ["درمان اندو", "ثبت بایت", "طراحی دیجیتال", "قالب‌گیری دقیق"], answer: "قالب‌گیری دقیق" },
    { question: "مرحله سوم دنچر کامل چیست؟", options: ["ثبت بایت", "چیدمان دندان در واکس", "فیشینگ دنچر", "تحویل پروتز"], answer: "ثبت بایت" },
    { question: "مرحله چهارم دنچر کامل چیست؟", options: ["چیدمان دندان در واکس", "فیشینگ دنچر", "تحویل پروتز"], answer: "چیدمان دندان در واکس" },
    { question: "مرحله پنجم دنچر کامل چیست؟", options: ["فیشینگ دنچر", "تحویل پروتز", "ثبت بایت", "چیدمان دندان در واکس"], answer: "فیشینگ دنچر" },
    { question: "مرحله نهایی دنچر کامل چیست؟", options: ["تحویل پروتز", "درمان اندو", "ثبت بایت", "طراحی دیجیتال"], answer: "تحویل پروتز" }
  ] },

  { name: "اوردنچر", steps: [
    { question: "مرحله اول اوردنچر چیست؟", options: ["ارزیابی دندان‌های باقی‌مانده", "کاشت ایمپلنت", "ثبت بایت", "تحویل پروتز"], answer: "ارزیابی دندان‌های باقی‌مانده" },
    { question: "مرحله دوم اوردنچر چیست؟", options: ["درمان اندو", "ثبت بایت", "طراحی دیجیتال", "قالب‌گیری دقیق"], answer: "درمان اندو" },
    { question: "مرحله سوم اوردنچر چیست؟", options: ["قالب‌گیری اولیه", "چیدمان دندان در واکس", "فیشینگ اوردنچر", "تحویل پروتز"], answer: "قالب‌گیری اولیه" },
    { question: "مرحله چهارم اوردنچر چیست؟", options: ["قالب‌گیری دقیق", "چیدمان دندان در واکس", "فیشینگ اوردنچر", "تحویل پروتز"], answer: "قالب‌گیری دقیق" },
    { question: "مرحله نهایی اوردنچر چیست؟", options: ["تحویل پروتز", "درمان اندو", "ثبت بایت", "طراحی دیجیتال"], answer: "تحویل پروتز" }
  ] },

  { name: "روکش PFM", steps: [
    { question: "مرحله اول روکش PFM چیست؟", options: ["آماده‌سازی دندان", "قالب‌گیری دقیق", "ساخت فریم فلزی", "تحویل روکش"], answer: "آماده‌سازی دندان" },
    { question: "مرحله دوم روکش PFM چیست؟", options: ["قالب‌گیری دقیق", "ساخت فریم فلزی", "چینی‌گذاری روی فلز", "تحویل روکش"], answer: "قالب‌گیری دقیق" },
    { question: "مرحله سوم روکش PFM چیست؟", options: ["ساخت فریم فلزی", "چینی‌گذاری روی فلز", "تست روکش", "تحویل روکش"], answer: "ساخت فریم فلزی" },
    { question: "مرحله چهارم روکش PFM چیست؟", options: ["چینی‌گذاری روی فلز", "تست روکش", "تحویل روکش", "قالب‌گیری دقیق"], answer: "چینی‌گذاری روی فلز" },
    { question: "مرحله نهایی روکش PFM چیست؟", options: ["تحویل روکش", "درمان اندو", "ثبت بایت", "طراحی دیجیتال"], answer: "تحویل روکش" }
  ] },

  { name: "روکش زیرکونیا", steps: [
    { question: "مرحله اول روکش زیرکونیا چیست؟", options: ["آماده‌سازی دندان", "قالب‌گیری دقیق", "طراحی دیجیتال", "تحویل روکش"], answer: "آماده‌سازی دندان" },
    { question: "مرحله دوم روکش زیرکونیا چیست؟", options: ["قالب‌گیری دقیق", "طراحی دیجیتال", "ساخت روکش زیرکونیا", "تحویل روکش"], answer: "قالب‌گیری دقیق" },
    { question: "مرحله سوم روکش زیرکونیا چیست؟", options: ["طراحی دیجیتال", "ساخت روکش زیرکونیا", "تست روکش", "تحویل روکش"], answer: "طراحی دیجیتال" },
    { question: "مرحله چهارم روکش زیرکونیا چیست؟", options: ["ساخت روکش زیرکونیا", "تست روکش", "تحویل روکش", "قالب‌گیری دقیق"], answer: "ساخت روکش زیرکونیا" },
    { question: "مرحله نهایی روکش زیرکونیا چیست؟", options: ["تحویل روکش", "درمان اندو", "ثبت بایت", "طراحی دیجیتال"], answer: "تحویل روکش" }
  ] },

  { name: "پل سه واحدی", steps: [
    { question: "مرحله اول پل سه واحدی چیست؟", options: ["آماده‌سازی دندان‌های پایه", "قالب‌گیری دقیق", "ساخت فریم فلزی", "تحویل پل"], answer: "آماده‌سازی دندان‌های پایه" },
    { question: "مرحله دوم پل سه واحدی چیست؟", options: ["قالب‌گیری دقیق", "ساخت فریم فلزی", "لایه‌بندی پرسلن", "تحویل پل"], answer: "قالب‌گیری دقیق" },
    { question: "مرحله سوم پل سه واحدی چیست؟", options: ["ساخت فریم فلزی", "لایه‌بندی پرسلن", "تست پل دندانی", "تحویل پل"], answer: "ساخت فریم فلزی" },
    { question: "مرحله چهارم پل سه واحدی چیست؟", options: ["لایه‌بندی پرسلن", "تست پل دندانی", "چسباندن نهایی پل", "قالب‌گیری دقیق"], answer: "لایه‌بندی پرسلن" },
    { question: "مرحله نهایی پل سه واحدی چیست؟", options: ["چسباندن نهایی پل", "درمان اندو", "ثبت بایت", "طراحی دیجیتال"], answer: "چسباندن نهایی پل" }
  ] }
];
cases.push(
  { name: "پروتز فوری", steps: [
    { question: "مرحله اول پروتز فوری چیست؟", options: ["قالب‌گیری اولیه قبل از کشیدن دندان", "طراحی پروتز فوری", "ساخت پروتز", "تحویل پروتز"], answer: "قالب‌گیری اولیه قبل از کشیدن دندان" },
    { question: "مرحله دوم پروتز فوری چیست؟", options: ["طراحی پروتز فوری", "ساخت پروتز", "تحویل پروتز", "فیشینگ"], answer: "طراحی پروتز فوری" },
    { question: "مرحله سوم پروتز فوری چیست؟", options: ["ساخت پروتز", "تحویل پروتز", "ثبت بایت", "فیشینگ"], answer: "ساخت پروتز" },
    { question: "مرحله نهایی پروتز فوری چیست؟", options: ["تحویل پروتز", "درمان اندو", "ثبت بایت", "طراحی دیجیتال"], answer: "تحویل پروتز" }
  ] },

  { name: "اسپلینت دندانی", steps: [
    { question: "مرحله اول اسپلینت چیست؟", options: ["قالب‌گیری اولیه", "ساخت اسپلینت تثبیت‌کننده", "تنظیم اسپلینت", "تحویل اسپلینت"], answer: "قالب‌گیری اولیه" },
    { question: "مرحله دوم اسپلینت چیست؟", options: ["ساخت اسپلینت تثبیت‌کننده", "تنظیم اسپلینت", "تحویل اسپلینت", "ثبت بایت"], answer: "ساخت اسپلینت تثبیت‌کننده" },
    { question: "مرحله سوم اسپلینت چیست؟", options: ["تنظیم اسپلینت", "تحویل اسپلینت", "قالب‌گیری دقیق", "چیدمان دندان"], answer: "تنظیم اسپلینت" },
    { question: "مرحله نهایی اسپلینت چیست؟", options: ["تحویل اسپلینت", "درمان اندو", "ثبت بایت", "طراحی دیجیتال"], answer: "تحویل اسپلینت" }
  ] },

  { name: "دنچر بدون سقف", steps: [
    { question: "مرحله اول دنچر بدون سقف چیست؟", options: ["قالب‌گیری دقیق", "طراحی دنچر بدون سقف", "ساخت دنچر", "تحویل پروتز"], answer: "قالب‌گیری دقیق" },
    { question: "مرحله دوم دنچر بدون سقف چیست؟", options: ["طراحی دنچر بدون سقف", "ساخت دنچر", "تحویل پروتز", "فیشینگ"], answer: "طراحی دنچر بدون سقف" },
    { question: "مرحله سوم دنچر بدون سقف چیست؟", options: ["ساخت دنچر", "تحویل پروتز", "ثبت بایت", "فیشینگ"], answer: "ساخت دنچر" },
    { question: "مرحله نهایی دنچر بدون سقف چیست؟", options: ["تحویل پروتز", "درمان اندو", "ثبت بایت", "طراحی دیجیتال"], answer: "تحویل پروتز" }
  ] },

  { name: "دنچر پارسیل فلزی (قالب‌ریزی شده)", steps: [
    { question: "مرحله اول دنچر پارسیل فلزی چیست؟", options: ["قالب‌گیری اولیه", "طراحی فریم فلزی", "ثبت بایت", "تحویل پروتز"], answer: "قالب‌گیری اولیه" },
    { question: "مرحله دوم دنچر پارسیل فلزی چیست؟", options: ["طراحی فریم فلزی", "ثبت بایت", "تحویل پروتز", "فیشینگ دنچر"], answer: "طراحی فریم فلزی" },
    { question: "مرحله سوم دنچر پارسیل فلزی چیست؟", options: ["قالب‌گیری دقیق", "چیدمان دندان روی فریم", "فیشینگ دنچر", "تحویل پروتز"], answer: "قالب‌گیری دقیق" },
    { question: "مرحله چهارم دنچر پارسیل فلزی چیست؟", options: ["چیدمان دندان روی فریم", "فیشینگ دنچر", "تحویل پروتز", "قالب‌گیری دقیق"], answer: "چیدمان دندان روی فریم" },
    { question: "مرحله نهایی دنچر پارسیل فلزی چیست؟", options: ["تحویل پروتز", "درمان اندو", "ثبت بایت", "طراحی دیجیتال"], answer: "تحویل پروتز" }
  ] },

  { name: "پروتز ایمپلنتی کامل", steps: [
    { question: "مرحله اول پروتز ایمپلنتی چیست؟", options: ["کاشت ایمپلنت", "قالب‌گیری دقیق", "ثبت بایت", "تحویل پروتز"], answer: "کاشت ایمپلنت" },
    { question: "مرحله دوم پروتز ایمپلنتی چیست؟", options: ["قالب‌گیری دقیق", "چیدمان دندان روی ایمپلنت", "ثبت بایت", "تحویل پروتز"], answer: "قالب‌گیری دقیق" },
    { question: "مرحله سوم پروتز ایمپلنتی چیست؟", options: ["چیدمان دندان روی ایمپلنت", "فیشینگ پروتز", "ثبت بایت", "تحویل پروتز"], answer: "چیدمان دندان روی ایمپلنت" },
    { question: "مرحله نهایی پروتز ایمپلنتی چیست؟", options: ["تحویل پروتز", "درمان اندو", "ثبت بایت", "طراحی دیجیتال"], answer: "تحویل پروتز" }
  ] }
);


// متغیرهای بازی
let score = 0;
let currentCaseIndex = 0;
let currentStepIndex = 0;

// المان‌های صفحه
const startButton = document.getElementById("start-button");
const restartButton = document.getElementById("restart-button");
const caseDisplay = document.getElementById("case-display");
const optionsContainer = document.getElementById("options");
const scoreDisplay = document.getElementById("score");
const gameOverScreen = document.getElementById("game-over");
const finalScoreDisplay = document.getElementById("final-score");

// رویدادهای دکمه‌ها
startButton.addEventListener("click", startGame);
restartButton.addEventListener("click", resetGame);

// شروع بازی
function startGame() {
  startButton.classList.add("hidden");
  scoreDisplay.classList.remove("hidden");
  caseDisplay.classList.remove("hidden");
  optionsContainer.classList.remove("hidden");

  score = 0;
  currentCaseIndex = 0;
  currentStepIndex = 0;

  updateScore();
  nextStep();
}

// نمایش مرحله‌ی جدید از کیس جاری
function nextStep() {
  if (currentCaseIndex >= cases.length) {
    gameOver();
    return;
  }

  const currentCase = cases[currentCaseIndex];

  if (currentStepIndex >= currentCase.steps.length) {
    nextCase();
    return;
  }

  const currentStep = currentCase.steps[currentStepIndex];

  caseDisplay.textContent = `${currentCase.name}: ${currentStep.question}`;
  optionsContainer.innerHTML = "";

  currentStep.options.forEach(option => {
    const button = document.createElement("button");
    button.textContent = option;
    button.classList.add("btn");
    button.addEventListener("click", () => checkAnswer(option));
    optionsContainer.appendChild(button);
  });
}

// بررسی پاسخ بازیکن
function checkAnswer(selectedOption) {
  const currentCase = cases[currentCaseIndex];
  const currentStep = currentCase.steps[currentStepIndex];

  if (selectedOption === currentStep.answer) {
    score += 10; // ✅ امتیاز اضافه شود
    updateScore();
    currentStepIndex++;

    if (currentStepIndex < currentCase.steps.length) {
      nextStep();
    } else {
      nextCase();
    }
  } else {
    gameOver();
  }
}

// جابه‌جایی به کیس بعدی
function nextCase() {
  currentCaseIndex++;
  currentStepIndex = 0;

  if (currentCaseIndex < cases.length) {
    nextStep();
  } else {
    gameOver();
  }
}

// پایان بازی
function gameOver() {
  caseDisplay.classList.add("hidden");
  optionsContainer.classList.add("hidden");
  gameOverScreen.classList.remove("hidden");
  finalScoreDisplay.textContent = `امتیاز نهایی: ${score}`; // ✅ نمایش امتیاز نهایی
}

// ریست کردن بازی
function resetGame() {
  gameOverScreen.classList.add("hidden");
  startButton.classList.remove("hidden");
  startGame();
}

// بروزرسانی امتیاز بازیکن
function updateScore() {
  scoreDisplay.textContent = `امتیاز: ${score}`;
}


