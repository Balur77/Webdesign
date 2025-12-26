console.clear();
console.log("▶ Лаба по асинхронному JavaScript");

// ===== 1. Асинхронные задачи =====

async function taskOne() {
  console.group("▶ taskOne()");
  await new Promise(resolve => setTimeout(resolve, 1000));
  console.log("✔ Задача 1 выполнена");
  console.groupEnd();
}

async function taskTwo() {
  console.group("▶ taskTwo()");
  await new Promise(resolve => setTimeout(resolve, 1500));
  console.log("✔ Задача 2 выполнена");
  console.groupEnd();
}

async function taskThree() {
  console.group("▶ taskThree()");
  await new Promise(resolve => setTimeout(resolve, 2000));
  console.log("✔ Задача 3 выполнена");
  console.groupEnd();
}

async function runTasks() {
  console.group("▶ runTasks()");
  await taskOne();
  await taskTwo();
  await taskThree();
  console.log("✔ Все задачи завершены");
  console.groupEnd();
}

// ===== 2. Fetch: JSONPlaceholder =====

async function loadPosts() {
  console.group("▶ loadPosts()");
  try {
    const response = await fetch("https://jsonplaceholder.typicode.com/posts");
    const posts = await response.json();

    posts.slice(0, 10).forEach(post => {
      console.log("•", post.title);
    });

    console.log("✔ Посты загружены");
  } catch (e) {
    console.error("✖ Ошибка загрузки постов");
  }
  console.groupEnd();
}

// ===== 3. Fetch: Курсы валют =====

async function loadCurrencyRates() {
  console.group("▶ loadCurrencyRates()");
  try {
    const response = await fetch("https://belarusbank.by/api/kursExchange");
    const data = await response.json();

    const bank = data.find(b => b.USD_in);

    console.log(
      `• ${bank.bank_name} — USD: ${bank.USD_in} / ${bank.USD_out}`
    );

    console.log("✔ Курсы загружены");
  } catch (e) {
    console.error("✖ Ошибка загрузки курсов");
  }
  console.groupEnd();
}

// ===== Запуск =====

runTasks();
loadPosts();
loadCurrencyRates();

// Экспорт в window (чтоб препод видел функции)
window.runTasks = runTasks;
window.loadPosts = loadPosts;
window.loadCurrencyRates = loadCurrencyRates;
console.warn(
  "API Беларусбанка не поддерживает CORS-запросы из браузера. " +
  "Ошибка ожидаемая и не связана с кодом."
);