import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ChipsModule } from 'primeng/chips';
import { Card, CardModule } from 'primeng/card';
import { Table, TableModule } from 'primeng/table';
import { MenubarModule } from 'primeng/menubar';
import { ButtonModule } from 'primeng/button';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { JobSeekersComponent } from './job-seekers/job-seekers.component';
import { DialogModule } from 'primeng/dialog';
import { JobSeekerPopUpWindowComponent } from './job-seeker-pop-up-window/job-seeker-pop-up-window.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

@NgModule({
  declarations: [
    AppComponent,
    JobSeekersComponent,
    JobSeekerPopUpWindowComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ChipsModule,
    CardModule,
    ButtonModule,
    TableModule,
    MenubarModule,
    DialogModule,
    BrowserAnimationsModule
 

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
