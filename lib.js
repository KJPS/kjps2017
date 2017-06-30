function readGameState()
{
    var fs = require('fs');
    var jsonString = fs.readFileSync('/dev/stdin').toString();
    
    return JSON.parse(jsonString);
}
