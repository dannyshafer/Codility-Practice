g

// PSEUDOCODE:
// there will be a container variable that holds the impact factor for each letter outside both functions
// inputs are 1) a string representing a DNA sequence, 2) an array that is the lower end of the range for a given query, and 3) an array that is the upper end of the matching query
    // NOTE: the "query" number is denoted by it's index in the query arrays. meaning P[0] and Q[0] are a query together and so on
// we need a reuslts array which is what will hold the smallest impact factors from a given range
// we need to look at each range of letters and find the lowest value and add it to the results array. suspect a helper method will be in the mix there

// in the helper method: 
    // there will be a current lowest which we'll update below
// loop through each letter in the range and see if it's value is less than the current 
// once we're done looping through all of them, return the lowest variable from above
