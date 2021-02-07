const normalPerson = {
    firstName : 'Mynul',
    lastName : 'Atik',
    salary : 1000,
    getFullName : function(){
        return (this.firstName + " " + this.lastName);
    },
    chargeBill : function(amount){
        //console.log(this);
        this.salary = this.salary - amount;
        return this.salary;
    }
}

const heroPerson = {
    firstName : 'Hero',
    lastName : 'Alom',
    salary: 2000
}

//Use Bind 
// const heroChargeBill =  normalPerson.chargeBill.bind(heroPerson);
// heroChargeBill(500);
// console.log(heroPerson.salary);

//Use Call
// normalPerson.chargeBill.call(heroPerson, 500);
// console.log(heroPerson.salary);

//Use Apply
normalPerson.chargeBill.apply(heroPerson, [500]);
console.log(heroPerson.salary);
