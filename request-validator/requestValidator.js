function requestValidator(request) {
  function isUrlValid(userInput) {
    var res = userInput.match(/(http(s)?:\/\/.)?(www\.)?[-a-zA-Z0-9@:%._\+~#=]{2,256}\.[a-z]{2,6}\b([-a-zA-Z0-9@:%_\+.~#?&//=]*)/g);
    if(res == null)
        return false;
    else
        return true;
}
  const methods = ["GET", "POST", "HEAD", "PUT", "TRACE", "PATCH"]
  if (methods.indexOf(request['method']) == -1) {
    throw ('Invalid request header: Invalid Method')
  }
  if (Object.keys(request).indexOf('message') == -1){
    throw('Invalid request header: Invalid Message')
  }
  
  if (isUrlValid(request['uri']) == false) {
    throw('Invalid request header: Invalid URI')
  }
  return request
}

export {
  requestValidator,
};
