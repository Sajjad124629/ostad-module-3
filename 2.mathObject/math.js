
 const squareRootOfTheSumOfSquares = (arr) =>{
    let sumOfSquares = 0;
    for(let i = 0 ; i<arr.length;i++){
        sumOfSquares+=Math.pow(arr[i],2);
    }
    return Math.sqrt(sumOfSquares);
}

const arr = [1,2,3,4,5,6,7,8]
const displaySquareRoot =  squareRootOfTheSumOfSquares(arr);

console.log("Square root of the sum of squares:", displaySquareRoot);