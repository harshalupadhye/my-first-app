import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CreateFormComponent } from './component/create-form/create-form.component';
import { HomepageComponent } from './component/homepage/homepage.component';
import { SeeAllComponent } from './component/see-all/see-all.component';
import { SearchComponent } from './component/search/search.component';
const routes: Routes = [
  { path: '', component: HomepageComponent },
  { path: 'create', component: CreateFormComponent },
  { path: 'all', component: SeeAllComponent },
  { path: 'search', component: SearchComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
