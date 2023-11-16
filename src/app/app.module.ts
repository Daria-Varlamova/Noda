import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { EntryComponent } from './components/entry/entry.component';
import { WelcomeComponent } from './components/welcome/welcome.component';
import { StartComponent } from './components/start/start.component';
import { FooterComponent } from './components/footer/footer.component';
import { ComponentsModule } from './core/modules/components/components.module';
import { SwiperModule } from 'swiper/angular';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    EntryComponent,
    WelcomeComponent,
    StartComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    ComponentsModule,
    SwiperModule,
    BrowserAnimationsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
