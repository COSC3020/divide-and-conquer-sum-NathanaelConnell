# Divide and Conquer Sum

In the lectures, we've covered merge sort, which uses a divide-and-conquer
approach to sort an array of values. There are many more algorithms that take
such an approach. Implement a function that computes the sum of an array of
integers using divide and conquer, using the template in `code.js`. Test your
new function; I've provided some basic testing code that uses
[jsverify](https://jsverify.github.io/) in `code.test.js`.

The recursive calls sum up the numbers in the base case, and "merges" the sums
of the recursive calls otherwise. For example, the return value for the array `a
= [1,5,-1,4]` is `9`.

To make it a bit more interesting, instead of splitting into two sub-arrays like
in merge sort, I want you to split into _three_ sub-arrays at each divide step.

Hint: Like in the implementation of merge sort, you may need a helper function
that does the actual recursion.

## Runtime Analysis

What is the runtime of the algorithm that you implemented? Provide a recurrence
relation for $T(n)$ as we did for merge sort (you can ignore constant factors)
and solve it as we did in the lectures. Give the final $\Theta$ complexity.

Describe your reasoning and the conclusion you've come to. Your reasoning is the
most important part. Add your answer to this markdown file.

"I certify that I have listed all sources used to complete this exercise, including the use of any Large Language Models. All of the work is my own, except where stated otherwise. I am aware that plagiarism carries severe penalties and that if plagiarism is suspected, charges may be filed against me without prior notice."

I had the help of chat gpt to help me figure out how to split into 3 sub arrays instead of 2 subarrays aswell as reminding me how to get the origonial time complexity formula.

Each subaray is n/3 so the recurrence relation for T(n) should be T(n) = 3T(n/3) + 1. The 3 is because there are three arrays and the T for the recrusion. There is a constant of 1 singular act of adding the elements. After we get the equation we can compute n (log of b) a. We can sub in b for the times we are using the recursion which is 3 and we can sub in for a with 3 being the parts we split n into. We get log of 3 to 3 giving us n^1. Next we need to take that in context of the big O function of O(1). Since we know that O(1) has a smaller rate of change than n^logb of a we can have T(n) ∈ Theta(n) be the complexity.
