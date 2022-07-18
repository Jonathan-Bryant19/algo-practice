var rotate = function(nums, k) {
    if (k > nums.length) k = k % nums.length
    const reference = nums.slice(-k).concat(nums.slice(0, nums.length + 1 - k))
    for (let i = 0; i < nums.length; i++) {
        nums[i] = reference[i]
    }
    return nums
};

console.log(rotate([1,2,3,4,5,6,7], 8))