import {Component, OnInit} from '@angular/core';
import {RoleType} from "@app/shared/enum/RoleType";
import {UserService} from "@app/service/user/user.service";
import {User} from "@app/shared/model/User";

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.scss']
})
export class UserListComponent implements OnInit {

  allUsers!: User[];
  shownUsers!: User[];
  roles: String[] = ['ALL', RoleType.ADMIN, RoleType.INSTRUCTOR, RoleType.STUDENT];
  selectedRole: String = 'ALL';
  showCreateForm = false;

  constructor(private userService: UserService) {
  }

  ngOnInit(): void {
    this.userService.getAllUserList()
      .subscribe((users) => {
        this.allUsers = users;
        this.shownUsers = this.filterAllUsersByRole(this.selectedRole)
      });
  }

  onRoleSelect(selectedRole: String): void {
    if (this.selectedRole == selectedRole) {
      return;
    }

    this.selectedRole = selectedRole;
    this.shownUsers = this.filterAllUsersByRole(this.selectedRole)
  }

  onCreateUser(user: User) {
    this.userService.createUser(user)
      .subscribe((user) => {
        this.allUsers.push(user);
        this.filterAllUsersByRole(this.selectedRole)
      });
    this.showCreateForm = false;
  }

  private filterAllUsersByRole(selectedRole: String) {
    if (selectedRole == 'ALL') {
      return this.allUsers;
    }

    return this.allUsers.filter(user => {
      return user.role == selectedRole;
    })
  }
}
