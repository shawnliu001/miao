var shawnliu001 = {
  chunk: function (arr, size) {
    if (size === 1 || size >= arr.length) return [arr];
    if (arr.length % size === 0) {
      let subArrNumber = arr.length / size;
      let containerArr = new Array(subArrNumber).fill(null).map((el) => []);
      let newRoundIndex = 0;
      for (let i = 0; i < containerArr.length; i++) {
        for (let j = newRoundIndex; j < arr.length; j++) {
          containerArr[i].push(arr[j]);
          if (containerArr[i].length === size) {
            newRoundIndex += size - 1;
            break;
          }
        }
      }
      return containerArr;
    } else {
      let subArrNumber = (arr.length - (arr.length % size)) / size;
      let containerArr = new Array(subArrNumber + 1).fill(null).map((el) => []);
      let newRoundIndex = 0;
      for (let i = 0; i < containerArr.length; i++) {
        for (let j = newRoundIndex; j < arr.length; j++) {
          containerArr[i].push(arr[j]);
          if (containerArr[i].length === size) {
            newRoundIndex += size - 1;
            break;
          }
        }
      }
      return containerArr;
    }
  },

  // [null, 0, 'dkj', +'ldfj', [], undefined, NaN, '', true, false]
  compact: function (arr) {
    let compacted = arr.filter((el) => el && true);
    return compacted;
  },
};
