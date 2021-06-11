import React from 'react'

export const duration = function (start, end) {
    // return difference between start and end

    console.log(start)

    const diffTime = Math.abs(start - end);
    const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24)); 
    console.log(diffTime + " milliseconds");
    console.log(diffDays + " days");
}
