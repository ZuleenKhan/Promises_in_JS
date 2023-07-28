function getrandomint(num){
  return Math.floor(Math.random()*num) ; 

}

function createPromisewithTimeout() {
 
     return new Promise((resolve,reject)=> {
            setTimeout(()=>{
                 let r_num = getrandomint(10) ; 
                 if(r_num%2 == 0 ){
                    resolve(r_num) ; 
                 }
                 else {
                    reject(r_num) ; 
                 }

        },10000) ; 
     

     }) ; 

}

let y = createPromisewithTimeout() ; 
console.log(y) ;  