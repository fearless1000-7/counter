let plus = document.querySelector('.plus')
let minus = document.querySelector('.minus')
let reset = document.querySelector('.reset')
let count = document.querySelector('.number')
let rnd = document.querySelector('.random')

document.querySelector(".plus").onclick = function() {
    let countPlus = count.innerHTML;
    if(+countPlus <= 9){
      count.innerHTML++;
     
      
    }
  }
  
  document.querySelector(".minus").onclick = function() {
    let countMinus = count.innerHTML;
    if(countMinus >= -9 ){
      count.innerHTML--;
    
      
    }
  }
  reset.addEventListener("click", () => {
    value = 0;
    count.textContent = value;
  });

rnd.addEventListener("click",() => {rnd(-9, 9)} )
  

