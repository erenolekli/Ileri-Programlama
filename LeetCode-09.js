var isPalindrome = function(x) {
    if (x < 0 || (x !== 0 && x%10 === 0)) return false;
    let num = x;
    let rev = 0;
    
    while(num) {
      rev = (rev * 10) + (num%10);
      num = Math.floor(num/10);
    }
    return x === rev;
}var isPalindrome = function(x) {
    if (x < 0 || (x !== 0 && x%10 === 0)) return false;
    let num = x;
    let rev = 0;
    
    while(num) {
      rev = (rev * 10) + (num%10);
      num = Math.floor(num/10);
    }
    return x === rev;
};
