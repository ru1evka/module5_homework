let arr = [1, 2, 1, 1]
let index = arr[0]

for (let item of arr){
    if (item !== index){
        console.log(false)
    } else {
        console.log(true) 
}
}
