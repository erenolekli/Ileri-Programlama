var combinationSum = function (candidates, target) {
    let total = []
    function dfs(index, sum, result) {
        if (sum === target) {
            total.push([...result])
        }
        if (sum > target) {
            return
        }
        for (let i = index; i < candidates.length; i++) {
            result.push(candidates[i])
            dfs(i, sum + candidates[i], result)
            result.pop()
        }
    }
    dfs(0, 0, [])
    return total
};
