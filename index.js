var target = document.getElementById('target')
var score = document.getElementById('score')
var caption = document.getElementById('caption')
var body=document.getElementById('body')
var retry=document.getElementById('retry')
var timer=0

var t_width=90
var t_height=90

target.style.height=t_height+"px"
target.style.width=t_width+"px"



setInterval(() => {
    var topp=Math.random()*80

var leftt=Math.random()*90
    target.style.top=topp+"%"
    target.style.left=leftt+"%"
},900);

setInterval(() => {
    timer++
    target.innerHTML=timer
    
    if(timer==60){
        target.style.display='none'
        score.style.display='none'
        retry.style.display='inline'
        caption.innerHTML="Score: "+score.innerHTML
        caption.style.color='white'
        body.style.backgroundColor='teal'
    }
}, 1000);

target.addEventListener('click',function(){
    score.innerHTML++
    t_width--
    t_height--
    t_width--
    t_height--
    target.style.height=t_height+"px"
    target.style.width=t_width+"px"
body.style.backgroundColor='red'

})


target.addEventListener('dblclick',function(){
    score.innerHTML++
    score.innerHTML++
    score.innerHTML++
    score.innerHTML++
    t_width++
    t_height++
    t_width++
    t_height++
    target.style.height=t_height+"px"
    target.style.width=t_width+"px"
body.style.backgroundColor='green'

})