const employeeModule = ( function (){
    let name ="";
    let age = 0;
    let salary = 0;
    const setAge = function(newAge){
        age = newAge;
    }
    const setSalary = function(newSalary){
        salary = newSalary;

    }
    const setName = function(newName){
        name = newName;
    }

    const getAge = function(){
        return age;
    }
    const getSalary = function(){
        return salary;
    }
    const getName = function(){
        return name;
    }
    const increaseSalary = function(percentage){
        newSalary = getSalary() + percentage*getSalary(); 
        setSalary(newSalary);
    
    }
    const incrementAge = function(){
        newAge = getAge()+1;
        setAge(newAge);

    }
    return{
        setAge: setAge,
        setSalary:setSalary,
        setName:setName,
        increaseSalary: increaseSalary,
        incrementAge:incrementAge,


        printAll: function(){
            console.log(`Name: ${name}, Age: ${age}, Salary: ${salary}`) ;
        }

    }
})();
employeeModule.setName("Den");
employeeModule.setAge(10);
employeeModule.setSalary(20000);
employeeModule.increaseSalary(10);
employeeModule.incrementAge(2);
employeeModule.printAll();


employeeModule.address ="";
employeeModule.setAddress = function(newAddress){
    employeeModule.address = newAddress;
}
employeeModule. getAddress = function(){
    return employeeModule.address;
}
employeeModule.setAddress("Astana, Kazakhstan");
console.log(employeeModule.getAddress());
