/**
 * @name Greeter
 * @author Dummi
 * @authorId 482513687417061376
 * @version 0.0.1
 * @description Greets you.
 */

const settings = {
    user: "Dummi"
}

module.exports = class Greeter {
    constructor(meta) {
        this.meta = meta;
    }

    load() {
        BdApi.showToast(`Loaded ${this.meta.name} ${this.meta.version}`)

        this.start()
    }
    start() {
        BdApi.showToast(`hello ${settings.user}!`)

        this.stop()
    }

    stop() {
    }
}