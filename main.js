
const boxContainer = document.getElementById ('container');

for(let i = 1; i <= 100; i++) {
    let x;
    if( i % 15 == 0){
        x = "FizzBuzz";
        console.log("FizzBuzz");
    }else if( i % 5 == 0){
        x = "Buzz";
        console.log("Buzz");
    }else if(i % 3 == 0){
        x = "Fizz";
        console.log("Fizz");
    }else{
        x =i
        console.log(i);
    }


    boxContainer.innerHTML += `
        <div>
            <h4> ${x} <h4/>
        <div/>
    `
};