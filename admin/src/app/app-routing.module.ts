import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from './auth.guard';
import { BankDetailsComponent } from './bank-details/bank-details.component';
import { CartComponent } from './cart/cart.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { HomeComponent } from './home/home.component';
import { LoginFormComponent } from './login-form/login-form.component';
import { QueUpdateComponent } from './que-update/que-update.component';
import { QuestionBankComponent } from './question-bank/question-bank.component';
import { QuestionUploadComponent } from './question-upload/question-upload.component';
import { RatingComponent } from './rating/rating.component';
import { RegistrationFormComponent } from './registration-form/registration-form.component';
import { ResetPasswordComponent } from './reset-password/reset-password.component';
import { VideoComponent } from './video/video.component';
import { TeachersQueBankComponent } from './teachers-que-bank/teachers-que-bank.component';
import { MyProfileComponent } from './my-profile/my-profile.component';
import { PersonalDetailsComponent } from './personal-details/personal-details.component';
import { MyUploadsComponent } from './my-uploads/my-uploads.component';
import { SidebarComponent } from './sidebar/sidebar.component';



const routes: Routes = [
  {
    path:'',
    component:HomeComponent
   } ,
 {
  path:'registration-form',
  component:RegistrationFormComponent
 } ,
 {
  path:'queUpdate/:id',
  component:QueUpdateComponent,
  canActivate:[AuthGuard]
 } ,
 {
  path:'loginForm',
  component:LoginFormComponent
 } ,
 {
  path:'bankDetails',
  component:BankDetailsComponent
 },
 {
  path:'rating',
  component:RatingComponent
 },
 {
  path:'myProfile',
  component:MyProfileComponent
 },
 {
  path:'personalDetails',
  component:PersonalDetailsComponent
 },
 {
  path:'myUploads',
  component:MyUploadsComponent
 },
 {
  path:'sideBar',
  component:SidebarComponent
 },
 {
  path:'dashboard',
  component:DashboardComponent
 },
 {
  path:'questionUpload',
  component:QuestionUploadComponent,
  //  canActivate:[AuthGuard]
 },
 {
  path:'questionBank',
  component:QuestionBankComponent,
  // canActivate:[AuthGuard]
 },
 {
  path:'teachersQueBank',
  component:TeachersQueBankComponent,
  // canActivate:[AuthGuard]
 },
 
 {
  path:'resetPassword',
  component:ResetPasswordComponent
 },
 {
  path:'video',
  component:VideoComponent
 },
 {
  path:'cart',
  component:CartComponent
 },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
