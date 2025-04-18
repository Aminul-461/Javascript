// if statement

let color;
if(mode=="dark-mode"){
    console.log("black");
}

// if else statement
let color1;
if(mode=="light-mode"){
    console.log("white");
} else{
    console.log("black");
}


//else if statement
let age=17;
if(age>18){
    console.log('junior');

} else if(age>60){
    console.log("senior");
}else if(age==30){
    console.log("first class young");
} else if(age==40){
    console.log("young of second stage");
}else{
    console.log('middle');
}


// ternary operator

// syntax= condition? true output:false output;

let age2=18;
age2>18 ?"adult":"not adult";

// example2
let num1=2;
num1==2? "equal":"not equal";

// example3
let num2=5;
num2 %=0 ?"even number":"odd number";



// grade
let score=45;
if(score>80 && score<100){
    console.log("you have got A ");
} else if(score>70 && score<89){
    console.log("you have gotB");
}else if (score>60 && score<69){
    console.log("you have got C");
} else if (score>50 && score<59){
    console.log("you have got D");
}else{
    console.log("you are fail");
}