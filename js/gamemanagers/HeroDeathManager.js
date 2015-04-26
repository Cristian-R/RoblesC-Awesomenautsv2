game.HeroDeathManager = Object.extend({
    init: function (x, y, settings){
        this.alwaysUpdate = true;
    },
    
    update: function (){
           if (game.data.player.dead) {
           this.removePlayer();
        }
        return true;
    },
    
    removePlayer: function(){
         me.game.world.removeChild(game.data.player);
         me.state.current().resetPlayer(10, 0);
    }
});

