function populateActions() {
    $('#actions').html('');
    for (action of rooms.current.actions)  {
        console.log(`Adding action "${action.name}"`)
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
        'url': `/data/${roomnum}.json`,
        'dataType': "json",
    }).done(function(data) {
        rooms.current = data;
        console.log(`Loaded room "${rooms.current.name}"`);
        $('#txtOutput').html(rooms.current.summary);
        $('#pnlText .titlebar').html(rooms.current.name);
        populateActions();
        player.room = rooms.current;
    });
}


function refreshPlayerInfo() {
    //$('#valHealth').html(player.health); //todo: draw as bar
}