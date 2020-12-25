
// 获取我们要操作的所有图片
var imgs = document.getElementById("ul_1").children;
// 获取我们需要操作的所有小圆点
var ul2 = document.getElementById("ul_2").children;
// 获取按钮
var leftbutton = document.getElementById("left_button");
var rightbutton = document.getElementById("right_button");
// 索引
var index = 0;
// 先定义一个定时器
var dingshiqi;
// 重启定时器的函数
// 为了页面一刷新就重启定时器所以先调用一下
congqi();
// 重启的函数
function congqi(){
    // 设置定时器 2秒为一个周期
    dingshiqi = setInterval(() => {
        // 让索引每隔两秒自加一
        index++;
        // 把所有图片的层级z-index归零
        for(var i=0;i<imgs.length;i++){
            // cssText 设置样式，跟写在行间一样的写法
            imgs[i].style.cssText = "z-index:0;";
            // 把所有小圆点的选中背景和字体颜色返回没选中状态
            ul2[i].style.cssText="background-color:#fff;color:#000;";
        }
        // 如果图片到了最后一张,下一张，让他返回第一张
        if(index == imgs.length){
            index=0;
        }
        // 把当前索引代表的图片和小圆点设置被选中的样式
        imgs[index].style.cssText = "z-index:100;";
        ul2[index].style.cssText = "background-color:#ff9700;color:#fff;";
    }, 3000);
}
// 绑定左侧按钮点击事件
leftbutton.onclick = function(){
    // 先清除定时器
    clearInterval(dingshiqi);
    // 让索引自减1
    index--;
    // 把所有图片的层级z-index归零
    for(var i=0;i<imgs.length;i++){
        imgs[i].style.cssText = "z-index:0;";
        // 把所有小圆点的选中背景和字体颜色返回没选中状态
        ul2[i].style.cssText="background-color:#fff;color:#000;";
    }
    // 如果减到第一张，再按一下按钮返回最后一张
    if(index<0){
        index=imgs.length-1;
    }
    // 把当前索引代表的图片和小圆点设置被选中的样式
    imgs[index].style.cssText = "z-index:100;";
    ul2[index].style.cssText = "background-color:#ff9700;color:#fff;";
    // 完成所有的东西后重启定时器
    congqi();
}
// 绑定右侧按钮点击事件
rightbutton.onclick = function(){
    clearInterval(dingshiqi);
    index++;
    // 把所有图片的层级z-index归零
    for(var i=0;i<imgs.length;i++){
        imgs[i].style.cssText = "z-index:0;";
        // 把所有小圆点的选中背景和字体颜色返回没选中状态
        ul2[i].style.cssText="background-color:#fff;color:#000;";
    }
    // 如果加到最后一张，再按一下按钮返回第一张
    if(index==imgs.length){
        index=0;
    }
    // 把当前索引代表的图片和小圆点设置被选中的样式
    imgs[index].style.cssText = "z-index:100;";
    ul2[index].style.cssText = "background-color:#ff9700;color:#fff;";
    // 完成所有的东西后重启定时器
    congqi();                            
}
// 绑定点击每一个小圆点的事件
// 第一张图
ul2[0].onclick = function(){
    clearInterval(dingshiqi);
    index = 0;
    // 把所有图片的层级z-index归零
    for(var i=0;i<imgs.length;i++){
        imgs[i].style.cssText = "z-index:0;";
        // 把所有小圆点的选中背景和字体颜色返回没选中状态
        ul2[i].style.cssText="background-color:#fff;color:#000;";
    }
    // 把当前索引代表的图片和小圆点设置被选中的样式
    imgs[index].style.cssText = "z-index:100;";
    ul2[index].style.cssText = "background-color:#ff9700;color:#fff;";
    // 完成所有的东西后重启定时器
    congqi();                                                        
}
// 第二张图
ul2[1].onclick = function(){
    clearInterval(dingshiqi);
    index = 1;
    // 把所有图片的层级z-index归零
    for(var i=0;i<imgs.length;i++){
        imgs[i].style.cssText = "z-index:0;";
        // 把所有小圆点的选中背景和字体颜色返回没选中状态
        ul2[i].style.cssText="background-color:#fff;color:#000;";
    }
    // 把当前索引代表的图片和小圆点设置被选中的样式
    imgs[index].style.cssText = "z-index:100;";
    ul2[index].style.cssText = "background-color:#ff9700;color:#fff;";
    // 完成所有的东西后重启定时器
    congqi();                                                        
} 
// 第三张图                   
ul2[2].onclick = function(){
    clearInterval(dingshiqi);
    index = 2;
    // 把所有图片的层级z-index归零
    for(var i=0;i<imgs.length;i++){
        imgs[i].style.cssText = "z-index:0;";
        // 把所有小圆点的选中背景和字体颜色返回没选中状态
        ul2[i].style.cssText="background-color:#fff;color:#000;";
    }
    // 把当前索引代表的图片和小圆点设置被选中的样式
    imgs[index].style.cssText = "z-index:100;";
    ul2[index].style.cssText = "background-color:#ff9700;color:#fff;";
    // 完成所有的东西后重启定时器
    congqi();                                                        
}    
// 第四张图                    
ul2[3].onclick = function(){
    clearInterval(dingshiqi);
    index = 3;
    // 把所有图片的层级z-index归零
    for(var i=0;i<imgs.length;i++){
        imgs[i].style.cssText = "z-index:0;";
        // 把所有小圆点的选中背景和字体颜色返回没选中状态
        ul2[i].style.cssText="background-color:#fff;color:#000;";
    }
    // 把当前索引代表的图片和小圆点设置被选中的样式
    imgs[index].style.cssText = "z-index:100;";
    ul2[index].style.cssText = "background-color:#ff9700;color:#fff;";
    // 完成所有的东西后重启定时器
    congqi();                                                        
}  
// 第五张图
ul2[4].onclick = function(){
    clearInterval(dingshiqi);
    index = 4;
    // 把所有图片的层级z-index归零
    for(var i=0;i<imgs.length;i++){
        imgs[i].style.cssText = "z-index:0;";
        // 把所有小圆点的选中背景和字体颜色返回没选中状态
        ul2[i].style.cssText="background-color:#fff;color:#000;";
    }
    // 把当前索引代表的图片和小圆点设置被选中的样式
    imgs[index].style.cssText = "z-index:100;";
    ul2[index].style.cssText = "background-color:#ff9700;color:#fff;";
    // 完成所有的东西后重启定时器
    congqi();                                                        
}      
// 第六张图
ul2[5].onclick = function(){
    clearInterval(dingshiqi);
    index = 5;
    // 把所有图片的层级z-index归零
    for(var i=0;i<imgs.length;i++){
        imgs[i].style.cssText = "z-index:0;";
        // 把所有小圆点的选中背景和字体颜色返回没选中状态
        ul2[i].style.cssText="background-color:#fff;color:#000;";
    }
    // 把当前索引代表的图片和小圆点设置被选中的样式
    imgs[index].style.cssText = "z-index:100;";
    ul2[index].style.cssText = "background-color:#ff9700;color:#fff;";
    // 完成所有的东西后重启定时器
    congqi();                                                        
}    
// 第七张图
ul2[6].onclick = function(){
    clearInterval(dingshiqi);
    index = 6;
    // 把所有图片的层级z-index归零
    for(var i=0;i<imgs.length;i++){
        imgs[i].style.cssText = "z-index:0;";
        // 把所有小圆点的选中背景和字体颜色返回没选中状态
        ul2[i].style.cssText="background-color:#fff;color:#000;";
    }
    // 把当前索引代表的图片和小圆点设置被选中的样式
    imgs[index].style.cssText = "z-index:100;";
    ul2[index].style.cssText = "background-color:#ff9700;color:#fff;";
    // 完成所有的东西后重启定时器
    congqi();                                                        
}      
// 第八张图
ul2[7].onclick = function(){
    clearInterval(dingshiqi);
    index = 7;
    // 把所有图片的层级z-index归零
    for(var i=0;i<imgs.length;i++){
        imgs[i].style.cssText = "z-index:0;";
        // 把所有小圆点的选中背景和字体颜色返回没选中状态
        ul2[i].style.cssText="background-color:#fff;color:#000;";
    }
    // 把当前索引代表的图片和小圆点设置被选中的样式
    imgs[index].style.cssText = "z-index:100;";
    ul2[index].style.cssText = "background-color:#ff9700;color:#fff;";
    // 完成所有的东西后重启定时器
    congqi();                                                        
}
// 第九张图
ul2[8].onclick = function(){
    clearInterval(dingshiqi);
    index = 8;
    // 把所有图片的层级z-index归零
    for(var i=0;i<imgs.length;i++){
        imgs[i].style.cssText = "z-index:0;";
        // 把所有小圆点的选中背景和字体颜色返回没选中状态
        ul2[i].style.cssText="background-color:#fff;color:#000;";
    }
    // 把当前索引代表的图片和小圆点设置被选中的样式
    imgs[index].style.cssText = "z-index:100;";
    ul2[index].style.cssText = "background-color:#ff9700;color:#fff;";
    // 完成所有的东西后重启定时器
    congqi();                                                        
}  
// 第十张图
ul2[9].onclick = function(){
    clearInterval(dingshiqi);
    index = 9;
    // 把所有图片的层级z-index归零
    for(var i=0;i<imgs.length;i++){
        imgs[i].style.cssText = "z-index:0;";
        // 把所有小圆点的选中背景和字体颜色返回没选中状态
        ul2[i].style.cssText="background-color:#fff;color:#000;";
    }
    // 把当前索引代表的图片和小圆点设置被选中的样式
    imgs[index].style.cssText = "z-index:100;";
    ul2[index].style.cssText = "background-color:#ff9700;color:#fff;";
    // 完成所有的东西后重启定时器
    congqi();                                                        
}                                              
