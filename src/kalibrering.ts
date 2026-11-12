//-------------------------------------------------- 1 ---------------------------------------
let firstName: string = 'Marihan'
console.log(firstName)

//-------------------------------------------------- 2 ---------------------------------------

let num1: number = 1
let num2: number = 7

console.log(num1 + num2)
// or we can define a separated variable for sum
let sum: number = num1 + num2
console.log(sum)

//-------------------------------------------------- 3 ---------------------------------------

if (sum > 10) console.log('Big')
else console.log('Small')

//note no need for  {} with if or else as long as its only one line

//-------------------------------------------------- 4 ---------------------------------------

let i: number
for (i = 1; i <= 5; i++) {
    console.log(`Number ${i}`)
}

//-------------------------------------------------- 5 ---------------------------------------

function Duplicate(i: number) {
    let res = i * 2
    return res
}

console.log(Duplicate(11))
