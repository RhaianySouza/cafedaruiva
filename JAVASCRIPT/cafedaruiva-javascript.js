//Rhaiany Cezar
//
//
function slider(_id,x){
  var tumbler = _id.getElementsByClassName('scroll')[0];
  var w = tumbler.getElementsByClassName('item');
  x = (x==0)? x : w.length-1;
	
  var id = frame(w);
	
  function frame(a){		
    if(x==0){
      w[x].style.marginLeft = '-25%';
      setTimeout(function(){
        tumbler.innerHTML += '<div class="item">'+w[x].innerHTML+'</div>';
        w[x].remove();
      },300);
    }else{
      tumbler.innerHTML = '<div class="item" style="margin-right:-25%;transform: translateX(-100%);">'+w[x].innerHTML+'</div>'+tumbler.innerHTML;
      w[x+1].remove();
      setTimeout(function(){
        tumbler.getElementsByClassName("item")[0].style['margin-right']='1%'
        tumbler.getElementsByClassName("item")[0].style['transform']='translateX(0)'
      },100);	
    }
  };
};
function menu(){
  document.getElementById('menu').classList.toggle("activemenu");
};

function animationClass(a){
  var win = [a.offsetTop, a.offsetTop+a.offsetHeight];
  var w = (screen.height - a.offsetHeight)/2;
  if(window.scrollY >= win[0]-(w+200) && window.scrollY <= win[1]+(w+200)){
	a.classList.add("active");
  };
};
