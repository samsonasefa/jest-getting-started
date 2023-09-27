const chunkArray = (arr, len) => {
  const chunkArr = [];

  arr.forEach((element) => {
    const last = chunkArr[chunkArr.length - 1];

    if (!last || last.length === len) {
      chunkArr.push([element]);
    } else {
      last.push(element);
    }
  });

  return chunkArr;
};

module.exports = chunkArray;
