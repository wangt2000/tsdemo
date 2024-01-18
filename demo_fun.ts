function addNumber(numArr: number[]) {
    var sum = 0
    numArr.forEach(element => {
        sum += element
    });
    return sum
}

function addNumber2(numArr: number[]) {
    var sum = 0
    for (const key in numArr) {
        sum+=numArr[key]
    }
    
    return sum
}

console.log(addNumber([1, 2, 3, 4, 5, 6, 7]))
console.log(addNumber2([1, 2, 3, 4, 5, 6, 7]))