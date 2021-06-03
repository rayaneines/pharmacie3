import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {FormsModule }from'@angular/forms';
import { AngularFireModule } from '@angular/fire';
/*import { AngularFirestoreModule } from '@angular/fire/firestore';*/
import { AngularFireStorageModule } from '@angular/fire/storage';
import { AngularFireAuthModule } from '@angular/fire/auth';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AcceuilComponent } from './acceuil/acceuil.component';
import { VentesComponent } from './ventes/ventes.component';
import { ProduitsComponent } from './produits/produits.component';
import { AchatsComponent } from './achats/achats.component';
import { ParametresComponent } from './parametres/parametres.component';
import { ProfilComponent } from './profil/profil.component';
import { BarProduitComponent } from './bar-produit/bar-produit.component';
import { AjoutProduitComponent } from './ajout-produit/ajout-produit.component';
import { LacuneProduitComponent } from './lacune-produit/lacune-produit.component';
import { ExpireProduitComponent } from './expire-produit/expire-produit.component';
import { BarVenteComponent } from './bar-vente/bar-vente.component';
import { VenteGComponent } from './vente-g/vente-g.component';
import { VenteRetourneComponent } from './vente-retourne/vente-retourne.component';
import { VenteJourComponent } from './vente-jour/vente-jour.component';
import { VentePaimentComponent } from './vente-paiment/vente-paiment.component';
import { BarAchatComponent } from './bar-achat/bar-achat.component';
import { AchatAffichComponent } from './achat-affich/achat-affich.component';
import { AchatAjoutFournisseurComponent } from './achat-ajout-fournisseur/achat-ajout-fournisseur.component';
import { AchatListeFournisseurComponent } from './achat-liste-fournisseur/achat-liste-fournisseur.component';
import { ClientComponent } from './client/client.component';
import { ProfilClientComponent } from './profil-client/profil-client.component';
import { LoginClientComponent } from './login-client/login-client.component';
import { SignUpClientComponent } from './sign-up-client/sign-up-client.component';
import { LoginAdminComponent } from './login-admin/login-admin.component';
import { SignUpAdminComponent } from './sign-up-admin/sign-up-admin.component';
import { UnitComponent } from './unit/unit.component';
import { BarParametreComponent } from './bar-parametre/bar-parametre.component';
import {environment} from 'src/environments/environment';

@NgModule({
  declarations: [
    AppComponent,
    AcceuilComponent,
    VentesComponent,
    ProduitsComponent,
    AchatsComponent,
    ParametresComponent,
    ProfilComponent,
    BarProduitComponent,
    AjoutProduitComponent,
    LacuneProduitComponent,
    ExpireProduitComponent,
    BarVenteComponent,
    VenteGComponent,
    VenteRetourneComponent,
    VenteJourComponent,
    VentePaimentComponent,
    BarAchatComponent,
    AchatAffichComponent,
    AchatAjoutFournisseurComponent,
    AchatListeFournisseurComponent,
    ClientComponent,
    ProfilClientComponent,
    LoginClientComponent,
    SignUpClientComponent,
    LoginAdminComponent,
    SignUpAdminComponent,
    UnitComponent,
    BarParametreComponent
  ],
  imports: [
    BrowserModule, AppRoutingModule/*,AngularFirestoreModule,
   AngularFireStorageModule,
   /* FormsModule,AngularFireAuthModule,AngularFireAuth,
    AngularFireModule.initializeApp(environment.firebase)*/
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
