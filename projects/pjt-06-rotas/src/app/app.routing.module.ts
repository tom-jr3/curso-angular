import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { AuthGuard } from "./guards/auth.guard";
import { HomeComponent } from "./home/home.component";
import { LoginComponent } from "./login/login.component";


const appRoutes: Routes = [
    { path: 'cursos', loadChildren: () => import('./cursos/cursos.module').then(mod => mod.CursosModule), canActivate: [AuthGuard] },
    { path: 'alunos', loadChildren: () => import('./alunos/alunos.module').then(mod => mod.AlunosModule), canActivate: [AuthGuard]},
    { path: 'login', component: LoginComponent},
    { path: '', component: HomeComponent, canActivate: [AuthGuard]},
];

@NgModule({
    imports: [RouterModule.forRoot(appRoutes)],
    exports: [RouterModule]
})
export class AppRoutingModule {

}