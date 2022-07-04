const inputString = prompt('Number credit cart'); /*print a message asking for the user to input a credit card number ?*/

const checkCreditCartNumber = inputString => {
    let computedNumber = 0;
    const number = string(inputString).replace(/\D/g,'');
    const checkNumber = number => {
        if (number.length >= 1) {
            return true;
        } return false
    }

    const lng = number.length;
    const idx = lng-1;

    while 
        (lng > 0, idx % 2 == 0, idx--) {
            function handleEverySecondDigit(idx, value){
            computedNumber = value * 2;
                if (computedNumber > 9) {
                    computedNumber = computedNumber - 9;
                    return computedNumber;
                    } 
                else {
                    computedNumber = value;
                    }
                }
        }
    if (computedNumber % 10 == 0) {
        return true; 
         } 
        return false;

        }
console.log(checkCreditCartNumber);
