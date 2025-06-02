class Employee{
  // ...
  id
  salary
}
class Hr{
  // ...
  id
  salary
}


class Manger{
  getSalary = (employeeIdOrHrId, id) => {
   axios.get('endPoint')
    .then(){
      // ...
    }.catch{
      // ..
    }
  }
  
  setSalary = (salary,isEmployeeOrHr, id) =>{
    const dataToSent = {
      isEmployeeOrHr,
      id,
      salary
    } 
    axios.set('endPoint', dataToSent)
    .then(){
      // ...
    }.catch{
      // ..
    }
    
  }
  createEmployee = (id) => {
    const newEmployee = Employee(id, salary);
  }
  createHr = (id) => {
    const newHr = Hr(id, salary);
  }
}


const ourManger = Manger();
const newEmployee = ourManger.createEmployee(curCounter, salary);
