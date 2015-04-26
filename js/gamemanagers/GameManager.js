game.ExperienceManager = Object.extend({
  init: function(x, y, settings){
      this.alwaysUpdate = true;
      this.gameover = false;
  },
  
  update: function(){
      if(game.data.win === true && !this.gameover){
          this.gameOver(true);
      }else if(game.data.win === false && !this.gameover){
         this.gameOver(false);
      }
      
      return true;
  },
  
  gameOver: function(win){
      if(win, true){
          //alert("You Win"),
         game.data.exp += 10; 
      }else{
          //alert("You Lose");
          game.data.exp += 1;
      }
          console.log(game.data.exp);
          
          this.gameover = true;
          
          me.save.exp = game.data.exp;
          
  }
  
});


