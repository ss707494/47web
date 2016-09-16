/**
 * Created by Administrator on 2016/8/27.
 */

;(function () {
    $(document).ready(function () {
       var _god = {
           portfolioTmp: function (data) {
               return '\<li\> \<div class="st-item"\>\<img src="img/portfolio/'+data.name+'/'+data.num+'.jpg"\/\>\<\/div\> \<div class="st-title"\>\<h2\>\<\/h2\> \<h3\>\<\/h3\>\<\/div\> \<\/li\>';
           }
       };

       function init() {
           bindEvent();
       }

       function bindEvent() {
           // $.map(['about','portfolio','blog','contact','index-img'],function (v) {
           //     $('#'+v).on('click',function (ev) { tagEvent(v,ev); })
           // });
           // $('#index-img').on('click', function () {
           //     var $mid = $('#mid');
           //     $mid.fadeOut(1000, function () {
           //         $mid.html('').fadeIn(1500);
           //     });
           // });
       }

       function keyMap(name, num) {
           return {
               name: name
               ,num: num
           }
       }

       function tagEvent(data,ev) {
           ev.preventDefault();
           loader.show();
           var $mid = $('#mid');
           $mid.find('iframe:visible').fadeOut(0,function () {

               $mid.find('#'+data+'-h').fadeIn(0, function(){
                   loader.hide();
               });
           });
       }

       init();

    });
})();


(function() {
    var pageWrap = document.getElementById( 'allC' ),
        pages = [].slice.call( pageWrap.querySelectorAll( 'iframe.iframe-n' ) ),
        currentPage = 0,
        triggerLoading = [].slice.call( pageWrap.querySelectorAll( '.color-4 a,#index-img' ) ),
        loader = new SVGLoader( document.getElementById( 'loader' ), { speedIn : 300, easingIn : mina.easeinout } );

    function init() {
        triggerLoading.forEach( function( trigger ) {
            trigger.addEventListener( 'click', function( ev ) {
                ev.preventDefault();
                loader.show();
                var _self = $(this);
                var _id = _self.attr('id');

                var $mid = $('#mid');
                $mid.find('iframe:visible').fadeOut(1000,function () {

                    $mid.find('#'+_id+'-h').fadeIn(10, function(){
                        loader.hide();
                    });
                });
                // debugger
                // // after some time hide loader
                // setTimeout( function() {
                //     loader.hide();
                //
                //     classie.removeClass( pages[ currentPage ], 'show' );
                //     // update..
                //     currentPage = currentPage ? 0 : 1;
                //     classie.addClass( pages[ currentPage ], 'show' );
                //
                // }, 2000 );
            } );
        } );
    }

    init();
})();

