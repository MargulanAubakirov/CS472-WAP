let person =(function(){
    let name;
    let age;
    let pid;

    function privateComputeId() {
        pid = 1234;
    }
    function privateSetName( name ) {
        name = name;
    }
    function privateGetId() {
        privateComputeId();
        return pid;
    }
  

    return {
       setName:setName,
        getId:getId
    }
})();

