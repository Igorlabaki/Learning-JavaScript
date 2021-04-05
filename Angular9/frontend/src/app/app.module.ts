import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { HeaderComponent }  from './components/templates/header/header.component';
import { FooterComponent }  from './components/templates/footer/footer.component';
import { NavComponent }     from './components/templates/nav/nav.component'
import {HttpClientModule}   from '@angular/common/http'

import{ MatToolbarModule }    from '@angular/material/toolbar';
import{ MatSidenavModule }    from '@angular/material/sidenav';
import{ MatCardModule }       from '@angular/material/card';
import{ MatListModule }       from '@angular/material/list';
import { HomeComponent }      from './views/home/home.component';
import { ProductCrudComponent } from './views/product-crud/product-crud.component';
import { RedDirective }       from './directives/red.directive';
import { ForDirective }       from './directives/for.directive';
import{ MatButtonModule }     from '@angular/material/button';
import { MatSnackBarModule }  from '@angular/material/snack-bar';
import { ProductCreateComponent } from './components/product/product-create/product-create.component';
import  {FormsModule}        from '@angular/forms';
import  {MatFormFieldModule} from'@angular/material/form-field';
import  {MatInputModule}      from '@angular/material/input';
import { ProductReadComponent } from './components/product/product-read/product-read.component';
import { MatTableModule } from '@angular/material/table';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatSortModule } from '@angular/material/sort';
import { ProductUpdateComponent } from './components/product/product-update/product-update.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    NavComponent,
    HomeComponent,
    ProductCrudComponent,
    RedDirective,
    ForDirective,
    ProductCreateComponent,
    ProductReadComponent,
    ProductUpdateComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatListModule,
    MatSidenavModule,
    MatCardModule,
    MatButtonModule,
    MatSnackBarModule,
    HttpClientModule,
    FormsModule,
    MatFormFieldModule,
    MatInputModule,
    MatTableModule,
    MatPaginatorModule,
    MatSortModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
