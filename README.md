# Speed Game

### Technologies utilisées
- **React**
- **Redux**
- **React DnD** (Drag'n'Drop)

## But du jeu
Se débarrasser de toutes ses cartes

## Déroulement d'une partie
Les deux joueurs commencent avec chacun 5 piles de 4 cartes. Au centre, se trouvent deux tas qui leurs permettront de se débarrasser de leurs cartes.
Pour commencer, appuyez sur `Pick Cards`.
Cela à pour effet de distribuer une carte au hasard dans chaque tas centraux.
Les joueurs peuvent uniquement se débarrasser de leurs cartes qui ont soit une valeur au dessus, soit une valeur en dessus.

*Exemple :*
  - Tas central : 6, Carte joueur: 7 &#9989;
  - Tas central : 6, Carte joueur: 4 &#10060;

Voici l'ensemble des interactions possibles:
A &harr; 2 &harr; 3 &harr; 4 &harr; 5 &harr; 6 &harr; 7 &harr; 8 &harr; 9 &harr; 10 &harr; J &harr; Q &harr; K &harr; A

Ce jeu n'est pas en tour par tour et le premier joueur à se débarasser de ses cartes gagne.
Si vous êtes bloqués, c'est-à-dire, si aucun des deux joueurs ne peut jouer de carte, appuyez de nouveau sur `Pick Cards`.
Pour recommencer une partie, vous devez redémarrer la page.

## Todo

- [x] Drag'n'Drop pour les cartes
- [x] Implémentation des règles
- [x] Validation des mouvements
- [ ] Serveur temps réel (nécessaire pour jouer à deux)
- [ ] Persistence des parties
- [ ] Gestion des tilisateurs

