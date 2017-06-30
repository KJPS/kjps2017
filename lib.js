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

function canIMoveTo(gameState, x, y)
{
    var myPlayer = gameState.my_player;
    
    if (x < 0 || x >= gameState.width
        || y < 0 || y >= gameState.height
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
        if (myPlayer.x + m[0] == x && myPlayer.y + m[1] == y) {
            way = i;
            break;
        }
    }
    
    if (way === null) {
        return false;
    }
    
    return !(game.maze[myPlayer.y][myPlayer.x] & (1 << way));
}
