import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';
import { AboutComponent } from './about/about.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { ForgotPasswordComponent } from './forgot-password/forgot-password.component';
import { WelcomepageComponent } from './welcomepage/welcomepage.component';
import { OtpComponent } from './otp/otp.component';
import { ChangepasswordComponent } from './changepassword/changepassword.component';
import { CollapseComponent } from './collapse/collapse.component';



 const routes: Routes = [
  
   {path: '', redirectTo:"/login",pathMatch :"full"},
    {path: 'login', component: LoginComponent},
   {path: 'signup', component: SignupComponent},
   {path: 'about', component: AboutComponent},
   {path: 'forgotpassword', component: ForgotPasswordComponent},
   {path: 'welcome', component: WelcomepageComponent},
   {path:'OTPverification', component:OtpComponent},
   {path:'changePassword', component:ChangepasswordComponent},
   {path:'collapse',component:CollapseComponent},
   {path: '**', component: PageNotFoundComponent},
  
 ];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { 

}
export const routingComponents=[LoginComponent,
  SignupComponent,
  AboutComponent,
  ForgotPasswordComponent,
  WelcomepageComponent,
  OtpComponent,
  ChangepasswordComponent,
  CollapseComponent,
  PageNotFoundComponent
 ]
