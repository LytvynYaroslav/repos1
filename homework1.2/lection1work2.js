let a;
let b;
let c;

let aToInt;
let bToInt;
let cToInt;

let sum;

let status = true;

a = prompt("Go to a");
b = prompt("Go to b");
c = prompt("Go to c");


aToInt = parseInt(a ,10);
bToInt = parseInt(b ,10);
cToInt = parseInt(c ,10);


while(status){

    if(isNaN(aToInt))
    {
        a = prompt("Go to a");
        aToInt = parseInt(a ,10);
    }
    else if(isNaN(bToInt))
    {
        b = prompt("Go to b");
        bToInt = parseInt(b ,10);
    }
    else if(isNaN(cToInt))
    {
        c = prompt("Go to c");
        cToInt = parseInt(c ,10);
    }
    else status = false;
   
}

if(aToInt % 2 == 0 ){
    alert('Змінна -a- є парним числом' + '(' + aToInt + ')');
}
if(bToInt % 2 == 0) {
    alert('Змінна -b- є парним числом' + '(' + bToInt + ')');
}
if(cToInt % 2 == 0) {
    alert('Змінна -c- є парним числом' + '(' + cToInt + ')');
}


sum = ((aToInt + bToInt) + cToInt);


alert('Сума всіх заданих чисел дорівнює ' + sum + '(' + aToInt + '+' + bToInt + '+' + cToInt + ')');