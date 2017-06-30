# KJPS 2017

Uzdevums ir izveidot programmu, kura kontrolē HakMan spēles spēlētāju. Programma ir jāveido JavaScript (Node.JS) valodā.

## HakMan

Spēle sastāv no četrām komponentēm:

- Labirints.
- Spoki.
- Spēlētāji.
- Monētas.

Spēles mērķis ir savākt pēc iespējas vairāk monētas.

Spēlē valda sekojoši noteikumi:

- Spokam noķerot spēlētāju tam spēle ir beigusies.
- Monētas (atkarībā no iestatījumiem) var būt ar dažādām vērtībām.
- Spēlētājiem un spokiem neeksistē savstarpējā sadursme.
- Spoki (atkarībā no iestatījumiem) maina savu mērķi pēc randoma.
- Sienas ierobežo spēlētāju un spoku kustību.

## HakMan tehniskā puse

Spēlētājiem kods jāraksta JavaScript jeb Node.JS valodā. Node.JS ir servera puses javascripts - [https://nodejs.org/en/docs/](https://nodejs.org/en/docs/). Programmai ir ievaddati, kurus var nolasīt no STDIN un izvaddati, kurus var izvadīt STDOUT.

### Programmas ievaddati

Spēlētājs no STDIN (jeb konsoles) var nolasīt dotos ievaddatus, kuri tiek padoti json formātā.

```javascript
// Iekopējiet savā kodā bibliotēku lib.js
var gameState = readGameState();
```

### Programmas izvaddati

Programmai ir jāizvada vērtība no 0 līdz 3, kura apzīmē spēlētāja kustības virzienu nākamajā iterācijā.

0 - uz uagšu.
1 - pa labi.
2 - uz leju.
3 - pa kreisi.

Piemēram:

```javascript
console.log(3);
```

vai

```javascript
console.log(parseInt(Math.random() * 4));
```

### Bibliotēka

Izmantojot lib.js būs vienkāršāk strādāt ar spēles stāvokli. Funkcijas ir aprakstītas failā. To pielietojums varētu būt, piemeram, šāds.

```javascript
/******************
 * Bibliotēka
 *****************/

// IEKOPĒ BIBLIOTĒKU ŠEIT.

/******************************
 * Kods
 ******************************/

var movements = [
        [0, -1],
        [1, 0],
        [0, 1],
        [-1, 0]
];

var gameState = readGameState();
var myPlayer = getMyPlayer(gameState);
var ghosts = getGhosts(gameState);
var canMoveToWays = [];

for (var i = 0; i < movements.length; ++i) {
    var m = movements[i];
    var tmpX = myPlayer.x + m[0];
    var tmpY = myPlayer.y + m[1];
   
    // Pārbauda visas debesu puses - vai var tur aiziet.
    if (canIMoveTo(gameState, tmpX, tmpY)) {
        
        var ghostsInField = 0;
        // Atmet variantus, kur blakus ir spoks..
        for (var j = 0; j < ghosts.length; ++j) {
            if (ghosts[j].x == tmpX && ghosts[j].y == tmpY) {
                ghostsInField++;
            }
        }
   
        if (ghostsInField == 0) {
            canMoveToWays.push(i);
        }
    }
}

console.log(canMoveToWays.length ? canMoveToWays[parseInt(Math.random() * canMoveToWays.length)] : 0);
```
## GameState struktūra
```javascript
{
   "movements":[]
   "id":354,
   "name":"htrw",
   "created_at":"2017-06-30T09:40:57+03:00",
   "started_at":"2017-06-30T09:41:52+03:00",
   "height":10,
   "width":10,
   "seed":0,
   "iteration":0,
   "participants":[
      {
         "id":1323,
         "name":"ghost_0",
         "color":"16711680",
         "dead":false,
         "points":0,
         "x":3,
         "y":6,
         "discr":"ghost"
      },
      ...
   ],
   "maze":[
      [],
      [],
    ...
   ],
   "points":[
      [2, 1, 2, 1, 1, 2, 0, 3, 1, 0 ... ],
      [ 2, 2, 1, 2, 3, 0, 3, 2, 1, 2 ...],
      ...
   ],
   "my_player":{
      "id":1326,
      "name":"ht4r",
      "color":"0x00ff00",
      "dead":false,
      "points":0,
      "x":0,
      "y":6,
      "code":""
      "way":2,
      "discr":"player"
   }
}
```

## P.S.

Lūdzu neizmantojiet serveri ļaunprātīgi - atmiņas pārpildīšana tīši, neatļautu failu lasīšana un citas nevēlamas rīcības.
