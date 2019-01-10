
function memoize(func) {
  const cache = {}
  return (...args) => {
    const cache_key = args.join('')
    if (cache_key in cache){
      return cache[cache_key]
    }else{
      const result = func(...args)
      cache[cache_key] = result
      return result
    }
  }
}

export {
  memoize,
};
