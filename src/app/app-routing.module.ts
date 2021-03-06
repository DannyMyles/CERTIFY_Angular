import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './pages/about/about.component';
import { FooterComponent } from './pages/footer/footer.component';
import { HomeComponent } from './pages/home/home.component';
import { NavComponent } from './pages/nav/nav.component';
import { UserpageComponent } from './pages/userpage/userpage.component';

const routes: Routes = [
  { path: 'nav', component: NavComponent},
  { path: 'home', component: HomeComponent},
  { path: 'about', component: AboutComponent },
  { path: 'userpage', component: UserpageComponent},
  { path: 'footer', component: FooterComponent },
  //  { path: 'Notfound', component: NotComponent},
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

export const routingComponents = [
  NavComponent,
  HomeComponent,
  AboutComponent,
  UserpageComponent,
  FooterComponent,
]