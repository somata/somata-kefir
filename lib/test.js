// Generated by CoffeeScript 1.9.1
(function() {
  var client, gotMotion, lightOff, lightOn, motion$, somata;

  somata = require('./');

  client = new somata.Client;

  motion$ = client.on('maia:smartthings', 'motion');

  gotMotion = function(m) {
    return console.log('[m]', m);
  };

  lightOn = function() {
    return client.remote('maia:hue', 'turn_on', 2);
  };

  lightOff = function() {
    return client.remote('maia:hue', 'turn_off', 2);
  };

  motion$.filter(function(m) {
    return m.value === 'active';
  }).onValue(lightOn);

  motion$.filter(function(m) {
    return m.value === 'inactive';
  }).onValue(lightOff);

}).call(this);