/**
 * @param {number[]} nums
 * @return {number}
 */
var singleNumber = function(nums) {
    const count = {}
    for (i of nums){
        count[i] ? count[i]++ : count[i]=1
    }
    return (Object.keys(count).find(key => count[key] === 1))
};