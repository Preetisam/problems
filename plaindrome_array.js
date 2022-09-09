let substringPalindrome =(str,l,r)=>
{
    str = str.slice(l,r);
    console.log(str);
    let rev = str.split("");
    console.log(rev);
    let aa = rev.reverse(); 
    console.log(aa);
    let result= aa.join("");
    console.log(result);
    if(str== result)
    {
        console.log("Palindrom");

    }
    else
    {
        console.log("not Palindrome")
    }
}
let str ="aaabbaaa";
substringPalindrome(srt,1,4)
substringPalindrome(str,2,6)
