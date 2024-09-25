function divideAndConquerSum(a) {
    if (a.length == 1) {
        return a[0];
    }
    if (a.length == 0) {
        return 0;
    }
    const size = a.length;
    
    const subArrLength = Math.floor(size / 3);
    const leftEnd = subArrLength;
    const middleEnd = 2 * subArrLength;

    const leftSubarray = a.slice(0, leftEnd);
    const middleSubarray = a.slice(leftEnd, middleEnd);
    const rightSubarray = a.slice(middleEnd);

    const leftArrSum = divideAndConquerSum(leftSubarray);
    const middleArrSum = divideAndConquerSum(middleSubarray);
    const rightArrSum = divideAndConquerSum(rightSubarray);

    // console.log("leftArrSum: " + leftArrSum);
    // console.log("middleArrSum: " + middleArrSum);
    // console.log("rightArrSum: " + rightArrSum);
    // console.log("Full Sum: " + (leftArrSum + middleArrSum + rightArrSum));


    return leftArrSum + middleArrSum + rightArrSum;
}
