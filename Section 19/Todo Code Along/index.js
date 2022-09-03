// // Todo list 

// let welcome = prompt("What would you like to do?");
// let toDO = [];


// while (welcome !== "new" || welcome !== "list" || welcome !== "delete" || welcome !== "quit"){
//     if (welcome === "new") {
//         let add = prompt("add a todo:");
//         toDO.push(add);
//         console.log(add + " added to list");

//     } else if (welcome = "list") {
//         for (let i = 0; i < toDO.length; i++) {
//             console.log("**********");
//             console.log(`${i}: ${toDO[i]}`);
//             console.log("**********");
//             break;

//         }
//     } else if (welcome = "delete") {
//         toDO.pop;
//     } else if (welcome = "quit") {
//         console.log("**********");
//     } else {
//         welcome = prompt("What would you like to do?");
//     }
// }


let input = prompt("what would you like to do?");
const todos = [];
while (input !== "quit" && input !== "q") {
    if (input === "list") {
        console.log("**********");
        for (let i = 0; i < todos.length; i++) {
            console.log(`${i}: ${todos[i]}`);
        }
        console.log("**********");

    } else if (input === "new") {
        let add = prompt("add a todo:");
        todos.push(add);
        console.log(add + " added to list");
    } else if (input === "delete") {
        todos.pop;
    } else {
        console.log("Unknown index");
    }
input = prompt("what would you like to do?");
}

console.log("OK YOU QUIT THE APP");