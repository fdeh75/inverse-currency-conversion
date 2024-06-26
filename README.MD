# Inverse currency conversion

_Your task is to implement 2 defined functions in ```./src/index.ts```_

### Requirements
- **convert()** must return a number with at most 2 decimal places
- **inverseConvert()** must return a number with at most 2 decimal places
- for any given numbers **x > 0** with at most 2 decimal places, and **r > 0** with at most 10 decimal places, **inverseConvert(convert(x, r), r)** must be exactly equal to **x**
- no requiremens for time/space complexity
- no extra dependencies allowed (except for decimal.js for decimal arithmetic)
- make sure to verify the correctness of your solution before submitting it :)

### Running
```
yarn install && yarn start
```