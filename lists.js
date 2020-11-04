

let names = ["Bob", "Alice", "Dave", "Carol", "Jim"]

let nums = [2, 1, 3, 4, 5, 6, 7, 8, 9]

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

function addEvenNums () {
    let ans = 0
    for (i = 0;i < nums.length;i ++) {
        if (nums[i]%2 === 0) {
            ans += nums[i]
            //console.log("loop run")
        }
    }
    console.log(ans)
}

listNames()

addEvenNums()

names.push("Sally")

nums.push(11)
nums.push(10)

listNames()

addEvenNums()

names.forEach(function(num) {
    console.log(num)
})