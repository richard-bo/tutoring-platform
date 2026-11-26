const optimizationProblems = [
    {
        number: 1,
        question: "Find two nonnegative numbers whose sum is 50 and whose product is as large as possible.",
        hints: [
            "Let the two numbers be x and y. What are you trying to maximize?",
            "Use the fact that the sum of the two numbers is 50 to find your constraint equation.",
            "Rewrite the constraint and sub it into the objective."
        ],
        solution: null
    },
    {
        number: 2,
        question: "A farmer has 200 feet of fencing and wants to enclose a rectangular area alongside a straight river. No fencing is needed along the river. What dimensions will maximize the enclosed area?",
        hints: [
            "Draw a rectangle and identify which three sides require fencing.",
            "If one side does not matter anymore, how does the constraint differ?",
            "Use the 200 feet of fencing to express one dimension in terms of the other."
        ],
        solution: null
    },
    {
        number: 3,
        question: "An open-top box is made from a 12-inch by 12-inch square piece of cardboard by cutting identical squares from each corner and folding up the sides. What size squares should be cut out to maximize the volume of the box?",
        hints: [
            "Let x represent the side length of each square being cut out.",
            "After cutting out the squares, what are the length, width, and height of the box in terms of x?",
            "Write the volume equation and differentiate."
        ],
        solution: null
    },
    {
        number: 4,
        question: "A closed cylindrical container must have a volume of 250π cm³. Find the radius and height that minimize the total surface area of the container.",
        hints: [
            "Write the surface area equation for a cylinder.",
            "Use the given volume to create your constraint equation.",
            "Solve the volume equation for the height and substitute it into the surface area equation before differentiating."
        ],
        solution: null
    },
    {
        number: 5,
        question: "Find the point or points on the parabola y = x² that are closest to the point (0, 4).",
        hints: [
            "What equation gives the distance between two points?",
            "A point on the parabola can be written as (x, x²).",
            "Minimize the square of the distance instead, it makes the calculus a lot easier."
        ],
        solution: null
    },
    {
        number: 6,
        question: "An open-top box with a square base must have a volume of 500 cm³. The material for the base costs $4 per cm², while the material for the sides costs $2 per cm². Find the dimensions that minimize the total cost of constructing the box.",
        hints: [
            "Let x represent the side length of the square base and h represent the height.",
            "How do you find a cost equation?",
            "Use the volume constraint to eliminate h from your total cost equation before differentiating."
        ],
        solution: null
    }
];

export default optimizationProblems;