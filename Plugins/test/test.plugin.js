/**
 * @name Test
 * @author Dummi
 * @authorId 482513687417061376
 * @version 0.0.1
 * @description idk yet
 */

module.exports = class Test {
    constructor(meta) {
        this.meta = meta;
    }

    load() {
        BdApi.showToast(`Loaded ${this.meta.name} ${this.meta.version}`)
    }
    start() {

    }
    stop() {
        this.load()
    }
}