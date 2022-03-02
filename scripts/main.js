let rooms = {};
rooms.current = {};

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