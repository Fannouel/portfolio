import { Routes } from '@angular/router';
import { Home } from './home/home';
import { Project } from './components/project/project';
import { About } from './components/about/about';

export const routes: Routes = [
    { path:'', component: Home },
    { path:'home', component: Home },
    { path: 'projects', component: Project},
    { path: 'about', component: About}
];
