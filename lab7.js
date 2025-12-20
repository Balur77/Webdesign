console.log('✅ Лаба №7. Вариант 12. Скрипты подключены');

function isInteger(num) {
  return Number.isInteger(num);
}

// ===== СТРОКИ (2) =====
// Преобразование строки в нижний регистр
function toLower(str) {
  return str.toLowerCase();
}

// ===== БУЛЕВЫ (3) =====
// Сравнение двух логических значений
function isSame(a, b) {
  return a === b;
}

// ===== ОБЪЕКТЫ (1) =====
// Проверка существования свойства
function hasKey(obj, key) {
  return key in obj;
}

// ===== МАССИВЫ (5) =====
// Получение последнего элемента массива
function getLastElement(array) {
  return array[array.length - 1];
}

// ===== forEach (5) =====
// Вывод чётных чисел массива в консоль
function logEven(array) {
  array.forEach(item => {
    if (item % 2 === 0) {
      console.log(item);
    }
  });
}

// ===== map (4) =====
// Добавление префикса к строкам
function addPrefix(array, prefix) {
  return array.map(item => prefix + item);
}
console.log('======= ЛАБА 7 | ВАРИАНТ 12 =======');

console.log('isInteger(5):', isInteger(5));
console.log('toLower("HELLO"):', toLower("HELLO"));
console.log('isSame(true, false):', isSame(true, false));
console.log('hasKey({a:1}, "a"):', hasKey({a: 1}, 'a'));
console.log('getLastElement([1,2,3]):', getLastElement([1, 2, 3]));

console.log('Четные числа:');
logEven([1, 2, 3, 4, 5, 6]);

console.log(
  'addPrefix:',
  addPrefix(["js", "html"], "learn-")
);
