window.onload=function(){
    search();
    secondkill();
}

// 顶部条固定变浅
function search() {
    var search = document.getElementsByClassName("header")[0];
    var banner = document.getElementsByClassName("loop")[0];
    //获取banner卷去的高度
    var height = banner.offsetHeight;
    window.onscroll = function () {
        //当滚动高度大于banner卷去高度时颜色不变
        //首先获取banner滚动高度，在做判断
        var top = document.documentElement.scrollTop;
        if (top > height) {
            search.style.background = "rgba(201,21,35,0.4)";
        }
        else {
            var opacty = top / this.height * 0.5;
            this.search.style.background = "rgba(201,21,35,'+opacty')";
        }
    }
}
// 倒计时部分
function secondkill(){
    //1,获取所有数字
    //2,做倒计时计算设置时分秒
    //3，时分秒添加到页面
    var str_time=document.getElementsByClassName('str_time')[0];

    //拿到需要添加元素的内容
    var str_num=document.getElementsByClassName('num');
    console.log(str_time.length)

    var times=5*60*60;//让倒计时从5、60、60、开始往下减
    
    var timer=setInterval(function(){
        //时间往下减
        times--;
        //时间运算，你还不会记得多看哦~~~
        var h=Math.floor(times/(60*60));
        console.log(h);
        var m=Math.floor(times/60%60);
        console.log(m);
        var s=times%60;
        console.log(s);
        
        //补0
        str_num[0].innerHTML=h>10?Math.floor(h/10):0
        str_num[1].innerHTML=h%10;
        str_num[2].innerHTML=m>10?Math.floor(m/10):0
        str_num[3].innerHTML=m%10;
        str_num[4].innerHTML=s>10?Math.floor(s/10):0
        str_num[5].innerHTML=s%10;

    },1000)
}