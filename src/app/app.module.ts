import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { SignUpComponent } from './sign-up/sign-up.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { ResetComponent } from './reset/reset.component';
import { HabitDetailsComponent } from './habit-details/habit-details.component';
import { AddHabitComponent } from './add-habit/add-habit.component';
import { EditHabitComponent } from './edit-habit/edit-habit.component';
import { HabitListComponent } from './habit-list/habit-list.component';
import { HttpClientModule } from '@angular/common/http';
import { HabitService } from './habit.service';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    LoginComponent,
    SignUpComponent,
    HeaderComponent,
    FooterComponent,
    ResetComponent,
    HabitDetailsComponent,
    AddHabitComponent,
    EditHabitComponent,
    HabitListComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [HabitService],
  bootstrap: [AppComponent]
})
export class AppModule { }
