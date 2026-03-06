let nom = null;
let age = 0;
let ville = "";
let score = undefined;
let actif = false;

console.log("Partie A");
console.log("nom ?? \"valeur par défaut\" -> " + (nom ?? "valeur par défaut"));
console.log("age ?? \"valeur par défaut\" -> " + (age ?? "valeur par défaut"));
console.log("ville ?? \"valeur par défaut\" -> " + (ville ?? "valeur par défaut"));
console.log("score ?? \"valeur par défaut\" -> " + (score ?? "valeur par défaut"));
console.log("actif ?? \"valeur par défaut\" -> " + (actif ?? "valeur par défaut"));

console.log("Partie B");
console.log("nom || \"valeur par défaut\" -> " + (nom || "valeur par défaut"));
console.log("age || \"valeur par défaut\" -> " + (age || "valeur par défaut"));
console.log("ville || \"valeur par défaut\" -> " + (ville || "valeur par défaut"));
console.log("score || \"valeur par défaut\" -> " + (score || "valeur par défaut"));
console.log("actif || \"valeur par défaut\" -> " + (actif || "valeur par défaut"));

console.log("Partie C");

let r1a = nom ?? "valeur par défaut";
let r1b = nom || "valeur par défaut";
console.log("nom : ?? et || -> " + (r1a === r1b ? "même résultat" : "résultat différent"));

let r2a = age ?? "valeur par défaut";
let r2b = age || "valeur par défaut";
console.log("age : ?? et || -> " + (r2a === r2b ? "même résultat" : "résultat différent"));

let r3a = ville ?? "valeur par défaut";
let r3b = ville || "valeur par défaut";
console.log("ville : ?? et || -> " + (r3a === r3b ? "même résultat" : "résultat différent"));

let r4a = score ?? "valeur par défaut";
let r4b = score || "valeur par défaut";
console.log("score : ?? et || -> " + (r4a === r4b ? "même résultat" : "résultat différent"));

let r5a = actif ?? "valeur par défaut";
let r5b = actif || "valeur par défaut";
console.log("actif : ?? et || -> " + (r5a === r5b ? "même résultat" : "résultat différent"));
