
const array_addImg=['../pic/header/1.jpg',
                    '../pic/header/2.jpg',
                    '../pic/header/3.jpg',
                    '../pic/header/4.jpg',
                    '../pic/header/5.jpg']
const header=document.querySelector('.header')
setInterval(function(){
    const random_number=Math.floor(Math.random()*5)
    header.style.backgroundImage='url('+"'"+array_addImg[random_number]+"'"+')'
},5000)


const mouse_pointer=document.querySelector('.mouse_pointer')
window.addEventListener('mousemove',function(event){
    let {pageX,pageY}=event
    document.documentElement.style.setProperty('--left_position',pageX+"px")
    document.documentElement.style.setProperty('--top_position',pageY+"px")
 
})





let icon_menobar=document.querySelector('.icon_menobar')
let menobar_sm=document.querySelector('.menobar_sm')

let flag_icon_menobar=true
icon_menobar.addEventListener('click',function(){
  
    if(flag_icon_menobar==true){
        menobar_sm.classList.add('active_menobar_sm')
        flag_icon_menobar=false
       
    }
    else{
        menobar_sm.classList.remove('active_menobar_sm')
        flag_icon_menobar=true
    }

})






let logo_h1=document.querySelector('.logo_h1')
let flag_logo=true
setInterval(function(){
    if(flag_logo==true){
        logo_h1.classList.add('active_logo_h1')
        flag_logo=false
    }
    else{
        logo_h1.classList.remove('active_logo_h1')
        flag_logo=true
    }
},1000)






let elemnts_icons_employer=document.getElementsByClassName('icons_employer')
let icon_toggle=document.querySelector('.icon_toggle')
let flag_icon_toggle=true
icon_toggle.addEventListener('click',function(){
    if(flag_icon_toggle==true){
        document.body.style.backgroundColor='black'
        document.body.style.color='white'
        icon_toggle.setAttribute('class','fa fa-toggle-on')
        icon_toggle.style.fontSize='25px'
        flag_icon_toggle=false
        for(var i=0; i<6;i=i+1){
            elemnts_icons_employer[i].style.color='gold'
        }
     }
     else{
        document.body.style.backgroundColor='white'
        document.body.style.color='black'
        icon_toggle.setAttribute('class','fa fa-toggle-off')
        icon_toggle.style.fontSize='25px'
        flag_icon_toggle=true
        for(var i=0; i<6;i=i+1){
            elemnts_icons_employer[i].style.color='black'
        }
     }
     history.back()
})



  

const loaderElem = document.querySelector('.loader')

window.addEventListener('load', function () {
 
    loaderElem.className += ' hidden'

})




let headerr=document.querySelector('.top_header')
let ProgressScrollElem=document.querySelector('.scroll')
const ContainerScrollTop=document.querySelector('.ContainerScrollTop')
document.addEventListener('scroll',function(){
    if(window.scrollY==0){
        headerr.style.height='80px'
       
    }
    else{
        headerr.style.height='65px'
    }
    let scrolltop=window.scrollY
    let documentHieght=document.body.clientHeight
    let clientHieght=window.innerHeight
    
    rounded_width_ProgressScrollElem=Math.round((scrolltop/(documentHieght-clientHieght))*100)
    
    ProgressScrollElem.style.width=rounded_width_ProgressScrollElem+'%'
    

    if(rounded_width_ProgressScrollElem>97){
        ContainerScrollTop.classList.add('ActiveContainerScroll')
    }
    else{
        ContainerScrollTop.classList.remove('ActiveContainerScroll')
    }
     
    
})

ContainerScrollTop.addEventListener('click',e=>{
    window.scrollTo(0,0)
})