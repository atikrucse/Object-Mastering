const normalPerson = {
    firstName : 'Mynul',
    lastName : 'Atik',
    salary : 1000,
    getFullName : function(){
        return (this.firstName + " " + this.lastName);
    },
    chargeBill : function(amount){
        console.log(this);
        this.salary = this.salary - amount;
        return this.salary;
    }
}

normalPerson.chargeBill(100);
normalPerson.chargeBill(100);
console.log(normalPerson.salary);