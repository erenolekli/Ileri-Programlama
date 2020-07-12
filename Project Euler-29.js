var countUnique = function (prev, current, index, array) {
    if (index === 1) prev = 1;
    return prev + (current !== array[index - 1] ? 1 : 0);
};
var countDistinctPowers = function (maxBase, maxExponent) {
    var count = 0;
    var visited = [];

    for (var a = 2; a <= maxBase; a++) {
        var powers = [];
        if (!visited[a]) {
            for (var m = 1, newBase; (newBase = Math.pow(a, m)) <= maxBase; m++) {
                visited[newBase] = true;
                for (var b = 2; b <= maxExponent; b++) {
                    powers.push(m * b);
                }
            }
            count += powers.sort().reduce(countUnique);
        }
    }
    return count;
};
console.log(countDistinctPowers(100, 100));
