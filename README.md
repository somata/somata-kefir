# somata-kefir
Wrap Somata service events in a Kefir stream

## Usage

```coffee
somata = require './'

client = new somata.Client

motion$ = client.on('maia:smartthings', 'motion')
gotMotion = (m) -> console.log '[m]', m

lightOn = -> client.remote 'maia:hue', 'turn_on', 2
lightOff = -> client.remote 'maia:hue', 'turn_off', 2

motion$.filter((m) -> m.value=='active').onValue lightOn
motion$.filter((m) -> m.value=='inactive').onValue lightOff
```
