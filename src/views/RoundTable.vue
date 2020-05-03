<template>
	<div style="background-color: #f6f6f6;" class="padding-top-nav">
		<div class="roundtableMain">
			<div class="roundtableHead">
				<div class="roundtableHead-title">圆桌</div>
				<div class="roundtableHead-hold">举办圆桌</div>
			</div>
			<div class="roundtableBody">
				<div v-for="(item, index) in roundtables" :key="index" class="roundtableCard">
					<img loading="lazy" :src="item.banner" />
					<div class="roundtableCard-shadow"></div>
					<div class="roundtableCard-title">{{ item.name }}</div>
					<div class="roundtableCard-scan">该圆桌被浏览{{ item.visits_count }}次</div>
				</div>
			</div>
		</div>
	</div>
</template>

<script>
export default {
	name: 'roundtable',
	data() {
		return {
			roundtables: [],
			currentPage: 1,
			count: 36,
			scroll: ''
		};
	},
	created() {
		this.axios({
			method: 'post',
			url: 'http://localhost:8080/api/roundtable/page',
			params: {
				count: this.count,
				currentPage: this.currentPage
			}
		}).then(res => {
			console.log(res.data.data);
			this.roundtables = res.data.data;
			console.log(this.roundtables.length);
		});
	},
	methods: {
		loadMore() {
			this.currentPage = this.currentPage + 1;
			this.axios({
				method: 'post',
				url: 'http://localhost:8080/api/roundtable/page',
				params: {
					count: this.count,
					currentPage: this.currentPage
				}
			}).then(res => {
				console.log(res.data.data);
				let temp = [];
				temp = res.data.data;
				for (var i = 0; i < temp.length; i++) {
					this.roundtables.splice(this.currentPage * this.count, 0, temp[i]);
				}
				console.log(this.roundtables.length);
			});
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

<style lang="scss" scoped="scoped">

</style>
