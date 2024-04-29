function LeapYearChecker(n) {

    
    if ((0 == n % 4) && (0 != n % 100) || (0 == n % 400)) {
        return  `${n} is a leap year`;
    } else {
        return `${n} is a leap year`;
    }
}

console.log(LeapYearChecker(2008));

function TicketPricing(age){
    if(age <= 12){
        return `$10`
    }else if(age > 12 && age < 18){
        return `$15`
    }else 
    return `$20`
}

console.log(TicketPricing(17));



function fibonacci(n) {
    if (n <= 1) {
        return n;
    } else {
        return fibonacci(n - 1) + fibonacci(n - 2);
    }
}

console.log(fibonacci(6));


const palindrome =(str)=>{
    str = str.toLowerCase().trim(); 
   
    
    if(str[0] !== str[str.length -1] ){
       return false
    } else
    
    
    
    if(str.length === 1 || str.length === 0){
        return true ;
    }
    return palindrome(str.slice(1, str.length-1));
}

console.log(palindrome('mam'));

function pow(n, p) { 
    if (p == 1) return n; 
    return n * pow(n, p - 1); 
} 

console.log(pow(5,2));