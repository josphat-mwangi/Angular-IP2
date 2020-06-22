import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { ProfileService } from './github-service/profile.service';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ProfileComponent } from './profile/profile.component';
import { HighlightDirective } from './highlight.directive';
import { ProfileFormComponent } from './profile-form/profile-form.component';
import { FormComponent } from './form/form.component';

@NgModule({
  declarations: [
    AppComponent,
    ProfileComponent,
    HighlightDirective,
    ProfileFormComponent,
    FormComponent,
  ],
  imports: [BrowserModule, AppRoutingModule, FormsModule, HttpClientModule],
  providers: [ProfileService],
  bootstrap: [AppComponent],
})
export class AppModule {}
