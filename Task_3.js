function firstFunc(num) {
    // let num2;
    return function secFunc(num2) {
    let res = num + num2;
    return res
    }
    
    }
    
    let be = firstFunc(2)(16);
    console.log(be); 