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
           $.map(['about','portfolio','blog','contact','index-img'],function (v) {
               $('#'+v).on('click',function () { tagEvent(v); })
           });
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

       function tagEvent(data) {
           var $mid = $('#mid');
           $mid.find('iframe:visible').fadeOut(1000,function () {

               $mid.find('#'+data+'-h').fadeIn(1500);
           });
       }

       init();

    });
})();
