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
            newRoundIndex += size;
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
            newRoundIndex += size;
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

  concat: function (arr, ...values) {
    for (let i = 0; i < values.length; i++) {
      if (Array.isArray(values[i])) {
        values[i].forEach((el) => arr.push(el));
      } else {
        arr.push(values[i]);
      }
    }
    return arr;
  },

  drop: function (arr, drop_by = 1) {
    let = difference = arr.length - drop_by;
    if (difference <= 0) return [];
    for (let i = 1; i <= drop_by; i++) {
      arr.shift();
    }
    return arr;
  },

  flatten: function (arr) {
    let newContainerArray = new Array();
    for (let i = 0; i < arr.length; i++) {
      if (Array.isArray(arr[i])) {
        arr[i].forEach((el) => newContainerArray.push(el));
      } else {
        newContainerArray.push(arr[i]);
      }
    }
    return newContainerArray;
  },
};
