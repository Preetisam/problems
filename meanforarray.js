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
console.log("Mean using first approch:"+mean(...nums1))
console.log("Mean using first approch:"+mean(...nums2))
