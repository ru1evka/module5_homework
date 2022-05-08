let arr = new Map();
arr.set ('lover', 'peaple');
arr.set ('check', 'clik');
arr.set ( false, 'peaple2');
arr.set ( 12, 'eleven');

for (let item of arr.keys()){
    console.log('Ключ - ' + item)
}
for (let index of arr.values()){
    console.log('Значение - ' + index)
}
