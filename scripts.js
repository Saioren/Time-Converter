/*
1. input number
2. pull number from input
3. put number in calculation
4. pick choice
5. pull choices from select
6. combine both in equation
7. calculate button displays number on screen


*/
let timeInterval1 = document.querySelector('.time-interval1');
let timeInterval2 = document.querySelector('.time-interval2');
let inputNumber = document.querySelector('.convert-wrap input');
let resultNum;

function calculation (){    
    let input = timeInterval1.value;
    let output = timeInterval2.value;
    let number = inputNumber.value;
if (number === undefined){

} else if (input === output){
    resultNum = number;
} else if (input === 'milliseconds'){
    millisecondCalculator(output, number);
} else if (input === 'seconds'){
    secondCalculator(output, number);
} else if (input === 'minutes'){
    minuteCalculator(output, number);
} else if (input === 'hours'){
    hourCalculator(output, number);
} else if (input === 'days'){
    dayCalculator(output, number);
} else if (input === 'weeks'){
    weekCalculator(output, number);
} else if (input === 'months'){
    monthCalculator(output, number);
} else if (input === 'years'){
    yearCalculator(output, number);
} 
if (resultNum === 1){
    document.querySelector('.result').innerHTML = `${resultNum.toFixed(4) * 1} ${output.slice(0, -1)}`;
} else {
    document.querySelector('.result').innerHTML = `${resultNum.toFixed(4) * 1} ${output}`;
}

};

document.querySelector(".calculate")
.addEventListener('click', ()=>{
    calculation();
})

function millisecondCalculator (output, number){
    if (output === 'seconds'){
        resultNum = number / 1000; 
    } else if (output === 'minutes'){
        resultNum = number / 60000;
    } else if (output === 'hours'){
        resultNum = number / 3.6e+6;
    } else if (output === 'days'){
        resultNum = number / 8.64e+7 ;
    } else if (output === 'weeks'){
        resultNum = number / 6.048e+8 ;
    } else if (output === 'months'){
        resultNum = number / 2.628e+9 ;
    } else if (output === 'years'){
        resultNum = number / 3.154e+10; 
    } 
};
function secondCalculator (output, number){
    if (output === 'milliseconds'){
        resultNum = number * 1000; 
    } else if (output === 'minutes'){
        resultNum = number / 60;
    } else if (output === 'hours'){
        resultNum = number / 3600
        ;
    } else if (output === 'days'){
        resultNum = number / 86400 ;
    } else if (output === 'weeks'){
        resultNum = number / 604800 ;
    } else if (output === 'months'){
        resultNum = number / 2.628e+6
        ;
    } else if (output === 'years'){
        resultNum = number / 3.154e+7; 
    } 
}
function minuteCalculator (output, number){
    if (output === 'milliseconds'){
        resultNum = number *  60000; 
    } else if (output === 'seconds'){
        resultNum = number * 60;
    } else if (output === 'hours'){
        resultNum = number / 60
        ;
    } else if (output === 'days'){
        resultNum = number / 1440
        ;
    } else if (output === 'weeks'){
        resultNum = number / 10080
        ;
    } else if (output === 'months'){
        resultNum = number /  43800
        ;
    } else if (output === 'years'){
        resultNum = number / 525600
        ; 
    }   
}
function hourCalculator (output, number){
    if (output === 'milliseconds'){
        resultNum = number * 3.6e+6
        ; 
    } else if (output === 'seconds'){
        resultNum = number * 3600;
    } else if (output === 'minutes'){
        resultNum = number * 60
        ;
    } else if (output === 'days'){
        resultNum = number / 24
        ;
    } else if (output === 'weeks'){
        resultNum = number / 168
        ;
    } else if (output === 'months'){
        resultNum = number / 730

        ;
    } else if (output === 'years'){
        resultNum = number / 8760; 
    } 
}
function dayCalculator (output, number){
    if (output === 'milliseconds'){
        resultNum = number * 8.64e+7; 
    } else if (output === 'seconds'){
        resultNum = number * 86400
        ;
    } else if (output === 'minutes'){
        resultNum = number *  1440
        ;
    } else if (output === 'hours'){
        resultNum = number * 24
        ;
    } else if (output === 'weeks'){
        resultNum = number / 7
        ;
    } else if (output === 'months'){
        resultNum = number / 30.417
        ;
    } else if (output === 'years'){
        resultNum = number / 365
        ; 
    } 
}
function weekCalculator (output, number){
    if (output === 'milliseconds'){
        resultNum = number * 6.048e+8; 
    } else if (output === 'seconds'){
        resultNum = number *  604800
        ;
    } else if (output === 'minutes'){
        resultNum = number * 10080

        ;
    } else if (output === 'hours'){
        resultNum = number * 168
        ;
    } else if (output === 'days'){
        resultNum = number * 7
        ;
    } else if (output === 'months'){
        resultNum = number / 4.345
        ;
    } else if (output === 'years'){
        resultNum = number / 52.143
        ; 
    } 
}
function monthCalculator (output, number){
    if (output === 'milliseconds'){
        resultNum = number *  2.628e+9
        ; 
    } else if (output === 'seconds'){
        resultNum = number * 2.628e+6
        ;
    } else if (output === 'minutes'){
        resultNum = number * 43800

        ;
    } else if (output === 'hours'){
        resultNum = number * 730 ;
    } else if (output === 'days'){
        resultNum = number * 30.417
        ;
    } else if (output === 'weeks'){
        resultNum = number * 4.345

        ;
    } else if (output === 'years'){
        resultNum = number * 12
        ; 
    } 
}
function yearCalculator (output, number){
    if (output === 'milliseconds'){
        resultNum = number * 3.154e+10; 
    } else if (output === 'seconds'){
        resultNum = number * 3.154e+7;
    } else if (output === 'minutes'){
        resultNum = number * 525600

        ;
    } else if (output === 'hours'){
        resultNum = number * 8760
        ;
    } else if (output === 'days'){
        resultNum = number * 365
        ;
    } else if (output === 'weeks'){
        resultNum = number * 52.143

        ;
    } else if (output === 'months'){
        resultNum = number * 12
        ; 
    } 
}

inputNumber.addEventListener("keydown", () => {
    if (event.key === "Enter") {
      calculation();
    }
  });