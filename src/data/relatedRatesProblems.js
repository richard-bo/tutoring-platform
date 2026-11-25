const relatedRatesProblems = [
    {
        number: 1,
        question: "The radius of a circle is increasing at a rate of 3 cm/s. How fast is the area of the circle increasing when the radius is 5 cm?",
        hints: [
            "Identify the rate you are given and the rate you are trying to find.",
            "What equation relates the area of a circle to its radius?",
            "Differentiate both sides with respect to time. Remember that the radius is changing with time."
        ],
        solution: null
    },
    {
        number: 2,
        question: "A spherical balloon is being inflated at a rate of 48π cm³/s. How fast is its radius increasing when the radius is 4 cm?",
        hints: [
            "Are you given the rate of change of the radius or the volume?",
            "Find an equation relating the volume of a sphere to its radius.",
            "Differentiate with respect to time using the chain rule, then isolate the unknown."
        ],
        solution: null
    },
    {
        number: 3,
        question: "A 13-foot ladder is leaning against a wall. The bottom of the ladder is sliding away from the wall at a rate of 2 ft/s. How fast is the top of the ladder sliding down when the bottom is 5 feet from the wall?",
        hints: [
            "Draw a diagram and label the sides.",
            "Notice this creates a right triangle, what equation do we typically use here?",
            "Remember that the length of the ladder is constant."
        ],
        solution: null
    },
    {
        number: 4,
        question: "Two cars are moving away from the same intersection. One is traveling east at 40 mph and the other is traveling north at 30 mph. How fast is the distance between the cars increasing when the first car is 3 miles east and the second car is 4 miles north of the intersection?",
        hints: [
            "Draw the positions of the two cars relative to the intersection.",
            "Use the Pythagorean Theorem.",
            "Both cars are moving, so both distances are changing with time."
        ],
        solution: null
    },
    {
        number: 5,
        question: "Water is being poured into an inverted conical tank that is 12 feet tall and has a radius of 4 feet at the top. If water enters the tank at a rate of 3π ft³/min, how fast is the water level rising when the water is 6 feet deep?",
        hints: [
            "Write down the equation for the volume of a cone. Which variables are changing?",
            "Similar triangles.",
            "Express the radius in terms of the height and substitute into the volume equation before differentiating."
        ],
        solution: null
    },
    {
        number: 6,
        question: "A 6-foot-tall person is walking away from a 15-foot-tall streetlight at a rate of 4 ft/s. How fast is the tip of the person's shadow moving away from the streetlight?",
        hints: [
            "Draw a diagram showing the streetlight, the person, and the shadow.",
            "We can use similar triangles to relate two distances.",
            "Remember what the question is asking for."
        ],
        solution: null
    }
];

export default relatedRatesProblems;