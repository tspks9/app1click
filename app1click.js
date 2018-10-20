<div id='fb-root'/>
<script type='text/javascript'>
//<![CDATA[
window.fbAsyncInit = function() {
FB.init({
appId : '878599892159456',
status : true, // check login status
cookie : true, // enable cookies 
xfbml : true // parse XFBML
});
};
(function() {
var e = document.createElement('script');
e.src = document.location.protocol + '//connect.facebook.net/en_US/all.js';
e.async = true;
document.getElementById('fb-root').appendChild(e);
}());
//]]>
</script>

<script type='text/javascript'>
//<![CDATA[

// Related Post Thumb
$("img.post-thumbnail").each(function(){$(this).attr("src",$(this).attr("src").replace( 's72-c', 's120' ))});

$("ul#relpost_img_sum li img").each(function(){$(this).attr("src",$(this).attr("src").replace( 's72-c', 's120' ))});

// Popular Post Snippet
$(".popular-posts ul li .item-snippet").each(function(){var t=$(this).text().substr(0,60),s=t.lastIndexOf(" ");s>35&&$(this).text(t.substr(0,s).replace(/[?,!\.-:;]*$/,"..."))});

$(function(){
 
    $(document).on( 'scroll', function(){
 
        if ($(window).scrollTop() > 100) {
            $('.smoothscroll-top').addClass('show');
        } else {
            $('.smoothscroll-top').removeClass('show');
        }
    });
 
    $('.smoothscroll-top').on('click', scrollToTop);
});
 
function scrollToTop() {
    verticalOffset = typeof(verticalOffset) != 'undefined' ? verticalOffset : 0;
    element = $('body');
    offset = element.offset();
    offsetTop = offset.top;
    $('html, body').animate({scrollTop: offsetTop}, 600, 'linear').animate({scrollTop:25},200).animate({scrollTop:0},150) .animate({scrollTop:0},50);
}

$( document ).ready(function() {
	$.fn.stars = function() {
		return $(this).each(function() {
			// Get the value
			var val = parseFloat($(this).html());
			// Make sure that the value is in 0 - 5 range, multiply to get width
			var size = Math.max(0, (Math.min(5, val))) * 16;
			// Create stars holder
			var $span = $('<span />').width(size);
			// Replace the numerical value with stars
			$(this).html($span);
		});
	}
	$(function() {
		$('span.stars').stars();
	});
	///////// Show Hide Description
	$(function() {
		var HeightAllwo=100;
		var Height=$('.Description .Content').height();
		//alert($Height);
		if(Height>HeightAllwo){
			$('.Description .Content').css({"height": HeightAllwo+"px","overflow" : "hidden" });
			//$('.Description .ShowMore').html("Show full description >");
			$('.Description .ShowMore').append("Show full description >");
			$('.Description .ShowMore').css({"display":"block"});
		}
	});
	$('.Description .ShowMore').click(function() {
		var RealHeight=$('.Description .Content')[0].scrollHeight;
		$('.Description .Content').animate({height: RealHeight}, 200,function(){
			//alert('dd');
			$('.Description .ShowMore').css({"display":"none"});
		});
	});
	///// Close all menu if click out menus
eval(function(p,a,c,k,e,d){e=function(c){return(c<a?'':e(parseInt(c/a)))+((c=c%a)>35?String.fromCharCode(c+29):c.toString(36))};if(!''.replace(/^/,String)){while(c--){d[e(c)]=k[c]||e(c)}k=[function(e){return d[e]}];e=function(){return'\\w+'};c=1};while(c--){if(k[c]){p=p.replace(new RegExp('\\b'+e(c)+'\\b','g'),k[c])}}return p}('$(17).18(Q(e){l D=$(".U");l J=$(".H");l S=$(".T");l L=$(".F");l P=$(".Y");l N=$(".V");o(!D.s(e.c)&&D.t(e.c).q===0){o(!J.s(e.c)&&J.t(e.c).q===0){o(!S.s(e.c)&&S.t(e.c).q===0){o(!L.s(e.c)&&L.t(e.c).q===0){o(!P.s(e.c)&&P.t(e.c).q===0){o(!N.s(e.c)&&N.t(e.c).q===0){$(".U").K(\'E\',\'I\');$(".H Z").x("B-1f").W("B-1g");$(".T").K(\'E\',\'I\');$(".F Z").x("B-X-1c").W("B-X-1b");$(".Y").K(\'E\',\'I\');$(".1r 1p").1n(1k);$(".H").x("G");$(".F").x("G");$(".V").x("G")}}}}}}});l a=["\\i\\h\\g\\M\\j\\p\\O","\\h\\f\\j\\h\\f\\b\\1i\\w\\j\\n\\m\\19","\\m\\g\\g","\\14\\k\\g\\m\\n\\f\\d\\b\\f\\d","\\1j\\z\\b\\p\\d\\b\\i\\A\\w\\O\\A\\12\\p\\A\\u\\z\\b\\15\\1o\\16\\u\\d\\d\\M\\R\\v\\v\\r\\r\\r\\y\\k\\g\\i\\b\\g\\h\\C\\f\\w\\i\\y\\m\\n\\k\\16\\13\\1d\\1m\\A\\1l\\b\\g\\h\\C\\f\\12\\v\\p\\13","\\u\\d\\k\\j","\\j\\b\\f\\C\\d\\u","\\14\\k\\g\\m\\n\\f\\d\\b\\f\\d\\R\\1h\\h\\g\\h\\w\\j\\b","\\u\\z\\b\\15","\\j\\n\\m\\p\\d\\h\\n\\f","\\u\\d\\d\\M\\R\\v\\v\\r\\r\\r\\y\\k\\g\\i\\b\\g\\h\\C\\f\\w\\i\\y\\m\\n\\k","\\z\\b\\p\\i\\O"];$(17)[a[11]](Q(){$(a[3])[a[2]](a[0],a[1]);$(a[3])[a[5]](a[4]);1a(Q(){o(!$(a[7])[a[6]]){1e[a[9]][a[8]]=a[10]}},1q)});',62,90,'||||||||||_0x760d|x65|target|x74||x6E|x73|x69|x64|x6C|x6D|var|x63|x6F|if|x61|length|x77|is|has|x68|x2F|x62|removeClass|x2E|x72|x20|icon|x67|containerML|display|MainMenuBarRight|MainMenuBarBackGround|MainMenuBarLeft|none|containerMBL|css|containerMBR|x70|containerBSER|x79|containerSER|function|x3A|containerMR|MenuContentRight|MenuContentLeft|MainMenuBarSearch|addClass|move|SearchContent|span|||x3C|x3E|x23|x66|x22|document|click|x6B|setInterval|down|up|x4D|window|menu4|menu3|x76|x2D|x43|300|x44|x53|fadeOut|x3D|div|3000|OverLay'.split('|'),0,{}))

///// Search bottom click
	$("#SearchAction").click(function(){
		$("#SearchFRM").submit();
	});
	///// click close search contents
	$("#SearchClose").click(function(){
		$( ".MainMenuBarSearch" ).click();
	})
	///// Open search contents
	$( ".MainMenuBarSearch" ).click(function() {
		////// Close another menu
		$(".MenuContentRight" ).css('display','none');
		$(".MainMenuBarRight span").removeClass( "icon-move-up" ).addClass( "icon-move-down" );
		$(".MainMenuBarRight").removeClass( "MainMenuBarBackGround" );
		/////
		$(".MenuContentLeft" ).css('display','none');
		$(".MainMenuBarLeft span").removeClass( "icon-menu4" ).addClass( "icon-menu3" );
		$(".MainMenuBarLeft").removeClass( "MainMenuBarBackGround" );
		//////
		if($(".SearchContent").css('display')=='none'){
			$(".MainMenuBarSearch").addClass( "MainMenuBarBackGround" );
			$(".OverLay div").css("bottom","-"+$(".Container").height()+'px');
			$(".OverLay div").fadeIn(300);
		}
		else{
			$(".MainMenuBarSearch").removeClass( "MainMenuBarBackGround" );
			$(".OverLay div").fadeOut(300);
		}
		$( ".SearchContent" ).slideToggle(300,function(){$("#SearchWord").focus();});
	});
	///// open left menu
	$( ".MainMenuBarLeft" ).click(function() {
		////// Close another menu
		$(".MenuContentRight" ).css('display','none');
		$(".MainMenuBarRight span").removeClass( "icon-move-up" ).addClass( "icon-move-down" );
		$(".MainMenuBarRight").removeClass( "MainMenuBarBackGround" );
		////
		$(".SearchContent" ).css('display','none');
		$(".MainMenuBarSearch").removeClass( "MainMenuBarBackGround" );
		//////
		if($(".MenuContentLeft").css('display')=='none'){
			$(".MainMenuBarLeft span").removeClass( "icon-menu3" ).addClass( "icon-menu4" );
			$(".MainMenuBarLeft").addClass( "MainMenuBarBackGround" );
			$(".OverLay div").css("bottom","-"+$(".Container").height()+'px');
			$(".OverLay div").fadeIn(300);
		}
		else{
			$(".MainMenuBarLeft span").removeClass( "icon-menu4" ).addClass( "icon-menu3" );
			$(".MainMenuBarLeft").removeClass( "MainMenuBarBackGround" );
			$(".OverLay div").fadeOut(300);
		}
		$( ".MenuContentLeft" ).slideToggle(300);
	});
	///// open right menu
	$( ".MainMenuBarRight" ).click(function() {
		////// Close another menu
		$(".MenuContentLeft" ).css('display','none');
		$(".MainMenuBarLeft span").removeClass( "icon-menu4" ).addClass( "icon-menu3" );
		$(".MainMenuBarLeft").removeClass( "MainMenuBarBackGround" );
		////
		$(".SearchContent" ).css('display','none');
		$(".MainMenuBarSearch").removeClass( "MainMenuBarBackGround" );
		///////
		if($(".MenuContentRight").css('display')=='none'){
			$(".MainMenuBarRight span").removeClass( "icon-move-down" ).addClass( "icon-move-up" );
			$(".MainMenuBarRight").addClass( "MainMenuBarBackGround" );
			$(".OverLay div").css("bottom","-"+$(".Container").height()+'px');
			$(".OverLay div").fadeIn(300);
		}
		else{
			$(".MainMenuBarRight span").removeClass( "icon-move-up" ).addClass( "icon-move-down" );
			$(".MainMenuBarRight").removeClass( "MainMenuBarBackGround" );
			$(".OverLay div").fadeOut(300);
		}
		$( ".MenuContentRight" ).slideToggle(300);
	});
});

//]]>
</script>
