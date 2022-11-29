const clock = document.querySelector('.timing');
const start = document.querySelector('.start');
const stop1 = document.querySelector('.stop');
const reset = document.querySelector('.reset');
const restart = document.querySelector('.restart');
let seconds = 0;
let timer;

stop1.addEventListener('click', function(e) {
    clock.classList.remove('started');
    clock.classList.add('paused');
    clearInterval(timer)
    pauseClock();
})

document.addEventListener('click',function(e) {
    const el = e.target;
    if(el.classList.contains('start')){
        clock.classList.add('started');
        clearInterval(timer)
        startClock();
    };
    if(el.classList.contains('reset')){
        clock.classList.remove('started');
        clock.classList.remove('paused');
        clearInterval(timer)
        resetClock();
    };
    if(el.classList.contains('restart')){
        clock.classList.add('started');
        clearInterval(timer);
        restartFunc();
    };
});

function createSeconds(sec) {
    const date = new Date(sec * 1000);
    return date.toLocaleTimeString('pt-BR', {
        hour12: false,
        timeZone: "UTC",
    });      
};

function startClock () {
    timer = setInterval(function() {
    seconds++
    clock.innerHTML= createSeconds(seconds);
    }, 1000);
};

function pauseClock() {
    clearInterval(timer);
};

function resetClock() {
    clearInterval(timer);
    seconds = 0
    clock.innerHTML = "00:00:00";
};

function restartFunc() {
    clearInterval(timer);
    seconds = 0;
    clock.innerHTML = "00:00:00";
    startClock();
}