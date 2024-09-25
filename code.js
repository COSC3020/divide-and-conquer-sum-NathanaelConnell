function divideAndConquerSum(a) {
    if (a.length == 1) { // checks if the array has only one element
        return a[0];
    }
    if (a.length == 0) { // checks if the array is empty
        return 0;
    }
    if (a.length == 2) { // checks if the array has two elements
        return a[0] + a[1];
    }
    const size = a.length;
    
    const subArrLength = Math.floor(size / 3); // divides the array into three subarrays
    const leftEnd = subArrLength; // finds the end of the first subarray
    const middleEnd = 2 * subArrLength; // finds the end of the second subarray

    // slices the array into three subarrays using the start and end points from above
    const leftSubarray = a.slice(0, leftEnd); 
    const middleSubarray = a.slice(leftEnd, middleEnd);
    const rightSubarray = a.slice(middleEnd);

    // calls recursively on the three subarrays to further divide them
    const leftArrSum = divideAndConquerSum(leftSubarray);
    const middleArrSum = divideAndConquerSum(middleSubarray);
    const rightArrSum = divideAndConquerSum(rightSubarray);

    // console.log("leftArrSum: " + leftArrSum);
    // console.log("middleArrSum: " + middleArrSum);
    // console.log("rightArrSum: " + rightArrSum);
    // console.log("Full Sum: " + (leftArrSum + middleArrSum + rightArrSum));


    return leftArrSum + middleArrSum + rightArrSum;
}
