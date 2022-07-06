function removeDuplicates(nums) {
    let left = 1;
    let right = 1;
    const len = nums.length;

    while (right < len) {
        console.log(nums[right] + ` right = ` + right +`,`, nums[right - 1]);
        if (nums[right] !== nums[right - 1]) {
            console.log(`right left ` + right, left);
            nums[left] = nums[right];
            left += 1;
        }

        right += 1;
    }

    return left;
};

let arr = [0, 0, 1, 1, 1, 2, 2, 3, 3];

const idk = removeDuplicates(arr);
console.log(arr.slice(0, idk));