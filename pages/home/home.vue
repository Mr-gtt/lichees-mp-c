<template>
	<view class="home" >
		<!-- <text>home</text> -->
		<tNavbar1></tNavbar1>

		<view>
			<t-tabbar :currentPage="page"></t-tabbar>
		</view>
		<view>
			<t-publish-btn destUrl="/pages/release_res/release_res" ></t-publish-btn>
		</view>
<!-- 		<view class="topTab">
			<t-topbar   ref="topTab" :tablist="tapList" :currentTab="currentTab" @changeTab="changeTab" ></t-topbar>	
		</view> -->
		<view class="" style="height: 0.3em;">
			1
		</view>
		<view class="content" :style="'margin-top:' + navBarHeight +'px;'">
			<view style="font-size: 1.4em;font-weight: 500;margin-left: 4%;margin-top: 10upx; margin-bottom: 10upx;color: #000000;background-color: #FFF; border-radius: 20upx; display: inline-block;padding: 10upx 20upx;">
				{{currentTabTitle[currentTab]}}
			</view>
			<swiper @change="changeSwiper"  :current="currentTab" :style="'height: ' + swiperHeight +'px;'">
			<!-- <swiper @change="changeSwiper" @transition="transition" :current="currentTab" style="height: 500px;"> -->

				<swiper-item>
					
					<view class="cards" >
						<!-- <scroll-view scroll-y="true" :scroll-anchoring="true" :style="'height: ' + scrollHeight +'px;'"> -->
							<view v-for="(item,index) in cardDatas[0]" :key="index" class="card">
								<t-card2 :cardData="item" @cardClick="cardClick(item)"></t-card2>
							</view>
							<!-- <view class="block"></view> -->
						<!-- </scroll-view> -->
					</view>
					<uni-load-more :status="loadstatus"></uni-load-more>
				</swiper-item>
				<swiper-item>
					<view class="cards">
						<view v-for="(item,index) in cardDatas[1]" :key="index" class="card">
							<t-card2 :cardData="item" ></t-card2>
						</view>
						
						<!-- <view class="block"></view> -->
					</view>
					<uni-load-more :status="loadstatus"></uni-load-more>
				</swiper-item>
				<swiper-item>
					<view class="cards">
						<view v-for="(item,index) in cardDatas[2]" :key="index" class="card">
							<t-card2 :cardData="item" ></t-card2>
						</view>
						<!-- <view class="block"></view> -->
					</view>
					<uni-load-more :status="loadstatus"></uni-load-more>
				</swiper-item>
			</swiper>
				
		</view>		
		
		
	</view>
</template>



<script>
	import cloud1 from '../../helper/cloudbase.js'
	import tNavbar1 from '../../components/t-navbar1.vue'
	import tPublishBtn from '../../components/t-publish-btn.vue'
	import uniLoadMore from"../../components/uni-load-more.vue"
	export default {
		// props:{},
		components:{
			tPublishBtn,
			uniLoadMore,
			tNavbar1
		},
		onLoad:function(query){
			console.log(query.tabIndex)
				
			if(query.tabIndex !== ''){
				this.navToTab = query.tabIndex*1				
			}
			console.log('navTab' + this.navToTab)

		},
		onShow:function(){
			// uni.showLoading({
			//     title: '加载中'
			// });
			// setTimeout(function () {
			//     uni.hideLoading();
			// }, 1200);
			let that = this
			console.log("home show")
			// cloud1.getCloud('/learning')
			// .then((res)=>{
			// 	console.log(res)	
			// 	this.cardData0.length = 0
			// 	this.cardData0 = res.data
			// 	this.setHeight();
			// 	that.changeTab(that.navToTab)
			// })
			// cloud1.getCloud('/sport')
			// .then((res)=>{
			// 	console.log(res)	
			// 	this.cardData1 = res.data
			// 	this.setHeight();
			// 	that.changeTab(that.navToTab)
			// })
			// cloud1.getCloud('/amuse')
			// .then((res)=>{
			// 	console.log(res)	
			// 	this.cardData2 = res.data
			// 	this.setHeight();
			// 	that.changeTab(that.navToTab)
			// })
			
			const promiseCloud1 = cloud1.getCloud('/learning')
				// cloud1.getCloud('/learning')
			const promiseCloud2 = cloud1.getCloud('/sport')
			const promiseCloud3 = cloud1.getCloud('/amuse')
			// const promiseCloud2 = new Promise((resolve, reject) => {
			// 	cloud1.getCloud('/amuse')
			// 	.then((res)=>{
			// 		resolve(res.date)
			// 	})

			// });
			// const promiseCloud3 = new Promise((resolve, reject) => {
			// 	cloud1.getCloud('/learning')
			// 	.then((res)=>{
			// 		resolve(res.date)
			// 	})

			// });
			
			Promise.all([promiseCloud1,promiseCloud2,promiseCloud3])
			.then((results)=>{
				console.log(results)
				that.cardData0 = results[0].data
				that.cardData1 = results[1].data
				that.cardData2 = results[2].data
				this.cardDatas = [results[0].data,results[1].data,results[2].data]
				that.setHeight();

					setTimeout(function(){	
						that.changeTab(that.navToTab)
						that.cardsShow = that.cardDatas[that.navToTab]
					},500)
				
				
			})
			
			
			

			
			
		},
		onReachBottom:function(){
			this.getNextPage()
		},
		// onHide:function(){
		// 	// this.page = null
			
		// 	console.log("home hide")
		// 	console.log(this.page)
		// },
		// computed:{
		// 	cardsShow(){
		// 		// let cardsShow = {}
		// 		switch(this.currentTab){
		// 		  case 0:
		// 			this.cardsShow = this.cardData0
		// 		    break;
		// 		  case 1:
		// 			this.cardsShow = this.cardData1
		// 			break;
		// 		  case 2:
		// 		    this.cardsShow = this.cardData2
		// 		    break;
		// 		}
		// 		return this.cardsShow
		// 	}
		// },
		// watch:{
		// 	cardData0: function(val,oldval){
		// 		this.setHeight()
		// 	},
		// 	cardData1: function(val,oldval){
		// 		this.setHeight()
		// 	},
		// 	cardData2: function(val,oldval){
		// 		this.setHeight()
		// 	}
		// },
		mounted() {
			
		},
		data() {
			return {
				navBarHeight: getApp().globalData.navBarHeight,
				page:0,
				currentTab:0,
				navToTab:0,
				swiperHeight:600,
				loadstatus:"loading",
				tapList:[
					{text:"学习"},
					{text:"运动"},
					{text:"玩乐"},
				],
				currentTabTitle:['学习','运动','玩乐'],
				cardsShow:{},
				cardData0:[
					// {
					// 	created_at: "2021-05-26T15:47:23.033Z",
					// 	detail_id: "cbddf0af60ae6d740be1edd82846f7e4",
					// 	join_deadline: "2021-05-27T01:30:00.000Z",
					// 	joined_num: 5,
					// 	loca_text: "深圳大学",
					// 	person_num: 8,
					// 	res_endtime: "2021-06-03T02:30:00.000Z",
					// 	res_starttime: "2021-06-02T01:00:00.000Z",
					// 	title: "学习局2",
					// 	_id: "28ee4e3e60ae6d8d1ce32feb2f83f82f"
					// },
				],
				cardData1:[
				],
				cardData2:[
				],
				cardDatas:[]
			}
		},
		methods: {
			changeTab:function(tabIndex){
				// this.cardsShow = this.cardDatas[tabIndex]
				this.currentTab = tabIndex;
				
			},
			changeSwiper: function(e){
				console.log(e.target.current)
				this.currentTab = e.target.current
				this.cardsShow = this.cardDatas[e.target.current]
				this.setHeight();
				uni.pageScrollTo({
				    scrollTop: 0,
				    duration: 0
				});
			},
			// transition:function(e){
			// 	let dx = e.detail.dx;
			// 	this.$refs.topTab.setDx(dx);
			// },
			setHeight: function() {
				let windowHeight = uni.getSystemInfoSync().windowHeight;//页面可见区域
				console.log("windowHeight = "+windowHeight)
				let query1 = uni.createSelectorQuery().in(this);
				query1.select('.card').boundingClientRect(rect => {
					if (rect) {						
						this.swiperHeight =  ((rect.height+8) * (this.cardsShow.length+0.8) );
						console.log("rect.height:"+rect.height)
						// console.log("swiperHeight1: "+this.swiperHeight)
					}
				}).exec();
				// this.swiperHeight = windowHeight - 20
				// this.scrollHeight = this.swiperHeight
					// windowHeight = windowHeight - 10;//页面可见区域 - 在线购物条高度					
					// console.log("windowHeight = "+windowHeight)
					// let query = uni.createSelectorQuery();
							
			},
			getNextPage: function(){
				console.log(this.cardsShow)
				this.loadstatus = "loading"
				let query = {
					// preCreateAt: this.cardsShow[this.cardsShow.length-1].created_at,
					preCreateAt: this.cardDatas[this.currentTab][this.cardsShow.length-1].created_at
				}
				console.log(query)
				let path = ''
				switch(this.currentTab){
				  case 0:
					path = '/learning/next'
				    break;
				  case 1:
					path = '/sport/next'
					break;
				  case 2:
				    path = '/amuse/next'
				    break;
				}
				cloud1.getCloud(path, query)
				.then((res)=>{
					console.log(res)
					if(res.data.length==0){
						this.loadstatus = "nomore"
						return
					}
					for(let i=0;i<res.data.length;i++){
						this.cardDatas[this.currentTab].push(res.data[i])							
					}
					this.setHeight();	
					// console.log(this.cardData0)
					// console.log(this.cardData1)
					// console.log(this.cardData2)
					console.log(this.cardDatas)
					
					
				})
			},
			cardClick: function(resData){
				uni.setStorageSync('res_data', resData);
				console.log('/pages/res_detail/res_detail?detid='+ resData.detail_id)  
				const detid = JSON.stringify(resData.detail_id);
				uni.navigateTo({
					url:'/pages/res_detail/res_detail?detid='+ detid +'&restype=' + 'learning'
				})
				
			}
		}
	}
</script>

<style>
.home .content{
	z-index: -200;
	margin-top: 150upx;
}
.home .cards{
	margin: 15upx 20upx;
	
}
.home .cards .card{
	margin-bottom: 0.5em;
	/* height: 100upx; */
}
.home .cards .block{
	height: 300upx;
}
</style>