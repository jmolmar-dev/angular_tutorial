import { Routes } from '@angular/router';
import { ProfileComponent } from './components/profile/profile.component';
import { ListComponent } from './components/list/list.component';

export const routes: Routes = [
    {path:'list', component:ListComponent},
    {path:'profile',component:ProfileComponent},
    {path:'',redirectTo:'/list',pathMatch:'full'}
];
