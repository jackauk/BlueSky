
cc.Class({
    extends: cc.Component,

    properties: {
		floatHeight: 0,
		floatWidth: 0,
		floatDuration: 0,
		floatMax:0,
		accelX: 0,
		accelY: 0,
		scoreAudio:{
			default: null,
			type: cc.AudioClip
		},
    },
	setFloatAction: function() {
		var floatUp = cc.moveBy(this.floatDuration, cc.v2(0, this.floatHeight)).easing(cc.easeCubicActionOut());
		var floatDown = cc.moveBy(this.floatDuration, cc.v2(0, -this.floatHeight)).easing(cc.easeCubicActionOut());
		var callback = cc.callFunc(this.randomWind, this);
		return cc.repeatForever(cc.sequence(floatUp,floatDown,callback));
	},
	randomWind: function(){
		//this.floatHeight += (Math.Random() -0.5)* 2* floatMax; 
	},
	onKeyDown (event){
		switch (event.keyCode)
		{
				case cc.marcro.Key.up:
					this.accUp = true;
					break;
				case cc.marcro.Key.down:
					this.accDown = true;
					break;
				case cc.marcro.Key.left:
					this.accLeft = true;
					break;
				case cc.marcro.Key.right:
					this.accRight = true;
					break;
		}		
	};
	onKeyUp (event){
		switch (event.keyCode)
		{
				case cc.marcro.Key.up:
					this.accUp = false;
					break;
				case cc.marcro.Key.down:
					this.accDown = false;
					break;
				case cc.marcro.Key.left:
					this.accLeft = false;
					break;
				case cc.marcro.Key.right:
					this.accRight = false;
					break;
		}		
	};
	onLoad: function(){
		this.floatAction = this.setFloatAction();
		this.node.runAction(this.floatAction);
		
		this.accUp = false;
		this.accDown = false;
		this.accLeft = false;
		this.accRight = false;
		
		cc.systemEvent.on(cc.SystemEvent.EventType.KEY_DOWN, this.onKeyDown,this);
		cc.systemEvent.on(cc.SystemEvent.EventType.KEY_UP, this.onKeyUp,this);
	},
	update: function(dt){
		
	},
    


});
