import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";
import {UserService} from "@app/service/user/user.service";
import {concatMap} from "rxjs";
import {User} from "@app/shared/model/User";

@Component({
  selector: 'app-user-details',
  templateUrl: './user-details.component.html',
  styleUrls: ['./user-details.component.scss']
})
export class UserDetailsComponent implements OnInit {

  userId!: number;
  user!: User;
  showUpdateForm!: boolean;

  constructor(private activatedRoute: ActivatedRoute,
              private router: Router,
              private userService: UserService) {
  }

  ngOnInit(): void {

    this.activatedRoute.queryParamMap
      .pipe(concatMap((queryParams) => {
        this.userId = +queryParams.get('userId')!;
        return this.userService.getById(this.userId);
      }))
      .subscribe({
        next: (user) => {
          this.user = user;
        },
        error: () => {
          console.log("There is no such user.")
          void this.router.navigate(["/users"],
            {queryParams: {userId: this.userId}});
        }
      });
  }

  onUserDelete(): void {
    this.userService.deleteUser(this.userId)
      .subscribe(() => {
        void this.router.navigate(["/users"]);
      });
  }

  onUserUpdate(user: User): void {
    this.userService.updateUser(this.userId, user)
      .subscribe(() => {
        this.user = {...user};
      });
    this.showUpdateForm = false;
  }

}
