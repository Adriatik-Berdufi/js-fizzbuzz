
const boxContainer = document.getElementById ('container');

for(let i = 1; i <= 100; i++) {
    let x;
    if( i % 15 == 0){
        x = "FizzBuzz";
        boxContainer.innerHTML += `
        <div class="col-1 my-3 ">
            <div class="card text-bg-danger">${x}</div>
        </div>   
        `
        
    }else if( i % 5 == 0){
        x = "Buzz";
        boxContainer.innerHTML += `
        <div class="col-1 my-3 ">
            <div class="card text-bg-warning">${x}</div>
        </div>   
        `
        
    }else if(i % 3 == 0){
        x = "Fizz";
        boxContainer.innerHTML += `
        <div class="col-1 my-3 ">
            <div class="card text-bg-success">${x}</div>
        </div>   
        `
        
      
    }else{
        x =i
        boxContainer.innerHTML += `
            <div class="col-1 my-3 ">
                <div class="card">${x}</div>
            </div>   
        `
      
    }

    
    
};