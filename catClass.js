class CAT { 
    constructor(name, age, location){
        this.name = name;
        this.age = age;
        this.location = location;
    }
    getname(){ 
        return this.name;
    }
    setname(newName){ 
        return this.name = newName; 
    }

    getage() { 
        return this.age;
    }
    setage(newAge){ 
        return this.age = newAge;
    }

    getlocation(){ 
        return this.location;
    }
    setlocation(newlocation){ 
        return this.location = newlocation;
    }

    catInfo() {
        return `The name of my cat is ${this.name} and its age is ${this.age}.`;
    }
    catLocation() { 
        return `My cat named ${this.name} is located at ${this.location}.`;
    }
}

const myCat = new CAT("Barbra", 7, "Animal park");
console.log(myCat.catInfo());
console.log(myCat.catLocation());

myCat.name = "Chloe";
myCat.age = 4;
myCat.location = "Home";
console.log(myCat.catInfo());
console.log(myCat.catLocation());