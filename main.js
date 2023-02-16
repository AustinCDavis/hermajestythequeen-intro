
/*
    Define a function with a single parameter. When the function
    is invoked, an argument is required.
*/

const hailTheQueen = (nameString) => {
    return `Hail Her Majesty, ${nameString}.`  // This function returns a string
}
/*
(Bug Queen)
const athena = hailTheQueen("Athena Perez") // Argument value is "Athena Perez"
//console.log(athena)

const charisse = hailTheQueen("Charisse Ford") // Argument value is "Charisse Ford"
//console.log(charisse)

const jenna = hailTheQueen("Jenna Solis") // Argument value is "Jenna Solis"
//console.log(jenna)

const kimberly = hailTheQueen("Kimberly Davis") // Argument vale is "Kimberly Davis"
//console.log(kimberly)

const fallon = hailTheQueen("Fallon Gallimore") // Arguement value is "Fallon Gallimore"
//console.log(fallon)

const ramona = hailTheQueen("Ramona Ramerez")
//console.log(ramona)

const monica = hailTheQueen("Monica Dinglehopper")
//console.log(monica)
*/
//--------------------------------------------------------
/*
//(Queen Colony)
const queens = []


const createQueen = (queenID, queenName) => {
    const queenObject = {
        id: queenID,
        name: queenName
    }

    queens.push(queenObject)
}

createQueen(1, "Athena Perez")
createQueen(2, "Charisse Ford")
createQueen(3, "Jena Solis")
createQueen(4, "Kimberly Davis")
createQueen(5, "Fallon Gallimore")
createQueen(6, "Ramona Ramerez")
createQueen(7, "Monica Dinglehoppery")
createQueen(8, "Trinity Terry")

//console.log(queenObject);

//---------------------------------------------------------------
//(Iterating the Queens)
/*
for (const queenObject of queens) {
    const hailMessage = hailTheQueen(queenObject.name)
    console.log(hailMessage)
}
*/
// (Paying Tribute)
/*
const tributeChest = []


const payTribute = (tributeID, descriptionID, queenID) => {
    const tributeObject = {
        id: tributeID,
        description: descriptionID,
        queenId: queenID
    }

    tributeChest.push(tributeObject)
}

payTribute(07, "Golden Earrings", 5)
payTribute(111, "Fresh Grapes", 3)
payTribute(80, "Silver Bracelet", 7)
payTribute(54, "Pot of Honey", 6)
payTribute(19, "Bloomed Marigolds", 2)

//console.log(tributeChest)

//(this for of sequence will help differentiate which tributes go to which queen)
for (const queenObject of queens) {
    for (const tributeObject of tributeChest) {
        if (tributeObject.queenId === queenObject.id){
            console.log(`${queenObject.name} has tribute ${tributeObject.description}`)
        }
    }
}
*/