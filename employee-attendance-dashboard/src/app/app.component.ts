import { Component } from '@angular/core';
import { EmployeeAttendanceComponent } from './employee-attendance/employee-attendance.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [EmployeeAttendanceComponent],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {}
