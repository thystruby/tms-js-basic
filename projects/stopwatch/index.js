/**
 * Основная трудность может заключаться в правильном рассчете времени. Для этого надо использовать setInterval.
 * При запуске функции start() мы должны сохранять время Date.now() в переменную startTime.
 * Date.now() возвращает кол-во миллисекунд, прошедших с 1 января 1970 года 00:00:00 по UTC.
 * Внутри фукнции start() должен быть setInterval который каждые 10мс будет отнимать от текущего Date.now() сохраненное значения Date.now (которое в переменной startTime) и обновлять значение переменной lastTime
 * В таком случае мы получим разницу между стартом таймера и текущим временем в миллисекундах, которая будет храниться в переменной lastTime
 * Далее конвертируем это значение в нужный нам формат с помощью функции timeToString
 */

// Функция конвертации времени. В качестве аргумента принимает время в миллисекундах.
/*function timeToString(time) {
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





const value =() => {
  startWatch.classList.remove('пауза');
  clearInterval(timer);
  timer = setInterval(() =>{
    milliseconds += 10;
    let dateTimer = new Date(milliseconds);
    watch.innerHTML = 
    ('0'+dateTimer.getUTCHMinutes()).slice(-2) +':' +
    ('0'+dateTimer.getUTCHSeconds()).slice(-2) +':' +
    ('0'+dateTimer.getUTCHMilliSeconds()).slice(-3,-1);

  },10);
};

const pauseWatch = () => {
  watch.classList.add('пауза');
  clearInterval(timer);
};


const resetWatch = () => {
  watch.classList.add('пауза');
  clearInterval(timer);
  milliseconds = 0;
  watch.innerHTML ='00:00:00';
};

document.addEventListener('click', (e) => {
  const element = e.target;
  if (element.id === 'старт') startWatch();
  if (element.id === 'пауза') pausetWatch();
  if (element.id === 'сброс') resetWatch();
}

)
*/







// const table = document.querySelector("table"); 
// const tr = document.querySelector("tr");

// console.log(table);


// table.addEventListener('click',(e) => {
//   const target =e.target.close('tr');
//   if (target) {
//     target.remove();
//   }

// })


const initial = document.querySelectorAll('.controls-initial')[0];
const active = document.querySelectorAll('.controls-active')[0];
const paused = document.querySelectorAll('.controls-paused')[0];

const btnStart = document.querySelectorAll('.button--start');
const btnStop = document.querySelectorAll('.button--pause');
const btnReset = document.querySelectorAll('.button--reset');
const btnLap = document.querySelectorAll('.button--lap');

const text = document.querySelectorAll('.container .value')[0];


let interval;
let date = new Date();
let timeDiff = 0;
let laps = [];

const format = (timeDiff) => {
  miliseconds = parseInt(timeDiff % 1000).toString().slice(0,2).padStart(2, "0");
  timeDiff = timeDiff / 1000;
  const hours = parseInt(timeDiff / 3600).toString().padStart(2, "0");
  const minutes = parseInt((timeDiff % 3600) / 60).toString().padStart(2, "0");
  const seconds = parseInt(timeDiff % 60).toString().padStart(2, "0");
  return `${hours}:${minutes}:${seconds}:${miliseconds}`;
}

const print = () => {
  text.innerHTML = format(timeDiff);
}

const printLap = () => {
  const tbl = document.querySelectorAll('.table')[0];
  const row = document.createElement('div');
  const cell1 = document.createElement('div');
  const cell2 = document.createElement('div');
  row.classList.add('table-row');
  cell1.classList.add('table-cell');
  cell2.classList.add('table-cell');
  cell1.innerHTML = `Круг ${laps.length}`;
  cell2.innerHTML = format(timeDiff);
  row.append(cell1);
  row.append(cell2);
  tbl.append(row);
}

const startTimer = () => {
  date = new Date() - timeDiff
  initial.classList.add('hidden');
  active.classList.remove('hidden');
  paused.classList.add('hidden');
  interval = setInterval(() => {
    timeDiff = new Date() - date;
    print();
  }, 1);
}

const stopTimer = () => {
  initial.classList.add('hidden');
  active.classList.add('hidden');
  paused.classList.remove('hidden');
  clearInterval(interval);
}

btnStart.forEach(b => {
  b.addEventListener('click', startTimer)
})

btnStop.forEach(b => {
  b.addEventListener('click', stopTimer)
})

btnReset.forEach(b => {
  b.addEventListener('click', (e) => {
    timeDiff = 0;
    print();
  })
})

btnLap.forEach(b => {
  b.addEventListener('click', (e) => {
    laps.push(timeDiff);
    printLap();
    timeDiff = 0;
    stopTimer();
    startTimer();
  })
})



