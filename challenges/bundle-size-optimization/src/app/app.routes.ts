import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { SettingsComponent } from './pages/settings/settings.component';
import { CreateEventComponent } from './pages/create-event/create-event.component';
import { AboutComponent } from './pages/about/about.component';
import { EventDetailComponent } from './pages/event-detail/event-detail.component';

export const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'event/:id', component: EventDetailComponent },
  { path: 'create', component: CreateEventComponent },
  { path: 'dashboard', component: DashboardComponent },
  { path: 'settings', component: SettingsComponent },
  { path: 'about', component: AboutComponent },
];
