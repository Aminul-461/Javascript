 const getPromise = () => {
  return new promise((resolve,reject)=> {
    console.log("I am promising");
    reject("networkerror");
  });
 };


 let promise = getPromise ();
 promise.then((res)=>{
  console.log("promise fulfilled",res);
 });


 promise.catch((err)=> {
  console.log("rejected",err);
 });

   
 