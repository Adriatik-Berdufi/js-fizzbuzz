
const boxContainer = document.getElementById ('container');

for(let i = 1; i <= 100; i++) {
    let x;
    if( i % 15 == 0){
        x = "FizzBuzz";
        
    }else if( i % 5 == 0){
        x = "Buzz";
        
    }else if(i % 3 == 0){
        x = "Fizz";
        
    }else{
       
       x = i;
    }
 const boxElement =`
        
             <div class="col-1 my-3 " >
                <div class="card ${x}">${x}</div>
             </div>
       
`
 boxContainer.innerHTML += boxElement ;
    
    
};