import { NgModule }       from '@angular/core';
import { BrowserModule }  from '@angular/platform-browser';

import { AppRoutingModule }         from './app-routing.module';
import { AppComponent }             from './app.component';
import { BrowserAnimationsModule }  from '@angular/platform-browser/animations';

//Components
import { HeaderComponent }    from './components/templates/header/header.component';
import { FooterComponent }    from './components/templates/footer/footer.component';
import { NavComponent }       from './components/templates/nav/nav.component';
import { HomeComponent }      from './views/home/home.component';
import { ContactComponent }   from './views/contact/contact.component';

//Material
import { MatToolbarModule }   from '@angular/material/toolbar';
import { MatSidenavModule }   from '@angular/material/sidenav';
import { MatListModule }      from '@angular/material/list';
import { MatCardModule }      from '@angular/material/card';
import { CurriculumComponent } from './views/curriculum/curriculum.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    NavComponent,
    HomeComponent,
    ContactComponent,
    CurriculumComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatSidenavModule,
    MatListModule,
    MatCardModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
