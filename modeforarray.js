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
