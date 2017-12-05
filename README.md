# Pizza For The People Object Challenge

So, you just learned about objects and you're eager to put your knowledge to test! You are in luck!

You have been given the following data:

```
["IL", 7000000, 12]
["MN", 2500000, 3]
["IA", 674000, 1]
["WI", 6800000, 15]

```

This data represents the state, annual revenue per state, and number of locations in that state for a pizza chain, *Pizza For The People*.


## BASE Mode

1. Fork the repo for this project.
2. Create an object constructor for each state (probably named something like `State` or `Region`). The object properties should include `state`, `revenue`, `locationCount`).
3. Create an instance of each object using the provided data.
4. Display this information on the DOM in a list element


## HARD Mode

1. Create a function (method), within the constructor, that calculates and returns the average revenue. Name this function `averageRevenue`. 
2. Use this method to display on the DOM the average amount of revenue per location for each state. This amount can be shown in the same list as above or in some other way.