export default {
    install: function(Vue, opt) {
         /**
         * 数字滚动
         * @param {Object} num 		开始值
         * @param {Object} maxNum	最大值,最终展示的值
         * @param {Object} dom      需要数字滚动的dom
         */ 
        Vue.prototype.numRunFun =  function(num, maxNum, numBox) {
            var numText = num;
            var golb; // 为了清除requestAnimationFrame
            function numSlideFun(){
                numText+=0.4; // 速度的计算可以为小数
                if(numText >= maxNum){
                    numText = maxNum;	
                    cancelAnimationFrame(golb);
                }else {
                    golb = requestAnimationFrame(numSlideFun);
                }
                numBox.innerHTML = ~~(numText)
            }
            numSlideFun();
        }
    }
}