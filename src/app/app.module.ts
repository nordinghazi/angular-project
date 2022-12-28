import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { YouTubePlayerModule } from "@angular/youtube-player";
import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import { Route, RouterModule } from '@angular/router';
import { FiltroCochesPipe } from './pipes/filtro-coches.pipe';
import { ListadoCochesComponent } from './listado-coches/listado-coches.component';
import { FormularioCocheComponent } from './formulario-coche/formulario-coche.component';
import { AdminsControlComponent } from './admins-control/admins-control.component';
import { AnyadirAdminComponent } from './anyadir-admin/anyadir-admin.component';
import { ListaAdminsComponent } from './lista-admins/lista-admins.component';
import { AdminCochesComponent } from './admin-coches/admin-coches.component';
import { ClienteFormularioComponent } from './cliente-formulario/cliente-formulario.component';
import { SobreComponent } from './sobre/sobre.component';
import { FormulariosComponent } from './formularios/formularios.component';
import { FormularioLoginComponent } from './formulario-login/formulario-login.component';
import { AuthInterceptorInterceptor } from './auth-interceptor.interceptor';



const APP_ROUTES: Route[] = [
  { path: '', component: ListadoCochesComponent },
  { path: 'listadocoches', component: ListadoCochesComponent },
  { path: 'admins', component: AdminsControlComponent },
  { path: 'contactar', component: ClienteFormularioComponent },
  { path: 'sobre', component: SobreComponent },
  { path: 'login', component: FormularioLoginComponent },

];

@NgModule({
  declarations: [
    AdminCochesComponent,
    AppComponent,
    ListadoCochesComponent,
    FormularioCocheComponent,
    AdminsControlComponent,
    AnyadirAdminComponent,
    ListaAdminsComponent,
    ClienteFormularioComponent,
    SobreComponent,
    FormulariosComponent,
    FiltroCochesPipe,
    FormularioLoginComponent,


  ],
  imports: [
    RouterModule.forRoot(APP_ROUTES, { initialNavigation: 'enabledBlocking', onSameUrlNavigation: 'reload' }),
    BrowserModule,
    HttpClientModule,
    FormsModule,
    YouTubePlayerModule,
  ],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: AuthInterceptorInterceptor,
      multi: true,
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
