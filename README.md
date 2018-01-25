# Todolyst by YoLocorp
'One page' todo liste, comprenant :
- Les opérations CRUD
- Une pagination des ToDos

Développée grâce à Nodejs pour le back, et Vuejs en front.
Mis en page avec Materialize.


## Build
```
$node_todo> npm install
$vuejs_todo> npm install
```

## Deploy
```
$node_todo> npm start
$vuejs_todo> npm start
```

## Problèmes rencontrés
Nous avons associé un statut à chaque ToDo afin de trier les ToDos par statut (ie: 'To do', 'On going', 'done', etc),
Mais n'avons pu l'implementer par manque de temps.
Le principal soucis rencontré concerne le CORS filter, difficile à comprendre et à prendre en compte en débutant sur des applis JS.


## Authors
* [Yoann Collet](https://github.com/YoannCollet)
* [Louis Rogeon](https://github.com/louis-rogeon)
