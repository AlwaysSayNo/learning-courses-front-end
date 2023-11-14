import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {User} from "@app/shared/model/User";

@Component({
  selector: 'app-user-update',
  templateUrl: './user-update.component.html',
  styleUrls: ['./user-update.component.scss']
})
export class UserUpdateComponent implements OnInit {

  @Input() user!: User;
  @Output() updateUser = new EventEmitter<User>();

  constructor() {
  }

  ngOnInit(): void {
    this.user = {...this.user}
  }

  update(): void {
    this.updateUser.emit(this.user);
  }

}
