import { Component, OnInit } from '@angular/core';
import { Validators, FormBuilder, FormControl } from '@angular/forms';
import { UsersService } from 'src/app/services/users.service';

@Component({
  selector: 'app-user-form',
  templateUrl: './user-form.component.html',
  styleUrls: ['./user-form.component.css'],
})
export class UserFormComponent {
  userForm = this.fb.group({
    firstName: [
      '',
      [
        Validators.required,
        Validators.maxLength(25),
        Validators.minLength(3),
        Validators.pattern('^[a-zA-Zs]+$'),
      ],
    ],
    lastName: [
      '',
      [
        Validators.required,
        Validators.maxLength(25),
        Validators.minLength(3),
        Validators.pattern('^[a-zA-Zs]+$'),
      ],
    ],
    email: ['', [Validators.required, Validators.email]],
    phone: ['', [Validators.required, Validators.pattern('^[0-9-]+$')]],
    address: ['', Validators.maxLength(50)],
  });

  constructor(private usersService: UsersService, private fb: FormBuilder) {}

  onSubmit(): void {
    console.log(this.userForm);
    this.usersService.post(this.userForm.value).subscribe();
  }

  get firstName() {
    return this.userForm.get('firstName') as FormControl;
  }

  get lastName() {
    return this.userForm.get('lastName');
  }

  get email() {
    return this.userForm.get('email');
  }

  get phone() {
    return this.userForm.get('phone');
  }

  get address() {
    return this.userForm.get('address');
  }
}

//this.usersService.getEntity("D2743AC3-83A5-40A9-324D-08DA236C3BCC").subscribe((x:any) => console.log(x));
/*this.usersService.put("62FCFD26-63DD-44D4-B573-B663DDA878FB",{
  firstName: 'Dog', 
  lastName: 'Grey', 
  email: 'example@mail.com', 
  phone: '0750400400',
  address: "Oradea"
}).subscribe();*/
