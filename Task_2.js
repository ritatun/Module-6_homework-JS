function primeNum(userNum) {
    //let userNum = +prompt("введите число");
    
    if (userNum > 1000) {
    alert('данные неверны');
    } else if ((userNum === 1) || (userNum === 0)) {
    alert(`Вы ввели число ${userNum}, не являющееся ни простым, ни составным числом`);
    } else {
    let buf;
    for (let i = 2; i < userNum; ++i) {
    //buf = userNum % 2;
    if (userNum % i == 0) {
    alert('число не простое');
    } else {
    alert('число простое');
    }
    }
    }
    }
    primeNum(1001); 