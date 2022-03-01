class CommandController {
    constructor(controller) {
        this.controller = controller
    }
    execute = function(...args) {
        const [action, params] = args;
        if(this.controller[action]) {
            return this.controller[action].call(this, params);
        }
    }
}
module.exports = CommandController;