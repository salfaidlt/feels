alert("Coucou, Faïssal m'avait dit que tu finirais par trouver le code");

let canvas = document.getElementById("canvas");
let context = canvas.getContext('2d');

canvas.height = 150;
canvas.width = 250;

context.beginPath();

// for(let i = 25; i <= 250; i+=25)
// {
//     for(let j = 25; j <= 250; j+=25)
//     {
//         context.moveTo(0, j);
//         context.lineTo(250, j);
//         context.stroke();
//     }
//     context.moveTo(i,0);
//     context.lineTo(i,250);
//     context.stroke();
//     context.strokeStyle = 'black';
// }

context.moveTo(25,25);
context.lineTo(125,75);
context.lineTo(225,25);
context.lineTo(25,25);
context.lineTo(25,125);
context.lineTo(225,125);
context.lineTo(225,25);
context.strokeStyle = 'white';
context.stroke();