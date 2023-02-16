//
//
//
//
//
function slider(_id,x){
	var tumbler = document.getElementById(_id).getElementsByClassName('scroll')[0];
	let move = 0;
	var w = tumbler.getElementsByClassName('item');
	
	var id = setInterval(frame(w),5);
	
	function frame(a){
		tumbler.getElementsByClassName('item')[x].style.marginLeft = -(w[x].offsetWidth+ w[x].style.marginLeft)+'px';
		setTimeout(function(){
			var item = document.getElementById('product').getElementsByClassName('scroll')[0].getElementsByClassName('item')[x];
			tumbler.getElementsByClassName('item')[x].remove();
			tumbler.innerHTML += '<div class="item">'+item.innerHTML+'</div>';
		},500); 
	};
};
var scrollSlider = setInterval(function(){slider('product',0)},3000);
["resize", "scroll"].forEach(function (evt) {
  window.addEventListener(evt, (event) => {
    var winHeight = [document.getElementById('product').offsetTop, document.getElementById('product').offsetHeight];
    if(window.scrollY >= 220-winHeight[0] && window.scrollY<=winHeight[0]+winHeight[1]){
      clearInterval(scrollSlider);
      scrollSlider = setInterval(function(){slider('product',0)},3000);
    }
	else{clearInterval(scrollSlider)}
  });
});
function menu(){
  document.getElementById('menu').classList.toggle("activemenu")
}