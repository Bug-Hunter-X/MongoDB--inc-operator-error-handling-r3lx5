# MongoDB $inc Operator Error Handling

This repository demonstrates a common error when using the `$inc` operator in MongoDB update queries. Specifically, it highlights how the `$inc` operator behaves when attempting to decrement a non-existent field.

## Problem
The provided code snippet demonstrates how using `$inc` with a negative value on a non-existent field throws an error, rather than initializing the field to zero.

## Solution
The solution involves using the `$setOnInsert` operator in conjunction with `$inc` to ensure that the field is initialized to zero before attempting to decrement it. This approach avoids any errors and ensures smooth operation even if the field is absent.

## Steps to reproduce the error and solution
1. Clone the repo
2. Run `node bug.js` to see the error
3. Run `node bugSolution.js` to see the working solution