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
