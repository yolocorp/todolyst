module.exports = function Todo(task, status) {
    this.id = new Date().valueOf();
    this.task = task? task : '';
    this.status = status? status : '';

    this.hydrate = function(obj) {
        obj && Object.assign(this, obj);
    };

    this.toString = function() {
        return '{task:'+this.task+', state:'+this.status+'}';
    };
}