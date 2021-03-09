//Person constructor

function person(name, dob) {
    this.name = name;
    this.birthday = new Date(dob);
    this.calculateAge = function () {
        const diff = Date.now() - this.birthday.getTime();
        const ageDate = new Date(diff);
        return Math.abs(ageDate.getUTCFullYear() - 1970);
    };
}

const person1 = new person("Frank", "9-15-1997");
console.log(person1.calculateAge());
