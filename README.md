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
 * Library
 *****************/

// COPY LIBRARY HERE.

/******************************
 * My code
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
   
    // Check if can move there.
    if (canIMoveTo(gameState, tmpX, tmpY)) {
        
        var ghostsInField = 0;
        // Check if ghosts arent there.
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

## P.S.

Lūdzu neizmantojiet serveri ļaunprātīgi - atmiņas pārpildīšana tīši, neatļautu failu lasīšana un citas nevēlamas rīcības.
