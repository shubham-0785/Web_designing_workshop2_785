package com.example.employeeapi;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import java.util.List;

@Service
public class EmployeeService {

    @Autowired
    private EmployeeRepository repository;

    public Employee save(Employee employee) {
        return repository.save(employee);
    }

    public List<Employee> getAllEmployees() {
        return repository.findAll();
    }

    public Employee getEmployee(Long id) {
        return repository.findById(id).orElse(null);
    }

    public Employee updateEmployee(
            Long id,
            Employee employee) {

        Employee existing =
                repository.findById(id).orElse(null);

        if (existing != null) {
            existing.setName(employee.getName());
            existing.setDepartment(
                    employee.getDepartment());
            existing.setSalary(
                    employee.getSalary());

            return repository.save(existing);
        }

        return null;
    }

    public void deleteEmployee(Long id) {
        repository.deleteById(id);
    }
}