



function threeSumClosest(nums, target) {
    nums.sort((a, b) => a - b); // Step 1
    let closestSum = Infinity;

    for (let i = 0; i < nums.length - 2; i++) {
        let left = i + 1, right = nums.length - 1; // Pointers initialization

        while (left < right) {
            const currentSum = nums[i] + nums[left] + nums[right];
            if (Math.abs(currentSum - target) < Math.abs(closestSum - target)) {
                closestSum = currentSum;
            }

            if (currentSum < target) {
                left++;
            } else if (currentSum > target) {
                right--;
            } else {
                return closestSum; // Exact match found, return early
            }
        }
    }

    return closestSum;
}

// Example usage:
const nums1 = [-1, 2, 1, -4];
const target1 = 1;
console.log(threeSumClosest(nums1, target1)); // Output: 2

const nums2 = [0, 0, 0];
const target2 = 1;
console.log(threeSumClosest(nums2, target2)); // Output: 0
