let intervalId;

function printNum(start, stop)
{
console.log(start);
clearInterval(intervalId);
if (start < stop)
{
intervalId = setInterval(printNum, 1000, start + 1, stop);
}
}



function func(userNum1, userNum2)
{
intervalId = setInterval(printNum, 0, userNum1, userNum2);
}

func(+prompt("enter number 1"), +prompt("enter number 2"));