
// const employee = {
//     name: "Bob",
//     address: "22 Chucklehead Ln.",
// }


// function  updateEmployeeWithKeyAndValue(employee, key, value) {
// return {
//     ...employee,
// [key]: value,
// }
// }

// function destructivelyUpdateEmployeeWithKeyAndValue(employee, key, value) {
//     employee[key] = value;
//     return employee
// }

// function deleteFromEmployeeByKey(employee, key, value) {
//     const newEmployee = {...employee}
//     newEmployee[key] = value;
//     return newEmployee
// }

// function destructivelyDeleteFromEmployeeByKey(employee, key, value) {
//     employee[key] = value;
//     return employee;
// }


const employee = {
    name: 'bob',
    streetAddress: "45 Chucklehead Way"
}

function updateEmployeeWithKeyAndValue(employee, key, value){
   return{
    ...employee,
    [key]: value,
   }
}

function destructivelyUpdateEmployeeWithKeyAndValue(employee, key, value){
    employee[key] = value;
    return employee;
};

function deleteFromEmployeeByKey(employee, key, value){
    const newEmployee = {...employee};
    newEmployee[key] = value;
    return newEmployee;
}

function destructivelyDeleteFromEmployeeByKey(employee, key, value){
   employee[key] = value;
   return employee;
}



