//点击事件，点击下面按钮，滚到相应的图片位置
var allButtons=$('#buttons>span')
for(let i=0;i<allButtons.length;i++){
    $(allButtons[i]).on('click',function(x){
        var index=$(x.currentTarget).index()
        var p=index*-400
        $('#images').css({
            transform:'translateX('+p+'px)'
        })
        n=index             //在点击的相应位置继续轮播
        allButtons.eq(n).addClass('red').siblings('.red').removeClass('red')
    })
}

//自动轮播，并且按钮高亮
var n=0
var size=allButtons.length
allButtons.eq(n%size).trigger('click').addClass('red').siblings('.red').removeClass('red')

var timerId=setInterval(()=>{
    n+=1
    allButtons.eq(n%size).trigger('click').addClass('red').siblings('.red').removeClass('red')
},2000)

//鼠标移入，停止轮播
$('.window').on('mouseenter',function(){
    window.clearInterval(timerId)
})

//鼠标移出，恢复轮播
$('.window').on('mouseleave',function(){
    timerId=setInterval(()=>{
        n+=1
        allButtons.eq(n%size).trigger('click').addClass('red').siblings('.red').removeClass('red')
    },2000)
})