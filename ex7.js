<<<<<<< HEAD
let nomProduit = "Clavier mécanique";
let prix = 89.99;
let quantite = 3;
let codePromo = null;
let reductionPourcentage = 10;
let estMembre = true;
let soldeCompte = 250;

let sousTotal = prix * quantite;
console.log("Sous-total : " + sousTotal + " MAD");

let reduction = 0;

if ((codePromo ?? false) && estMembre) {
    reduction = sousTotal * reductionPourcentage / 100;
}

console.log("Réduction : " + reduction + " MAD");

let total = sousTotal - reduction;
console.log("Total : " + total + " MAD");

let statut;

if (soldeCompte >= total) {
    statut = "Paiement accepté";
} else {
    statut = "Solde insuffisant";
}

console.log(statut);

let nouveauSolde = soldeCompte;

if (statut === "Paiement accepté") {
    nouveauSolde = soldeCompte - total;
    console.log("Nouveau solde : " + nouveauSolde + " MAD");
}

console.log("===== RÉCAPITULATIF =====");
console.log("Produit   : " + nomProduit);
console.log("Quantité  : " + quantite);
console.log("Prix unit.: " + prix + " MAD");
console.log("Sous-total: " + sousTotal + " MAD");
console.log("Réduction : " + reduction + " MAD");
console.log("Total     : " + total + " MAD");
console.log("Statut    : " + statut);
console.log("Solde     : " + nouveauSolde + " MAD");
=======
let nomProduit = "Clavier mécanique";
let prix = 89.99;
let quantite = 3;
let codePromo = null;
let reductionPourcentage = 10;
let estMembre = true;
let soldeCompte = 250;

let sousTotal = prix * quantite;
console.log("Sous-total : " + sousTotal + " MAD");

let reduction = 0;

if ((codePromo ?? false) && estMembre) {
    reduction = sousTotal * reductionPourcentage / 100;
}

console.log("Réduction : " + reduction + " MAD");

let total = sousTotal - reduction;
console.log("Total : " + total + " MAD");

let statut;

if (soldeCompte >= total) {
    statut = "Paiement accepté";
} else {
    statut = "Solde insuffisant";
}

console.log(statut);

let nouveauSolde = soldeCompte;

if (statut === "Paiement accepté") {
    nouveauSolde = soldeCompte - total;
    console.log("Nouveau solde : " + nouveauSolde + " MAD");
}

console.log("===== RÉCAPITULATIF =====");
console.log("Produit   : " + nomProduit);
console.log("Quantité  : " + quantite);
console.log("Prix unit.: " + prix + " MAD");
console.log("Sous-total: " + sousTotal + " MAD");
console.log("Réduction : " + reduction + " MAD");
console.log("Total     : " + total + " MAD");
console.log("Statut    : " + statut);
console.log("Solde     : " + nouveauSolde + " MAD");
>>>>>>> d0b55593dde5c6395955e39c61249dfe9ea1a0e9
console.log("=========================");