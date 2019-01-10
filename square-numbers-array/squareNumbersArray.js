function squareNumbersArray(...args) {
  const nums = args
  nums.forEach(element => {
    if (typeof(element) !== 'number'){
      throw('My custom error')
    }
  });

}

export {
  squareNumbersArray,
};
