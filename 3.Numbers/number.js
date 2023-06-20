const isPrime = (number) =>{
    if(number<1){
        return false;
    }
    for(let i =2 ; i<=Math.sqrt(number);i++){
        if(number%i==0){
            return false;
        }
    }
    return true;
}

const checkPrimeNumber = (number) =>{
    const isPrimeNumber = isPrime(number)
    if(isPrimeNumber){
        console.log(`${number} Is A Prime Number.`);
    }
    else{
        console.log(`${number} Is Not A Prime Number.`);
    }
}

checkPrimeNumber(13)