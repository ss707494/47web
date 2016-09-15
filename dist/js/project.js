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
           $.map([keyMap('post',3)],function (v) {
               $('#mid').on('#'+v.name,'click',function () { portEvent(v); })
           });

       }

       function keyMap(name, num) {
           return {
               name: name
               ,num: num
           }
       }

       function portEvent(data) {
           var $mid = $('#mid');
           $mid.fadeOut(1000,function () {
               $mid.html('').append('\<iframe style="display: none" class="iframe-n" src="portfolio2.html"\> \<\/iframe\>');
               for (var i = 0, n = data.num;i< n;i++){
                   data.num = i;
                   $('#st-stack').append(_god.portfolioTmp(data));
               }
               data.num
               $mid.find('iframe').fadeIn(500,function () {
                   $mid.fadeIn(1000);
               });
           });

       }

       init();
    });
})();
