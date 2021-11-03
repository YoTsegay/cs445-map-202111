"use strict";
function calculateAverage(numbers) {
    let sum = 0;
    for (let n of numbers) {
        sum += n;
    }
    return sum / numbers.length;
}
let nums1 = [17, 9, 4, 82, 15, 36];
let nums2 = [9, 4, 1, 7, 2, 3, 5, 8, 10, 6];
console.log(calculateAverage(nums1));
console.log(calculateAverage(nums2));
var TAXRATES;
(function (TAXRATES) {
    TAXRATES[TAXRATES["FICA"] = 10] = "FICA";
    TAXRATES[TAXRATES["STATE"] = 5] = "STATE";
    TAXRATES[TAXRATES["MEDICARE"] = 12] = "MEDICARE";
})(TAXRATES || (TAXRATES = {}));
;
console.log(TAXRATES.STATE);
