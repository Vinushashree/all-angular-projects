enum Department {
    HR = "HR",
    IT = "IT",
    Sales = "Sales"
}

interface Employee {
    name: string;
    age: number;
    department: Department;
    baseSalary: number;
}

class EmployeeManager {
    private employees: Employee[] = [];

    addEmployee(employee: Employee): void {
        this.employees.push(employee);
    }

    private calculateBonus(dept: Department, base: number): number {
        switch (dept) {
            case Department.HR: return base * 0.10;
            case Department.IT: return base * 0.15;
            case Department.Sales: return base * 0.12;
            default: return 0;
        }
    }

    private categorize(salary: number): string {
        if (salary >= 80000) return "High Earner";
        else if (salary >= 50000) return "Mid Earner";
        else return "Low Earner";
    }

    display(): void {
        for (const e of this.employees) {
            const bonus = this.calculateBonus(e.department, e.baseSalary);
            const net = e.baseSalary + bonus;
            const cat = this.categorize(net);

            console.log(`Employee Name: ${e.name}`);
            console.log(`Age: ${e.age}`);
            console.log(`Department: ${e.department}`);
            console.log(`Base Salary: ₹${e.baseSalary}`);
            console.log(`Net Salary (with bonus): ₹${net}`);
            console.log(`Category: ${cat}`);
            console.log('------------------------');
        }
    }
}

const mgr = new EmployeeManager();
mgr.addEmployee({ name: "Ravi", age: 28, department: Department.IT, baseSalary: 60000 });
mgr.addEmployee({ name: "Priya", age: 32, department: Department.HR, baseSalary: 48000 });
mgr.addEmployee({ name: "Arjun", age: 26, department: Department.Sales, baseSalary: 85000 });

mgr.display();
