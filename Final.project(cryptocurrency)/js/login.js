const mouse_pointer=document.querySelector('.mouse_pointer')
window.addEventListener('mousemove',function(event){
    
    document.documentElement.style.setProperty('--left_position',event.pageX+"px")
    document.documentElement.style.setProperty('--top_position',event.pageY+"px")
 
})

const container_input_icon=document.querySelectorAll('.container_input_icon')

let icon_menobar=document.querySelector('.icon_menobar')
let menobar_sm=document.querySelector('.menobar_sm')

let flag_icon_menobar=true
icon_menobar.addEventListener('click',function(){
  
    if(flag_icon_menobar==true){
        menobar_sm.style.height='280px'
        menobar_sm.style.visibility='visible'
        menobar_sm.style.tranisition='0.5s'
        flag_icon_menobar=false
        
    }
    else{
        menobar_sm.style.height='0px'
        menobar_sm.style.visibility='hidden'
        menobar_sm.style.tranisition='0.5s'
        flag_icon_menobar=true
    }

})




const loaderElem = document.querySelector('.loader')

window.addEventListener('load', function () {
 
    loaderElem.className += ' hidden'

})



















let logo_h1=document.querySelector('.logo_h1')

logo_h1.addEventListener('click',event=>{
    location.href='index.html'
})


let flag_logo=true
setInterval(function(){
    if(flag_logo==true){
        logo_h1.style.transform='scale(1.2)'
        logo_h1.style.tranisition='0.5s'
        flag_logo=false
    }
    else{
        logo_h1.style.transform='scale(1)'
        logo_h1.style.tranisition='0.5s'
        flag_logo=true
    }
},1000)
























let elemnts_icons_employer=document.getElementsByClassName('icons_employer')
let icon_toggle=document.querySelector('.icon_toggle')
let flag_icon_toggle=true
icon_toggle.addEventListener('click',function(){
    if(flag_icon_toggle==true){
        document.body.style.backgroundColor='black'
       
        icon_toggle.setAttribute('class','	fa fa-toggle-on')
        icon_toggle.style.fontSize='25px'
        flag_icon_toggle=false
        for(var i=0; i<6;i=i+1){
            elemnts_icons_employer[i].style.color='gold'
        }
     }
     else{
        document.body.style.backgroundColor='white'

        icon_toggle.setAttribute('class','	fa fa-toggle-off')
        icon_toggle.style.fontSize='25px'
        flag_icon_toggle=true
        for(var i=0; i<6;i=i+1){
            elemnts_icons_employer[i].style.color='black'
        }
     }
})



















let flag_submit=true

let input_pass=document.getElementById('input_pass')
let progress=document.querySelector('.progress')
let constant_number=0

let flage_alert_pass=true
let length_number_user=0
input_pass.addEventListener('keydown',function(event){
          if(event.key=='Enter'){
              reapet_pass.focus()
          }
         if(length_number_user>0 && event.keyCode==8){
                 length_number_user--
         }
         if(event.keyCode>47 && event.keyCode<58){
             length_number_user++
         }
        if( length_number_user<9){
            percent_progress=length_number_user*11.25
        }
          


      
     
     if(0<length_number_user<3){
      progress.style.width= percent_progress+"%"
         progress.style.border= '3px solid red'
        progress.style.tranisition='0.5s'
         progress.style.visibility='visible'
       flage_alert_pass=false
      }
       progress.style.backgroundColor=''
       if(4<length_number_user){
       
        progress.style.width=percent_progress+"%"
        progress.style.border= '3px solid orange'
       flage_alert_pass=false
        
      
    
        }
  if(6<length_number_user ){
    
    progress.style.width=percent_progress+"%"
   progress.style.border= '3px solid green'
    flage_alert_pass=true
     flag_submit=true
    
  }    
    if(input_pass.value==''){
         progress.style.width='0%'
         progress.style.border= '3px solid red'
         flage_alert_pass=false
       
  }

})
let alert_pass=document.querySelector('.alert_pass')
input_pass.addEventListener('blur',function(event){
    
    if(flage_alert_pass==false){
        alert_pass.innerHTML='رمز مورد نظر باید 8 رقم باشد!'
        alert_pass.style.color='red'
        container_input_icon[0].style.border='1.5px solid red'
        alert_pass.style.display='flex'
        
    }
    else{
        container_input_icon[0].style.border='1.5px solid gray'
        alert_pass.style.display='none'
       
    }
}) 














let reapet_pass=document.getElementById('reapet_pass')
let alert_reapet_pass=document.querySelector('.alert_reapet_pass')
reapet_pass.addEventListener('blur',function(event){
    
    
    if(event.target.value!=input_pass.value){
        alert_reapet_pass.innerHTML='تکرار رمز اشتباه است لطفا دوباره تلاش کنید!'
        alert_reapet_pass.style.color='red'
        container_input_icon[1].style.border='1.5px solid red'
        alert_reapet_pass.style.display='flex'
       
    }
    else{
        container_input_icon[1].style.border='1.5px solid gray'
        alert_reapet_pass.style.display='none'
       }
        
   

})



reapet_pass.addEventListener('keydown',function(event){

    if(event.keyCode==13){
        input_cap.focus()
     }

      })


     
    












let input_cap=document.getElementById('input_cap')
let alert_cap=document.querySelector('.alert_cap')
let code_cap=document.querySelector('.code_cap')
code_cap.innerHTML=Math.floor(Math.random()*100000000)
input_cap.addEventListener('blur',function(){
    if(input_cap.value!=code_cap.innerHTML){
          alert_cap.innerHTML='عدد وارد شده صحیح نمی باشد!'
          alert_cap.style.color='red'
          input_cap.style.border='1px solid red'
          alert_cap.style.display='flex'
    }
    else{
        input_cap.style.border='1px solid gray'
        alert_cap.style.display='none'
    }
})













let submit=document.querySelector('.form_submit')
const caution_submit=document.querySelector('.caution_submit')
submit.addEventListener('submit', function(event){
    if(input_cap.value==''&&input_pass.value==''&&reapet_pass.value==''){
        event.preventDefault()
        caution_submit.classList.add('active_caution_submit')
    }
        if(input_cap.value==''||input_pass.value==''||reapet_pass.value==''){
            event.preventDefault()
           
        }
        if(input_cap.style.border=='1px solid red'||
            input_pass.style.border=='1px solid red'||reapet_pass.style.border=='1px solid red'){
                event.preventDefault()
        }
        if(reapet_pass.value!=input_pass.value){
                 event.preventDefault()
        }
})

const delete_caution=document.querySelector('.delete_caution')
delete_caution.addEventListener('click',function(){
    caution_submit.classList.remove('active_caution_submit')
})


let toggel_pass=document.querySelectorAll('.eye')
let flag_toggle_pass=true
toggel_pass[0].addEventListener('click',function(){
    if(flag_toggle_pass==true){
        toggel_pass[0].setAttribute('class','fa fa-eye')
        input_pass.type="text"
        flag_toggle_pass=false
        toggel_pass[0].style.fontSize='20px'
    }
    else{
        toggel_pass[0].setAttribute('class','fa fa-eye-slash')
        input_pass.type="password"
        flag_toggle_pass=true
    }
})

let flag_toggle_pass_r=true
toggel_pass[1].addEventListener('click',function(){
    if(flag_toggle_pass_r==true){
        toggel_pass[1].setAttribute('class','fa fa-eye')
        reapet_pass.type="text"
        flag_toggle_pass_r=false
        toggel_pass[1].style.fontSize='20px'
    }
    else{
        toggel_pass[1].setAttribute('class','fa fa-eye-slash')
        reapet_pass.type="password"
        flag_toggle_pass_r=true
    }
})



setInterval(function(){
  code_cap.classList.toggle('code_cap_transform')
},1000)