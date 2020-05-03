<template>
	<div class="SpecialListPage padding-top-nav">
		<div class="SpecialListPage-header">
			<div style="padding-top: 30px; padding-left: 200px;">
				<svg style="color: #0084ff;" fill="currentColor" viewBox="0 0 24 24" width="32" height="32">
					<path
						d="M7.667 3.667h11.466a1.2 1.2 0 0 1 1.2 1.2v13.066a2.4 2.4 0 0 1-2.4 2.4H6.467V4.867a1.2 1.2 0 0 1 1.2-1.2zM4.2 9.619h1.689v10.714H5.4a2.4 2.4 0 0 1-2.4-2.4V10.82a1.2 1.2 0 0 1 1.2-1.2zm5.178-2.38a.6.6 0 0 0-.6.6v.585a.6.6 0 0 0 .6.6h8.044a.6.6 0 0 0 .6-.6v-.586a.6.6 0 0 0-.6-.6H9.378zm0 3.57a.6.6 0 0 0-.6.6v.586a.6.6 0 0 0 .6.6h8.044a.6.6 0 0 0 .6-.6v-.585a.6.6 0 0 0-.6-.6H9.378zm0 3.572a.6.6 0 0 0-.6.6v.586a.6.6 0 0 0 .6.6h4.578a.6.6 0 0 0 .6-.6v-.586a.6.6 0 0 0-.6-.6H9.378z"
						fill-rule="evenodd"
					></path>
				</svg>
				<span class="SpecialListPage-title">全部专题</span>
				<span class="SpecialListPage-count">共有 490 个专题</span>
			</div>
		</div>
		<div class="SpecialListPage-body">
			<div class="SpecialListCard" v-for="(item, index) in specials" :key="index">
				<div class="SpecialListCard-banner"><img :src="item.banner" /></div>
				<div class="SpecialListCard-body">
					<div class="SpecialListCard-header">
						<div class="ExploreSpecialCard-info">
							<div class="SpecialListCard-title">{{ item.title }}</div>
							<div class="SpecialListCard-relatedInfo">
								<span>{{ item.updated }}更新</span>
								<span>{{ item.viewCount }}次浏览</span>
							</div>
						</div>
						<button class="SpecialListCard-followButton">关注专题</button>
					</div>
					<div class="SpecialListCard-intro">{{ item.introduction }}</div>
					<div class="SpecialListCard-sections">
						<span v-for="(section, index) in item.sections" :key="index">{{ section.sectionTitle }}</span>
					</div>
				</div>
			</div>
		</div>
	</div>
</template>

<script>
export default {
	name: 'explore',
	data() {
		return {
			specials: [],
			currentPage: 1,
			count: 9,
			scroll: ''
		};
	},
	created() {
		this.axios.get('http://localhost:8080/api/special/all').then(res => {
			console.log(res.data.data);
			this.specials = res.data.data;
		});
	},
	methods: {
		loadMore() {
			this.currentPage = this.currentPage + 1;
			// this.axios
			// 	.get(this.GLOBAL.baseUrl + '/topic', {
			// 		params: {
			// 			page: this.currentPage,
			// 			count: this.count
			// 		}
			// 	})
			// 	.then(res => {
			// 		console.log(res.data);
			// 		let temp = [];
			// 		temp = res.data.data;
			// 		for (var i = 0; i < temp.length; i++) {
			// 			this.topics.splice(this.currentPage * this.count, 0, temp[i]);
			// 		}
			// 		console.log(this.topics.length);
			// 	});
			// this.axios({
			// 	method: 'post',
			// 	url: 'http://localhost:8080/api/special/page',
			// 	data: {
			// 		count: this.count,
			// 		currentPage: this.currentPage
			// 	}
			// }).then(res => {
			// 	console.log(res.data.data);
			// 	let temp = [];
			// 	temp = res.data.data;
			// 	for (var i = 0; i < temp.length; i++) {
			// 		this.topics.splice(this.currentPage * this.count, 0, temp[i]);
			// 	}
			// 	console.log(this.topics.length);
			// });
		},
		scrollDs() {
			//变量scrollTop是滚动条滚动时，距离顶部的距离
			var scrollTop = document.documentElement.scrollTop || document.body.scrollTop;
			//变量windowHeight是可视区的高度
			var windowHeight = document.documentElement.clientHeight || document.body.clientHeight;
			//变量scrollHeight是滚动条的总高度
			var scrollHeight = document.documentElement.scrollHeight || document.body.scrollHeight;
			//滚动条到底部的条件
			if (scrollTop + windowHeight == scrollHeight) {
				//到了这个就可以进行业务逻辑加载后台数据了
				console.log('到了底部');
				this.loadMore();
			}
		}
		// go(page) {
		// 	window.location.href = page;
		// }
	},
	mounted() {
		window.addEventListener('scroll', this.scrollDs);
	}
};
</script>

<style lang="scss" scoped>
.SpecialListPage {
	display: block;
	// margin: 0 auto;
}
.SpecialListPage-header {
	height: 100px;
	background-color: #fff;
	box-shadow: 0 1px 3px 0 rgba(26, 26, 26, 0.1);
}
.SpecialListPage-title {
	margin-left: 12px;
	font-size: 25px;
	font-weight: 600;
}
.SpecialListPage-count {
	margin-left: 24px;
	color: #8590a6;
	font-size: 15px;
}
.SpecialListPage-body {
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
	width: 1000px;
	margin: 10px auto 0;
}
.SpecialListCard {
	margin-top: 10px;
	display: flex;
	width: 1000px;
	height: 188px;
	border-radius: 3px;
	box-shadow: 0 1px 3px 0 rgba(26, 26, 26, 0.1);
	background-color: #fff;
	box-sizing: border-box;
	padding: 24px;
}
.SpecialListCard-banner {
	flex-shrink: 0;
	width: 336px;
	height: 140px;
	border-radius: 4px;
	overflow: hidden;
}
.SpecialListCard-banner img {
	object-fit: cover;
	width: 100%;
	height: 100%;
}
.SpecialListCard-body {
	flex: 1 1;
	margin-left: 20px;
	overflow: hidden;
}
.SpecialListCard-header {
	display: flex;
}
.SpecialListCard-intro {
	display: block;
	margin-top: 8px;
	max-height: 42px;
	line-height: 21px;
	color: #444;
	text-overflow: ellipsis;
	overflow: hidden;
}
.SpecialListCard-infos {
	-webkit-box-flex: 1;
	-ms-flex: 1 1;
	flex: 1 1;
	overflow: hidden;
}
.SpecialListCard-followButton {
	flex-shrink: 0;
	margin-left: 20px;
	width: 88px;
	height: 34px;
	background-color: rgba(0, 132, 255, 0.08);
	font-size: 14px;
	color: #0084ff;
	border-radius: 3px;
	font-weight: 600;
	font-synthesis: style;
	margin: 0;
}
.SpecialListCard-title {
	display: block;
	height: 28px;
	line-height: 28px;
	font-size: 20px;
	white-space: nowrap;
	overflow: hidden;
	text-overflow: ellipsis;
	font-weight: 600;
	font-synthesis: style;
}
.SpecialListCard-relatedInfo {
	// display: flex;
	align-items: center;
	margin-top: 8px;
	font-size: 12px;
	height: 17px;
	color: #999;
}
.SpecialListCard-relatedInfo span + span:before {
	content: '\B7';
	margin: 0 4px;
}
.SpecialListCard-intro {
	display: block;
	margin-top: 8px;
	max-height: 42px;
	line-height: 21px;
	color: #444;
	text-overflow: ellipsis;
	overflow: hidden;
}
.SpecialListCard-sections {
	// display: flex;
	flex-wrap: wrap;
	margin-top: 12px;
	height: 24px;
	overflow: hidden;
}
.SpecialListCard-sections span {
	margin-right: 5px;
	flex-shrink: 0;
	padding: 0 8px;
	max-width: 580px;
	height: 24px;
	line-height: 24px;
	border-radius: 5px;
	background-color: #f6f6f6;
	color: #8590a6;
	font-size: 12px;
	white-space: nowrap;
	overflow: hidden;
	text-overflow: ellipsis;
}
</style>
