import { PeopleDetailsComponent } from './people-details/people-details.component';
import { FavouriteComponent } from './favourite/favourite.component';
import { MoviDetailsComponent } from './movi-details/movi-details.component';
import { NotfoundComponent } from './notfound/notfound.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { NetworksComponent } from './networks/networks.component';
import { PeopleComponent } from './people/people.component';
import { TvshowComponent } from './tvshow/tvshow.component';
import { MoviesComponent } from './movies/movies.component';
import { AboutComponent } from './about/about.component';
import { HomeComponent } from './home/home.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from './auth.guard';
import { TvDetailsComponent } from './tv-details/tv-details.component';

const routes: Routes = [
  {path:'',redirectTo:'home',pathMatch:'full'},
  {path:'home',canActivate:[AuthGuard] ,component:HomeComponent},
  {path:'about', canActivate:[AuthGuard],component:AboutComponent},
  {path:'movies',canActivate:[AuthGuard],component:MoviesComponent},
  {path:'people',canActivate:[AuthGuard],component:PeopleComponent},
  {path:'networks',canActivate:[AuthGuard],component:NetworksComponent},
  {path:'moviDetails/:id',canActivate:[AuthGuard],component:MoviDetailsComponent},
  
  {path:'register',component:RegisterComponent},
  {path:'login',component:LoginComponent},
  {path:'tv',canActivate:[AuthGuard],component:TvshowComponent},
  {path:'tvdetails/:id',canActivate:[AuthGuard],component:TvDetailsComponent},
  {path:'peopledetails/:id',canActivate:[AuthGuard],component:PeopleDetailsComponent},
  {path:'favorite',canActivate:[AuthGuard],component:FavouriteComponent},

  
  {
    path: 'settings',
    loadChildren: () => import('./settings/settings.module').then(m => m.SettingsModule)
  },
  {path:'**',component:NotfoundComponent}
 
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
