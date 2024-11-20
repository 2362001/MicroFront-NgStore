import { Routes } from '@angular/router';
import {loadRemoteModule} from '@angular-architects/module-federation'

export const routes: Routes = [
    {
        path: '',
        loadComponent: ()=> loadRemoteModule(
            {
                type: 'module',
                remoteEntry: 'http://localhost:3000/remoteEntry.js',
                exposedModule: './Component'
            }
        ).then(m => m.AppComponent)
    }
];
