//result
var ResultLayer = cc.Layer.extend({
    ctor: function() {
        this._super();
        var size = cc.director.getWinSize();
        // 画像の追加
        var sprite = cc.Sprite.create(res.gameover_png);
        sprite.setPosition(size.width / 2, size.height * 5 / 6);
        sprite.setScale(0.8);
        this.addChild(sprite, 0);

        var sprite = cc.Sprite.create(res.replay_button_png);
        sprite.setPosition(size.width / 2, size.height / 6);
        sprite.setScale(0.8);
        this.addChild(sprite, 1);

        var label = cc.LabelTTF.create("Score:" + score, "Arial", 32);
   label.setPosition(size.width / 2, size.height  / 2);
   this.addChild(label, 1);


        // タップイベントリスナーを登録する
        cc.eventManager.addListener({
            event: cc.EventListener.TOUCH_ONE_BY_ONE,
            swallowTouches: true,
            onTouchBegan: this.onTouchBegan,
            onTouchMoved: this.onTouchMoved,
            onTouchEnded: this.onTouchEnded
        }, this);
        return true;
    },
    onTouchBegan: function(touch, event) {
        return true;
    },
    onTouchMoved: function(touch, event) {},
    onTouchEnded: function(touch, event) {
        cc.director.runScene(new gameScene());
    },
});
var ResultScene = cc.Scene.extend({
    onEnter: function() {
        this._super();
        miss = 0;
        // 背景レイヤーをその場で作る
        var backgroundLayer = new cc.LayerColor(new cc.Color(0, 200, 140, 128));
        this.addChild(backgroundLayer);
        //ラベルとタップイベント取得
        var layer3 = new ResultLayer();
        this.addChild(layer3);

    }
});
