// Technically speaking, a constructor function is a regular function with the following convention:
// The name of a constructor function starts with a capital letter like Person, Document, etc.
// A constructor function should be called only with the new operator.


function person(p_name, p_id){
    this.p_name=p_name;
    this.p_id=p_id;
    this.getFullInfo= function (){
        return this.p_name+" "+this.p_id;
    }
}

let p1= new person("Suraj", 98989);
console.log(p1);
console.log(typeof(p1));
console.log(typeof(person));
console.log(p1.getFullInfo());
person.prototype.nationality="Indian";
console.log(person.prototype);








