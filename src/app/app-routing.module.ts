import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AcceuilComponent } from './acceuil/acceuil.component';
import { AchatAffichComponent } from './achat-affich/achat-affich.component';
import { AchatAjoutFournisseurComponent } from './achat-ajout-fournisseur/achat-ajout-fournisseur.component';
import { AchatListeFournisseurComponent } from './achat-liste-fournisseur/achat-liste-fournisseur.component';
import { AchatsComponent } from './achats/achats.component';
import { AjoutProduitComponent } from './ajout-produit/ajout-produit.component';
import { BarAchatComponent } from './bar-achat/bar-achat.component';
import { BarParametreComponent } from './bar-parametre/bar-parametre.component';
import { BarProduitComponent } from './bar-produit/bar-produit.component';
import { BarVenteComponent } from './bar-vente/bar-vente.component';
import { ClientComponent } from './client/client.component';
import { ExpireProduitComponent } from './expire-produit/expire-produit.component';
import { LacuneProduitComponent } from './lacune-produit/lacune-produit.component';
import { LoginClientComponent } from './login-client/login-client.component';
import { ParametresComponent } from './parametres/parametres.component';
import { ProduitsComponent } from './produits/produits.component';
import { ProfilClientComponent } from './profil-client/profil-client.component';
import { SignUpClientComponent } from './sign-up-client/sign-up-client.component';
import { UnitComponent } from './unit/unit.component';
import { VenteGComponent } from './vente-g/vente-g.component';
import { VenteJourComponent } from './vente-jour/vente-jour.component';
import { VentePaimentComponent } from './vente-paiment/vente-paiment.component';
import { VenteRetourneComponent } from './vente-retourne/vente-retourne.component';
import { VentesComponent } from './ventes/ventes.component';

const routes: Routes = [{path:'ajout-produit.component.html',component:AjoutProduitComponent},
{path:"produits.component.html",component:ProduitsComponent},
{path:"lacune-produit.component.html",component:LacuneProduitComponent},
{path:"expire-produit.component.html",component:ExpireProduitComponent},
{path:"acceuil.component.html",component:AcceuilComponent},
{path:"bar-produit.component.html",component:BarProduitComponent},
{path:"bar-vente.component.html",component:BarVenteComponent},
{path:"ventes.component.html",component:VentesComponent},
{path:"vente-g.component.html",component:VenteGComponent},
{path:"vente-paiment.component.html",component:VentePaimentComponent},
{path:"vente-retourne.component.html",component:VenteRetourneComponent},
{path:"vente-jour.component.html",component:VenteJourComponent},
{path:"bar-achat.component.html",component:BarAchatComponent},
{path:"achats.component.html",component:AchatsComponent},
{path:"achat-affich.component.html",component:AchatAffichComponent},
{path:"achat-ajout-fournisseur.component.html",component:AchatAjoutFournisseurComponent},
{path:"achat-liste-fournisseur.component.html",component:AchatListeFournisseurComponent},
{path:"parametres.component.html",component:ParametresComponent},
{path:"bar-parametres.component.html",component:BarParametreComponent},
{path:"client.component.html",component:ClientComponent},
{path:"unit.component.html",component:UnitComponent},
{path:"profil-client.component.html",component:ProfilClientComponent},
{path:"sign-up-client.component.html",component:SignUpClientComponent},
{path:"login-client.component.html",component:LoginClientComponent},
{path:"login-admin.component.html",component:LoginClientComponent},
{path:"sign-up-admin.component.html",component:LoginClientComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
