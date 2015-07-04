somata = require 'somata'
Kefir = require 'kefir'

class Client extends somata.Client
    subscribe: (service_name, type, args...) ->
        Kefir.stream (emitter) =>
            super service_name, type, args..., (err, event) -> emitter.emit event

module.exports = {Client}
