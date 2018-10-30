<template>
    <div>
        <!-- 头部 -->
        <header>
            <div class="header-logo">
                <img src="../assets/logo.png" class="header-hft">
                <img src="../assets/title.png" class="header-title">
            </div>

            <!-- 订单数据 -->
            <div class="header-main">   
                <div class="main-date">
                    <p class="main-date-today">{{headerData.timestam | dateFormat}}</p>
                    <span class="main-date-week">星期{{week}}</span>
                    <span class="main-date-weather"></span>
                </div>
                <!-- 订单数据展示 -->
                <div class="header-orderList" v-for="(item, index) in headerData.list" :key="index">  
                     <p class="orderList-title">{{item.title}}</p>
                     <p class="orderList-num">{{item.num}}</p>
                     <div class="orderList-rate">
                        <span class="item-upNum">今日新增{{item.upNum}}</span>
                        环比
                        <span v-if="item.upRate != ''" class="item-upRate">{{item.upRate+"↑"}}</span>
                        <span v-if="item.downRate != ''" class="item-downRate">{{item.downRate+"↓"}}</span>
                     </div>
                </div>
            </div>
        </header>

        <!-- 主体 -->
        <section class="main">
            <div class="main-left">
                <!-- 房源数据（横向柱状图） -->
                <div class="main-houseData">
                    <div class="youyou-title">          
                        <p>房源数据(万套)</p>
                    </div>
                    <div id="youyou-bar">
                        <div class="bar-title">
                            <div>
                                <p class="bar-num">102310</p>
                                <p>二手房</p>
                            </div>
                            <div>
                                <p class="bar-num">102310</p>
                                <p>租房</p>
                            </div>
                            <div>
                                <p class="bar-num">102310</p>
                                <p>新房</p>
                            </div>
                        </div>
                        <div class="bar-item">  
                            <div>
                                <div class="bar-item-title">今日新增二手房</div>
                                <div class="bar-item-value">
                                    {{houseData.todayScondHouse}}
                                </div>
                                <div class="item-default" ref="default">
                                    <div class="item-proportion todayScondHouse"></div>
                                </div>
                            </div>
                            
                            <div>
                                <div class="bar-item-title">今日新增租房</div>
                                <div class="bar-item-value">
                                    {{houseData.todayRenting}}
                                </div>
                                <div class="item-default" ref="default">
                                    <div class="item-proportion todayRenting"></div>
                                </div>
                            </div>
                            <div>
                                <div class="bar-item-title">今日新增新房</div>
                                <div class="bar-item-value">
                                    {{houseData.todayNewHouse}}
                                </div>
                                <div class="item-default" ref="default">
                                    <div class="item-proportion todayNewHouse"></div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <!-- 优优好房线形图 -->
                <div class="main-youyou">
                    <div class="youyou-title">          
                        <img src="../assets/uuhaof.png" class="uuhaof">
                        <span class="main-span1">今日访问量</span>
                        <span class="main-span2">1234545</span>
                    </div>
                    <div id="youyou-line">

                    </div>
                </div>
            </div>

            <div class="main-map">
				<div id="main-maps">

				</div>
				<div class="point" ref="point">
					<p>{{mapInfo.title}}</p> 
					<p>{{mapInfo.city}}</p>
					<p>{{mapInfo.price}}</p>
				</div>
            </div>
        
            <div class="main-order">
                <div class="entrustNum">
                    <p>24小时委托量</p>
                    <ul>
                        <li v-for="(item, index) in orderData.entrus" :key="index">{{item}}</li>
                    </ul>
                </div>
                <div class="order-item">
                    <img src="../assets/fang.png" alt="">
                    <p>全国门店覆盖量</p>
                    <div class="num">{{orderData.shopNum}}</div>
                </div>
                <div class="order-item">
                    <img src="../assets/ren.png" alt="">
                    <p>全国经纪人</p>
                    <div class="num">{{orderData.borkerNum}}</div>
                </div>
                <div class="order-item">
                    <img src="../assets/shouji.png" alt="">
                    <p>APP下载量</p>
                    <div class="num">{{orderData.APPNum}}</div>
                </div>
            </div>

            <div class="main-right">
                <div class="right-tabel">
                    <h4>全国各城市房源价格动态</h4>
                    <table class="tabelData"  border="1" cellspacing="0">
                         <tbody>
                            <tr class="thead">
                                <td>城市</td>
                                <td>挂牌登记量(套)</td>
                                <td>成交均价(元/m)</td>
                            </tr>
                            <tr v-for="(item, index) in tabelList" :key="index">
                                <td>{{item.city}}</td>
                                <td>
                                    {{item.num}}
                                    <span v-if="item.upRate != ''" class="item-upRate">{{item.upRate+"↑"}}</span>
                                    <span v-if="item.downRate != ''" class="item-downRate">{{item.downRate+"↓"}}</span>
                                </td>
                                <td>
                                    {{item.num}}
                                    <span v-if="item.upRate != ''" class="item-upRate">{{item.upRate+"↑"}}</span>
                                    <span v-if="item.downRate != ''" class="item-downRate">{{item.downRate+"↓"}}</span>
                                </td>
                            </tr>
                         </tbody>
                    </table>               
                </div>

                <div class="pie">
                    <h4>近日租房客源占比</h4>
                    <div class="pie-box">
                        <div class="pie-rent-info pie-info">
                            <div id="pie-rent"></div> 
                            <div class="pie-title">租赁</div>
                        </div>    
                        <div class="pie-deal-info pie-info">
                            <div id="pie-deal"></div>
                            <div class="pie-title">买卖</div>         
                        </div>
                    </div>
                </div>
            </div>
            
        </section>

        <!-- 底部 -->
        <footer>
            <div class="news-left" id="news-left" ref="news-left">                      
                <ul id="con1">
                    <li v-for=" (item, index) in newsList" :key="index">
                        <span>
                            【{{item.city}}】【{{item.Type}}】{{item.value}}
                        </span>
                        <span>{{item.date}}</span>
                    </li>
                </ul>
            </div>

            <div class="footer-line" id="footer-line">

            </div>

            <div class="news-left news-center">                      
                  <ul id="con1">
                    <li v-for=" (item, index) in newsList" :key="index">
                        <span>【{{item.city}}】【{{item.Type}}】{{item.value}}</span>
                        <span>{{item.date}}</span>
                    </li>
                </ul>
            </div>

            <div class="footer-graph" id="footer-graph">

            </div>

            <div class="news-left news-right">                      
                  <ul id="con1">
                    <li v-for=" (item, index) in newsList" :key="index" ref="rollul">
                        <span>【{{item.city}}】【{{item.Type}}】{{item.value}}</span>
                        <span>{{item.date}}</span>
                    </li>
                </ul>
            </div>
        </footer>
    </div>
</template>

<script>
    export default {
        data() {
            return {
                headerData: [],   //header订单数据
                week: "",         //星期几
                geoCoordMap: {},  //地图数据
                youyou:null,      //优优数据 
                barList: [],      //房源数据柱状图
                barPCT: [],       //计算出柱状图的百分比
                newsList: {},   //新闻列表
                orderData: {},    //门店数据
                houseData: {},    //房源数据
                todayScondHouse: 0, //今日二手房数据,向上取整
                todayNewHouse: 0,	//今日新房数据,向上取整
                todayRenting: 0,	//今日租房数据,向上取整
				animate:true,		//字体向上滚动的标记
				tabelList: [],		//城市动态数据
				mapInfo: {},		//获取的地图坐标以及用户购买数据
            }
        },   
        created() {
            this.getHeaderData()//获取头部数据
            this.getOrderData() //获取全国门店数量等数据 
            this.getHouseData() //获取房源数据
            this.getNews()      //获取底部新闻列表
            this.getCityData()  //获取城市动态数据
            // 三秒轮播一次
            setInterval(this.scroll,3000)         
        },
        mounted() {
			this.youyouDrawLine();  //优优好房line图
			this.getNews();
			//  echarts 图表延迟执行，不延迟执行初始化找不到dom
            setTimeout(()=> { 
				this.calculateHouse() 
				this.getMap()
				this.getPie()
				this.footerLine()
				this.footerGraph()
            },10)
        },
        methods: {
            // 请求header数据
            getHeaderData(){
                this.$http({method: "get", url: '../../static/mock/headMock.json', dataType: 'json', crossDomain: true, cache: false})
                .then(res=> {
                    this.headerData = res.data;

                    // 计算当天星期几
                    let date = new Date(this.headerData.timestam);
                    let Y = date.getFullYear();
                    let M = (date.getMonth()+1 < 10 ? '0'+(date.getMonth()+1) : date.getMonth()+1);
                    let D = date.getDate();
                    let result = Y + '-' + M + '-' + D;
                    var weekArray = new Array("日", "一", "二", "三", "四", "五", "六");
                    this.week = weekArray[new Date(result).getDay()];//注意此处必须是先new一个Date
                })   
            },
            // 房源数据
            getHouseData() {
                this.$http({method: "get", url: '../../static/mock/houseData.json', dataType: 'json', crossDomain: true, cache: false})
                .then(res=> {  
                    this.houseData = res.data;

                    //  得到的数据向上取整，计算出占用的比例 算出长度
                    this.todayScondHouse = this.houseData.todayScondHouse / Math.ceil(this.houseData.todayScondHouse)
                    this.todayNewHouse = this.houseData.todayNewHouse / Math.ceil(this.houseData.todayNewHouse)
                    this.todayRenting = this.houseData.todayRenting / Math.ceil(this.houseData.todayRenting)
                })
            },
            // 计算房源数据柱状图占比率
            calculateHouse(){ 
                let proportionList = document.getElementsByClassName('item-proportion');
				let defaultWidth = document.getElementsByClassName('item-default')[0].offsetWidth;

				proportionList[0].style.width = (this.todayScondHouse * defaultWidth) + 'px'
                proportionList[1].style.width = (this.todayNewHouse * defaultWidth) + 'px'
                proportionList[2].style.width = (this.todayRenting * defaultWidth) + 'px'
            },            
            // 优优好房折线图
            youyouDrawLine() {
                let youyouData; //存放好好获取优优好房的数据    
                this.$http({method: "get", url: '../../static/mock/youyou.json', dataType: 'json', crossDomain: true, cache: false})
                .then(res=> {
                    youyouData = res.data;
                    // 基于准备好的dom，初始化echarts实例
					let myChart = this.$echarts.init(document.getElementById('youyou-line'))
                    // 绘制图表
                    myChart.setOption({
                        title: {
                            text: ''
                        },
                        color:['#01cab3', '#f89f1d'],
                        legend: {		// 图例设置
                            data: [
                                {
                                    name: 'pv',
                                    textStyle: { 	
                                        color: '#01cab3'          // 图例文字颜色
                                    }
                                },
                                {
                                    name: 'uv',
                                    textStyle: { 
                                        color: '#f89f1d'          // 图例文字颜色
                                    }
                                },
                            ], 
                            x: '50%',  
                            y: '5%'
                        },
                        grid: {		// 调整图表距离初始化dom的距离              
                            left: '3%',
                            right: '4%',
                            bottom: '3%',
                            containLabel: true
                        },
                        xAxis: {	//x轴的设置
                            type: 'category',
                            boundaryGap: false, 
                            data: ['周一','周二','周三','周四','周五','周六','周七'],
                            axisLabel: {
                                show: true,
                                textStyle: {                
                                    color: '#83ecf3'	//x轴底部字体的颜色
								},
								interval: 0		//当x轴数据太多无法全部显示时, 调整间距可以全部显示
                            },
                            axisLine: {		//x轴线的设置
                                lineStyle: {
                                    color: '#115372'	
                                }
                            }
                                                        
                        },
                        yAxis: [{
                                type: 'value',
                                axisLabel: {
                                    show: true,
                                    textStyle: {
                                        color: '#01cab3'
                                    }
                                },
                                axisLine: {
                                    show: false
                                },
                                splitLine: {
                                    show: true,
                                    lineStyle:{
                                        color: ['#115372'],
                                        width: 1,
                                        type: 'solid'
                                    }
                                }
                            },
                            {
                                type: 'value',
                                axisLabel: {
                                    show: true,
                                    textStyle: {
                                        color: '#f89f1d'
                                    }
                                },
                                axisLine: {
                                    show: false
                                },
                                splitLine: {
                                    show: true,
                                    lineStyle:{
                                        color: ['#115372'],
                                        width: 1,
                                        type: 'solid'
                                    }
                                }
                            }
                        ],
                        series: [
                            {
                                name:'pv',
                                type:'line',
                                stack: '总量',
                                yAxisIndex: 0,
                                data:youyouData.pv
                            },
                            {
                                name:'uv',
                                type:'line',
                                stack: '总量',
                                yAxisIndex: 1,
                                data:youyouData.uv
                            }
                        ]
                    });
                })
            },
            //获取全国门店等数量
            getOrderData(){  
                this.$http({method: "get", url: '../../static/mock/quanguo.json', dataType: 'json', crossDomain: true, cache: false})
                .then(res=> {
					res.data.entrus = res.data.entrus.split('')
					this.orderData = res.data;  
					console.log(this.orderData)
                })                     
            },
            // 文字滚动
            scroll(){  
		        let con1 = this.$refs.rollul;
				if(!con1[0]) return; 	//如果不存在则直接返回
                con1[0].style.marginTop='30px';
                this.animate=!this.animate;
                // 尾部添加，头部删除                
                setTimeout(()=> { 
                    this.newsList.push(this.newsList[0]);
                    this.newsList.shift(); 
                    con1[0].style.marginTop='0px';
		            this.animate=!this.animate;  // animate取反防止出现回滚
                },0)
            },
            // 获取底部新闻资讯 
            getNews(){
                this.$http({method: "get", url: '../../static/mock/news.json', dataType: 'json', crossDomain: true, cache: false})
                .then(res=> {
                    this.newsList = res.data.data;
                })   
            },
            // 获取全国各城市房价数据
            getCityData() {
                this.$http({method: "get", url: '../../static/mock/tabel.json', dataType: 'json', crossDomain: true, cache: false})
                .then(res=> {
                    this.tabelList = res.data;
                }) 
			},
			// 饼图
    		getPie() {
				let myChart = this.$echarts.init(document.getElementById('pie-rent'))
				let pieDeal = this.$echarts.init(document.getElementById('pie-deal'))
				console.log('饼图111')
				console.log(document.getElementById('pie-deal')) 
				// app.title = '饼图';
				var option = {
					tooltip: {
						trigger: 'item',
						formatter: "{a} <br/>{b}: {c} ({d}%)"
					},
					series: [{
						name: '访问来源',
						type: 'pie',
						selectedMode: 'single',
						radius: [0, '80%'],
						label: {
							normal: {
								position: 'inner',      //字体文字设置到图表内部
								formatter: "{d}%\n{b}"  //{a}：系列名。{b}：数据名。{c}：数据值。{d}：百分比。
							}
						},
						labelLine: {
							normal: {
								show: false
							}
						},
						data: [{
								value: 335,
								name: '房源',
								selected: true
							},
							{
								value: 679,
								name: '成交'
							},
							{
								value: 1548,
								name: '租客'
							}
						]
					}, ]
				};
				myChart.setOption(option, true);
				pieDeal.setOption(option, true);
			},
			// 地图
			getMap() {
				this.$http({method: "get", url: '../../static/mock/map.json', dataType: 'json', crossDomain: true, cache: false})
                .then(res=> {
					// res.data.type:  1 为买房, 2为租房（自定义）
                    this.mapInfo = res.data;
					var dom = document.getElementById("main-maps"); 
					var myChart = this.$echarts.init(dom); //初始化
					function randomData() {
						return Math.round(Math.random()*1000);
					}
					// 配置
					var option = {
						visualMap: {
							min: 0,
							max: 2500,
							left: 'left',
							top: 'bottom',
							text: ['高','低'],           // 文本，默认为数值文本
							calculable: true,
							show: false,
							inRange: {
								color: ['#02235c', '#6a9bef']
							}                    
						},
						series: [
							{
								name: 'hft',
								type: 'map',
								mapType: 'china',
								roam: false,
								label: {
									normal: {
										show: true,
										color: '#0ba6ff'
									},
									emphasis: {
										show: true,
										areaStyle:{
											color:'red'
										}
									}
								},
								itemStyle:{
									normal:{
										label:{show:true},
										borderWidth:1,//省份的边框宽度
										borderColor:'#00effc',//省份的边框颜色
									},
									emphasis:{label:{show:true}}
								},
								data:[
									{name: '北京',value: randomData() },
									{name: '天津',value: randomData() },
									{name: '上海',value: randomData() },
									{name: '重庆',value: randomData() },
									{name: '河北',value: randomData() },
									{name: '河南',value: randomData() },
									{name: '云南',value: randomData() },
									{name: '辽宁',value: randomData() },
									{name: '黑龙江',value: randomData() },
									{name: '湖南',value: randomData() },
									{name: '安徽',value: randomData() },
									{name: '山东',value: randomData() },
									{name: '新疆',value: randomData() },
									{name: '江苏',value: randomData() },
									{name: '浙江',value: randomData() },
									{name: '江西',value: randomData() },
									{name: '湖北',value: randomData() },
									{name: '广西',value: randomData() },
									{name: '甘肃',value: randomData() },
									{name: '山西',value: randomData() },
									{name: '内蒙古',value: randomData() },
									{name: '陕西',value: randomData() },
									{name: '吉林',value: randomData() },
									{name: '福建',value: randomData() },
									{name: '贵州',value: randomData() },
									{name: '广东',value: randomData() },
									{name: '青海',value: randomData() },
									{name: '西藏',value: randomData() },
									{name: '四川',value: randomData() },
									{name: '宁夏',value: randomData() },
									{name: '海南',value: randomData() },
									{name: '台湾',value: randomData() },
									{name: '香港',value: randomData() },
									{name: '澳门',value: randomData() }
								]
							}
						]
					};
					myChart.setOption(option, true);  

					/**
					 * 坐标系转换
					 */ 
					// 获取系列
					var seriesModel = myChart.getModel().getSeriesByIndex(option.series.length - 1)
					// 获取地理坐标系实例
					var coordSys = seriesModel.coordinateSystem;
					// dataToPoint 相当于 getPosByGeo	屏幕坐标
					// var point = coordSys.dataToPoint([this.mapInfo.longitude, this.mapInfo.latitude]);
					let newArr = []
					console.log(this.mapInfo)
					this.mapInfo.forEach(element=> {
						let point2 = coordSys.dataToPoint([element.longitude, element.latitude])
						newArr.push({point:point2, type: element.type})
					}); 
					// pointToData 相当于 getGeoByPos 地图坐标
					// var coord = coordSys.pointToData(point);	
					console.log(this.mapInfo)
					console.log(newArr)
					// 给元素设置坐标
					var pointTop = point[0] - this.$refs.point.clientHeight;
					var pointLeft = point[1] - (this.$refs.point.clientWidth / 2); 
					document.getElementsByClassName("point")[0].style.top = pointTop + "px"
					document.getElementsByClassName("point")[0].style.left = pointLeft + "px"
                }) 
			},
			// 底部折线图
			footerLine(){ 
				// 基于准备好的dom，初始化echarts实例 
				let myChart = this.$echarts.init(document.getElementById('footer-line'))
				// 绘制图表
				myChart.setOption({
					tooltip: {
						trigger: 'axis'
					},
					legend: {
						// data:['出售委托','出租委托','租房分期'],
						data: [
							{
				               name:'出售委托',
				               textStyle: { 
				                    color: '#f89f1d'          // 图例文字颜色
				               }
				            },
							{
				               name:'出租委托',
				               textStyle: {
				                    color: '#5c69d9'          // 图例文字颜色
				               }
				            },
							{
				               name:'租房分期',
				               textStyle: {
				                    color: '#3FF200'          // 图例文字颜色
				               }
				            },
						],
						y: '85%', // 'center' | 'bottom' | {number}
						textStyle: {
							color: '#fff'
						}
					},
					color:['#f89f1d', '#5c69d9', '#3FF200'],
					grid: {
						left: '3%',
						right: '4%',
						bottom: '20%',
						top:  '15%',
						containLabel: true
					},
					xAxis: {
						type: 'category',
						boundaryGap: false,
						data: ['01','02','03','04','05','06','07','08', '09','10','11','12','13'],
						axisLine: {
							lineStyle: {
								color: '#115372'
							}
						},
						axisLabel: {
							show: true,
							textStyle: {
								color: '#83ecf3'
							}
						},
						splitLine: {
							show: true,
							lineStyle:{
								color: ['#115372'],
								width: 1,
								type: 'solid'
							}
						}
					},
					yAxis: {
						type: 'value',
						axisLabel: {
							show: true,
							textStyle: {
								color: '#fff'
							}
						},
						axisLine: {
							lineStyle: {
								color: '#115372'
							}
						},
						splitNumber:5,
						splitLine: {
							show: true,
							lineStyle:{
								color: ['#115372'],
								width: 1,
								type: 'solid'
							}
						}
					},
					series: [
						{
							name:'出售委托',
							type:'line',
							stack: '总量',
							data:[120, 132, 101, 134, 90, 230, 210,100,120,180,123,465,180,240]
						},
						{
							name:'出租委托',
							type:'line',
							stack: '总量',
							data:[220, 182, 191, 234, 290, 330, 310,210,100,120,180,123,465,180]
						}, 
						{
							name:'租房分期',
							type:'line',
							stack: '总量',
							data:[150, 232, 201, 154, 190, 330, 410,210,100,120,180,123,465,180]
						}
					]
				})
			},
			// 底部曲线背景图
			footerGraph(){ 
				// 基于准备好的dom，初始化echarts实例 
				let myChart = this.$echarts.init(document.getElementById('footer-graph'))
				// 绘制图表
				myChart.setOption({
					tooltip: {
						trigger: 'axis'
					},
					grid: {
						left: '3%',
						top: '15%',
						containLabel: true
					},
					legend: {
						data: [
							{
				               name:'租赁',
				               textStyle: { 
				                    color: '#38aee1'          // 图例文字颜色
				               }
				            },
							{
				               name:'买卖',
				               textStyle: { 
				                    color: '#C7821E'          // 图例文字颜色
				               }
				            },   
						],
						y: '80%'
					},
					color: ["#C7821E", '#38aee1'],
					calculable: true,
					xAxis: [{
						type: 'category',
						boundaryGap: false,
						data: ['01', '02', '03', '04', '05', '06', '07', '08', '09', '10', '11', '12', '13'],
						axisLine: {
							lineStyle: {
								color: '#115372'
							}
						},
						axisLabel: {
							show: true,
							textStyle: {
								color: '#83ecf3'
							}
						}
					}],
					yAxis: {
						ttype: 'value',
						axisLabel: {
							show: true,
							textStyle: {
								color: '#fff'
							}
						},
						axisLine: {
							lineStyle: {
								color: '#115372'
							}
						},
						splitNumber: 6,
						splitLine: {
							show: true,
							lineStyle:{
								color: ['#115372'],
								width: 1,
								type: 'solid'
							}
						}
					},
					series: [
						{
							name: '买卖',
							type: 'line',
							areaStyle: {
								normal: {
									type: 'default',
									color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
										offset: 0,
										color: '#C7821E'
									}], false)
								}
							},
							smooth: true,
							itemStyle: {
								normal: {
									areaStyle: {
										type: 'default'
									}
								}
							},
							data: [610, 312, 221, 654, 910, 630, 310, 521, 354, 560, 830, 310, 200]
						},
						{
							name: '租赁',
							type: 'line',
							areaStyle: {
								normal: {
									type: 'default',
									color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
										offset: 0,
										color: '#155CA2'
									} ], false)
								}
							},
							smooth: true,
							itemStyle: {
								normal: {
									areaStyle: {
										type: 'default'
									}
								}
							},
							data: [136, 375, 380, 449, 114, 267, 142, 318, 357, 193, 421, 391, 180]
						}
					]
				})
			}
        },
        filters: {   
            // datetimes--传入的时间戳
            dateFormat(datetimes){
                var date = new Date(datetimes);
                var Y = date.getFullYear();
                var M = (date.getMonth()+1 < 10 ? '0'+(date.getMonth()+1) : date.getMonth()+1);
                var D = date.getDate();
                return Y + '年' + M + '月' + D + '日'
            },
        }
    }
</script>

<style lang="scss">
@import "../style/common.scss";
// 头部
header{
    width: 100%;
    height: 12rem;
    display: block;
    overflow: hidden;

    .header-logo{
        width: 35rem; 
        height: 2.39rem;
        margin: 1.44rem auto;

        .header-hft{
            width: 7.75rem; 
            height: 2.39rem;
        }

        .header-title{
            width: 24.8rem;
            height: 2.28rem;
        }
    }

    .header-main{
        width: 75.07rem;
        height: 6.15rem;
        margin: 0 auto;
        position: relative;
        display: flex;
        justify-content: space-between;

        .main-date{
            width: 6.9rem;
            height: 2.44rem;
            position: absolute;
            left: -10.7rem;         
            // overflow: hidden;

            .main-date-today{
                font-size: 0.71rem;
                color: #ffffff;
            }

            .main-date-week{
                font-size: 0.71rem;
                color: #ffffff;
            }

            .main-date-weather{
                width: 1.16rem;
                height: 1.16rem;
                display: inline-block;
                background: url('../assets/weather_03.gif')  no-repeat; 
                background-size: 100% 100%; 
                // margin-top: 0.5rem;
            }
        }

        .header-orderList{
            width: 11.48rem;
            height: 6.15rem;
            font-weight: normal;
            font-stretch: normal;
            letter-spacing: 0rem;
            text-align: left;

            .orderList-title{
                font-size: 0.91rem;
                color: #00e4ff;
            }

            .orderList-num{
                font-size: 2.35rem;
                color: #ffffff;
            }

            .orderList-rate{
                font-size: 0.68rem;   
                color: #ffffff; 

                span{
                    color: #ffffff;
                }  

                .item-upNum{
                    margin-right: 0.98rem;
                }
                .item-upRate{
                    color: #3ff200;
                }
                .item-downRate{
                    color: #ff0000;
                }
            }
        }
    }
}

// 中间数据
.main{
    width: 100%;
    height: 29.22rem;
    padding: 0 1.78rem;

    .main-left{
        width: 17.54rem;
        height: 29.22rem;
        float: left;

        .main-houseData{
            width: 17.54rem;
            height: 12.26rem;

            .youyou-title{
                margin-bottom: 0.8rem;
            }

            p{
                color: #fff; 
                font-size: 0.91rem;
            }

            #youyou-bar{
                width: 17.54rem;
                height: 10.96rem;
                background-color: #02235c;
                border-radius: 0.14rem;                         
                border: solid 0.05rem rgba(56, 174, 225, 0.28); 
                background: url('../assets/housedataback.png')  no-repeat; 
                background-size: 100% 100%; 

                .bar-title{
                    width: 14.88rem;
                    height: 2.41rem;
                    margin: 0 auto;
                    margin-top: 1.27rem;
                    text-align: center;
                    display: flex;
                    justify-content: space-between;

                    .bar-num{
                        color: #00e4ff;
                        font-size: 0.84rem;
                        margin-bottom: 0.3rem;
                    }

                    p{
                        font-size: 0.77rem;
                        color: #fff;
                    }

                }

                .bar-item{           
                    height: 2rem;
                    line-height: 2rem;

                    .bar-item-title{
                        display: inline-block;
                        width: 4.73rem;
                        font-size: 0.64rem;
                        color: #37abde;
                        margin-left: 0.84rem;
                    }

                    .item-value{
                        color: #37abde;
                        display: inline-block;
                    }

                    .item-default{
                        width: 9.1rem;
                        height: 0.46rem;
                        background:#02324E;
                        opacity: 1;
                        position: relative;
                        float:  right;
                        margin-top: 0.85rem;

                        .item-proportion{
                            height: 0.46rem;
                            background: linear-gradient(to right, #2690cf, #00fecc); 
                            position: absolute;
                        }
                    }

                    .bar-item-value{
                        color: #37abde;
                        font-size: 0.68rem;
                        display:inline-block;
                        float:right;
                        margin-right: 0.71rem;
                        margin-left: 0.3rem;
                    } 

                }
            }
        }

        .main-youyou{
            width: 17.68rem;
	        height: 12.85rem;
            margin-top: 1.78rem;

            .youyou-title{
                width: 17.68rem;
                height: 1.94rem;
                overflow: hidden;

                .uuhaof{
                    width: 6.54rem;
                    height: 1.38rem;
                    margin-right: 3.5rem;
                }
                .main-span1{
                    font-size: 0.71rem;
                    color: #fff;
                    // margin-top: 0.5rem;
                    display: inline-block;
                }
                .main-span2{
                    font-size: 0.71rem;
                    color: #00e4ff;
                    display: inline-block;
                }
            }


            #youyou-line{
                width: 17.54rem;
                height: 10.96rem;
                background-color: #02235c;
                border-radius: 0.14rem;
                border: solid 0.05rem rgba(56, 174, 225, 0.28);
                background: url('../assets/housedataback.png')  no-repeat; 
                  background-size: 100% 100%; 
            }
        }
    }

    .main-map{
        width: 38.51rem;
        height: 29.22rem;
        margin-left: 3rem;
        float: left;
		position: relative;

		#main-maps{
			width: 38.51rem;
        	height: 29.22rem;
		}

		.point{
			width: 4.55rem;
			height: 4.23rem;
			background: url("../assets/chengjiao_01.gif") no-repeat;
			background-size:100% 100%;
			position: absolute;
			top:367px;
			left: 346px;
			text-align: center;

			p:nth-child(1){
				font-size: 0.77rem;
				margin-top: 0.3rem;
				color: #ff0000;
			}

			p:nth-child(2){
				font-size: 0.57rem;
				color: #fff;
				margin: 0.2rem 0;
			}

			p:nth-child(3){
				font-size: 0.64rem;
				color: #fff;
			}
		}
    }

    .main-order{
        width: 14.65rem;
        height: 22.56rem;                         
        float: left;
        text-align: left;

        .order-item{
            height: 3.44rem;
            margin-top: 2.23rem;
        }

        div:nth-child(2){
            position:relative;

            p{
                position:absolute;
                left: 1.4rem;               
            }
        }

        div:nth-child(3){
            position:relative;

            p{
                position:absolute;
                top: 0.1rem;
                left: 1.5rem;
            }
        }

        div:nth-child(4){
            position:relative;

            p{
                position:absolute;
                top: 0.2rem;
                left: 1.5rem;
            }
        }

        .entrustNum{
            width: 10.24rem;

            ul{
                display: flex;
                justify-content: space-between;
                margin-top: 1.2rem;

                li{
                    	width: 1.55rem;
                        height: 2.09rem;
                        background-image: linear-gradient(0deg, 
                            #3771d4 0%, 
                            #2556a7 50%, 
                            #2352a1 56%, 
                            #3771d3 100%), 
                        linear-gradient(
                            #37abde, 
                            #37abde);
                        background-blend-mode: normal, 
                            normal;
                        border: solid 0.02rem #50caff;
                        font-size:  1.79rem;
                        color: #fff;
                        line-height: 2.09rem;
                        text-align: center;
                }
            }
        }

        p{
            font-size: 0.91rem;
            color: #ffffff;
            display: inline-block;
        }

        img{
            width: 1.18rem;
        }

        .num{
            font-size: 1.32rem;
            color: #00e4ff;
            padding-left: 1.4rem;
        }
    }

    .main-right{
        width: 19.34rem;
        height: 22.56rem;
        float: right;

        .right-tabel{
            width: 19.32rem;
            height: 12.54rem;

            h4{
                color: #ffffff;
                font-size: 0.91rem;
                margin-bottom: 0.45rem;
            }

            .tabelData{
                width: 19.21rem;
                color: #22bbe7;
                font-size: 0.59rem;
                border-radius: 0.14rem;                         
                border: solid 1px rgba(56, 174, 225, 0.28);  
                text-align: center;

                .item-upRate{
                    color: #3ff200;
                }
                .item-downRate{
                    color: #ff0000;
                }

                .thead{
                    width: 19.21rem;
                    height: 1.39rem;
                    color: #dddc4d;
                }

                span{
                    color: #ff0000;
                }

                tr{
                    height: 1.39rem;
                    font-size: 0.66rem;
                    box-sizing: border-box;
                }
                
            }
        }

        .pie{
            width: 19.32rem;
            height: 12.68rem;
            margin-top: 1rem; 

            .pie-box{
                width: 19.32rem;
                height: 11.2rem;
                background: url('../assets/housedataback.png')  no-repeat; 
                background-size: 100% 100%; 
            }
            .pie-info{
                display: inline-block;
                margin-left: 1.57rem;
                margin-top: 1.5rem;
            }

            h4{
                color: #ffffff;
                font-size: 0.91rem;
                margin-bottom: 0.45rem;
            }

            .pie-title{
                // display: inline-block;
                text-align: center;
                color: #38aee1;
                font-size: 0.66rem;
            }

            #pie-rent{
                width: 7.33rem;
                height: 7.33rem;
                display: inline-block;
            }

            #pie-deal{
                width: 7.33rem;
                height: 7.33rem;
                display: inline-block;
            } 
        }
    }

}

// 底部
footer{
    width: 100%;
    height: 12.87rem;
    margin-top: 0.52rem;
    padding: 0 1.78rem;
    overflow: hidden;
    display: flex;
    justify-content: space-between;

    .news-left{
        width: 17.59rem;
        height: 12.67rem;
        overflow: hidden;
        border-radius: 0.14rem;
        border: solid 0.05rem rgba(56, 174, 225, 0.28);
        padding: 0.78rem 0.52rem;
        background: url('../assets/gundongback.png')  no-repeat; 
        background-size: 100% 100%; 
        

        li{
            color:#333;
            height:1.3rem;                     
            font-size: 0.57rem;  

            .con-text{ 
                width:14.9rem;                        
                display:block;
                text-overflow:ellipsis;
                white-space:nowrap;
                overflow:hidden;
            }

            span:nth-child(1){ 
                width: 14.02rem;
                color: #fff;
                display: inline-block;
                overflow: hidden;
                text-overflow:ellipsis;
                white-space: nowrap;
            }

            span:nth-child(2){
                color: #22bbe7;
                font-size: 0.39rem;
                display: inline-block;
                float: right;
            }
        }
        ul{
            margin:0;
            padding:0;
        }
    }

    .footer-line{
        width: 18.41rem;
        height: 12.67rem;
        overflow: hidden;
        background-color: #02235c;
        border-radius: 0.14rem;
        border: solid 0.05rem rgba(56, 174, 225, 0.28);
        background: url('../assets/housedataback.png') no-repeat; 
        background-size: 100% 100%; 
    }

    .news-center{
        width: 18.43rem;
        height: 12.67rem;
        
        li {

            span:nth-child(1){
                width: 15rem;
            }
        }
    }

    .footer-graph{
        width: 18.41rem;
        height: 12.67rem;
        background-color: #02235c;
        border-radius: 0.14rem;
        border: solid 0.05rem rgba(56, 174, 225, 0.28); 
        background: url('../assets/housedataback.png')  no-repeat; 
        background-size: 100% 100%;  
    }

    .news-right{
        width:  19.48rem;
        height: 12.67rem;

        li {

            span:nth-child(1){
                width: 15.89rem;
            }
        }
    }
}
</style>
