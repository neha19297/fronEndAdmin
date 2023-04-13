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
import { TeachersQueBankComponent } from './teachers-que-bank/teachers-que-bank.component';
import { MyProfileComponent } from './my-profile/my-profile.component';
import { PersonalDetailsComponent } from './personal-details/personal-details.component';
import { MyUploadsComponent } from './my-uploads/my-uploads.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { DraftComponent } from './draft/draft.component';
import { CreateCourseComponent } from './create-course/create-course.component';
import { VideoComponent } from './video/video.component';
import { PaymentComponent } from './payment/payment.component';
import { ElementaryComponent } from './question-bank/elementary/elementary.component';
import { CourseCardsComponent } from './course-cards/course-cards.component';
import { SubmitQueComponent } from './submit-que/submit-que.component';
import { CourseChapterComponent } from './course-chapter/course-chapter.component';
import { TeachersProfileComponent } from './teachers-profile/teachers-profile.component';
import { ChapterComponent } from './chapter/chapter.component';
import { CourseOverviewComponent } from './course-overview/course-overview.component';
import { SubjectComponent } from './subject/subject.component';



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
  path:'payment',
  component:PaymentComponent
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
  path:'draft',
  component:DraftComponent
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
  path:'createCourse',
  component:CreateCourseComponent,
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
 {
  path:'elementary',
  component:ElementaryComponent
 },
 {
  path:'courseCard',
  component:CourseCardsComponent
 },
 {
  path:'courseChapter',
  component:CourseChapterComponent
 },
 {
  path:'submitQue',
  component:SubmitQueComponent
 },
 {
  path:'teachersProfile',
  component:TeachersProfileComponent
 },
 {
  path:'chapter',
  component:ChapterComponent
 },
 {
  path:'courseOverview',
  component:CourseOverviewComponent
 },
 {
  path:'subject',
  component:SubjectComponent
 },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
