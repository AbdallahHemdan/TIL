#include <iostream>
#include <vector>

using namespace std;

class Employee{
private:
  string id;
  int salary;
public:
  Employee(string id, int salary){
    this->id = id;
    this->salary = salary;
  }

  string getMyId(){
    return this->id;
  }

  int getMySalary(){
    return this->salary;
  }
}

class Hr{
private:
  string id;
  int salary;
public:
  Hr(string id, int salary){
    this->id = id;
    this->salary = salary;
  }

  string getMyId(){
    return this->id;
  }

  int getMySalary(){
    return this->salary;
  }
}

class Manager {
private:
    string managerId;
    int salay;
puplic:
  Manger(string managId, int salary){
    this->managerId = managId;
    this->salay = salary;
  }
  Employee createEmployee(string emploId, int emploSalary){
    Employee employee = new Employee(emploId,emploSalary);
    return employee;
  }
  Hr createHr(string hrId, int hrSalary) {
    Hr hr = new Hr(hrId,hrSalary);
    return hr;
  }
  Employee setEmployeeSalary(vector<Employee>& listOfEmployees, string id, int salary){
    listOfEmployee.push()
  }
}

int main(){
  vector<Employees> listOfEmployee;
  vector<Hr> listOfHrs;
  Manager ourManger = Manger(0, 50000);
  Employee firstEmpl = Manger.createEmployee(curCount, 2000);
  Hr firstGr = Manger.createHr(curCount, 3000);
  firstEmpl = Manager.setEmployeeSalary()
}
