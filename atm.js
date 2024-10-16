// function countNotes() {
//     let amount = document.getElementById("amountInput").value;
//     let remainingAmount = amount;
//     let noteCount = {};

//     if (remainingAmount >= 500) {
//         noteCount['500'] = Math.floor(remainingAmount / 500); //
//         remainingAmount %= 500;
//     }

//     if (remainingAmount >= 200) {
//         noteCount['200'] = Math.floor(remainingAmount / 200);
//         remainingAmount %= 200;
//     }

//     if (remainingAmount >= 100) {
//         noteCount['100'] = Math.floor(remainingAmount / 100);
//         remainingAmount %= 100;
//     }

//     if (remainingAmount >= 50) {
//         noteCount['50'] = Math.floor(remainingAmount / 50);
//         remainingAmount %= 50;
//     }

//     if (remainingAmount >= 20) {
//         noteCount['20'] = Math.floor(remainingAmount / 20);
//         remainingAmount %= 20;
//     }

//     if (remainingAmount >= 10) {
//         noteCount['10'] = Math.floor(remainingAmount / 10);
//         remainingAmount %= 10;
//     }

//     if (remainingAmount >= 5) {
//         noteCount['5'] = Math.floor(remainingAmount / 5);
//         remainingAmount %= 5;
//     }

//     if (remainingAmount >= 2) {
//         noteCount['2'] = Math.floor(remainingAmount / 2);
//         remainingAmount %= 2;
//     }

//     if (remainingAmount >= 1) {
//         noteCount['1'] = remainingAmount;
//     }

//     // Display output
//     let outputDiv = document.getElementById("output");
//     outputDiv.innerHTML = ""; // Clear previous results
    
//     // let output=noteCount.Sort((a,b)=>b-a)
//     for (let note in noteCount) {
//         outputDiv.innerHTML += `${note} rupee notes: ${noteCount[note]}<br>`;
//     }
// }


function countNotes() {
    let amount = document.getElementById("amountInput").value;
    let remainingAmount = amount;
    let noteCount = "";
    
    // Array of note denominations in descending order
    let denominations = [ 500, 200, 100, 50, 20, 10, 5, 2, 1];


    // Loop through each denomination
    for (let i = 0; i < denominations.length; i++) {
        let note = denominations[i];
        if (remainingAmount >= note) {
            let count = Math.floor(remainingAmount / note); //the quotient is the note count
            remainingAmount %= note; //reminder is the remaining notes
            noteCount += `${note} rupee notes: ${count}<br>`;
        }
    }

    let outputDiv = document.getElementById("output");
    // outputDiv.innerHTML = ""; // Clear previous results


    // Display the result
    outputDiv.innerHTML = noteCount;
}
