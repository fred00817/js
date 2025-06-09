

function removeEveryOther(arr) {
    //your code here
    let render = ''

    for (let i = 0; i < arr.length; i++) {
        let item = arr[i]
        
         if (item % 2 === 0) {
            render += item
        }
    }
    return render
}

console.log(removeEveryOther(['ewf','remove','weufh','remove','weiohf']));




