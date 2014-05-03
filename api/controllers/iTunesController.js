var exec = require('child_process').exec;

function prev(request, response) {
    exec("osascript -e 'tell application \"iTunes\" to previous track'", function (e) {
        if (e) {
            throw e;
        }
    });
    response.json({
        success: true
    });
}

function playpause(request, response) {
    exec("osascript -e 'tell application \"iTunes\" to playpause'", function (e) {
        if (e) {
            throw e;
        }
    });
    response.json({
        success: true
    });
}

function next(request, response) {
    exec("osascript -e 'tell application \"iTunes\" to next track'", function (e) {
        if (e) {
            throw e;
        }
        
    });
    response.json({
        success: true
    });
}

module.exports = {
    prev: prev,
    playpause: playpause,
    next: next
};