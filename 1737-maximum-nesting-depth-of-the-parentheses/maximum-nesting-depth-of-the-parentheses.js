/**
 * @param {string} s
 * @return {number}
 */
var maxDepth = function(s) {
    let depth = 0;
    const stack = [];

    s.split('').forEach((c) => {
        if (c === '(') {
            stack.push(c);
            if (depth < stack.length) {
                depth = stack.length;
            }
        } else if (c === ')') {
            stack.pop();
        }
    })
    return depth;
};