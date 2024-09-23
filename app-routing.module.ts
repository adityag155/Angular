import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TestComponent } from './test/test.component';
import { EmpComponent } from './emp/emp.component';
import { StudComponent } from './stud/stud.component';

const routes: Routes = [
{path:'testpath', component:TestComponent},
{path:'emppath', component:EmpComponent},
{path:'studpath', component:StudComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
