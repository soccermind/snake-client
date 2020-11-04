const net = require('net');

/**
 * Establishes connection with the game server
 */
const connect = function() {
  const conn = net.createConnection({ 
    // host: 'localhost',
    // port: 50541
    host: '135.23.222.131',
    port: 50542
  });
  // interpret incoming data as text
  conn.setEncoding('utf8'); 

  // confirm connection is established
  conn.on('connect', () => {
    console.log('Successfully connected to game server');
    conn.write('Name: AOS');
    // setInterval( () => conn.write('Move: up'), 50);
    // setInterval( () => conn.write('Move: left'), 100);
  });
  
  conn.on('data', (data) => {
    console.log('Server says:', data);
  });
  return conn;
};

module.exports = { connect };