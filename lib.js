/**
 * Nolasīt spēles tāvokli no stdin.
 */
function readGameState()
{
    var fs = require('fs');
    var jsonString = fs.readFileSync('/dev/stdin').toString();
    
    return JSON.parse(jsonString);
}

/**
 * Iegūt spēlētājus no spēles stāvokļa.
 */
function getPlayers(gameState)
{
    var players = [];
    
    for (var i = 0; i < gameState.participants; ++i) {
        var participant = gameState.participants[i];
        if (participant.discr == 'player') {
            players.push(participant);
        }
    }
    
    return players;
}

/**
 * Iegūt spokus no spēles stāvokļa.
 */
function getGhosts(gameState)
{
    var ghosts = [];
    
    for (var i = 0; i < gameState.participants; ++i) {
        var participant = gameState.participants[i];
        if (participant.discr == 'ghost') {
            ghosts.push(participant);
        }
    }
    
    return ghosts;
}

/**
 * Iegūt spēles punktu tabulu.
 */
function getPointTable(gameState)
{
    return gameState.points;
}

/**
 * Iegūt sava spēlētāja datus.
 */
function getMyPlayer(gameState)
{
    return gameState.my_player;
}

/**
 * Pārbaudīt, vai var pārvietoties no (x1, y1) uz (x2, y2).
 */
function canMoveTo(gameState, x1, y1, x2, y2)
{    
    if (x1 < 0 || x1 >= gameState.width
        || y1 < 0 || y1 >= gameState.height
        || x2 < 0 || x2 >= gameState.width
        || y2 < 0 || y2 >= gameState.height
    ) {
        return false;
    }
    
    var movements = [
        [0, -1],
        [1, 0],
        [0, 1],
        [-1, 0]
    ];
    var way = null;
    
    for (var i = 0; i < movements.length; ++i) {
        var m = movements[i];
        if (x1 + m[0] == x2 && y1 + m[1] == y2) {
            way = i;
            break;
        }
    }
    
    if (way === null) {
        return false;
    }
    
    return !(gameState.maze[y1][x1] & (1 << way));
}

/**
 * Pārbaudīt, vai savs spēlētājs var pārvietoties uz x, y koordinātēm.
 */
function canIMoveTo(gameState, x, y)
{
    var myPlayer = gameState.my_player;
    
    return canMoveTo(gameState, myPlayer.x, myPlayer.y, x, y);
}
