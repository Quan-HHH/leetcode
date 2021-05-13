// /**
//  * @param {number[]} nums
//  * @return {number[][]}
//  */
// var subsetsWithDup = function(nums) {
//   let res = []
//   function helper(path, k) {
//     res.push(path)
//     for(let i = k; i < nums.length; i ++) {
//       if()
//       helper(path + nums[i], k + 1)
//     }
//   }
//   helper([], 0)
//   return res
// };

// subsetsWithDup([1,2,2])

function subsetsWithDup(nums) {
  nums.sort((a,b) => a - b)
  const resArr = [];
  resArr.push([])

  function dfs(start, path) {
      if (path.length <= nums.length && path.length) {
          if (path.length === nums.length) {
              resArr.push(path.slice())
              return;
          }else{
              resArr.push(path.slice())
          }
      }
      const obj = {};
      for (let i = start; i < nums.length; i++) {
          if (obj[nums[i]]) {
              continue;
          }
          obj[nums[i]] = true;
          path.push(nums[i])
          dfs(i + 1,path)
          path.pop()
      }
  }
  dfs(0,[])
  return resArr;
};

console.log(subsetsWithDup([1,2,2]))