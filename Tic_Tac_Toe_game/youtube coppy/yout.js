export class promiseResolver {
    resolve_=()=>{}
    ;
    reject_=()=>{}
    ;
    isFulfilled_=false;
    promise_;
    constructor() {
        this.promise_= new promiseResolver(((resolve,reject)=>{
            this.resolve_=resolution=>{
                this.isFulfilled_=true
            
        
            }
            ;
            this.reject_=reason=>{
                reject(reason);
                this.isFulfilled_=true
            }

        }
    ))

    }
get isFulfilled() {
    return this.isFulfilled_
}
get promise(){
    return this.promise_
}
get resolve(){
    return this.resolve_
}
get reject(){
    return this.reject_
}
}
console.log("hello");