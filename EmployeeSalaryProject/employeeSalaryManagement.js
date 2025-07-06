var Department;
(function (Department) {
    Department["HR"] = "HR";
    Department["IT"] = "IT";
    Department["Sales"] = "Sales";
})(Department || (Department = {}));
var EmployeeManager = /** @class */ (function () {
    function EmployeeManager() {
        this.employees = [];
    }
    EmployeeManager.prototype.addEmployee = function (employee) {
        this.employees.push(employee);
    };
    EmployeeManager.prototype.calculateBonus = function (dept, base) {
        switch (dept) {
            case Department.HR: return base * 0.10;
            case Department.IT: return base * 0.15;
            case Department.Sales: return base * 0.12;
            default: return 0;
        }
    };
    EmployeeManager.prototype.categorize = function (salary) {
        if (salary >= 80000)
            return "High Earner";
        else if (salary >= 50000)
            return "Mid Earner";
        else
            return "Low Earner";
    };
    EmployeeManager.prototype.display = function () {
        for (var _i = 0, _a = this.employees; _i < _a.length; _i++) {
            var e = _a[_i];
            var bonus = this.calculateBonus(e.department, e.baseSalary);
            var net = e.baseSalary + bonus;
            var cat = this.categorize(net);
            console.log("Employee Name: ".concat(e.name));
            console.log("Age: ".concat(e.age));
            console.log("Department: ".concat(e.department));
            console.log("Base Salary: \u20B9".concat(e.baseSalary));
            console.log("Net Salary (with bonus): \u20B9".concat(net));
            console.log("Category: ".concat(cat));
            console.log('------------------------');
        }
    };
    return EmployeeManager;
}());
var mgr = new EmployeeManager();
mgr.addEmployee({ name: "Ravi", age: 28, department: Department.IT, baseSalary: 60000 });
mgr.addEmployee({ name: "Priya", age: 32, department: Department.HR, baseSalary: 48000 });
mgr.addEmployee({ name: "Arjun", age: 26, department: Department.Sales, baseSalary: 85000 });
mgr.display();
