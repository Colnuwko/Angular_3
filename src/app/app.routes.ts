import { Routes } from '@angular/router';
import { AboutComponent } from './pages/about/about.component';
import { HomeComponent } from './pages/home/home.component';
import { TestComponent } from './pages/test/test.component';
import { confirmGuard } from './core/guards/confirm.guard';


export const routes: Routes = [
    { path: 'about', component: AboutComponent, canActivate: [confirmGuard] },
    { path: 'home', component: HomeComponent },
    { path: 'test', component: TestComponent, canDeactivate: [confirmGuard]}];

