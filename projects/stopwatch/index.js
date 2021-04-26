/**
 * Основная трудность может заключаться в правильном рассчете времени. Для этого надо использовать setInterval.
 * При запуске функции start() мы должны сохранять время Date.now() в переменную startTime.
 * Date.now() возвращает кол-во миллисекунд, прошедших с 1 января 1970 года 00:00:00 по UTC.
 * Внутри фукнции start() должен быть setInterval который каждые 10мс будет отнимать от текущего Date.now() сохраненное значения Date.now (которое в переменной startTime) и обновлять значение переменной lastTime
 * В таком случае мы получим разницу между стартом таймера и текущим временем в миллисекундах, которая будет храниться в переменной lastTime
 * Далее конвертируем это значение в нужный нам формат с помощью функции timeToString
 */

// Функция конвертации времени.
function timeToString(time) {
  let diffInHrs = time / 3600000; // В 1 часе 3600000 миллисекунд. Разделив наше время на это число мы получим значение в часах.
  let hh = Math.floor(diffInHrs); // Округляем значение

  let diffInMin = (diffInHrs - hh) * 60;
  let mm = Math.floor(diffInMin);

  let diffInSec = (diffInMin - mm) * 60;
  let ss = Math.floor(diffInSec);

  let diffInMs = (diffInSec - ss) * 100;
  let ms = Math.floor(diffInMs);

  let formattedMM = mm.toString().padStart(2, "0");
  let formattedSS = ss.toString().padStart(2, "0");
  let formattedMS = ms.toString().padStart(2, "0");

  return `${formattedMM}:${formattedSS}:${formattedMS}`;
}
