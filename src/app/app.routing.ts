// IMPORTAR MÓDULOS DEL ROUTER
import {ModuleWithProviders} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';

// IMPORTAR COMPONENTES
import {IndexComponent} from './components/index/index.component';

// ARRAY DE RUTAS

const appRoutes: Routes = [
    {path: '', component: IndexComponent}
    {path: '**', component: IndexComponent}
]

//EXPORTAR CONFIGURACIÓN
export const appRoutingProviders: any[] = [];

export const routing: ModuleWithProviders<any> = RouterModule.forRoot(appRoutes);