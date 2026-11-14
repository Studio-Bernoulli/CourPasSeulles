# CourPasSeulles

Site d'information du weekend CourPasSeulles : un weekend entre potes et une course à Courseulles-sur-Mer, les 15, 16 et 17 mai 2027 (weekend de Pentecôte).

Site statique, sans build : `index.html`, les pages légales (`mentions-legales.html`, `confidentialite.html`, `cgu.html`, `reglement.html`, `404.html`), `styles.css`, `script.js`, et dans `assets/` les logos et les polices auto-hébergées (aucun appel à un service tiers, aucun cookie).

## Voir le site en local

Ouvrir `index.html` dans un navigateur, ou :

```sh
python3 -m http.server 8000
```

## À compléter

- Adresse e-mail de contact dans les pages légales (chercher `[adresse e-mail de contact à compléter]`).
- Cartes des parcours : remplacer les blocs `EMPLACEMENT CARTE` dans `index.html` par l'iframe de la carte (uMap, OpenStreetMap, Komoot, Strava…).
- Horaires, logement, prix, lien d'inscription.
