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