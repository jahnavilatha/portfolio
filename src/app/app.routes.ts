import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { NavbarComponent } from './navbar/navbar.component';
import { SkillsComponent } from './skills/skills.component';
import { BackComponent } from './back/back.component';

export const routes: Routes=[
    {path:'',redirectTo:'home',pathMatch:'full'},
    {path:'home',component:HomeComponent},
    {path:'navbar',component:NavbarComponent},
    { path:'skills',component: SkillsComponent },
    { path: 'back',component: BackComponent},
];

