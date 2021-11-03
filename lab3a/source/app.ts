

function calculateAverage(numbers: Array<number>): number {
    let sum: number = 0;

    for(let n of numbers) {
        sum += n;
    }

    return sum / numbers.length;
}

let nums1: Array<number> = [17, 9, 4, 82, 15, 36];
let nums2: Array<number> = [9, 4, 1, 7, 2, 3, 5, 8, 10, 6];

console.log(calculateAverage(nums1));
console.log(calculateAverage(nums2));



enum TAXRATES { FICA = 10, STATE = 5, MEDICARE = 12 };

console.log(TAXRATES.STATE);