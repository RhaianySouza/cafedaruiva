//Rhaiany Cezar
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
    var scrollProduct = [document.getElementById('product').offsetTop, document.getElementById('product').offsetTop+document.getElementById('product').offsetHeight];
    if(window.scrollY >= 220-scrollProduct[0] && window.scrollY<=scrollProduct[0]){
      clearInterval(scrollSlider);
      scrollSlider = setInterval(function(){slider('product',0)},3000);
    }
	else{clearInterval(scrollSlider)}
  });
});

function menu(){
  document.getElementById('menu').classList.toggle("activemenu");
};

["load","scroll"].forEach(function (evt) {
  window.addEventListener(evt, (event) => {
	if(screen.height<=1200){var x=1000;}
	else{var x=500;}
	  
	var winHeader = [document.getElementsByTagName('header')[0].offsetTop, document.getElementsByTagName('header')[0].offsetHeight];
	if(window.scrollY >= winHeader[0] && window.scrollY<=winHeader[1]-200){
	  document.getElementsByTagName('header')[0].getElementsByClassName('socialmedia')[0].classList.add("active");
	};
	
	var winService = [document.getElementById('service').offsetTop, document.getElementById('service').offsetTop+document.getElementById('service').offsetHeight];
	if(window.scrollY >= winService[0]-x && window.scrollY<=winService[1]){
	  document.getElementById('service').getElementsByTagName('div')[0].classList.add("active");
	};
	
	var winAbout = [document.getElementById('about').offsetTop, document.getElementById('about').offsetTop+document.getElementById('about').offsetHeight];
	if(window.scrollY >= winAbout[0]-x && window.scrollY<=winAbout[1]){
	  document.getElementById('about').getElementsByTagName('div')[0].classList.add("active");
	};
	
	var winProduct = [document.getElementById('product').offsetTop, document.getElementById('product').offsetTop+document.getElementById('product').offsetHeight];
	if(window.scrollY >= winProduct[0]-x && window.scrollY<=winProduct[1]){
	  document.getElementById('product').getElementsByTagName('div')[0].classList.add("active");
	};
	var winContact = [document.getElementById('locate').offsetTop, document.getElementById('locate').offsetTop+document.getElementById('locate').offsetHeight];
	if(window.scrollY >= winContact[0]-x && window.scrollY<=winContact[1]){
	  document.getElementById('locate').getElementsByTagName('div')[0].classList.add("active");
	};
	var winFooter= [document.getElementsByTagName('footer')[0].offsetTop, document.getElementsByTagName('footer')[0].offsetTop + document.getElementsByTagName('footer')[0].offsetHeight];
	if(window.scrollY >= winFooter[0]-x && window.scrollY<=winFooter[1]){
	  document.getElementsByTagName('footer')[0].getElementsByTagName('div')[0].classList.add("active");
	};

  });
})
