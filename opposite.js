function isOpposite(s1, s2) {
  /*if (s1 === "" && s2 === "") {
      return false;
    }
  
    if (s1.length !== s2.length) {
      return false;
    }
  
    for (let i = 0; i < s1.length; i++) {
      let item1 = s1[i];
      let item2 = s2[i];
  
      if (s1 === s2) {
        return false;
      }
  
      let allUp = item1 === item1.toUpperCase() && item2 === item2.toUpperCase();
  
      let allLow =
        item1 === item1.toLowerCase() && item2 === item2.toLowerCase();
  
      if (allUp || allLow ||allUp !== allLow ) {
        return false;
      }
    }
  
    return true;*/

  let result1 = "";
  let result2 = "";

  let sorted1 = s1.split("").sort().join("");
  let sorted2 = s2.split("").sort().join("");

  if (sorted1 == sorted2) {
    return false;
  }

  if (sorted1.length !== sorted2.length) {
    return false;
  }

  for (let i = 0; i < sorted1.length; i++) {
    let item1 = sorted1[i];
    result1 += item1;
  }

  for (let j = 0; j < sorted2.length; j++) {
    let item2 = sorted2[j];
    result2 += item2;
  }

  /*if (result1 == result2) {
 return false;
  }

  return true;*/
    
    let allUp = result1 == result1.toUpperCase && result2 == result2.toUpperCase()
    let allLow = result1 == result1.toLowerCase && result2 == result2.toLowerCase()

    if (allUp || allLow) {
        return false
    }
    return false
}

console.log(isOpposite("ABC", "abD"));
