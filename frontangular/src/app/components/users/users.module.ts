import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UsersComponent } from './users.component';
import { UsersRoutingModule } from './users-routing.module';
import { LoginComponent } from './pages/login/login.component';
import { Ng2SmartTableModule } from 'ng2-smart-table';
import { NbThemeModule, NbLayoutModule, NbIconModule, NbSidebarModule, NbMenuModule, NbCardModule, NbInputModule, NbButtonModule, NbToastrService, NbToastrModule, NbSelectModule, NbDatepickerModule } from '@nebular/theme';
import { NbEvaIconsModule } from '@nebular/eva-icons';
import { NgxSpinnerModule } from "ngx-spinner";
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { TransferComponent } from './pages/transfer/transfer.component';


@NgModule({
  declarations: [UsersComponent, LoginComponent, TransferComponent],
  imports: [
    CommonModule,
    UsersRoutingModule,
    Ng2SmartTableModule,
    NbThemeModule.forRoot({ name: 'default' }),
    NbLayoutModule,
    NbEvaIconsModule,
    NbIconModule,
    NbSidebarModule.forRoot(),
    NbMenuModule.forRoot(),
    NgxSpinnerModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    NbCardModule,
    NbInputModule,
    NbButtonModule,
    NbSelectModule,
    NbDatepickerModule.forRoot(),
    NbToastrModule.forRoot(),
    //  NbToastrService,

  ],
  // providers: [interceptorProvider],
})
export class UsersModule { }
