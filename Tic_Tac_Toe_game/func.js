// function 
function getAddition(n1,n2,n3){
    result=n1+n2+n3;
    return result;
 }

getAddition(3,5,6,);
getAddition(34,56,78);
console.log(result);


function product(a,b){
    return a*b;
}

product(5,7);
console.log(product);


// Array function
const sum=(C,D)=>{
    return C+D;
}

console.log(sum(3,78));

// for each loop in Array

arr.forEach((val)=>{
    console.log(val);
})


// Arry method=map,filter,reduce

arr.map(callbackFnx(value,index,arry))

let newArr=arr.map((val)=>{
    return val*2;
})

let newArr1=arr.filter((val)=>{
    return val%2==0;
})


let newArr2=arr.filter((val)=>{
    return val%2!=0;

})

//reduce methode 
const array2=[1,2,3,4,5,];
const initiaValue=0;
const sumWithInitial=array2.reduce((accumulator,currentValue)=> accumulator+currentValue,initiaValue
);
console.log(sumWithInitial);