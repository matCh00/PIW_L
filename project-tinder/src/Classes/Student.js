class Student {

    classes = new Map();
    tags = [];

    constructor(name, email, description) {
        this._name = name;
        this._email = email;
        this._description = description;
    }

    get classes() {
        return this._classes;
    }

    get tags() {
        return this._tags;
    }

    set classes(x) {
        this._classes = x;
    }

    set tags(x) {
        this._tags = x;
    }

    set name(x) {
        this._name = x
    }

    set email(x) {
        this._email = x
    }

    set description(x) {
        this._description = x
    }

    addClasses = (subject, term) => {
        this.classes.set(subject, term);
    }

    removeClasses = (subject) => {
        this.classes.delete(subject);
    }

    addTag = (t) => {
        this.tags.push(t);
    }

    removeTag = (t) => { 
        this.tags.filter((elem) => { 
            return elem != t; 
        });
    } 
}


export default Student