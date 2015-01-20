var slice = Array.prototype.slice

function cx() {
  var className = ''
  for (var i = 0; i < arguments.length; i++) {
    if (arguments[i]) className = className+' '+arguments[i]
  }
  return className
}

module.exports = cx
