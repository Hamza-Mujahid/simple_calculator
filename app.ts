const btns = document.querySelectorAll('.numbersContainer .cal-btn')!;
const resultBox = document.querySelector('#resultBox')! as HTMLInputElement;

btns.forEach((allbtns) => {
    allbtns.addEventListener('click', () => {
        resultBox.value += (allbtns as HTMLButtonElement).textContent || '';
        console.log((allbtns as HTMLButtonElement).textContent);
    })
})

const resultBtn = document.querySelector("#result")! as HTMLButtonElement;
const back = document.querySelector("#back")! as HTMLButtonElement;
const clear = document.querySelector("#clear")! as HTMLButtonElement;

clear.addEventListener("click", () => {
    resultBox.value = '';
})

back.addEventListener("click", () => {
    let newVal = resultBox.value.slice(0, -1);
    resultBox.value = newVal;
})

const caluculate = (data) => {
    return eval(data);
}

resultBtn.addEventListener("click", () => {
    let ans = caluculate(resultBox.value);
    resultBox.value = ans;
})
