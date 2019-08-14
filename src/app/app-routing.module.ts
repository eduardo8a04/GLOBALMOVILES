import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', redirectTo: 'tabs/tab1', pathMatch: 'full' },
  { path: '', loadChildren: './tabs/tabs.module#TabsPageModule' },
  { path: 'login', loadChildren: './componentes/login/login.module#LoginPageModule' },
  { path: 'adminlist', loadChildren: './componentes/adminlist/adminlist.module#AdminlistPageModule' },
  { path: 'mapa', loadChildren: './mapa/mapa.module#MapaPageModule' },
];
@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
