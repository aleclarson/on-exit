
function onExit(fn) {
  process.on('exit', fn)
  once()
}

module.exports = onExit

// One-time setup.
let once = function() {
  once = Function.prototype
  process.on('SIGINT', () => {
    console.log()
    process.exit(130)
  })
  process.on('uncaughtException', (err) => {
    console.error(err.stack)
    process.exit(1)
  })
}

