let res = document.getElementById('res');

function clickOne() {
 res.innerHTML += '1';
}

function clickZero() {
 res.innerHTML += '0';
}

function clickClr() {
 res.innerHTML = '';
}

function clickSum() {
 res.innerHTML +='+';
}

function clickSub() {
 res.innerHTML += '-';
}

function clickMul(){
 res.innerHTML += '*'; 
}

function clickDiv(){
 res.innerHTML += '/'; 
}

function clickEql(){
 let equation = res.innerHTML;
 let value1 = equation.match(/[0-1]*[0-1]/)[0];
 let operation = equation.match(/[^\w]/);
 let value2 = equation.match(/[^\w][0-1]*[0-1]/)[0];
 value2 = value2.substr(1);
        
 if (operation == '+'){
   res.innerHTML = (parseInt(value1, 2) + parseInt(value2, 2)).toString(2);
 } 

if (operation == '-'){
   res.innerHTML = (parseInt(value1, 2) - parseInt(value2, 2)).toString(2);
 }
    
if (operation == '*'){
   res.innerHTML = (parseInt(value1, 2) * parseInt(value2, 2)).toString(2);
 }
     
if (operation == '/'){
   res.innerHTML = (parseInt(value1, 2) / parseInt(value2, 2)).toString(2);
 }
  
}



