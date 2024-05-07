/**
 * @param {number[]} nums
 * @return {number[]}
 */
var buildArray = function(nums) {
    return nums.reduce((acc, idx) => {
        acc.push(nums[idx])
        return acc;
    }, [])
};