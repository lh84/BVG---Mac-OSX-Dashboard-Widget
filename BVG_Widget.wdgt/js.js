

function setup()
{
	var theFrame = document.getElementById("cardFrame")
	theFrame.src = "http://www.bvg.de/de/Fahrinfo";	

	return 0;
}

function resizeWindow( iWidth, iHeight ){
 
	//var iPreWidth = YAHOO.util.Dom.getViewportWidth();
	//var iPreHeight = YAHOO.util.Dom.getViewportHeight();
	//window.resizeTo(iPreWidth,iPreHeight);
	//var iPostWidth = YAHOO.util.Dom.getViewportWidth();
	//var iPostHeight = YAHOO.util.Dom.getViewportHeight();
	//iOuterWidth = iWidth + (iPreWidth-iPostWidth);
	//iOuterHeight = iHeight + (iPreHeight-iPostHeight);

    //window.resizeTo(430, iOuterHeight+100);
	if(iWidth < 350){iWidth=350;}
	window.resizeTo(iWidth+30, iHeight+90);
	var frontImg = document.getElementById("frontImg")
	frontImg.style.width = (iWidth + 30 ) + 'px';
	frontImg.style.height = (iHeight + 90) + 'px';
	var backImg = document.getElementById("backImg")
	backImg.style.width = (iWidth + 30 ) + 'px';
	backImg.style.height = (iHeight + 90) + 'px';
}