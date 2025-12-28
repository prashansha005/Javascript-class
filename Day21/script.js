let myperson={
    dob:2005,
    age(){
        console.log(2025-this.dob);
    }
};
myperson.age();
// console.log(myperson.age)

let mypersons={
    dob:2005,
    age(){
        console.log(2025-this.dob);
    },
};
// myPersons.age();

let myobject={
    firstname:'prashansha',
    lastname:'neupane',
    fullname(){
        console.log('my name is',this.firstname,this.lastname);
    }
}
myobject.fullname();

let anotherobject={
    name:'anisha kumari',
    printname(){
        console.log('my name is'+this.name);
    },
};
myobject.name='anisha chhantel';
anotherobject.printname();

let area={
    length:100,
    breadth:200,
    print(){
        console.log('the area is',length*breadth);
    },
};
area.length=10,
area.breadth=20,

area.length=0,
area.breadth=10,

area.print();

let details={
    firstname:'prashansha',
    lastname:'neupane',
    address:'butwal',
    email:'neupane.prashansha2005@gmail.com',    
}



