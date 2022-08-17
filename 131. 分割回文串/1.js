/**
 * @param {string} s
 * @return {string[][]}
 */
var partition = function (s) {
  // 回溯计算出所有的可能切割方法
  // 剪枝：如果不是回文字符串则不继续回溯
  const res = [];
  const helper = (path, start) => {
    if(start === s.length) {
      res.push(path.slice());
      return
    }
    for(let i = start, i < )
  };
  helper([], 0);

  const isPali = (s) => {
    return s.splice("").reverse().join("") === s;
  };
};
