
function isOpposite(s1, s2) { 

    let sorted1 = s1.split('').sort().join()
    let sorted2 = s2.split('').sort().join()

    if (sorted1.length !== sorted2.length) {
        return false
     }
    
    
    
        for (let i = 0; i < s1.length; i++) {
            if (sorted1[i].toLowerCase() !== sorted2[i].toLowerCase()) {
                return false
            }
            if (sorted2[i] === sorted2[i]) {
           return false
             }
        }

        return true
    
}

console.log(isOpposite('abc','ACB')) 