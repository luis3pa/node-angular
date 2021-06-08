import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { User } from 'src/app/models/user';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  users: User[];

  settings = {};

  constructor(private userService: UserService,
    private router: Router) { }

  ngOnInit(): void {
    this.userService.get().subscribe(data => {
      this.users = data;
    });


    this.settings = {
      actions: {
        columnTitle: '',
        add: false,
        edit: false,
        delete: false,
        position: 'right'
      },
      columns: {
        id: {
          title: 'ID'
        },
        fullname: {
          title: 'Nombre'
        },
        birth: {
          title: 'Fecha',
        }
      }
    };
  }

  jump(){
    this.router.navigate(['/person/transfer']);
  }

}
