// Approach 1 - brute force.
// Time: O(n^2)
// Space: O()
const twoSumBrute = (nums, target) => {
  for (let i = 0; i < nums.length; i++) {
    for (let j = i + 1; j < nums.length; j++) {
      if (nums[j] === target - nums[i]) {
        return [i, j];
      }
    }
  }

  return [];
};

// Approach 2 - using a Map.
// Time: O(n)
// Space: O(n)
const twoSum = (nums, target) => {
  const valuesToIndex = new Map();

  for (let i = 0; i < nums.length; i++) {
    let cur = nums[i];
    // cur + x = target
    // x = target - cur
    let x = target - cur;

    if (valuesToIndex.has(x)) {
      return [valuesToIndex.get(x), i];
    }

    valuesToIndex.set(cur, i);
  }

  return;
};
