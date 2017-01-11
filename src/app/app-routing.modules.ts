import { RouterModule, Routes } from '@angular/router';
import { NgModule, ModuleWithProviders } from '@angular/core';
import { MainContainerComponent } from './components/containers/main-container/main-container.component';
import { NotesContainerComponent } from './components/containers/notes-container/notes-container.component';
import { AboutContainerComponent } from './components/containers/about-container/about-container.component';
import { AuthContainerComponent } from './components/containers/auth-container/auth-container.component';

import { AuthService} from './services/auth.service';

export const routes: Routes = [
    {
        path: '',
        component: MainContainerComponent,
        //canActivate: [AuthService],
        children: [
            {
                path: '',
                component: NotesContainerComponent
            }
            ,
            {
                path: 'about',
                component: AboutContainerComponent
            }
        ]
    }
    ,
    {
        path: 'auth',
        component: AuthContainerComponent
    }
    ,
    {
        path: '**',
        redirectTo: ''
    }
];


@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule{}