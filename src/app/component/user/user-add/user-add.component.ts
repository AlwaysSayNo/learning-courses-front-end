import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {User} from "@app/shared/model/User";
import {RoleType} from "@app/shared/enum/RoleType";

@Component({
  selector: 'app-user-add',
  templateUrl: './user-add.component.html',
  styleUrls: ['./user-add.component.scss']
})
export class UserAddComponent implements OnInit {

  user: User = {
    id: 0,
    firstName: '',
    lastName: '',
    login: '',
    password: '',
  };
  @Output() addUser = new EventEmitter<User>();

  selectedRole: RoleType = RoleType.STUDENT;
  roles: RoleType[] = [RoleType.STUDENT, RoleType.INSTRUCTOR];

  constructor() {
  }

  ngOnInit(): void {
  }

  saveUser(): void {
    this.user.role = this.selectedRole;
    this.addUser.emit(this.user);
  }

  onRoleSelect(selectedRole: RoleType): void {
    this.selectedRole = selectedRole;
  }

}
