# Treasure Hunt

I'd actually seen this problem before, on [Advent of Code](https://adventofcode.com/2018/day/10). Unfortunately, I couldn't find my code for that specific day, so I grabbed some of the other functions I made (displaying board, reading file, etc) and used that to help me complete the problem. My procedure was like this:

- Turn the input into an array of objects, each containing coordinates and momentum, both represented as an object of x and y.
- Make a for loop that:
  - Creates a new array with all the coordinates moved
  - Update a `curBoard` variable (I know, I used `let`, but it was necessary for fast code)
  - Get the dimensions of the points. This is the dimensions of the smallest rectangle that can encapsulate all the points inside it.
- After running this loop for about 10000 iterations, there will be a smallest point. In this case, it was 23x4.
- Log the board at this smallest point to see a word, which was HACK.

Fun challenge, wrote most of the code myself, but I think I did have a leg up by knowing the algorithm in advance so writing the code wasn't that bad.