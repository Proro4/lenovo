// //preloader
$(window).on('load', function () {
    var preloader = $('.loaderArea');
    var loader = preloader.find('.loader');
    loader.delay(1100).fadeOut();
    preloader.delay(1100).fadeOut('slow');
    var loadNumb = 2;
    var loadNumbTwo = 0;

    var loaderNumb = setInterval(function(){
        //   }
        loadNumbTwo++;
        loadNumb++;
        $('.numbs'+(loadNumbTwo-1)).remove();
        $('.numbs'+(loadNumb-1)).remove();
        $('.loader__number').append('<div class="numbs'+loadNumbTwo+' first"></div>');
        $('.loader__number').append('<div class="numbs'+loadNumb+'"></div>');
        // $('.numb'+loadNumb).remove();
    },150);


});

function mouseStyle(){
    $(window).on('load',function(){
        setTimeout(function(){

            var i = 0,
                innerOpts = [
                    '.',
                    '[ &nbsp; &nbsp; ]',
                    '❪ &nbsp; ❫',
                    '❮ &nbsp; ❯',
                    '⎔',
                    '▿',
                    '•',
                    '△',
                    '▽',
                    '✕',
                    '◇',
                    '|',
                    '▷',
                    '→',
                ];


            var pointer = new RETICOOL({
                //innerHTML: innerOpts[i],
            });

            // document.addEventListener('keydown',function(){
            //   pointer.innerHTML = innerOpts[ i++ % innerOpts.length ];
            // });
            $('a').hover(function(){
                // pointer.innerHTML = innerOpts[13];
                pointer.innerHTML = '<svg version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" width="69px" height="24px" viewBox="0 0 69 24" enable-background="new 0 0 69 24" xml:space="preserve">  <image id="image0" width="69" height="24" x="0" y="0"xlink:href="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEUAAAAYCAMAAACbQ8AyAAAABGdBTUEAALGPC/xhBQAAACBjSFJNAAB6JgAAgIQAAPoAAACA6AAAdTAAAOpgAAA6mAAAF3CculE8AAAAtFBMVEX///8A/wAA/wAA/wAA/wAA/wAA/wAA/wAA/wAA/wAA/wAA/wAA/wAA/wAA/wAA/wAA/wAA/wAA/wAA/wAA/wAA/wAA/wAA/wAA/wAA/wAA/wAA/wAA/wAA/wAA/wAA/wAA/wAA/wAA/wAA/wAA/wAA/wAA/wAA/wAA/wAA/wAA/wAA/wAA/wAA/wAA/wAA/wAA/wAA/wAA/wAA/wAA/wAA/wAA/wAA/wAA/wAA/wAA/wD///9IMpdZAAAAOnRSTlMAALMk94QJ4VO6KfmLDOZaAcEv+5MQ62ICyDX9mhTuaDLsZZvOOe9tBP6jGNQ/83UFqxzaRvZ9BrIhwtiKnAAAAAFiS0dEAIgFHUgAAAAHdElNRQfiBgYBHxoMiSeGAAAAnklEQVQ4y63URw7CUAwE0G9CCT2ElhBCCSX0Xuf+B0NCLJCy+hrPAZ5k2R5jLCM5RzKxRYwgXygqKEDJ1VCAckVDQbVWV1CARtNTUICWr6Gg3en+FLEN/tPrB18FZMKBhoJoGCsowGisoYQTXpkmAT1RNIv5Tc8X/L0s0xV9u+vNlv+A3Z7/6cPxxDfD+cK31PXGN+b98RRaeb2z2/8ArMx6gusSSywAAAAldEVYdGRhdGU6Y3JlYXRlADIwMTgtMDYtMDZUMDE6MzE6MjYtMDc6MDDMuiZhAAAAJXRFWHRkYXRlOm1vZGlmeQAyMDE4LTA2LTA2VDAxOjMxOjI2LTA3OjAwveee3QAAABl0RVh0U29mdHdhcmUAQWRvYmUgSW1hZ2VSZWFkeXHJZTwAAAAASUVORK5CYII=" /></svg>'
            });

            $('a').mouseleave(function(){
                pointer.innerHTML = innerOpts[6];
            });
            $('.pop-up-map__close').hover(function(){
                pointer.innerHTML = '<svg version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" width="69px" height="24px" viewBox="0 0 69 24" enable-background="new 0 0 69 24" xml:space="preserve">  <image id="image0" width="69" height="24" x="0" y="0"xlink:href="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEUAAAAYCAMAAACbQ8AyAAAABGdBTUEAALGPC/xhBQAAACBjSFJNAAB6JgAAgIQAAPoAAACA6AAAdTAAAOpgAAA6mAAAF3CculE8AAAAtFBMVEX///8A/wAA/wAA/wAA/wAA/wAA/wAA/wAA/wAA/wAA/wAA/wAA/wAA/wAA/wAA/wAA/wAA/wAA/wAA/wAA/wAA/wAA/wAA/wAA/wAA/wAA/wAA/wAA/wAA/wAA/wAA/wAA/wAA/wAA/wAA/wAA/wAA/wAA/wAA/wAA/wAA/wAA/wAA/wAA/wAA/wAA/wAA/wAA/wAA/wAA/wAA/wAA/wAA/wAA/wAA/wAA/wAA/wAA/wD///9IMpdZAAAAOnRSTlMAALMk94QJ4VO6KfmLDOZaAcEv+5MQ62ICyDX9mhTuaDLsZZvOOe9tBP6jGNQ/83UFqxzaRvZ9BrIhwtiKnAAAAAFiS0dEAIgFHUgAAAAHdElNRQfiBgYBHxoMiSeGAAAAnklEQVQ4y63URw7CUAwE0G9CCT2ElhBCCSX0Xuf+B0NCLJCy+hrPAZ5k2R5jLCM5RzKxRYwgXygqKEDJ1VCAckVDQbVWV1CARtNTUICWr6Gg3en+FLEN/tPrB18FZMKBhoJoGCsowGisoYQTXpkmAT1RNIv5Tc8X/L0s0xV9u+vNlv+A3Z7/6cPxxDfD+cK31PXGN+b98RRaeb2z2/8ArMx6gusSSywAAAAldEVYdGRhdGU6Y3JlYXRlADIwMTgtMDYtMDZUMDE6MzE6MjYtMDc6MDDMuiZhAAAAJXRFWHRkYXRlOm1vZGlmeQAyMDE4LTA2LTA2VDAxOjMxOjI2LTA3OjAwveee3QAAABl0RVh0U29mdHdhcmUAQWRvYmUgSW1hZ2VSZWFkeXHJZTwAAAAASUVORK5CYII=" /></svg>'
            });

            $('.pop-up-map__close').mouseleave(function(){
                pointer.innerHTML = innerOpts[6];
            });
            $('.logo-video__block__play').hover(function(){
                pointer.innerHTML = innerOpts[12];
            });


            $('.logo-video__block__play').mouseleave(function(){ ;
                pointer.innerHTML = innerOpts[6];
            });
            $('input').hover(function(){
                pointer.innerHTML = innerOpts[11];
            });

            $('input').mouseleave(function(){
                pointer.innerHTML = innerOpts[6];
            });
            $('.about__video').hover(function(){
                // pointer.innerHTML = '<svg xmlns="http://www.w3.org/2000/svg" width="93" height="28"> <path fill="#0F0" fill-rule="evenodd" d="M93.001 1.001l-5.323 22.984-6.712-6.962C46.789 41.025 13 17 13 17l-.576-.576-6.995 7.123L.031.657l22.301 5.675-5.705 5.811c6.546 4.332 32.025 18.645 60.422.817l-6.037-6.261 21.989-5.698z"/></svg>';

            });

            $('.about__video').mouseleave(function(){
                pointer.innerHTML = innerOpts[6];
            });
        });

        /*!
         * RETICOOL v1.0.0
         * MIT License
         * http://github.com/shshaw/reticool
         */
        ;(function (root, factory) {
            if (typeof define === 'function' && define.amd) { define([], factory); }
            else if (typeof module === 'object' && module.exports) { module.exports = factory(); }
            else { root.RETICOOL = factory(); }
        }(this, function () {

            // Styles injected into the <head> when a RETICOOL is created.
            var styles = '<style>.RETICOOL{position:fixed;top: 0;left:0;pointer-events:none;will-change:transform;transition: color 0.3s linear,opacity 0.3s linear;font-size: 40px;line-height:1;white-space:nowrap;z-index:500;} .RETICOOL__inner{position:absolute;top:50%;left:50%;transform:translate(-50%,-50%);} .RETICOOL__circle{border-style:solid;}</style>';


            // Rule out Firefox, even though it technically supports CSSvars.
            var cssVarSupport = CSS && CSS.supports && CSS.supports('transform', 'rotate(calc(1*1rad))');


            function RETICOOL(opts) {
                if (!(this instanceof RETICOOL)) { return new RETICOOL(opts); }

                for (var key in opts) {
                    if ( opts.hasOwnProperty(key) ) { this[key] = opts[key]; }
                }

                this.x = this.lx = this._x = this.x || window.innerWidth/ 2;
                this.y = this.ly = this._y = this.y || window.innerHeight/ 2;

                this.init();
            }



            /* ////////////////////////////////////////////////////////////////////////// */
            // Helper functions


            function ease(current,target,ease){ return current + (target - current) * ease; }

            var ep = Element.prototype;
            var matchFn =
                ep.matches ||
                ep.matchesSelector ||
                ep.msMatchesSelector ||
                ep.webkitMatchesSelector;

            function matches(el, match){ return matchFn && matchFn.call(el, match); }

            function throttle(func, delay) {
                var timer = null;

                return function () {
                    var context = this, args = arguments;

                    if (timer === null) {
                        timer = setTimeout(function () {
                            func.apply(context, args);
                            timer = null;
                        }, delay);
                    }
                };
            }


            /* ////////////////////////////////////////////////////////////////////////// */


            RETICOOL.prototype = {

                constructor: RETICOOL,

                /** Replace document cursor. Not recommended to set to 'none' */
                cursor: 'crosshair',

                /** Size of your RETICOOL */
                radius: 80,

                /** Border width around your RETICOOL */
                borderWidth: 0,

                /** The default color of your RETICOOL */
                color: '#00ff00',

                /** The default opacity of your RETICOOL */
                opacity: 1,

                /**
                 * Easing of your RETICOOL.
                 * The lower the number the slow the RETICOOL will move
                 * Recommended to keep this below 0.6 to avoid visual glitches
                 */
                ease: 0.2,

                /** Selectors to trigger RETICOOL locking automatically on specific elements */
                lockTriggers: '[data-lock], a, button',

                /** Your RETICOOL color when locked */
                lockColor: '#3a64bcb3',

                /** Your RETICOOL opacity when locked */
                lockOpacity: 0.99,

                /** A class added to your RETICOOL when locked */
                lockClass: null,

                /** Amount your RETICOOL will travel around the locked point */
                lockTravel: 0.15,

                /**
                 * Expand your RETICOOL over the element it locks to.
                 * Set to `false` to disable expansion,
                 * Set to `0` to fit the element exactly
                 * Set to any other number, including negative to expand by that many pixels around the element
                 */
                lockExpand: 20,

                /** How fast your RETICOOL changes sizes */
                lockEase: 0.3,

                /**
                 * What should appear inside your RETICOOL.
                 * You can inject custom HTML for styling, an SVG or IMG, or set it to null for no center
                 */
                innerHTML: '+',

                /** Use CSS Vars to power your RETICOOL, if supported */
                useCSSVars: true,

                /** Private vars from here on out */
                width: 0,
                height: 0,
                dx: 0,
                dy: 0,
                timestamp: null,

                init(){

                    if ( styles ) {
                        document.head.insertAdjacentHTML('afterbegin',styles);
                        styles = null;
                    }

                    if ( this.cursor ) { document.documentElement.style.cursor = this.cursor; }

                    /* Element Creation */
                    this.$ = this.$ || document.createElement('div');
                    this.$.className = 'RETICOOL';
                    this.setColor(this.color, this.opacity);

                    this.$c = document.createElement('div');
                    this.$c.className = 'RETICOOL__circle';
                    this.$c.style.width = this.radius + 'px';
                    this.$c.style.height = this.radius + 'px';
                    this.$c.style.borderRadius = this.radius + 'px';
                    this.$c.style.borderWidth = this.borderWidth + 'px';
                    this.$c.style.background = this.lockColor;

                    this.$i = document.createElement('div');
                    this.$i.className = 'RETICOOL__inner';
                    this.$i.innerHTML = this.innerHTML;

                    this.$c.appendChild(this.$i);
                    this.$.appendChild(this.$c);

                    this.onUpdate = this.onUpdate || this.updateStyle;

                    if ( this.useCSSVars && cssVarSupport ) { this.activateCSSVars(); }

                    this.timestamp = Date.now();

                    /* Bind all methods to instance */
                    for (var key in this) {
                        if ( this[key] && this[key].bind ) { this[key] = this[key].bind(this); }
                    }

                    /* Throttle expensive events */
                    this.scrollUnlock = throttle(this.unlock, 100);
                    this.onHover = throttle(this.onHover, 100);

                    this.attach();
                    this.update();
                },

                events(remove){

                    var action = ( remove ? 'remove' : 'add' ) + 'EventListener';

                    /* Event Listeners */
                    document[action]('mousemove',this.onMove);
                    document[action]('touchstart',this.onMove);
                    document[action]('touchmove',this.onMove);
                    document[action]('touchend',this.onMove);

                    document.documentElement[action]('mousedown',this.onDown);
                    document.documentElement[action]('touchstart',this.onDown);
                    document.documentElement[action]('mouseup',this.onUp);
                    document.documentElement[action]('touchend',this.onUp);

                    window[action]('scroll', this.scrollUnlock);
                },

                attach(){
                    this.events();
                    document.body.appendChild(this.$);
                },

                destroy(){
                    this.events(true);
                    this.$.parentNode.removeChild(this.$);
                },

                setColor(color, opacity){
                    this.$.style.color = color;
                    this.$.style.opacity = opacity;
                },

                onDown: function(){ this.down = true; },
                onUp: function(){ this.down = false; },

                onMove: function(e){
                    e = e.touches ? e.touches[0] : e;
                    this._x = e.clientX;
                    this._y = e.clientY;
                    this.onHover(e);
                },

                onHover: function(e){
                    if ( this.lockTriggers ) {
                        var t = e.target;
                        if ( t !== this.lockTarget ) {

                            while ( t !== document.documentElement && t.parentNode ) {
                                if ( matches(t, this.lockTriggers) ) {
                                    this.lock(t);
                                    this.hoverBlock = true;
                                    return;
                                }
                                t = t.parentNode;
                            }

                            if ( this.lockTarget ) { this.unlock();
                                this.hoverBlock = false;

                            }
                            this.lockTarget = null;
                        }
                    }
                },

                update: function(){
                    requestAnimationFrame(this.update);

                    var tx = this._x,
                        ty = this._y,
                        w, h, now, dt, dx, dy;

                    if ( this.locked && this.lockx && this.locky ) {
                        tx = (this.lockx) - ( this.lockx - tx ) * this.lockTravel;
                        ty = (this.locky) - ( this.locky - ty ) * this.lockTravel;
                    }

                    this.x = ease(this.x, tx, this.ease);
                    this.y = ease(this.y, ty, this.ease);

                    if ( this.locked ) {
                        this.rotation = 0; // ease( this.rotation, 0, this.ease * 5 );
                        dx = 0;
                        dy = 0;
                    } else {
                        dx = (this.x - this.lx);
                        dy = (this.y - this.ly);
                    }

                    this.dx = Math.floor( ease(this.dx, dx, this.ease) * 100 ) / 100;
                    this.dy = Math.floor( ease(this.dy, dy, this.ease) * 100 ) / 100;

                    // Calculate Velocity
                    now = Date.now();
                    dt = now - this.timestamp;
                    this.timestamp = now;
                    this.vx = Math.min( Math.abs(this.dx) / dt, 2 );
                    this.vy = Math.min( Math.abs(this.dy) / dt, 2 );

                    this.rotation = ( this.locked ? 0 : Math.atan2(this.dy, this.dx) );

                    w = this.lockWidth ? this.lockWidth : this.radius;
                    h = this.lockHeight ? this.lockHeight : this.radius;
                    if ( this.down ) { w -= 10; h -= 10; }
                    if ( this.hoverBlock ) { w += 25; h += 25;}

                    this.width = Math.round( ease( this.width, w, this.lockEase ) * 10 ) / 10;
                    this.height = Math.round( ease( this.height, h, this.lockEase ) * 10 ) / 10;

                    this.lx = this.x;
                    this.ly = this.y;

                    this.onUpdate(this);
                },

                activateCSSVars(){

                    this.$.style.transform =
                        'translate( calc( var(--dx) * -1px ), calc( var(--dy) * -1px ) )' +
                        ' translate3d( calc( var(--x) * 1px ), calc( var(--y) * 1px ), 0px )';

                    this.$c.style.transform =
                        'translate3d( -50%, -50%, 0px )'
                        + ' translate( calc( var(--vx) * -4% ), calc( var(--vy) * -4% ) )'
                        + ' rotate( calc( var(--rotation) * 1rad) )'
                        + ' scaleX( calc( var(--vx)/2 + var(--vy)/2 + 1 ) )';

                    this.$c.style.width = 'calc( var(--width) * 1px )';
                    this.$c.style.height = 'calc( var(--height) * 1px )';

                    this.$i.style.transform = 'translate(-50%, -50%)'
                        //+ ' translate( calc( var(--dx) * 3% ), calc( var(--dy) * 3% ) )'
                        + ' rotate(calc( var(--rotation) * -1rad) ';

                    this.onUpdate = this.updateCSSVars;
                },

                updateCSSVars: function(){
                    this.$.style.setProperty('--width', this.width );
                    this.$.style.setProperty('--height', this.height );
                    this.$.style.setProperty('--x', this.x );
                    this.$.style.setProperty('--y', this.y );
                    this.$.style.setProperty('--vx', this.vx );
                    this.$.style.setProperty('--vy', this.vy );
                    this.$.style.setProperty('--dx', this.dx );
                    this.$.style.setProperty('--dy', this.dy );
                    this.$.style.setProperty('--rotation', this.rotation );
                },

                updateStyle: function(){

                    this.$.style.transform = 'translate3d('
                        + ( this.x + ( this.dx * -1 ) ) + 'px,'
                        + ( this.y + ( this.dy * -1 ) ) + 'px, 0px)';

                    this.$c.style.transform =
                        'translate3d(' + (-50 - (this.vx*4)) + '%, ' + (-50 - (this.vy*4)) + '%, 0px)'
                        + ' rotate(' + this.rotation + 'rad)'
                        + ' scaleX(' + ( this.vx/2 + this.vy/2 + 1) + ')';

                    this.$i.style.transform = 'translate(-50%, -50%) rotate(' + -this.rotation + 'rad)';

                    this.$c.style.width = this.width + 'px';
                    this.$c.style.height = this.height + 'px';

                },

                lock(x, y, w, h){
                    if ( x !== undefined ) {
                        this.locked = true;
                        // this.setColor(this.lockColor, this.lockOpacity);
                        if ( this.lockClass ) { this.$.classList.add(this.lockClass); }

                        if ( y == undefined && x.getBoundingClientRect() ) {

                            this.lockTarget = x;

                            var rect = x.getBoundingClientRect();
                            // w = Math.round( rect.right - rect.left);
                            // h = Math.round( rect.bottom - rect.top);

                            // x = rect.left + ( w / 2 );
                            // y = rect.top + ( h / 2 );

                            this.down = false;
                        }

                        // this.lockx = x;

                        if ( this.lockExpand !== false ) {
                            this.lockWidth = w + this.lockExpand; //( this.lockExpand ? w : this.radius * 0.4);
                            this.lockHeight = h + this.lockExpand; //( this.lockExpand ? h : this.radius * 0.4);
                        }

                        return;
                    }
                    this.unlock();
                },

                unlock(){
                    if ( this.locked ) {
                        if ( this.lockClass ) { this.$.classList.remove(this.lockClass); }
                        // this.lx = this.x;
                        // this.ly = this.y;
                        // this.setColor(this.color, this.opacity);
                    }
                    this.lockWidth = 0;
                    this.lockHeight = 0;
                    this.lockx = 0;
                    this.locky = 0;
                    this.rotation = 0;
                    this.locked = false;
                }

            }

            Object.defineProperties(
                RETICOOL.prototype,
                {
                    _innerHTML: { value: '•' },
                    innerHTML: {
                        get: function(){ return this._innerHTML; },
                        set: function(val){
                            // this._innerHTML = val;
                            if ( this.$i ) { this.$i.innerHTML = val; }
                            return val;
                        }
                    }
                });

            return RETICOOL;

        }));

    });
}
if($(window).width() >= 768){
    mouseStyle();
}
function logoParalax(e){
    if($('.logo-v').length != 0){
        var logoK = $('.logo-v__video__logo-text__word-k');
        var logoI = $('.logo-v__video__logo-text__word-i');
        var logoE = $('.logo-v__video__logo-text__word-e');
        var logoV = $('.logo-v__video__logo-text__word-v');
        var logoBlockTop= $('.logo-v__video__top').offset().top;
        var logoBlockBottom = $('.logo-v__video__bottom').offset().top;
        var logoBlockLeft = $('.logo-v__video__top').offset().left;
        var logoWidthK = logoK.width();
        var logoHeightK = logoK.height();
        var logoWidthI = logoI.width();
        var logoHeightI = logoI.height();
        var logoWidthE = logoE.width();
        var logoHeightE = logoE.height();
        var logoWidthV = logoV.width();
        var logoHeightV = logoV.height();
        var logoTopK = logoK.offset().top;
        var logoLeftK = logoK.offset().left;
        var logoTopI = logoI.offset().top;
        var logoLeftI = logoI.offset().left;
        var logoTopE = logoE.offset().top;
        var logoLeftE = logoE.offset().left;
        var logoTopV = logoV.offset().top;
        var logoLeftV = logoV.offset().left;
        var logoHeight = $('.logo-v__video').height();
        // $('.logo-v__video__logo-text').css({'left':300,'top':-100})
        $('.logo-back__word-k').css({'height':logoHeightK,'width':logoWidthK,'left':logoLeftK,'top':logoTopK,'background-size':logoWidthK});
        $('.logo-back__word-i').css({'height':logoHeightI,'width':logoWidthI,'left':logoLeftK,'top':logoTopI,'background-size':logoWidthI});
        $('.logo-back__word-e').css({'height':logoHeightE,'width':logoWidthE,'left':logoLeftE,'top':logoTopE,'background-size':logoWidthE });
        $('.logo-back__word-v').css({'height':logoHeightV,'width':logoWidthV,'left':logoLeftV,'top':logoTopV,'background-size':logoWidthV});
        $('.logo-v__video__top__logo-text__word-k').css({'height':logoHeightK,'width':logoWidthK,'left':logoLeftK-logoBlockLeft,'top':logoTopK-logoBlockTop,'background-size':logoWidthK});
        $('.logo-v__video__top__logo-text__word-i').css({'height':logoHeightI,'width':logoWidthI,'left':logoLeftI-logoBlockLeft,'top':logoTopI-logoBlockTop,'background-size':logoWidthI});
        $('.logo-v__video__top__logo-text__word-e').css({'height':logoHeightE,'width':logoWidthE,'left':logoLeftE-logoBlockLeft,'top':logoTopE-logoBlockTop,'background-size':logoWidthE });
        $('.logo-v__video__top__logo-text__word-v').css({'height':logoHeightV,'width':logoWidthV,'left':logoLeftV-logoBlockLeft,'top':logoTopV-logoBlockTop,'background-size':logoWidthV});

        $('.logo-v__video__bottom__logo-text__word-k').css({'height':logoHeightK,'width':logoWidthK,'left':logoLeftK-logoBlockLeft,'top':logoTopK-logoBlockBottom ,'background-size':logoWidthK});
        $('.logo-v__video__bottom__logo-text__word-i').css({'height':logoHeightI,'width':logoWidthI,'left':logoLeftI-logoBlockLeft,'top':logoTopI-logoBlockBottom,'background-size':logoWidthI });
        $('.logo-v__video__bottom__logo-text__word-e').css({'height':logoHeightE,'width':logoWidthE,'left':logoLeftE-logoBlockLeft,'top':logoTopE-logoBlockBottom ,'background-size':logoWidthE });
        $('.logo-v__video__bottom__logo-text__word-v').css({'height':logoHeightV,'width':logoWidthV,'left':logoLeftV-logoBlockLeft,'top':logoTopV-logoBlockBottom,'background-size':logoWidthV });
        $('.logo-back').css({'top':'0px','height':logoHeight});
        $('.logo-back__word-k').css({'height':logoHeightK,'width':logoWidthK,'left':logoLeftK,'top':logoTopK,'background-size':logoWidthK});
        $('.logo-back__word-i').css({'height':logoHeightI,'width':logoWidthI,'left':logoLeftK,'top':logoTopI,'background-size':logoWidthI});
        $('.logo-back__word-e').css({'height':logoHeightE,'width':logoWidthE,'left':logoLeftE,'top':logoTopE,'background-size':logoWidthE });
        $('.logo-back__word-v').css({'height':logoHeightV,'width':logoWidthV,'left':logoLeftV,'top':logoTopV,'background-size':logoWidthV});
        // $('.logo-text').css({'left':logoLeft+(logoWidth/2) + 10,'top':logoTop-80});
    }

    // START LOGO PARALAX
    setTimeout(function () {

        $(document).mousemove(function(e){
            var X = e.pageX;
            var Y = e.pageY;
            var posParX = X/80;
            var posParY = Y/80;
            if($('.logo-v').length != 0){
                var logoK = $('.logo-v__video__logo-text__word-k');
                var logoI = $('.logo-v__video__logo-text__word-i');
                var logoE = $('.logo-v__video__logo-text__word-e');
                var logoV = $('.logo-v__video__logo-text__word-v');
                var logoTopK = logoK.offset().top;
                var logoLeftK = logoK.offset().left;
                var logoTopI = logoI.offset().top;
                var logoLeftI = logoI.offset().left;
                var logoTopE = logoE.offset().top;
                var logoLeftE = logoE.offset().left;
                var logoTopV = logoV.offset().top;
                var logoLeftV = logoV.offset().left;
                $('.logo-v__video__top__logo-text__word-k').css({'height':logoHeightK,'width':logoWidthK,'left':logoLeftK-logoBlockLeft,'top':logoTopK-logoBlockTop,'background-size':logoWidthK});
                $('.logo-v__video__top__logo-text__word-i').css({'height':logoHeightI,'width':logoWidthI,'left':logoLeftI-logoBlockLeft,'top':logoTopI-logoBlockTop,'background-size':logoWidthI});
                $('.logo-v__video__top__logo-text__word-e').css({'height':logoHeightE,'width':logoWidthE,'left':logoLeftE-logoBlockLeft,'top':logoTopE-logoBlockTop,'background-size':logoWidthE});
                $('.logo-v__video__top__logo-text__word-v').css({'height':logoHeightV,'width':logoWidthV,'left':logoLeftV-logoBlockLeft,'top':logoTopV-logoBlockTop,'background-size':logoWidthV});
                $('.logo-v__video__bottom__logo-text__word-k').css({'height':logoHeightK,'width':logoWidthK,'left':logoLeftK-logoBlockLeft,'top':logoTopK-logoBlockBottom,'background-size':logoWidthK });
                $('.logo-v__video__bottom__logo-text__word-i').css({'height':logoHeightI,'width':logoWidthI,'left':logoLeftI-logoBlockLeft,'top':logoTopI-logoBlockBottom,'background-size':logoWidthI });
                $('.logo-v__video__bottom__logo-text__word-e').css({'height':logoHeightE,'width':logoWidthE,'left':logoLeftE-logoBlockLeft,'top':logoTopE-logoBlockBottom,'background-size':logoWidthE });
                $('.logo-v__video__bottom__logo-text__word-v').css({'height':logoHeightV,'width':logoWidthV,'left':logoLeftV-logoBlockLeft,'top':logoTopV-logoBlockBottom,'background-size':logoWidthV });
                $('.logo-back__word-k').css({'height':logoHeightK,'width':logoWidthK,'left':logoLeftK,'top':logoTopK,'background-size':logoWidthK});
                $('.logo-back__word-i').css({'height':logoHeightI,'width':logoWidthI,'left':logoLeftK,'top':logoTopI,'background-size':logoWidthI});
                $('.logo-back__word-e').css({'height':logoHeightE,'width':logoWidthE,'left':logoLeftE,'top':logoTopE,'background-size':logoWidthE});
                $('.logo-back__word-v').css({'height':logoHeightV,'width':logoWidthV,'left':logoLeftV,'top':logoTopV,'background-size':logoWidthV});
            }
            $('.logo-2').css({'left':-posParX,'top':-posParY});
            $('.logo-3').css({'left':-posParX,'top':-posParY});
            $('.logo-v__video__logo-text').css({'left':posParX,'top':posParY});
        });
    },4000);

}
// footer left hover
logoParalax();
$(window).resize(function(){

    logoParalax();
});
footerParalax(
    $('.footer__inner__left'),
    $('.footer__inner__left__hover'),
    'blue',
    14,180,80,3,4,6,8);
footerParalax(
    $('.footer__inner__right'),
    $('.footer__inner__right__hover'),
    'black',
    14,180,80,3,4,6,8);
footerParalax(
    $('.footer__inner__block'),
    $('.footer__inner__block__hover'),
    'blue',
    24,180,80,3,4,6,8);
footerParalax(
    $('.dowload__list__block'),
    $('.hover-windows'),'white',
    8,180,160,2,2,4,4);
footerParalax(
    $('.dowload__list__block'),
    $('.hover-steam'),'white',
    8,180,160,2,2,4,4);
// footer paralax
function footerParalax(block,hBlock, colorBorder,bWidth, centerWidth, centerHeight,leftMargin,topMargin,blockWidth, blockHeight){
    var block = block;
    var hoverBlock = hBlock;
    var color = colorBorder;
    var borderWidth = bWidth;
    var cWidth = centerWidth;
    var cHeight = centerHeight;
    var lMargin = leftMargin;
    var tMargin = topMargin;
    var blWidth = blockWidth;
    var blHeight = blockHeight;
    var colBlocks = 7;
    for(var i = 0; i<colBlocks; i++){
        hoverBlock.append('<span></span>');
        hoverBlock.find('span').eq(i).css({'border-left':borderWidth-i*2+'px solid '+color,
            'border-right':borderWidth-i*2+'px solid '+color,
            'border-top': 6-i/1.5+'px solid '+color,
            'border-bottom': 6-i/1.5+'px solid '+color
        });
        hoverBlock.find('span').eq(i).animate({'width':100-i*blWidth+'%',
            'height':100-i*blHeight+'%',
            'left':i*lMargin+'%',
            'top':i*tMargin+'%',
        },1000);
    };

    block.mousemove(function(e){
        var objTop = e.pageY - $(this).offset().top;
        var objLeft = e.pageX - $(this).offset().left;
        var objWidth = block.width();
        var objHeight = block.height();
        var blockLeft;
        var objMaxWidth;
        var objMaxHeight;
        for(var i = 0;i<colBlocks;i++){
            blockLeft = hoverBlock.find('span').eq(i).position().left;
            var objCenter = objLeft - objWidth/2;
            var objCenterTop = objTop - objHeight/2;
            if(i != 0){
                if(objCenter > -cHeight && objCenter < cHeight){
                    if(objCenter < -30){
                        hoverBlock.find('span').eq(i).css({'left':(objCenter/240-i*1.5)+i*lMargin+'%'});
                    }else if(objCenter > 30){
                        hoverBlock.find('span').eq(i).css({'left':(objCenter/240+i*1.5)+i*lMargin+'%'});
                    }else{
                        hoverBlock.find('span').eq(i).css({'left':(objCenter/240)+i*lMargin+'%'});
                    }
                }
                if(objCenterTop > -cWidth && objCenterTop < cWidth){
                    if(objCenterTop < -15){
                        hoverBlock.find('span').eq(i).css({'top':(objCenterTop/240-i*1.5)+i*tMargin+'%'});
                    }else if(objCenterTop > 15){
                        hoverBlock.find('span').eq(i).css({'top':(objCenterTop/240+i*1.5)+i*tMargin+'%'});
                    }else{
                        hoverBlock.find('span').eq(i).css({'top':(objCenterTop/240)+i*tMargin+'%'});
                    }
                }
            }
        }
    });
}

// button paralax

buttonParalax(
    $('.about__butt__block'),
    $('.about__butt__block__hover'),'blue',
    3,180,90,2,9,4,20);

function buttonParalax(block,hBlock, colorBorder,bWidth, centerWidth, centerHeight,leftMargin,topMargin,blockWidth, blockHeight){
    var block = block;
    var hoverBlock = hBlock;
    var color = colorBorder;
    var borderWidth = bWidth;
    var cWidth = centerWidth;
    var cHeight = centerHeight;
    var lMargin = leftMargin;
    var tMargin = topMargin;
    var blWidth = blockWidth;
    var blHeight = blockHeight;
    var colBlocks = 7;
    for(var i = 0; i<colBlocks; i++){
        hoverBlock.append('<span></span>');
        hoverBlock.find('span').eq(i).css({'border-left':borderWidth-i*2+'px solid '+color,
            'border-right':borderWidth-i*2+'px solid '+color,
            'border-top': 6-i/1.5+'px solid '+color,
            'border-bottom': 6-i/1.5+'px solid '+color
        });
        hoverBlock.find('span').eq(i).animate({'width':100+i*blWidth+'%',
            'height':100+i*blHeight+'%',
            'left':'-'+(i*lMargin)+'%',
            'top':'-'+i*tMargin+'%',
        },1000);
    };

    block.mousemove(function(e){
        var objTop = e.pageY - $(this).offset().top;
        var objLeft = e.pageX - $(this).offset().left;
        var objWidth = block.width();
        var objHeight = block.height();
        var blockLeft;
        var objMaxWidth;
        var objMaxHeight;
        for(var i = 0;i<colBlocks;i++ ){
            blockLeft = hoverBlock.find('span').eq(i).position().left;
            var objCenter = objLeft - objWidth/2;
            var objCenterTop = objTop - objHeight/2;
            if(i != 0){
                if(objCenter > -cHeight && objCenter < cHeight){
                    if(objCenter < -30){
                        hoverBlock.find('span').eq(i).css({'left':(objCenter/240-i*5.5)+i*lMargin+'%'});
                    }else if(objCenter > 30){
                        hoverBlock.find('span').eq(i).css({'left':(objCenter/240+i*1.5)-i*lMargin+'%'});
                    }else{
                        hoverBlock.find('span').eq(i).css({'left':(objCenter/240)-i*lMargin+'%'});
                    }
                }
                if(objCenterTop > -cWidth && objCenterTop < cWidth){
                    if(objCenterTop < -15){
                        hoverBlock.find('span').eq(i).css({'top':(objCenterTop/240-i*28)+i*tMargin+'%'});
                    }else if(objCenterTop > 15){
                        hoverBlock.find('span').eq(i).css({'top':(objCenterTop/240+i*8)-i*tMargin+'%'});
                    }else{
                        hoverBlock.find('span').eq(i).css({'top':(objCenterTop/240)-i*tMargin+'%'});
                    }
                }
            }
        }
    });
}


//input focus
$('.code__block input').on('click',function(){
    $(this).parent().addClass('active');
});
$(document).mouseup(function (e){ // событие клика по веб-документу
    var div = $('.code__block input'); // тут указываем ID элемента
    if (!div.is(e.target) && div.has(e.target).length === 0 && div.val() == 0) { // и не по его дочерним элементам
        $('.code__block').removeClass('active');
    }
});


// video scroll
$(document).ready(function(){
    if($('.about__video').length != 0){
        var v = document.getElementsByTagName('video')[0];
        var videoHeight = $('.about__video').height();
        v.currentTime = 10.0;
        $('.about__video').mousemove(function(e){
            var videoLeft = e.pageX;
            var videoTop = e.pageY;
            v.currentTime = videoLeft/70;
            if(videoLeft > 400 && videoTop < videoHeight +300){
                $('.about__video__pup-up').addClass('active');
            }else{
                $('.about__video__pup-up').removeClass('active');
            }
        })
    }
    $(window).scroll(function(){
        if($(this).scrollTop() >= 900){
            $('.about__video__pup-up').removeClass('active');
        }
    })

    $('.pop-up-map__close').on('click',function () {
        $(this).parent().removeClass('active');
    })
//moving photo

    $('.img-move').mousemove(function (e) {
        var objTop = e.clientY/30;
        var objLeft = e.clientX/20;
        $(this).find('img').css({'right':objLeft,'bottom':objTop});
    })



})



function Latin(obj) {
    if (/^[a-zA-Z0-9 ,.\-:"()]*?$/.test(obj.value))
        obj.defaultValue = obj.value;
    else
        obj.value = obj.defaultValue;
}