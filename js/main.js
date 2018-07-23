setTimeout(function(){
    siteWelcome.classList.remove('active') 
},2000)

window.onscroll = function(){
  if(window.scrollY > 100){
    topNavBar.classList.add('sticky')
  
  }else(
    topNavBar.classList.remove('sticky')
  )
}

let aTags = document.querySelectorAll('.topNavBar nav li a')
for(var i=0 ; i<aTags.length;i++){
  aTags[i].onclick = function(x){
    x.preventDefault()
    let a = x.currentTarget
    let href = a.getAttribute('href')  //
    console.log( href )
    let element = document.querySelector( href ) //滚动至相关链接
    let top = element.offsetTop
    window.scrollTo(0,top-80)
  }
}

