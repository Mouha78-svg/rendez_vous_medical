import { Component, OnInit } from '@angular/core';
import { AuthService } from './auth.service';
import { Route, Router } from '@angular/router';
import { LoadingController } from '@ionic/angular';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-auth',
  templateUrl: './auth.page.html',
  styleUrls: ['./auth.page.scss'],
  standalone: false,
})
export class AuthPage implements OnInit {
  isLoading = false;
  isLogin = true;
  constructor(
    private authService: AuthService,
    private router: Router,
    private loadingCTRL: LoadingController
  ) {}

  ngOnInit() {}
  onLogIn() {
    this.isLoading = true;
    this.authService.login();
    this.loadingCTRL
      .create({ keyboardClose: true, message: 'se connecter' })
      .then((loagingEL) => {
        loagingEL.present();
        setTimeout(() => {
          loagingEL.dismiss();
          this.isLoading = false;
          this.router.navigateByUrl('/places/tabs/discover');
        }, 1500);
      });
  }

  onSubmit(form: NgForm) {
    if (!form.valid) {
      return;
    }

    const email = form.value.email;
    const password = form.value.password;
    console.log(email + ' ', password);
    if (this.isLogin) {
      // send a request to login server
    } else {
      // send a request to singupp server
    }
  }
  onSwitchAuthMode() {
    this.isLogin = !this.isLogin;
  }
}
