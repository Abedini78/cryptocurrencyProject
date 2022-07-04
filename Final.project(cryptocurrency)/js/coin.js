
const loaderElem = document.querySelector('.loader')

window.addEventListener('load', function () {
 
    loaderElem.className += ' hidden'

})


let SearchParam=new URLSearchParams(location.search)

const Coin_Details={
     name:SearchParam.get('CoinName'),
     src:SearchParam.get('CoinsrcImg'),
     rsi:SearchParam.get('CoinRsi'),
     cci:SearchParam.get('CoinCci'),
     price:SearchParam.get('CoinPrice'),
     Modifyprice24h:SearchParam.get('CoinPrice1h'),
     MrketCupCoin:SearchParam.get('MarketCupCoin'),
     MrketCup24h:SearchParam.get('MarketCup24h'),
     Modify1h:SearchParam.get('Modify1h'),
     Modify24h:SearchParam.get('Modify24h'),
     UrlAndicator:SearchParam.get('UrlAndicator')
}

console.log(Coin_Details)

$=document
const CoinName=$.querySelector('.CoinName')
const CoinImg=$.querySelector('.CoinImg')
const CoinPrice=$.querySelector('.CoinPrice')
const Span_modifyprice24h=$.querySelector('.modifyprice24h')
const ditailsMarketCoin=$.querySelectorAll('.SpanMarketCoin')
const SpanRsi=$.querySelector('.SpanShowRsi')
const SpanCci=$.querySelector('.SpanShowCci')
const IframeElem=$.querySelector('.iframe')

console.log(ditailsMarketCoin)
CoinName.innerHTML=Coin_Details.name
CoinImg.src=Coin_Details.src
CoinPrice.innerHTML=`$${Coin_Details.price}`
ditailsMarketCoin[0].innerHTML=`$${Coin_Details.MrketCupCoin}`
SpanRsi.innerHTML=parseFloat(Coin_Details.rsi).toFixed(2)
SpanCci.innerHTML=parseFloat(Coin_Details.cci).toFixed(2)

IframeElem.src=Coin_Details.UrlAndicator


if(Coin_Details.Modify1h>0){
    ditailsMarketCoin[1].innerHTML=`${Coin_Details.Modify1h}%`
    ditailsMarketCoin[1].classList.add('ColorGreen')
}
if(Coin_Details.Modify1h<0){
    ditailsMarketCoin[1].innerHTML=`${Coin_Details.Modify1h}%`
    ditailsMarketCoin[1].classList.add('ColorRed')
}



if(Coin_Details.Modify24h>0){
    ditailsMarketCoin[2].innerHTML=`$${Coin_Details.Modify24h}`
    ditailsMarketCoin[2].classList.add('ColorGreen')
}
if(Coin_Details.Modify24h<0){
    ditailsMarketCoin[2].innerHTML=`$${Coin_Details.Modify24h}`
    ditailsMarketCoin[2].classList.add('ColorRed')
}


if(Coin_Details.MrketCup24h>0){
    ditailsMarketCoin[3].innerHTML=`$${Coin_Details.MrketCup24h}`
    ditailsMarketCoin[3].classList.add('ColorGreen')
}
if(Coin_Details.MrketCup24h<0){
    ditailsMarketCoin[3].innerHTML=`$${Coin_Details.MrketCup24h}`
    ditailsMarketCoin[3].classList.add('ColorRed')
}


if(Coin_Details.Modifyprice24h>0){
    Span_modifyprice24h.classList.add('green')
   
    Span_modifyprice24h.innerHTML=`${Coin_Details.Modifyprice24h}%`
}
if(Coin_Details.Modifyprice24h<0){
    Span_modifyprice24h.classList.add('crimson')

    
    Span_modifyprice24h.innerHTML=`${Coin_Details.Modifyprice24h}%`
}





let icon_menobar=document.querySelector('.icon_menobar')
let menobar_sm=document.querySelector('.menobar_sm')
const article=$.querySelector('.article')
let flag_icon_menobar=true
icon_menobar.addEventListener('click',function(){
     console.log(article)
    if(flag_icon_menobar==true){
        menobar_sm.classList.add('active_menobar_sm')
        article.classList.add('article_ActiveMenu')
        flag_icon_menobar=false
       
    }
    else{
        menobar_sm.classList.remove('active_menobar_sm')
        article.classList.remove('article_ActiveMenu')
        flag_icon_menobar=true
    }

})

let logo_h1=document.querySelector('.logo_h1')
logo_h1.addEventListener('click',event=>{
    location.href='html/index.html'
})
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

$=document
const Back_Btn=$.querySelector('.icon_toggle')

Back_Btn.addEventListener('click',event=>{
     history.back()
})



logo_h1.addEventListener('click',event=>{
    location.href='index.html'
})