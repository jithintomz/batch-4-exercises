
function cycled(arrayObj) {
  let index = -1;
  const iter = {
    [Symbol.iterator]() {
      return this;
    },
    next() {
      index += 1;
      return { value: arrayObj[index % arrayObj.length], done: false };
    },
  };
  return iter;
}

export {
  cycled,
};
