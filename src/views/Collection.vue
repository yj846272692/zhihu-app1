<template>
	<div class="padding-top-nav">
		<div class="CollectionHotListPage">
			<div class="CollectionHotListPage-header">
				<div>
					<svg style="color: #0084ff; position: absolute; top: 34px;" fill="currentColor" viewBox="0 0 24 24" width="32" height="32">
						<path
							d="M5.515 19.64l.918-5.355-3.89-3.792c-.926-.902-.639-1.784.64-1.97L8.56 7.74l2.404-4.871c.572-1.16 1.5-1.16 2.072 0L15.44 7.74l5.377.782c1.28.186 1.566 1.068.64 1.97l-3.89 3.793.918 5.354c.219 1.274-.532 1.82-1.676 1.218L12 18.33l-4.808 2.528c-1.145.602-1.896.056-1.677-1.218z"
							fill-rule="evenodd"
						></path>
					</svg>
					<span class="CollectionHotListPage-title">热门收藏夹</span>
				</div>
			</div>
			<div class="CollectionHotListPage-body">
				<div class="CollectionListCard" v-for="(item, index) in collections" :key="index">
					<div class="CollectionListCard-leftArea">
						<div class="CollectionListCard-title">{{ item.title }}</div>
						<div class="CollectionListCard-creator">
							<div class="CollectionListCard-creatorAvatar"><img :src="item.creator_avatar" /></div>
							<div class="CollectionListCard-creatorName">{{ item.creator_name }}</div>
							<div class="CollectionListCard-creatorSuffix">创建</div>
						</div>
						<div class="CollectionListCard-related">
							<button class="CollectionListCard-followButton">关注收藏夹</button>
							<div class="CollectionListCard-followersCount">{{ item.followers }}关注</div>
						</div>
					</div>
					<div class="CollectionListCard-rightArea">
						<div class="CollectionListCard-sampleContent">
							<div class="CollectionListCard-contentItem">
								<div class="CollectionListCard-contentTitle">{{ item.question_title }}</div>
								<div class="CollectionListCard-contentExcerpt" v-html="item.answer_content"></div>
								<div class="CollectionListCard-contentTags">
									<span class="CollectionListCard-contentTypeTag">回答</span>
									<span class="CollectionListCard-contentCountTag">{{ item.voteup_count }}赞同</span>
									<span class="CollectionListCard-contentCountTag">{{ item.comment_count }}评论</span>
								</div>
							</div>
						</div>
						<div class="CollectionListCard-entry">
							<span>已收藏{{ item.total_count }}条内容</span>
							<svg style="margin-left: 8px;" fill="currentColor" viewBox="0 0 24 24" width="24" height="24">
								<path
									d="M9.218 16.78a.737.737 0 0 0 1.052 0l4.512-4.249a.758.758 0 0 0 0-1.063L10.27 7.22a.737.737 0 0 0-1.052 0 .759.759 0 0 0-.001 1.063L13 12l-3.782 3.716a.758.758 0 0 0 0 1.063z"
									fill-rule="evenodd"
								></path>
							</svg>
						</div>
					</div>
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
			collections: [],
			currentPage: 1,
			count: 16,
			scroll: ''
		};
	},
	created() {
		this.axios({
			method: 'post',
			url: 'http://localhost:8080/api/collection/page',
			params: {
				count: this.count,
				currentPage: this.currentPage
			}
		}).then(res => {
			console.log(res.data.data);
			this.collections = res.data.data;
			console.log(this.collections.length);
		});
	},
	methods: {
		loadMore() {
			this.currentPage = this.currentPage + 1;
			this.axios({
				method: 'post',
				url: 'http://localhost:8080/api/collection/page',
				params: {
					count: this.count,
					currentPage: this.currentPage
				}
			}).then(res => {
				console.log(res.data.data);
				let temp = [];
				temp = res.data.data;
				for (var i = 0; i < temp.length; i++) {
					this.collections.splice(this.currentPage * this.count, 0, temp[i]);
				}
				console.log(this.collections.length);
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

<style></style>
