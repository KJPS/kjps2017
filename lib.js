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
