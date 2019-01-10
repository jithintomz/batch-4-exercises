function SavingsAccount(...params) {
  function validateEmail(email) {
    var re = /\S+@\S+\.\S+/;
    return re.test(email);
  }

  if (params[0].length != 6) {
    throw ('Account Number must be a 6-digit number')
  }

  if (validateEmail(params[1]) == false) {
    throw ('Invalid e-mail')
  }

  if ((params[2].length < 3) || (params[2].length > 20)) {
    throw ('First name must be between 3 and 20 characters long')
  }
  if (/^[a-zA-Z]+$/.test(params[3]) == false) {
    throw ('Last name must contain english alphabets only')
  }
  return {
    '_accountNumber': params[0],
    '_email': params[1],
    '_firstName': params[2],
    '_lastName': params[3],
    'products': [],
  }

}

export {
  SavingsAccount,
};