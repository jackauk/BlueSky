
cc.Class({
    extends: cc.Component,

    properties: {
		floatHeight: 0,
		floatWidth: 0,
		floatDuration: 0,
		floatMax:0,
		accelX: 0,
		accelY: 0,
		maxMoveXSpeed: 0,
		maxMoveYSpeed: 0,
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
	
	onKeyDown: function (event){
		
		console.log('aaaa');
		
		switch (event.keyCode)
		{

				case cc.macro.KEY.up:
					this.accUp = true;
					break;
				case cc.macro.KEY.down:
					this.accDown = true;
					break;
				case cc.macro.KEY.left:
					this.accLeft = true;
					break;
				case cc.macro.KEY.right:
					this.accRight = true;
					break;
		}		
	},
	
	onKeyUp: function (event){
		switch (event.keyCode)
		{
				case cc.macro.KEY.up:
					this.accUp = false;
					break;
				case cc.macro.KEY.down:
					this.accDown = false;
					break;
				case cc.macro.KEY.left:
					this.accLeft = false;
					break;
				case cc.macro.KEY.right:
					this.accRight = false;
					break;
		}		
	},
	
	onLoad: function(){
		this.floatAction = this.setFloatAction();
		this.node.runAction(this.floatAction);
		
		this.accUp = false;
		this.accDown = false;
		this.accLeft = false;
		this.accRight = false;
		
		this.xSpeed = 0;
		this.ySpeed = 0;
		cc.systemEvent.on(cc.SystemEvent.EventType.KEY_DOWN, this.onKeyDown,this);
		cc.systemEvent.on(cc.SystemEvent.EventType.KEY_UP, this.onKeyUp,this);
	},
	
	onDestroy: function(){
		cc.systemEvent.off(cc.SystemEvent.EventType.KEY_DOWN, this.onKeyDown,this);
		cc.systemEvent.off(cc.SystemEvent.EventType.KEY_UP, this.onKeyUp,this);
	},
	
	update: function(dt){
		
		if (this.accLeft)
		{
			this.xSpeed  -= this.accel * dt;
		}
		else if (this.accRight)
		{
			this.xSpeed  += this.accel * dt;
		}
		
		this.node.x += this.xSpeed *dt;
		console.log(this.xSpeed);
		console.log(this.node.x);
		this.node.y += this.ySpeed *dt;
	},
    
});
