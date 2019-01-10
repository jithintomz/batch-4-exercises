import {
  bankBalances,
} from './dataset.json';


function accountDataset(...args) {
  return args;
}

function roundEntry(element) {
  element.rounded = Math.round(element.amount, 10);
  return element;
}

function addBalanceAmounts(accumulator, balance) {
  return accumulator += Number(balance.amount);
}

function addInterests(accumulator, balance) {
  accumulator += Number((Number(balance.amount) * 0.189).toFixed(2));
  return accumulator;

}

function checkIfInSelected(balance) {
  const selectedStates = ['WI', 'IL', 'WY', 'OH', 'GA', 'DE'];
  return selectedStates.some(state => state === balance.state);
}

function hundredThousandairs() {
  return bankBalances.filter(element => element.amount > 100000);
}

function datasetWithRoundedDollar() {
  return bankBalances.map(element => roundEntry(element));
}


function sumOfBankBalances() {
  const sum = bankBalances.reduce(addBalanceAmounts, 0);
  return Number(sum.toFixed(2));
}


function sumOfInterests() {
  const selectedBalances = bankBalances.filter(checkIfInSelected);
  const totalInterest = selectedBalances.reduce(addInterests, 0);
  return Number(totalInterest.toFixed(3));
}

function higherStateSums() {
  const stateWiseBalances = {};
  bankBalances.forEach((balance) => {
    if (balance.state in stateWiseBalances) {
      stateWiseBalances[balance.state] += Number(balance.amount);
    } else {
      stateWiseBalances[balance.state] = Number(balance.amount);
    }
  });
  let totalSum = 0;
  Object.values(stateWiseBalances).forEach((stateSum) => {
    if (stateSum > 1000000) {
      totalSum += stateSum; 
    }
  });
  return Number(totalSum.toFixed(2));
}
export {
  accountDataset,
  datasetWithRoundedDollar,
  hundredThousandairs,
  sumOfBankBalances,
  sumOfInterests,
  higherStateSums,
};