let rooms = {};
rooms.current = {};
let baseurl = '';
if (window.location.hostname === 'github.io') {
    baseurl = '/CyVen'
    console.log("Loaded from github, setting baseurl");
} else {
    baseurl = '../'
}

console.log("ready");
refreshPlayerInfo();
loadRoom(player.room);

$(document).on('click', '.btnAction', function(e) {
    let actioncode = $(e.target).attr('actioncode');
    let target = $(e.target).attr('target');
    switch (actioncode) {
        case 'LA':
            $('#txtOutput').html(rooms.current.description);
            break;
        case 'WARP':
            loadRoom(target)
    }
})