// Game Data
const cases = [
  { name: "دنچر کامل", points: 2, steps: [
    { question: "اولین مرحله در ساخت دنچر کامل چیست؟", options: ["قالب‌گیری اولیه", "ثبت بایت", "تحویل پروتز", "چیدمان دندان"], answer: "قالب‌گیری اولیه" },
    { question: "در کدام مرحله تنظیم موقعیت دندان‌ها انجام می‌شود؟", options: ["چیدمان دندان", "تحویل پروتز", "ثبت بایت", "قالب‌گیری دقیق"], answer: "چیدمان دندان" },
    { question: "هدف ثبت بایت چیست؟", options: ["اصلاح اکلوژن", "تحویل دنچر", "ساخت روکش", "افزایش زیبایی"], answer: "اصلاح اکلوژن" }
  ] },

  { name: "اوردنچر", points: 3, steps: [
    { question: "مزیت اصلی اوردنچر نسبت به دنچر معمولی چیست؟", options: ["ثبات بیشتر", "زیبایی بیشتر", "کاهش هزینه", "عدم نیاز به قالب‌گیری"], answer: "ثبات بیشتر" },
    { question: "در ساخت اوردنچر، طراحی کدام بخش اهمیت بیشتری دارد؟", options: ["اتصال پروتز", "چیدمان دندان", "ثبت بایت", "تحویل پروتز"], answer: "اتصال پروتز" },
    { question: "چرا تحویل اوردنچر نیاز به تنظیم دقیق دارد؟", options: ["برای جلوگیری از فشار نامناسب", "برای افزایش زیبایی", "برای حذف قالب‌گیری", "برای کاهش هزینه"], answer: "برای جلوگیری از فشار نامناسب" }
  ] },

  { name: "دنچر بدون سقف", points: 3, steps: [
    { question: "چرا بعضی بیماران دنچر بدون سقف را ترجیح می‌دهند؟", options: ["راحتی بیشتر", "افزایش ضخامت", "زیبایی کمتر", "کاهش هزینه"], answer: "راحتی بیشتر" },
    { question: "چه عاملی در طراحی دنچر بدون سقف اهمیت دارد؟", options: ["جایگزینی کامی", "ثبت بایت", "فیشینگ دقیق", "قالب‌گیری سریع"], answer: "جایگزینی کامی" },
    { question: "تحویل دنچر بدون سقف چگونه انجام می‌شود؟", options: ["با تست و تنظیم نهایی", "با قالب‌گیری دیجیتال", "از طریق ثبت بایت", "با چیدمان واکس"], answer: "با تست و تنظیم نهایی" }
  ] },

  { name: "روکش PFM", points: 3, steps: [
    { question: "PFM مخفف چیست؟", options: ["پرسلن فیوزد تو متال", "پلیمر فیشینگ مولد", "پروتز فرز متریک", "پروتز فیکس متال"], answer: "پرسلن فیوزد تو متال" },
    { question: "چرا لایه چینی در PFM مهم است؟", options: ["افزایش زیبایی", "افزایش ضخامت", "حذف درمان اندو", "بهبود مقاومت شیمیایی"], answer: "افزایش زیبایی" },
    { question: "تفاوت PFM با روکش زیرکونیا چیست؟", options: ["لایه فلزی زیرین دارد", "استحکام کمتر", "زیبایی کمتر", "عدم نیاز به آماده‌سازی دندان"], answer: "لایه فلزی زیرین دارد" }
  ] },

  { name: "پروتز کامل روی ایمپلنت", points: 4, steps: [
    { question: "اولین مرحله در ساخت پروتز ایمپلنت چیست؟", options: ["کاشت ایمپلنت", "قالب‌گیری دقیق", "ثبت بایت", "تحویل پروتز"], answer: "کاشت ایمپلنت" },
    { question: "چرا طراحی اتصال ایمپلنت مهم است؟", options: ["برای جلوگیری از فشار نامناسب", "افزایش زیبایی", "حذف درمان اندو", "بهبود چیدمان دندان"], answer: "برای جلوگیری از فشار نامناسب" },
    { question: "تحویل پروتز ایمپلنت چگونه انجام می‌شود؟", options: ["با تست و تنظیم نهایی", "فقط از طریق قالب‌گیری", "چیدمان در واکس", "ساخت روکش فوری"], answer: "با تست و تنظیم نهایی" }
  ] }
];
cases.push(
  { name: "روکش زیرکونیا", points: 3, steps: [
    { question: "چرا روکش زیرکونیا نسبت به PFM محبوب‌تر است؟", options: ["استحکام بالاتر", "زیبایی کمتر", "عدم نیاز به آماده‌سازی دندان", "کاهش هزینه"], answer: "استحکام بالاتر" },
    { question: "مرحله‌ای که قبل از ساخت روکش زیرکونیا انجام می‌شود چیست؟", options: ["طراحی دیجیتال", "تحویل پروتز", "ثبت بایت", "چیدمان دندان"], answer: "طراحی دیجیتال" },
    { question: "چه چیزی باعث مقاومت بالا در زیرکونیا می‌شود؟", options: ["ترکیب سرامیک و اکسید زیرکونیا", "لایه فلزی زیرین", "عدم نیاز به درمان اندو", "نرمی مواد"], answer: "ترکیب سرامیک و اکسید زیرکونیا" }
  ] },

  { name: "پروتز موقت", points: 2, steps: [
    { question: "چرا بعضی بیماران نیاز به پروتز موقت دارند؟", options: ["برای تست قالب و تنظیم", "زیبایی بیشتر", "کاهش هزینه", "تحویل سریع"], answer: "برای تست قالب و تنظیم" },
    { question: "کدام مرحله برای ساخت پروتز موقت ضروری است؟", options: ["قالب‌گیری سریع", "چیدمان دندان", "ثبت بایت", "تحویل فوری"], answer: "قالب‌گیری سریع" },
    { question: "تحویل پروتز موقت چگونه انجام می‌شود؟", options: ["با تنظیم نهایی", "ساخت فوری", "چیدمان در واکس", "از طریق ثبت بایت"], answer: "با تنظیم نهایی" }
  ] },

  { name: "اسپیلنت دندانی", points: 3, steps: [
    { question: "کاربرد اصلی اسپیلنت چیست؟", options: ["ثابت نگه داشتن دندان‌های لق", "افزایش زیبایی", "کمک به ثبت بایت", "کاهش ضخامت پروتز"], answer: "ثابت نگه داشتن دندان‌های لق" },
    { question: "چه زمانی بیمار نیاز به اسپیلنت دارد؟", options: ["در موارد دندان‌های لق و مشکلات پریودنتال", "برای درمان اندو", "زمان ثبت بایت", "بعد از تحویل پروتز"], answer: "در موارد دندان‌های لق و مشکلات پریودنتال" },
    { question: "چرا طراحی اسپیلنت مهم است؟", options: ["برای کاهش فشار روی دندان‌ها", "بهبود رنگ دندان", "افزایش ضخامت پروتز", "اصلاح چیدمان در واکس"], answer: "برای کاهش فشار روی دندان‌ها" }
  ] },

  { name: "فیشینگ پروتز", points: 2, steps: [
    { question: "فیشینگ پروتز چیست؟", options: ["تنظیم نهایی پروتز در دهان", "چیدمان دندان", "ثبت بایت", "آماده‌سازی پروتز"], answer: "تنظیم نهایی پروتز در دهان" },
    { question: "چرا فیشینگ پروتز قبل از تحویل مهم است؟", options: ["برای تست تناسب و اصلاح فشار", "برای افزایش ضخامت پروتز", "حذف مراحل قالب‌گیری", "زیبایی بیشتر"], answer: "برای تست تناسب و اصلاح فشار" },
    { question: "چه چیزی در فیشینگ پروتز بررسی می‌شود؟", options: ["هماهنگی، اکلوژن و استحکام", "تنها زیبایی", "فقط ابعاد دندان", "تنظیم ضخامت پروتز"], answer: "هماهنگی، اکلوژن و استحکام" }
  ] },

  { name: "پروتز فک پایین", points: 3, steps: [
    { question: "چرا پروتز فک پایین چالش‌برانگیزتر است؟", options: ["حرکت زبان و فشار بالا", "زیبایی کمتر", "کاهش ضخامت پروتز", "تحویل دشوارتر"], answer: "حرکت زبان و فشار بالا" },
    { question: "در طراحی پروتز فک پایین، چه چیزی اهمیت بیشتری دارد؟", options: ["ثبات و تناسب با استخوان فک", "ثبت بایت", "چیدمان دندان در واکس", "تنها زیبایی"], answer: "ثبات و تناسب با استخوان فک" },
    { question: "تحویل پروتز فک پایین چگونه انجام می‌شود؟", options: ["با تنظیم دقیق و تست عملکردی", "ثبت بایت سریع", "تنظیم واکس", "آزمایش ضخامت پروتز"], answer: "با تنظیم دقیق و تست عملکردی" }
  ] }
);


// متغیرهای بازی
let score = 0;
let remainingCases = shuffleArray([...cases]); // ترتیب کیس‌ها تصادفی
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
  remainingCases = shuffleArray([...cases]); // کیس‌ها را تصادفی کنیم
  currentCaseIndex = 0;
  currentStepIndex = 0;

  updateScore();
  nextStep();
}

// نمایش مرحله‌ی جدید
function nextStep() {
  if (currentCaseIndex >= remainingCases.length) {
    gameOver();
    return;
  }

  const currentCase = remainingCases[currentCaseIndex];

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

// بررسی پاسخ
function checkAnswer(selectedOption) {
  const currentCase = remainingCases[currentCaseIndex];
  const currentStep = currentCase.steps[currentStepIndex];

  if (selectedOption === currentStep.answer) {
    score += 10;
    updateScore();
    currentStepIndex++;
    nextStep();
  } else {
    gameOver();
  }
}

// جابه‌جایی به کیس بعدی
function nextCase() {
  currentCaseIndex++;
  currentStepIndex = 0;

  if (currentCaseIndex < remainingCases.length) {
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
  finalScoreDisplay.textContent = score;
}

// ریست کردن بازی
function resetGame() {
  gameOverScreen.classList.add("hidden");
  startButton.classList.remove("hidden");
  startGame();
}

// بروزرسانی امتیاز
function updateScore() {
  scoreDisplay.textContent = `Score: ${score}`;
}

// تابع برای تصادفی کردن آرایه
function shuffleArray(array) {
  return array.sort(() => Math.random() - 0.5);
}


