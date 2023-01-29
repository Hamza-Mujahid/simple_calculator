const btns = document.querySelectorAll('.numbersContainer .cal-btn');
const resultBox = document.querySelector('#resultBox');

const handleBtns = () => {
    btns.forEach((e) => {
    })
}

btns.forEach((allbtns) => {
    allbtns.addEventListener('click', () => {
        resultBox.value += allbtns.value
        console.log(allbtns.value);
    })
})

const resultBtn = document.querySelector("#result")
const back = document.querySelector("#back")
const clear = document.querySelector("#clear")

clear.addEventListener("click", () => {
    resultBox.value = ''
})

back.addEventListener("click", () => {
    let newVal = resultBox.value.slice(0, -1)
    resultBox.value = newVal
})

const caluculate = (data) => {
    return eval(data)
}

resultBtn.addEventListener("click", () => {
    let ans = caluculate(resultBox.value)
    resultBox.value = ans
})