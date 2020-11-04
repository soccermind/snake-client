// Stores the active TCP connection object.
let connection;
const { MOVE_UP_KEY, MOVE_DOWN_KEY, MOVE_LEFT_KEY, MOVE_RIGHT_KEY, MESSAGES } = require('./constants');

// \u0003 maps to ctrl+c input
const handleUserInput = function(key) {
  if (key === '\u0003') {
    process.exit();
  }
  if (key === MOVE_UP_KEY) {
    connection.write('Move: up');
  }
  if (key === MOVE_DOWN_KEY) {
    connection.write('Move: down');
  }
  if (key === MOVE_LEFT_KEY) {
    connection.write('Move: left');
  }
  if (key === MOVE_RIGHT_KEY) {
    connection.write('Move: right');
  }
  for (msgKey in MESSAGES) {
    if (key === msgKey) {
      connection.write('Say: ' + MESSAGES[msgKey]);
    }
  }
};

/**
 * Setup User Interface 
 * Specifically, so that we can handle user input via stdin
 */
const setupInput = function(conn) {
  connection = conn;
  stdin = process.stdin;
  stdin.setRawMode(true);
  stdin.setEncoding('utf8');
  stdin.resume();
  stdin.on('data', handleUserInput);
  return stdin;
}

module.exports = { setupInput };