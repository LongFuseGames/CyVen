let player = {
    states: [
        "laying",
    ],
    inventory: [],
    health: 100,
    room: 0,
    updateName: function(newname) {
        this.name = newname;
        refreshPlayerInfo();
    }
}
