const removeIndex = (array, index) => {
  const is_array = Array.isArray(array);
  if (is_array) {
    if (array.length) {
      return { renmoved: array.splice(index, 1), result: array };
    } else {
      return [];
    }
  } else {
    throw new Error("Your first parameter must be array");
  }
};
const removeRange = (array, range) => {
  if (!Array.isArray(array)) {
    throw new Error("Your first parameter must be array");
  }
  if (!range.from || !range.to) {
    throw new Error("Your second parameter must be an object with from and to properties like {from: 0, to: 1}");
  }
  return { removed: array.splice(range.from, range.to - range.from), result: array };
};

module.exports = {
  removeIndex,
  removeRange,
};
