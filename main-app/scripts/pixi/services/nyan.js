(function () {
    'use strict';
    angular.module('Tombola.Academy.Dash.Pixi')
        .service('Nyan',['SpecialDayService', function (specialDayService) {
            //TODO: this is a mess, but at least it is my mess....
            var percentage = 0,
                spritePath = specialDayService() == 'christmas' ? 'images/nyan-christmas.png' : 'images/nyan.png',
                nyanCanvas,
                nyanTexture = PIXI.Texture.fromImage(spritePath),
                nyanSprite = new PIXI.Sprite(nyanTexture),
                animating = true,
                bootstrapNyan = function(){
                    var stage,
                        renderer;

                    if(nyanCanvas) {
                        return;
                    }

                    nyanCanvas = document.getElementById('nyan-canvas');

                    if(!nyanCanvas){
                        return;
                    }

                    renderer = PIXI.autoDetectRenderer(
                        nyanCanvas.width,
                        nyanCanvas.height,
                        {
                            transparent:true,
                            view:nyanCanvas
                        }
                    );
                    stage =  new PIXI.Container();
                    stage.addChild(nyanSprite);

                    var animation = function(){
                        if(!animating){
                            return;
                        }
                        requestAnimationFrame(animation);
                        nyanSprite.position.x = -nyanCanvas.width * (1 - (percentage /100));
                        renderer.render(stage);
                        if(percentage > 100){
                            percentage = 0;
                        }
                    };
                    animation();
                };

            return{
                updatePercentage: function (newPercentage){
                    bootstrapNyan();
                    animating = true;
                    percentage = newPercentage;
                },
                stop:function(){
                    nyanCanvas = null;
                    animating = false;
                    percentage = 0;
                }
            };
        }]);
})();