const net = require('net');
const {IP, PORT, NAME} = require('./constants');

/**
 * Establishes connection with the game server
 */
const connect = function() {
  const conn = net.createConnection({ 
    // host: 'localhost',
    // port: 50541
    host: IP,
    port: PORT
  });
  // interpret incoming data as text
  conn.setEncoding('utf8'); 

  // confirm connection is established
  conn.on('connect', () => {
    console.log('Successfully connected to game server');
    conn.write('Name: ' + NAME);
  });
  
  conn.on('data', (data) => {
    console.log('Server says:', data);
  });
  return conn;
};

module.exports = { connect };