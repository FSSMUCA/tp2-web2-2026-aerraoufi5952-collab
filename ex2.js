<<<<<<< HEAD
let valeurs = [0, 1, "", "0", null, undefined, NaN, false, [], {}];

for (let i = 0; i < valeurs.length; i++) {
    let v = valeurs[i];
    let affichage;

    if (v === "") {
        affichage = "(chaine vide)";
    } else {
        affichage = String(v);
    }

    if (v) {
        console.log(affichage + " -> truthy");
    } else {
        console.log(affichage + " -> falsy");
    }
=======
let valeurs = [0, 1, "", "0", null, undefined, NaN, false, [], {}];

for (let i = 0; i < valeurs.length; i++) {
    let v = valeurs[i];
    let affichage;

    if (v === "") {
        affichage = "(chaine vide)";
    } else {
        affichage = String(v);
    }

    if (v) {
        console.log(affichage + " -> truthy");
    } else {
        console.log(affichage + " -> falsy");
    }
>>>>>>> d0b55593dde5c6395955e39c61249dfe9ea1a0e9
}