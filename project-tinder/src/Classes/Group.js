class Group {

    members = [];

    constructor(name, description) {
        this._name = name;
        this._description = description;
    }

    get members() {
        return this._members;
    }

    set members(x) {
        this._members = x;
    }

    addMember = (m) => {
        this.members.push(m);
    }

    arrayMember = (m) => { 
    
        this.members.filter((elem) => { 
            return elem != m; 
        });
    }
}


export default Group