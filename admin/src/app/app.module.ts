// import { FlexLayoutModule } from '@angular/flex-layout';
import {MatDialogModule} from '@angular/material/dialog';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { RegistrationFormComponent } from './registration-form/registration-form.component';
import { LoginFormComponent } from './login-form/login-form.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { MatInputModule } from '@angular/material/input';
import { BankDetailsComponent } from './bank-details/bank-details.component';
import {MatIconModule, MatNativeDateModule, MatOptionModule} from '@angular/material';
import { MatSelectModule } from '@angular/material';
import { MatFormFieldModule } from '@angular/material/form-field'
import {MatRadioModule} from '@angular/material/radio';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';
import { QuestionUploadComponent } from './question-upload/question-upload.component';
import { HomeComponent } from './home/home.component';
import { CommonModule } from '@angular/common';
import { ResetPasswordComponent } from './reset-password/reset-password.component';
import {MatGridListModule} from '@angular/material/grid-list';
import {MatTabsModule} from '@angular/material/tabs';
import { FooterComponent } from './footer/footer.component';
import { CartComponent } from './cart/cart.component';
import { QuestionBankComponent } from './question-bank/question-bank.component';
import { QueUpdateComponent } from './que-update/que-update.component';
import { UserRegisterServiceService } from './services/user-register-service.service';
import { DashboardComponent } from './dashboard/dashboard.component';
import {MatTableModule} from '@angular/material/table';
import { RatingComponent } from './rating/rating.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import {MatToolbarModule} from '@angular/material/toolbar';
import { TeachersQueBankComponent } from './teachers-que-bank/teachers-que-bank.component';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatMenuModule } from '@angular/material/menu';
import { MatDividerModule } from '@angular/material/divider';
import { MatListModule } from '@angular/material/list';
import { MyProfileComponent } from './my-profile/my-profile.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { PersonalDetailsComponent } from './personal-details/personal-details.component';
import { MyUploadsComponent } from './my-uploads/my-uploads.component';
import { DraftComponent } from './draft/draft.component';
import { CreateCourseComponent } from './create-course/create-course.component';
import { VideoComponent } from './video/video.component';
import { PaymentComponent } from './payment/payment.component';
import { ElementaryComponent } from './question-bank/elementary/elementary.component';
import { CourseCardsComponent } from './course-cards/course-cards.component';
import { SubmitQueComponent } from './submit-que/submit-que.component';
import { CourseChapterComponent } from './course-chapter/course-chapter.component';
import { TeachersProfileComponent } from './teachers-profile/teachers-profile.component';
import {MatDatepickerModule} from '@angular/material/datepicker';
import { ChapterComponent } from './chapter/chapter.component';
import { CourseOverviewComponent } from './course-overview/course-overview.component';
import { DashboardSidenavComponent } from './dashboard/dashboard-sidenav/dashboard-sidenav.component';
import { SubjectComponent } from './subject/subject.component';
// import {MatSnackBar} from '@angular/material/snack-bar';
@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    RegistrationFormComponent,
    LoginFormComponent,
    BankDetailsComponent,
    QuestionUploadComponent,
    HomeComponent,
    ResetPasswordComponent,
  VideoComponent,
    FooterComponent,
    CartComponent,
    QuestionBankComponent,
    QueUpdateComponent,
    DashboardComponent,
    MyProfileComponent,
    RatingComponent,
    TeachersQueBankComponent,
    SidebarComponent,
    PersonalDetailsComponent,
    MyUploadsComponent,
    DraftComponent,
    CreateCourseComponent,
    PaymentComponent,
    ElementaryComponent,
    CourseCardsComponent,
    SubmitQueComponent,
    CourseChapterComponent,
    TeachersProfileComponent,
    ChapterComponent,
    CourseOverviewComponent,
    DashboardSidenavComponent,
    SubjectComponent,
     
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    MatInputModule,
    MatFormFieldModule,
    MatButtonModule,
     MatIconModule,
    MatOptionModule,
    MatCardModule,
    MatSelectModule,
     MatRadioModule,
    BrowserAnimationsModule,
    HttpClientModule,
    CommonModule ,  
MatGridListModule,
    MatTabsModule,
    MatTableModule,
    NgbModule,
    MatToolbarModule,
    MatDialogModule,
    MatSidenavModule,
    MatDividerModule,
    MatListModule,
    MatMenuModule,
    MatDatepickerModule,
    MatNativeDateModule 
    // FlexLayoutModule,
  ],
  providers: [UserRegisterServiceService,MatDatepickerModule ],
  bootstrap: [AppComponent]
  // schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class AppModule { }
