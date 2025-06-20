
function whatday(num) {

    // put your code here
    let arr = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday']
    for (let i = 0; i < arr.length; i++) {
      let days = num - 1;
        let result = arr[days];

        if (num <= 7) {
            return result
        } else {
            return 'Wrong, please enter a number between 1 and 7';
        }
    }
    
   
    
}
  
console.log(whatday(0))