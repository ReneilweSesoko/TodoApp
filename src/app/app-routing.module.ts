import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { TaskAdderComponent } from './components/task-adder/task-adder.component';

const routes: Routes = [
  {path: 'home',component: HomeComponent},
  {path: 'add', component: TaskAdderComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
