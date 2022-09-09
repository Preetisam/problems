let substringPalindrome1 =(str,l,r)=>
{
    str =str.slice(l,r);
    let j = str.length-1;
    for(let  i=0;i<j/2;i++)
    {
        //forward cahracter - str[i] backward charater -str[j-1]
        if(str[i]!=str[j-i])
        {
            console.log("Not a palindrome");
            return;
        }
        
    }
    console.log("Plaindrome")
}
