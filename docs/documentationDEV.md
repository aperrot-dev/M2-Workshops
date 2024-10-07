La structure du projet n'est pas optimale, tout les dossiers sont placer à la racine. les noms des dossiers ne sont pas explicite.

L'idéale serait d'avoir d'une part un gestionnaire de route pour les différentes routes de l'applications. D'autre part une gestion de controller pour les différentes pages concerné. Par exemple un AtelierController.js qui regroupera toutes les fonctions associés aux ateliers.

L'architecture que j'aime bien avoir dans ce genre de projet est la suivante:

-src/
  -core/
    -main.js
    -controller/
      -workshop.js
      ...
    -routes/
      -workshop-router.js
      ...
    -assets/
      -themes/
        -bootstrap.min.css
  -feature/
    -workshop/
      -style/
        -workshop.css
      -workshop.ejs
    -index/
      -style/
        index.css
      -index.ejs
      -footer.ejs
      -index.ejs
-node_modules/
-.gitignore/
-package-lock.json
-package.json
-README.md
