(function(){!function(a){return Drupal.behaviors.navButton={attach:function(b){return a("#nav-button",b).once("showNav").click(function(){return console.log("1"),a(".l-region--navigation-ext",b).slideToggle()})}},a(function(){var b,c,d,e;return c=function(){var a,c;return c=e.css("float"),""!==c&&"none"!==c?(a=b.offset().top-e.offset().top+parseInt(e.css("margin-top"))+b.outerHeight()-d.height()-10,e.css("margin-top",""+a+"px")):e.css("margin-top","")},b=a(".field--name-field-headline"),e=a(".l-region--sidebar"),b.length?(d=a(".block--dod-2014",e),c(),a(window).resize(function(){return c()})):void 0})}(jQuery)}).call(this);