// Write your code here:
function greetAliens(input){
    for(let i=0;i<input.length;i++){
      console.log(`Oh powerful ${input[i]}, we humans offer our unconditional surrender!`)
    }
  }
  
  function tryEach(inte){
   inte.forEach(into => console.log(`Oh powerful ${into}, we humans offer our unconditional surrender!`));
   }
  
  const aliens = ["Blorgous", "Glamyx", "Wegord", "SpaceKing"];
  
  
  greetAliens(aliens);
  
  tryEach(aliens);
  
  
  
  
  // When you're ready to test your code, uncomment the below and run:
  /*
  const aliens = ["Blorgous", "Glamyx", "Wegord", "SpaceKing"];
  
  greetAliens(aliens);
  */
  