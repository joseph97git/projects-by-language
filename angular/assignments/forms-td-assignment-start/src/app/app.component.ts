import { Component, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  @ViewChild("f", {static: false}) signupForm: NgForm;
  subscriptions = ['Basic', 'Advanced', 'Pro'];
  defaultSub = 'Advanced';
  submitted = false;
  user = {
    email: '',
    subscriptions: '',
    password: ''
  }

  onSubmit() {
    this.submitted = true;
    this.user.email = this.signupForm.value.email;
    this.user.subscriptions = this.signupForm.value.subscriptions;
    this.user.password = this.signupForm.value.password;

    this.signupForm.reset();
  }
}
