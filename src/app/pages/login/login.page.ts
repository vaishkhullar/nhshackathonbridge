import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {
  //Form Related
  public loginForm: FormGroup;

  constructor(private formBuilder: FormBuilder) {
    this.loginForm = this.formBuilder.group({
      firstName: ['', Validators.compose([Validators.required])],
    });
    console.log(this.loginForm.value);
  }

  public insertUpdate(){
    api.insert({
      happy: this.loginForm.value["happy"]
    })
  }
  ngOnInit() {}
}
