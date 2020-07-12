var perimeterCombinationCounts = [];

for (a = 1; a < 999; a++) {
    for (b = a; b < (999 - a); b++) {
        var c = Math.sqrt(a * a + b * b);
        if (c % 1 == 0) {
            var perimeter = a + b + c;
            if (perimeter <= 1000) {
                perimeterCombinationCounts[perimeter] = (perimeterCombinationCounts[perimeter] || 0) + 1;
            }
        }
    }
}

var maxCombinations = 0;
var maxCombinationsPerimeter = 0;

for (var perimeter = 0; perimeter <= 1000; perimeter++) {
    var combinations = perimeterCombinationCounts[perimeter];
    if (combinations && combinations > maxCombinations) {
        console.log('perimeter: ' + perimeter + '  combinations: ' + combinations);
        maxCombinations = combinations;
        maxCombinationsPerimeter = perimeter;
    }
}

console.log(maxCombinationsPerimeter);
