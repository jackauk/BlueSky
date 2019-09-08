
cc.Class({
    extends: cc.Component,

    properties: {
		heartPrefab:{
			default:null,
			type: cc.Prefab
		},
		player:{
			default:null,
			type: cc.Node
		},
		scoreDisplay:{
			default:null,
			type: cc.Node
		},
		background:{
			default:null,
			type: cc.Node
		}
  
    },

	update: function(dt){
		var disLeft  =  (-this.player.x + this.player.width*this.player.scale/2)- this.node.width/2;
		var LimitBackgroundLeft =  (this.background.width - this.node.width)/2;
		//cc.log('player.width '+this.player.width +' player.scale '+this.player.scale  + 'this.background.x '+ this.background.x + 'LimitBackgroundLeft '+LimitBackgroundLeft);
		//cc.log('this.player.accelX ' +this.player.accelX + 'this.player.xSpeed '+this.player.xSpeed);

			if (disLeft >0)
		{
			if (this.background.x < LimitBackgroundLeft)
			{
				this.background.x +=disLeft;
				this.player.x += disLeft;
			}
			else
			{	
				var Player = require("AirShip");
				Player.setXspeed(0);	
				cc.log('Game ' + Player.getXspeed);
				cc.log('Game end');
			}
		}
		
	},


});
