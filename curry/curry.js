import { zip }  from "rxjs";

function curry(func) {
  argLength = func.length
  return (...x) => {
    const temp = func(x)
    return
  }
}

export {
  curry,
};
