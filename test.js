// Import the function sum from the app.js file
const { sum } = require('./app.js');

// Start your first test
test('adds 14 + 9 to equal 23', () => {
    // Inside the test we call our sum function with 2 numbers
    let total = sum(14, 9);

    // We expect the sum of those 2 numbers to be 23
    expect(total).toBe(23);
});


// TEST EURO TO DOLLAR


test("3.5 euro should be 3.745 dollars", function() {
    // Import the function from app.js
    const { fromEuroToDollar } = require('./app.js');

    // Use the function like its supposed to be used
    const dollars = fromEuroToDollar(3.5);

    // If 1 euro is 1.07 dollars, then 3.5 euros should be (3.5 * 1.07)
    const expected = 3.5 * 1.07;
    
    // This is the comparison for the unit test
     expect(fromEuroToDollar(3.5)).toBe(3.745); // 1 euro is 1.07 dollars, then 3.5 euros should be = (3.5 * 1.07)
}) 

test("1 euro should be 1.07 dollars", function() {
    const { fromEuroToDollar } = require('./app.js');
    const dollars = fromEuroToDollar(1);
    const expected = 1 * 1.07;
    expect(fromEuroToDollar(1)).toBe(1.07); 
}) 

test("6 euro should be 6.42 dollars", function() {
    const { fromEuroToDollar } = require('./app.js');
    const dollars = fromEuroToDollar(1);
    const expected = 6 * 1.07;
    expect(fromEuroToDollar(6)).toBe(6.42);
}) 

test("0 euro should be 0 dollars", function() {
    const { fromEuroToDollar } = require('./app.js');
    const dollars = fromEuroToDollar(1);
    const expected = 0 * 1.07;
    expect(fromEuroToDollar(0)).toBe(0);
}) 


// TEST DOLLAR TO YEN


test("1 dollar should be 146.26 yens", function() {
    const { fromDollarToYen } = require('./app.js');
    const expected = fromDollarToYen(1) * 156.5;
    expect(fromDollarToYen(1)).toBe(146.26168224299064); 
})

test("6 dollar should be 877.5700934579439 yens", function() {
    const { fromDollarToYen } = require('./app.js');
    const expected = fromDollarToYen(6) * 156.5;
    expect(fromDollarToYen(6)).toBe(877.5700934579439); 
})

test("30 dollar should be 1316.35514 yens", function() {
    const { fromDollarToYen } = require('./app.js');
    const expected = fromDollarToYen(30) * 156.5;
    expect(fromDollarToYen(30)).toBe(4387.85046728972); 
})

// TEST YEN TO POUND

test("1 yen should be 0.0055 pounds", function() {
    const { fromYenToPound } = require('./app.js');
    const expected = fromYenToPound(1) * 0.87;
    expect(fromYenToPound(1)).toBe(0.0055591054313099035); 
})

test("5 yen should be 0.02779552715654952 pounds", function() {
    const { fromYenToPound } = require('./app.js');
    const expected = fromYenToPound(5) * 0.87;
    expect(fromYenToPound(5)).toBe(0.02779552715654952); 
})

test("100 yen should be 0.02779552715654952 pounds", function() {
    const { fromYenToPound } = require('./app.js');
    const expected = fromYenToPound(100) * 0.87;
    expect(fromYenToPound(100)).toBe(0.5559105431309904); 
})