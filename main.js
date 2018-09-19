//点击事件，点击下面按钮，滚到相应的图片位置
var allButtons=$('#buttons>span')
for(let i=0;i<allButtons.length;i++){
    $(allButtons[i]).on('click',function(x){
        var index=$(x.currentTarget).index()
        var p=index*-400
        $('#images').css({
            transform:'translateX('+p+'px)'
        })
        n=index             //让n=index，在点击的相应位置继续轮播
        activeButton(allButtons.eq(n))
    })
}

//自动轮播，并且按钮高亮
var n=0
var size=allButtons.length
playSlide(n%size)

var timerId=setTimer()

//封装成几个函数，优化一下代码
function setTimer(){                   
    return setInterval(()=>{            //延时执行函数，2秒后触发点击事件切换图片
        n+=1
        playSlide(n%size)
    },2000)
}

function playSlide(index){
    allButtons.eq(index).trigger('click')   //触发点击事件，切换图片，添加类，高亮按钮
            
}

function activeButton($button){
    $button.addClass('red').siblings('.red').removeClass('red')     //添加类，高亮按钮
}

//鼠标移入，停止轮播
$('.window').on('mouseenter',function(){
    window.clearInterval(timerId)
})

//鼠标移出，恢复轮播
$('.window').on('mouseleave',function(){
    timerId=setTimer()
        
})