
function isIterableEmpty(iterabale) {
  const iterator = iterabale[Symbol.iterator]();
  return iterator.next().done;
}

export {
  isIterableEmpty,
};
