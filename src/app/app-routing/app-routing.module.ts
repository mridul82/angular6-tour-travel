import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ContentComponent } from '../content/content.component';
import { LoginComponent } from '../login/login.component';
import { RegisterComponent } from  '../register/register.component';

const routes: Routes = [
	{path: '', component: ContentComponent},
	{path: 'login', component: LoginComponent},
	{path: 'register', component: RegisterComponent}
]

@NgModule({
  imports: [
    RouterModule.forRoot(routes)
  ],
    exports: [
            RouterModule
        ],
  declarations: []
})
export class AppRoutingModule { }
