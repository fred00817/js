

function removeEveryOther(arr) {
    //your code here
    let render = []

    for (let i = 0; i < arr.length; i+=2) {
        let item = arr[i]
        render.push(item)
        }
        return render
    }


console.log(removeEveryOther(['ewf','remove','weufh','remove','weiohf']));




