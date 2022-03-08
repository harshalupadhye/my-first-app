import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './component/header/header.component';
import { CreateFormComponent } from './component/create-form/create-form.component';
import { FooterComponent } from './component/footer/footer.component';
import { HomepageComponent } from './component/homepage/homepage.component';
import { SeeAllComponent } from './component/see-all/see-all.component';
import { SearchComponent } from './component/search/search.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    CreateFormComponent,
    FooterComponent,
    HomepageComponent,
    SeeAllComponent,
    SearchComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
