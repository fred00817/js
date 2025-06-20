function findArray(arr1, arr2) {

    let newArr = [];

    for (let i = 0; i < arr2.length; i++) {
        let index = arr2[i]
      //  let fine = arr1[added]

     if (index >=0 && index < arr1.length) {
        newArr.push(arr1[index])
           
       } 
    }
    return newArr

    
}

//     if (arr1.length > 0 || arr2.length >0) {
//         }
//     for (let i = 0; i < arr2.length; i++) {
// let n = arr2[i] > arr1.length;
//         if (n) {
//             let arr = arr1.length - n 
//             let newTing = newArr.push(arr)

//     return newTing
//             }
//             let arrCheck = arr2[i];

//             let itemCheck = arr1[arrCheck];

//             newArr.push(itemCheck);
//         }

//         return newArr
    


console.log(findArray(["a", "b", "c", "d"], [0,2,7]));
