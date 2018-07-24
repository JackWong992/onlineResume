setTimeout(function(){
    siteWelcome.classList.remove('active') 
},2000)

window.onscroll = function(){
  if(window.scrollY > 100){
    topNavBar.classList.add('sticky')
  }else{
    topNavBar.classList.remove('sticky')
  }
  let specialTags = document.querySelectorAll('[data-x]')
  let minIndex = 0
  for(let i =1;i<specialTags.length; i++){
    if(Math.abs(specialTags[i].offsetTop - window.scrollY) < Math.abs(specialTags[minIndex].offsetTop - window.scrollY)){
      minIndex = i
    }
  }
  // minIndex 就是里窗口顶部最近的元素
  specialTags[minIndex].classList.remove('offset')
  let id = specialTags[minIndex].id
  let a = document.querySelector('a[href="#'+ id + '"]')
  let li = a.parentNode
  let brothersAndMe = li.parentNode.children
  for(let i=0; i<brothersAndMe.length; i++){
    brothersAndMe[i].classList.remove('hightLight')
  }
  li.classList.add('hightLight')
  }


let aTags = document.querySelectorAll('.topNavBar nav li a')
// 实现动画滚动：使用tween实现滚动
function animate(time) {
  requestAnimationFrame(animate);
  TWEEN.update(time);
}
requestAnimationFrame(animate);

 
for(var i=0 ; i<aTags.length;i++){
  aTags[i].onclick = function(x){
    x.preventDefault()
    let a = x.currentTarget
    let href = a.getAttribute('href')  //
    console.log( href )
    let element = document.querySelector( href ) //滚动至相关链接
    let top = element.offsetTop
   
    let currentTop = window.scrollY  //当前的位置
    let targetTop = top-80 //结束的位置
    var coords = { y: currentTop };
    var tween = new TWEEN.Tween(coords) 
      .to({ y: targetTop }, 1000)  //滚动到达的地方
      .easing(TWEEN.Easing.Quadratic.In) 
      .onUpdate(function() { 
         window.scrollTo(0,coords.y)    //滚动的距离为0，coords.y
      })
      .start();
  }
}

