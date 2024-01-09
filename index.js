// function consoleName (Vardas){
// console.log(`Vardas yra $(Vardas)`)
// }

// function callAlert(Vardas){
//     alert (Vardas)
// }

// // function correctName(vardas, consoleName){
// //     let Vardas = vardas.charAt(0).toUpperCase()+vardas.slice(1)
// //     consoleName(Vardas)    
// // }

// function correctName(vardas, callAlert){  
//     let Vardas = vardas.charAt(0).toUpperCase() + vardas.slice(1)
//     callAlert(Vardas)    
// }

// // correctName('pettras', consoleName)
// callAlert('pettras', callAlert)

// function consoleName(Vardas){
//     console.log(`Vardas yra ${Vardas}`);
// }

// function callAlert(Vardas){
//     alert(Vardas);
// }

// function correctName(vardas, callBack){
//     let Vardas = vardas.charAt(0).toUpperCase() + vardas.slice(1);
//     callBack(Vardas);
// }

// // Example usage
// correctName('petras', consoleName);
// correctName('petras', callAlert);

// let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, ]

// arr.forEach(num =>{
//    console.log(num + 'skaicius')
// })


// console.log(arr)

// let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, ]

// let newArr = arr.map(num =>{
//   return(num + 10)
// })


// console.log(arr)
// console.log(newArr)

//------------------------------------------------

// let notEven = (num)=>num % 2=== 0 


// console.log(arr.every(notEven))

// let arr = ['anuPras', 'zeniA', 'AlbynAs', 'kauspedas', 'Liolia']





// const newArr = arr.map((v) => v.charAt(0).toUpperCase() + v.slice(1).toLowerCase());
// console.log(newArr);


// let metai = [2, 5, 4, 3, 8, 9, 1233]

// let newMetai = metai.filter((m)=> m >= 25)
// console.log(newMetai)

// let miestai = ['klaipeda', 'kedainiai', 'alytus', 'radviliskis']
// let newMiestai = miestai.find(str => str.charAt(0)==='k')
// console.log(newMiestai)

// let newMiestai = miestai.some(firstCapitalLetter)
// function firstCapitalLetter(miestai){
//     return str.charAt(0)=== firstCapitalLetter
// }

// const cities = ["Vilnius", "Kaunas", "klaipeda"];
// console.log(cities.every(v => v.charAt(0) === v.charAt(0).toUpperCase()));

// let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9 ]


// let newArr = (arr, num) => {
//     arr.push(num)

//   return arr
// }

// console.log(newArr([1, 2, 3, 4], 78))

// const addElement = (arr, element) => {
//     arr.push(element);
//     return arr;
// };
// console.log(addElement([1, 2, 3], 4)); // [1, 2, 3, 4]

// let newArr = miestai.concat(arr)

// console.log(newArr)


// let newArr= (arr, ...elements) => [arr, ...elements]

// console.log([arr], (4, 5, 6, 4, 8))



// const addMultipleElements = (arr, ...elements) => [...arr, ...elements];

// console.log(addMultipleElements([1, 2, 3], 4, 5, 6)); // [1, 2, 3, 4, 5, 6]

// let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9 ]

// let newArr = (arr)=> arr.map(num => num * 2)

// console.log(newArr(arr))


// const doubleNumbers = (arr) => arr.map(number => number * 2);
// console.log(doubleNumbers([1, 2, 3])); // [2, 4, 6]



let findUnique = (arr)=> 




console.log(findUnique([1, 2, 2, 3, 4, 4, 5])); // [1, 2, 3, 4, 5]