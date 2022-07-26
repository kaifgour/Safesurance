import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './about/about.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { PremiumComponent } from './premium/premium.component';



const routes: Routes = [
  {path:"",component:HomeComponent},
  {path:"premium",component:PremiumComponent},
  {path:"about",component:AboutComponent},
  {path:"login",component:LoginComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
