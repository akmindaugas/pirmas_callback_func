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

function consoleName(Vardas){
    console.log(`Vardas yra ${Vardas}`);
}

function callAlert(Vardas){
    alert(Vardas);
}

function correctName(vardas, displayFunction){
    let Vardas = vardas.charAt(0).toUpperCase() + vardas.slice(1);
    displayFunction(Vardas);
}

// Example usage
correctName('petras', consoleName);
correctName('petras', callAlert);
