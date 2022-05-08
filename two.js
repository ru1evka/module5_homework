let x = "12" 
console.log(typeof(x))
if (typeof x === "string"){
    console.log('x - строка')
} else {
    if (typeof x === "number"){
        console.log('x - число')
    } else {
        if (typeof x === "boolean"){
            console.log ('x - логический тип')
        } else {
            if (isNaN(x)){
                console.log ('Тип X не определен')
            }
        }
    }
}