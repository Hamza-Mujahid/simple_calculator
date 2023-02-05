var btns = document.querySelectorAll('.numbersContainer .cal-btn');
var resultBox = document.querySelector('#resultBox');
btns.forEach(function (allbtns) {
    allbtns.addEventListener('click', function () {
        resultBox.value += allbtns.textContent || '';
        console.log(allbtns.textContent);
    });
});
var resultBtn = document.querySelector("#result");
var back = document.querySelector("#back");
var clear = document.querySelector("#clear");
clear.addEventListener("click", function () {
    resultBox.value = '';
});
back.addEventListener("click", function () {
    var newVal = resultBox.value.slice(0, -1);
    resultBox.value = newVal;
});
var caluculate = function (data) {
    return eval(data);
};
resultBtn.addEventListener("click", function () {
    var ans = caluculate(resultBox.value);
    resultBox.value = ans;
});
