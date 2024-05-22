import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ColumbiaComponent } from "./columbia/columbia.component";
import { KansasComponent } from "./kansas/kansas.component";
import {WelcomeComponent} from "./welcome/welcome.component";

const routes: Routes = [
  { path: '', component: WelcomeComponent },
  { path: 'LWX', component: ColumbiaComponent },
  { path: 'TOP', component: KansasComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
