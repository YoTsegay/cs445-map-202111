class Subject {
    observers = {};

    on(event, fn) {
        if (!this.observers[event]) {
            this.observers[event] = [fn];
        } else {
            this.observers[event].push(fn);
        }
    }

    emit(event, message) {
        if (this.observers[event]) {
            this.observers[event].forEach(fn => fn(message));
        }
    }

    off(event, fn) {
        this.observers[event] = this.observers[event].filter(f => f !== fn);
    }

}
const subject = new Subject();
subject.on('eat', console.log);
subject.on('study', console.log);

function foo(msg) {
    console.log('foo: ' + msg);
}
subject.on('eat', foo);
subject.on('study', foo);

subject.emit('eat', 'Corn');
subject.emit('study', 'cs445');
subject.off('eat', foo);
subject.emit('eat', 'Banana');
