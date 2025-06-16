/*Complete the function, which calculates how much you need to tip based on the total amount of the bill and the service.

You need to consider the following ratings:

Terrible: tip 0%
Poor: tip 5%
Good: tip 10%
Great: tip 15%
Excellent: tip 20%

The rating is case insensitive (so "great" = "GREAT"). If an unrecognised rating is received, then you need to return:

"Rating not recognised" in Javascript, Python and Ruby...
...or null in Java
...or -1 in C#
Because you're a nice person, you always round up the tip, regardless of the service.*/

function calculateTip(amount, rating) {
  //let tip = amount * percent
  let ratings = rating.toLowerCase();

  if (ratings == "terrible") {
    let percent = 0;
    let tip = (amount * percent) / 100;
    return Math.ceil(tip);
  } else if (ratings == "poor") {
    let percent = 5;
    let tip = (amount * percent) / 100;
    return Math.ceil(tip);
  } else if (ratings == "good") {
    let percent = 10;
    let tip = (amount * percent) / 100;
    return Math.ceil(tip);
  } else if (ratings == "great") {
    let percent = 15;
    let tip = (amount * percent) / 100;
    return Math.ceil(tip);
  } else if (ratings == "excellent") {
    let percent = 20;
    let tip = (amount * percent) / 100;
    return Math.ceil(tip);
  } else {
    return "Rating not recognised";
  }
}


console.log(calculateTip(99.45, "gOOd"));
