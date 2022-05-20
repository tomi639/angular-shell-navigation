import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EditPageComponent } from './edit-page/edit-page.component';
import { MainPageComponent } from './main-page/main-page.component';

const routes: Routes = [
  { path: 'home', component: MainPageComponent },
  { path: 'actions/edit', component: EditPageComponent },
  { path: '', component: MainPageComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
