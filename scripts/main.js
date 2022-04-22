let rooms = {};
rooms.current = {};
let baseurl = '';

var twRoomName = new Typewriter('#pnlText .titlebar', {
    strings: ['Unknown'],
    autoStart: false,
  });
  var twRoomDescrip = new Typewriter('#txtOutput', {
      strings: ['Unknown'],
      autoStart: false,
      delay: 25
    });

if (window.location.hostname == 'longfusegames.github.io') {
    baseurl = '/CyVen'
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
            //$('#txtOutput').html(rooms.current.description);
            twRoomDescrip.deleteAll(1).typeString(rooms.current.description).start();
            break;
        case 'WARP':
            loadRoom(target)
    }
})