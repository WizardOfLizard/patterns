

let names = ["Bob", "Alice", "Dave", "Carol", "Jim"]

//console.log("Bob")

//console.log("Alice")

//console.log("Dave")

//console.log("Carol")

//console.log("Jim")
function listNames () {
    console.log(`There are ${names.length} names in the list.`)
    for (i = 0;i < names.length;i ++) {
        console.log(names[i])
        //console.log("loop run")
    }
}

listNames()

names.push("Sally")

listNames()