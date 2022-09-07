//approch 1
let mean1 =(nums)=>
{
    let sum =0;
    for(let i=0;i<nums.length;i++)
    {
        sum+=nums[i];
    }
    console.log(sum)//total sum of the array
    console(nums.length);//length of the array
    console.log("Meam usinhg first approch:" + sum/nums.length)//mean of the array

}
//approch 2- using rest parameters
const mean =(...nums)=>
{
 nums.reduce((acc,val)=>acc+val,0)/nums.length
}
const nums= [3,5,4,4,1,1,2,3]
const num2=[1,2,3];
mean1(nums)
mean1(num2)
console.log("Mean using second approch:"+mean(...[3,5,4,4,1,1,2,3]))
console.log("Mean using second approch:"+mean(...[1,2,3]))

let Median =(nums)=>
{
    let m=0;
    let n= nums.length;
    nums.sort((a,b)=>a-b);

    if (n%2==0)//even
    {
        let a = nums[(n/2)-1];
        let b = nums[(n/2)+1];
        // console.log(n/2)
        // console.log((n/2)-1)
        // console.log((n/2)+1)
        // console.log(a)
        // console.log(b)
        m=(a+b)/2;

    }
    else
    {
        console.log(n/2)
        m= nums[parseInt(n/2)]
    }
    return m;
}
console.log("Median using first approch: " + Median(...[3,5,4,4,1,1,2,3]))
console.log("Median  using first approch: " + Median(...[1,2,3]))

let mode=(nums)=>
{
let hm = new Map();
for(let i=0;i<nums.length;i++)
{
    if(hm.has(nums[i])==false)
    {
        hm.set(nums[i],1);
    }
    else
    {
        let count =hm.get(nums[i]);
        count++;
        hm.setr(nums[i],count);
    }
}
let modeArray = [];
for (let[key,value] of hm)
 {
    if(value>1)
    {
        modeArray.push(key)

    }
   
    
}
return modeArray;
}

console,log("Mode is" + ode(nums1))
const nums3 =[1,2,3,4,2,3,4,2,3]
console,log("Mode is" + ode(nums2))
