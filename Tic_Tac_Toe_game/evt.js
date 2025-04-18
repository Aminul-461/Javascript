// event in js 
//Event handelling


btn.onclick=()=>{
    console.log('btn was clicked');
}

btn2.doubleclick=()=>{
    console.log("File was opened");
}

//Event object
PointerEvent.onclick=(e)=>{
    console.log("poin")
}


//Event Listeners

btn.addEventListener(onscroll,cancelIdleCallback);
boxes.removeEventListener(onbeforeprint,cllbaxk);

// Confirm,alert,promt are ussed to comminicate the user


let r=confrm("press a button");
if(r==true){
    alert("you passed ok");
}else{
    alert("you passed cancel");
}


let f=confirm("submit the file");
if(f==true){
    alert("congrate, you have done");
}else{
    alert('not admitted');
}


let name=prompt("please enter your name","Harry porter");
if(name==null &&name!=""){
    console.log("hello "+name + "!!How are you today");

}