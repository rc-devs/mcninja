import { Component, signal } from '@angular/core';
import { User } from '../data/models/user.model';
import userData from '../data/user.data';

@Component({
  selector: 'app-user',
  imports: [],
  templateUrl: './user.component.html',
  styleUrl: './user.component.css'
})
export class UserComponent {
 users = signal<User[]>(userData)
}
