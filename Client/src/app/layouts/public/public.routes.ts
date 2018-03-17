

//Modules
import {RouterModule, Routes} from '@angular/router';

//Components
import {HomeComponent} from './../../modules/usm/components/home/home.component';
import { LoginComponent } from './../../modules/usm/components/login/login.component';
import { RegistrationComponent } from './../../modules/usm/components/registration/registration.component';
import { TestfrmComponent } from '../../modules/usm/testfrm/testfrm.component';


export const PUBLIC_ROUTES : Routes = [
    {path : '', component: HomeComponent},
    {path : 'login', component: LoginComponent},
    {path : 'register', component: RegistrationComponent},
    {path : 'upload', component: TestfrmComponent}
];


