import { Component, inject } from '@angular/core';
import { FormsModule, NgModel } from '@angular/forms';
import { UsersService } from '../../services/users.service';

@Component({
  selector: 'app-data-form',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './data-form.component.html',
  styleUrl: './data-form.component.css'
})
export class DataFormComponent {

  constructor() {
  }

  public usersService = inject(UsersService)

}
