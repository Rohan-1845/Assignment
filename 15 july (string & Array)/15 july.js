
// 1. **Reverse a String**

let a = "hello"
function reverseString(a)
{
    return a.split('').reverse().join('')
}
console.log(reverseString(a))



// 2. **Check Palindrome** 

function palindrome(a)
{
    let reversed = a.split('').reverse().join('')
    return a == reversed
}
console.log(palindrome(a))



// 3.  **Count Vowels** 

function countstring(a){
    let vowel = 'aeiouAEIOU'
    let count = 0
    for(let i=0; i<=a.length; i++)
    {
        if(vowel.includes(a[i]))
        {
            count++
        }
    }
    return count
}
console.log(countstring(a))



// 4. captilize the each word of sentence 

function capatilize(a)
{
    return a
    .split(' ')
    .map(word => word.charAt(0).toUpperCase() + word.slice(1).toLowerCase())
    .join(' ')
}
console.log(capatilize(a))



// 6. Write a function `removeDuplicates(arr)` that removes duplicate values from an array. 

let b = [1,3,2,3,6,5,1]
function removeDuplicates(b)
{
    return [... new Set(b)]
}
console.log(removeDuplicates(b))



// 7.  Write a function `findMaxMin(arr)` that returns the maximum and minimum number in an array. 

function findMaxMin(b)
{
    let max = Math.max(...b)
    let min = Math.min(...b)
    return{ max, min}
}
console.log(findMaxMin(b))


