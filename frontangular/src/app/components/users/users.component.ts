import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NbMenuItem, NbMenuService, NbSidebarService } from '@nebular/theme';
import { filter, map } from 'rxjs/operators';
import { TokenService } from 'src/app/authentication/_auth/token.service';
import { TransferService } from 'src/app/services/transfer.service';


@Component({
  selector: 'users-root',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss']
})
export class UsersComponent implements OnInit {
  isLogged = false;
  items: NbMenuItem[] = [
  /*   {
      title: 'Inicio',
      icon: 'home-outline',
      link: '/nebular/home',
      home: true,
      hidden: this.tokenService.getPermission() == "1"
    }, */
    {
      title: 'Lista',
      icon: 'people-outline',
      link: '/person/list',
      hidden: this.tokenService.getPermission() == "2"
    },
    {
      title: 'Agregar',
      icon: 'repeat-outline',
      link: '/person/transfer',
      hidden: this.tokenService.getPermission() == "2"
    }/* ,
    {
      title: 'Cerrar sesión',
      icon: 'eye-off-2-outline',
      hidden: false
    } */
  ];


  constructor(private readonly sidebarService: NbSidebarService,
    private nbMenuService: NbMenuService,
    private router: Router,
    private tokenService: TokenService,
    public transferService: TransferService) {

  }

  ngOnInit() {
    //const helper = new JwtHelperService();
    if (this.tokenService.getToken()) {

      this.nbMenuService.onItemClick()
        .subscribe(title => {
          if (title.item.title == 'Cerrar sesión') {
            this.tokenService.logOut();
          }
        }
        );


    } else {

    }

  }

  toggleSidebar(): boolean {
    this.sidebarService.toggle();
    return false;
  }


}
