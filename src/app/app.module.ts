import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';
import { VetrinaComponent } from './vetrina/vetrina.component';
import { CheescakeComponent } from './cheescake/cheescake.component';
import { TiramisuComponent } from './tiramisu/tiramisu.component';
import { CupcakesComponent } from './cupcakes/cupcakes.component';
import { TortaparadisoComponent } from './tortaparadiso/tortaparadiso.component';
import { TortafragoleComponent } from './tortafragole/tortafragole.component';
import { StrudelComponent } from './strudel/strudel.component';
// material angular
import { MatIconModule } from '@angular/material/icon';
import {MatButtonModule} from '@angular/material/button';


const appRoutes: Routes = [
  { path: '', component: VetrinaComponent },
  { path: 'cheesecake', component: CheescakeComponent },
  { path: 'tiramisu', component: TiramisuComponent },
  { path: 'cupcakes', component: CupcakesComponent },
  { path: 'torta-fragole', component: TortafragoleComponent },
  { path: 'torta-paradiso', component: TortaparadisoComponent },
  { path: 'strudel', component: StrudelComponent }
];
@NgModule({
  declarations: [
    AppComponent,
    VetrinaComponent,
    CheescakeComponent,
    TiramisuComponent,
    CupcakesComponent,
    TortaparadisoComponent,
    TortafragoleComponent,
    StrudelComponent
  ],
  imports: [
    BrowserModule,
    MatIconModule,
    MatButtonModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
