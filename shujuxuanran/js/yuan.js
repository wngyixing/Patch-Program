var canvas=document.querySelectorAll('canvas');
function Can(canvas,num){
    //获取页面canvas的宽和高 半径
    this.width=canvas.width;
    this.height=canvas.height;
    this.r=this.width/2-10;
    //判断canvas中是否有num值没有输出默认值80
    this.num=canvas.dataset.num||80;
    //静态圆的颜色
    this.wyuqn='#eee';
    //动态圆的颜色
    this.dtyuan="#ff0000";
    //获取标签
    this.canvas=canvas;
    //设置默认粗细
    this.lineWidth=6;
    //canvas中字的大小
    this.font='24px';
    this.ctx=this.canvas.getContext('2d');
    canvas.width=this.width;
    canvas.height=this.height;
    this.init();


}
Can.prototype={
    constructor:Can,
    //初始化
    init:function(){
        this.nr();
        this.play()
    },
    //渲染静态圆
    waiyuan:function(){
        //
        var ctx=this.ctx;
        var width=this.width;
        var height=this.height;
        //设置中心点的位置
        ctx.translate(width/2,height/2);
        //设置圆的粗细
        ctx.lineWidth=this.lineWidth;
        //设置背景颜色
        ctx.strokeStyle=this.wyuqn;
        //定义开始
        ctx.beginPath();
        //画圆
        ctx.arc(0,0,this.r,0,2*Math.PI);
        //填充边框
        ctx.stroke();
        //定义结束
        ctx.closePath()
    },
    dtyuans:function(du){
        var ctx=this.ctx;
        var r=this.r;
        ctx.strokeStyle=this.dtyuan;
        ctx.beginPath();
        ctx.arc(0,0,r,-0.5*Math.PI,du/180*Math.PI-0.5*Math.PI);
        ctx.stroke();
        ctx.fillText((du/360*100).toFixed()+'%',0,0)
        ctx.translate(-this.width/2,-this.height/2)
        ctx.closePath()
    },
    play:function(){
        //获取百分比
        var bf=this.num;
        //计算结束角度
        var end=bf/100*360;
        //开始的角度
        var start=0;
        var that = this;
        var width=that.width;
        var height=that.height;
        var ctx=that.ctx;
        function callback(){
            //清除画布
            ctx.clearRect(0,0,width,height)
            if(start>=end){
                start=end
            }else{
                requestAnimationFrame(callback)
            }
            //绘制外圆
            that.waiyuan();
            that.dtyuans(start);
            start++;
        }
        callback()
    },
    nr:function(){
        //文字居中
        var ctx=this.ctx;
        ctx.textAlign='center';
        ctx.textBaseline='middle';
        ctx.font=this.font;
    }
}