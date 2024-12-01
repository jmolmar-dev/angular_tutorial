import { Component } from '@angular/core';
import { TasklistComponent } from "../../task/tasklist/tasklist.component";
import { CommonModule } from '@angular/common';
import { NavbarComponent } from '../../navbar/navbar.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [TasklistComponent, CommonModule, NavbarComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {

}
