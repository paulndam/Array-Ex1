function findNumber(arr, k) {
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === k) {
      return "YES";
    }
  }

  return "NO";
}

console.log(findNumber([1, 2, 3, 4, 5], 8));

const num = [];

function oddNum(l, r) {
  for (let i = l; i < r; i++) {
    if (i % 2 !== 0) {
      num.push(i);
    }
  }
  return num;
}

console.log(oddNum(1, 100));
