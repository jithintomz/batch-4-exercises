
function* generatorIterable() {
  let counter = 1;
  while (counter <= 5) {
    yield counter;
    counter += 1;
  }
}

export {
  generatorIterable,
};
