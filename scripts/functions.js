function populateActions() {
    $('#actions').html('');
    for (action of rooms.current.actions)  {
        $('<div>', {
            class: 'btnAction',
            html: action.name,
            actioncode: action.code,
            target: action.target
        }).appendTo('#actions');
    }
}

function loadRoom (roomnum) {
    $.ajax({
        'async': false,
        'global': false,
        'url': `${baseurl}/data/${roomnum}.json`,
        'dataType': "json",
    }).done(function(data) {
        rooms.current = data;
        //console.log(`Loaded room "${rooms.current.name}"`);
        //$('#txtOutput').html(rooms.current.summary);
        twRoomDescrip.deleteAll(1).typeString(rooms.current.summary).start();
        //$('#pnlText .titlebar').html(rooms.current.name);
        twRoomName.deleteAll().typeString(rooms.current.name).start();
        $('#gameBoard').css('background-image', `url("${baseurl}/images/0.jpg")`);
        populateActions();
        player.room = rooms.current;
    });
}


function refreshPlayerInfo() {
    //$('#valHealth').html(player.health); //todo: draw as bar
}