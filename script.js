function showMsg(match1, match2) {

    alert(match1 + ':' + match2);

}

function compute(val1, val2, val3){


    alert(val1 + val2 - val3);
}

function msg1(){
    let m ="Hello";
    alert(m)
}

let h ="Hello";

function msg2(){
    alert(h + ' World!');
}

function compare(){
    let comp =5 > 2;
    alert (comp);
}

//prompt
function age_checked (){
    let age = prompt("How old are you?",);
    alert(`You are ${age} years old`);
}

//confirm

function confirm_test(){
    let val = confirm("Are you sure do you want to proceed?");
    alert(val)
}

// if statement

function condition(){
    
    let pass = prompt('Please enter password', '');

    if(pass == 1234) alert('Welcome')
    else alert("Try again");
}

function getNum(){

    let a = prompt('Enter a Number', )
        b = prompt('Enter Another Number', );

    if(a > b) alert('Value A is higher.')
    else if (a < b) alert ('Value B is higher.')
    else alert('Value A and B are equal.');
}