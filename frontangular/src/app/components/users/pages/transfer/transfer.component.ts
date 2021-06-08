import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { NbToastrService } from '@nebular/theme';
/* import { NbToastrService } from '@nebular/theme'; */
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-transfer',
  templateUrl: './transfer.component.html',
  styleUrls: ['./transfer.component.scss']
})
export class TransferComponent implements OnInit {

  form: FormGroup;
  persons: any[];

  constructor(private userService: UserService,
    private toastrService: NbToastrService,
    private formBuilder: FormBuilder,
    private router: Router) {

    this.buildForm();
  }

  buildForm() {
    this.form = this.formBuilder.group({
      fullname: ['', Validators.required],
      birth: ['', Validators.required],
      id_father: ['', Validators.required],
      id_mother: ['', Validators.required],
    });
  }

  ngOnInit(): void {
    this.service();
  }

  service() {
    this.userService.get().subscribe(data => {
      this.persons = data;
    });
  }
  send() {
    this.userService.setNewPerson(this.form.value).subscribe(data => {

      if (data.error == undefined) {
        this.toastrService.show(`${data.success}`);
        this.router.navigate(['/person/list']);
      }
    },
      (err: any) => {
        this.toastrService.show(`Hijo existente`,);
      }
    );
  }

}
