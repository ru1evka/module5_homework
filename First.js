
let a = prompt('Введите значение a: ')
let b = prompt('Введите значение b: ')
if (isNaN(a)){
    console.log('Упс, кажется, вы ошиблись')
} else {
if (isNaN(b)){
    console.log('Упс, кажется, вы ошиблись')
} else {
let sumNumber = +a + +b;
//console.log (typeof(sumNumber))
if (sumNumber % 2 == 0){
    console.log('Чётное')
}else{
    console.log('Не чётное')
}
}
}