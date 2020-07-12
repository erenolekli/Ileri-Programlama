var childA = function (t) {
    return {
        a: t.a - 2 * t.b + 2 * t.c,
        b: 2 * t.a - t.b + 2 * t.c,
        c: 2 * t.a - 2 * t.b + 3 * t.c
    };
};

var childB = function (t) {
    return {
        a: t.a + 2 * t.b + 2 * t.c,
        b: 2 * t.a + t.b + 2 * t.c,
        c: 2 * t.a + 2 * t.b + 3 * t.c
    };
};

var childC = function (t) {
    return {
        a: -t.a + 2 * t.b + 2 * t.c,
        b: -2 * t.a + t.b + 2 * t.c,
        c: -2 * t.a + 2 * t.b + 3 * t.c
    };
};

var findPythagoreanTripleWithSum = function (targetSum) {
    var triples = [{ a: 3, b: 4, c: 5 }];

    for (var i = 0; i < triples.length; i++) {
        var t = triples[i];
        console.log(t);
        if (t.c < targetSum) {
            var sum = t.a + t.b + t.c;
            if (targetSum % sum === 0) {
                var scalar = targetSum / sum;
                console.log("Scalar: " + scalar);
                return { a: t.a * scalar, b: t.b * scalar, c: t.c * scalar };
            } else {
                triples.push(childA(t), childB(t), childC(t));
            }
        }
    }

    return null;
};

var t = findPythagoreanTripleWithSum(1000);
if (t) {
    console.log("Triple: a=" + t.a + " b=" + t.b + " c=" + t.c);
    console.log("Sum: " + (t.a + t.b + t.c));
    console.log("Product: " + (t.a * t.b * t.c));
} else {
    console.log("Not Found");
}
