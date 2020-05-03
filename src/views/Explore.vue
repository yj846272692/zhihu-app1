<template>
	<div style="background-color: #f6f6f6;" class="padding-top-nav">
		<div class="ExploreHomePage">
			<div class="ExploreHomePage-ContentSection-header">
				<svg style="color: #0084ff;" fill="currentColor" viewBox="0 0 24 24" width="36" height="36">
					<path
						d="M7.667 3.667h11.466a1.2 1.2 0 0 1 1.2 1.2v13.066a2.4 2.4 0 0 1-2.4 2.4H6.467V4.867a1.2 1.2 0 0 1 1.2-1.2zM4.2 9.619h1.689v10.714H5.4a2.4 2.4 0 0 1-2.4-2.4V10.82a1.2 1.2 0 0 1 1.2-1.2zm5.178-2.38a.6.6 0 0 0-.6.6v.585a.6.6 0 0 0 .6.6h8.044a.6.6 0 0 0 .6-.6v-.586a.6.6 0 0 0-.6-.6H9.378zm0 3.57a.6.6 0 0 0-.6.6v.586a.6.6 0 0 0 .6.6h8.044a.6.6 0 0 0 .6-.6v-.585a.6.6 0 0 0-.6-.6H9.378zm0 3.572a.6.6 0 0 0-.6.6v.586a.6.6 0 0 0 .6.6h4.578a.6.6 0 0 0 .6-.6v-.586a.6.6 0 0 0-.6-.6H9.378z"
						fill-rule="evenodd"
					></path>
				</svg>
				<span>最新专题</span>
			</div>

			<div class="ExploreHomePage-ContentSection-body" id="specials">
				<div class="ExploreHomePage-specials">
					<div class="ExploreSpecialCard" v-for="(item, index) in specials" :key="index">
						<div class="ExploreSpecialCard-banner"><img :src="item.banner" /></div>
						<div class="ExploreSpecialCard-header">
							<div class="ExploreSpecialCard-info">
								<div class="ExploreSpecialCard-title">{{ item.title }}</div>
								<div class="ExploreSpecialCard-count">
									<span>{{ item.updated }}更新</span>
									<span>{{ item.viewCount }}次浏览</span>
								</div>
							</div>
							<div class="ExploreSpecialCard-followButton"><button class=" ExploreFollowButton">关注专题</button></div>
						</div>
						<div class="ExploreSpecialCard-contentList">
							<p class="">{{ item.introduction }}</p>

							<span v-for="(section, index) in item.sections" :key="index" class="section">
								<span style="background-color: #f6f6f6; border-radius: 5px; margin: 10px;" class="span">{{ section.sectionTitle }}</span>
							</span>
						</div>
					</div>
				</div>
			</div>
			<div class="ExploreHomePage-ContentSection-moreButton">
				<router-link to="/special/all">
					查看更多专题
					<svg class="Zi Zi--ArrowRight" fill="currentColor" viewBox="0 0 24 24" width="25" height="25">
						<path
							d="M9.218 16.78a.737.737 0 0 0 1.052 0l4.512-4.249a.758.758 0 0 0 0-1.063L10.27 7.22a.737.737 0 0 0-1.052 0 .759.759 0 0 0-.001 1.063L13 12l-3.782 3.716a.758.758 0 0 0 0 1.063z"
							fill-rule="evenodd"
						></path>
					</svg>
				</router-link>
			</div>
		</div>
		<div class="ExploreHomePage">
			<div class="ExploreHomePage-ContentSection-header">
				<svg style="color: #0084ff;" fill="currentColor" viewBox="0 0 24 24" width="36" height="36">
					<path
						d="M12 21.333a9.333 9.333 0 1 1 0-18.666 9.333 9.333 0 0 1 0 18.666zm-.66-11.287c.332.385.609.77.775 1.21.055-.054.665-.99.72-1.706.055-.385.126-1.616-.443-2.367-.443-.496-1.219-.77-1.884-.55a1.788 1.788 0 0 0-1.33 2.036c.887.276 1.607.771 2.161 1.377zm-1.33 1.541c.443-.055.941-.11 1.44 0 0-.055-.484-.936-1.108-1.486-.665-.496-1.33-.973-2.216-.771-.72.11-1.723.77-1.55 2.092.11.606.553 1.101 1.162 1.321.61-.605 1.44-1.046 2.272-1.156zm2.714.165c.056 0 1.164.055 1.828-.165.72-.275 1.412-.68 1.773-1.541.11-.276.23-1.248-.443-1.872-.72-.716-1.717-.716-2.438-.165.222.825.063 1.966-.11 2.532-.103.348-.333.88-.61 1.211zm-1.44.55c-.056 0-1.33.056-1.828.221-.72.275-1.447.668-1.773 1.541-.11.276-.21 1.26.443 1.872.665.661 1.718.661 2.438.11-.295-.811-.166-1.761.055-2.477.166-.495.388-.936.665-1.266zm5.041-.99c-.665.605-1.44.99-2.327 1.211-.443.055-.941.11-1.44 0 0 .055.554.991 1.108 1.431.665.496 1.385.771 2.216.771.72-.11 1.678-.692 1.551-2.092-.055-.605-.554-1.101-1.108-1.321zm-3.656 2.642a3.475 3.475 0 0 1-.776-1.156c-.055.055-.665.991-.72 1.707-.055.385-.101 1.506.499 2.312.443.496 1.218.77 1.883.55.887-.275 1.496-1.1 1.33-2.036a5.38 5.38 0 0 1-2.216-1.377z"
						fill-rule="evenodd"
					></path>
				</svg>
				<span>圆桌讨论</span>
			</div>
			<div class="ExploreHomePage-ContentSection-body" id="roundtables">
				<div class="ExploreHomePage-roundtables">
					<div class="ExploreRoundtableCard" v-for="(item, index) in roundtables" :key="index">
						<div class="ExploreRoundtableCard-headerContainer" ref="box">
							<div class="ExploreRoundtableCard-headerBackgrounds">
								<img :src="item.banner" ref="bgImg" />
								<div class="mask" ref="mask1"></div>
								<div class="mask" ref="mask2"></div>
							</div>
							<div class="ExploreRoundtableCard-header">
								<div class="ExploreRoundtableCard-title">{{ item.name }}</div>
							</div>
							<div class="ExploreRoundtableCard-followButton"><button class=" btn ExploreFollowButton ExploreFollowButton--colored" ref="btn">关注圆桌</button></div>
						</div>
						<div class="ExploreRoundtableCard-questionList">
							<div class="ExploreRoundtableCard-questionItem">
								<div class="ExploreRoundtableCard-questionTitle">生活中有哪些普遍存在、不易察觉而十分危险的儿童安全隐患？如何避免？</div>
								<div class="ExploreRoundtableCard-questionCounts">450回答</div>
							</div>
							<div class="ExploreRoundtableCard-questionItem">
								<div class="ExploreRoundtableCard-questionTitle">生活中有哪些普遍存在、不易察觉而十分危险的儿童安全隐患？如何避免？</div>
								<div class="ExploreRoundtableCard-questionCounts">2回答</div>
							</div>
							<div class="ExploreRoundtableCard-questionItem">
								<div class="ExploreRoundtableCard-questionTitle">生活中有哪些普遍存在、不易察觉而十分危险的儿童安全隐患？如何避免？</div>
								<div class="ExploreRoundtableCard-questionCounts">50回答计数</div>
							</div>
						</div>
					</div>
				</div>
			</div>
			<div class="ExploreHomePage-ContentSection-moreButton">
				<router-link to="/roundtable/all">
					查看更多圆桌
					<svg class="Zi Zi--ArrowRight" fill="currentColor" viewBox="0 0 24 24" width="25" height="25">
						<path
							d="M9.218 16.78a.737.737 0 0 0 1.052 0l4.512-4.249a.758.758 0 0 0 0-1.063L10.27 7.22a.737.737 0 0 0-1.052 0 .759.759 0 0 0-.001 1.063L13 12l-3.782 3.716a.758.758 0 0 0 0 1.063z"
							fill-rule="evenodd"
						></path>
					</svg>
				</router-link>
			</div>
		</div>
		<div class="ExploreHomePage">
			<div class="ExploreHomePage-ContentSection-header">
				<svg style="color: #0084ff;" fill="currentColor" viewBox="0 0 24 24" width="36" height="36">
					<path
						d="M5.515 19.64l.918-5.355-3.89-3.792c-.926-.902-.639-1.784.64-1.97L8.56 7.74l2.404-4.871c.572-1.16 1.5-1.16 2.072 0L15.44 7.74l5.377.782c1.28.186 1.566 1.068.64 1.97l-3.89 3.793.918 5.354c.219 1.274-.532 1.82-1.676 1.218L12 18.33l-4.808 2.528c-1.145.602-1.896.056-1.677-1.218z"
						fill-rule="evenodd"
					></path>
				</svg>
				<span>热门收藏夹</span>
			</div>
			<div class="ExploreHomePage-ContentSection-body" id="collections">
				<div class="ExploreHomePage-collections">
					<div class="ExploreCollectionCard" v-for="(item, index) in collections" :key="index">
						<div class="ExploreCollectionCard-header">
							<div class="ExploreCollectionCard-info">
								<div class="ExploreCollectionCard-title">{{ item.title }}</div>
								<div class="ExploreCollectionCard-relatedMembers">
									<div class="ExploreCollectionCard-creator">
										<span class="ExploreCollectionCard-creatorAvatar"><img :src="item.creator_avatar" /></span>
										<div class="ExploreCollectionCard-creatorName">{{ item.creator_name }}</div>
										<div class="ExploreCollectionCard-creatorSuffix">创建</div>
									</div>
									<div class="ExploreCollectionCard-followers">{{ item.followers }}人关注</div>
								</div>
							</div>
							<div class="ExploreCollectionCard-followButton"><button class="ExploreFollowButton">关注收藏夹</button></div>
						</div>
						<div class="ExploreCollectionCard-contentList">
							<div class="ExploreCollectionCard-contentItem">
								<div class="ExploreCollectionCard-contentTitle">{{ item.question_title }}</div>
								<div class="ExploreCollectionCard-contentExcerpt" v-html="item.answer_content"></div>
							</div>
							<div class="ExploreCollectionCard-contentTags">
								<span class="ExploreCollectionCard-contentTypeTag">回答</span>
								<span class="ExploreCollectionCard-contentCountTag">{{ item.voteup_count }}赞同</span>
								<span class="ExploreCollectionCard-contentCountTag">{{ item.comment_count }}评论</span>
							</div>
							<div style="margin-top: 20px;" class="ExploreCollectionCard-contentItem">
								<div class="ExploreCollectionCard-contentTitle">{{ item.question_title }}</div>
								<div class="ExploreCollectionCard-contentExcerpt" v-html="item.answer_content"></div>
							</div>
							<div class="ExploreCollectionCard-contentTags">
								<span class="ExploreCollectionCard-contentTypeTag">回答</span>
								<span class="ExploreCollectionCard-contentCountTag">{{ item.voteup_count }}赞同</span>
								<span class="ExploreCollectionCard-contentCountTag">{{ item.comment_count }}评论</span>
							</div>
						</div>

						<div class="ExploreCollectionCard-collectedContentCount">
							<span>已收藏{{ item.total_count }}条内容</span>
							<svg style="margin: 0;" fill="currentColor" viewBox="0 0 24 24" width="24" height="24">
								<path
									d="M9.218 16.78a.737.737 0 0 0 1.052 0l4.512-4.249a.758.758 0 0 0 0-1.063L10.27 7.22a.737.737 0 0 0-1.052 0 .759.759 0 0 0-.001 1.063L13 12l-3.782 3.716a.758.758 0 0 0 0 1.063z"
									fill-rule="evenodd"
								></path>
							</svg>
						</div>
					</div>
				</div>
			</div>
			<div class="ExploreHomePage-ContentSection-moreButton">
				<router-link to="/collection/hot">
					查看更多收藏夹
					<svg class="Zi Zi--ArrowRight" fill="currentColor" viewBox="0 0 24 24" width="25" height="25">
						<path
							d="M9.218 16.78a.737.737 0 0 0 1.052 0l4.512-4.249a.758.758 0 0 0 0-1.063L10.27 7.22a.737.737 0 0 0-1.052 0 .759.759 0 0 0-.001 1.063L13 12l-3.782 3.716a.758.758 0 0 0 0 1.063z"
							fill-rule="evenodd"
						></path>
					</svg>
				</router-link>
			</div>
		</div>
		<div class="ExploreHomePage">
			<div class="ExploreHomePage-section">
				<div class="ExploreHomePage-ContentSection-header">
					<svg style="color: #0084ff;" fill="currentColor" viewBox="0 0 24 24" width="36" height="36">
						<path
							d="M12 22C6.477 22 2 17.523 2 12S6.477 2 12 2s10 4.477 10 10-4.477 10-10 10zm4.043-15.524a.745.745 0 0 0-1.053.017l-6.857 7.071 2.237 2.17 6.857-7.071a.743.743 0 0 0-.016-1.052l-1.168-1.135zm-9.028 9.476l-.348 1.381 1.37-.39 1.274-.36-1.973-1.916-.323 1.285z"
							fill-rule="evenodd"
						></path>
					</svg>
					<span>专栏</span>
				</div>
				<div class="ExploreHomePage-ContentSection-body" id="columns">
					<div class="ExploreHomePage-columns">
						<div class="ExploreHomePage-columnCard" v-for="(item, index) in columns" :key="index">
							<a :href="item.url" class="ExploreColumnCard-avatar"><img :src="item.image_url" /></a>
							<div class="ExploreColumnCard-title">{{ item.title }}</div>
							<div class="ExploreColumnCard-count">
								<span>{{ item.followers }}关注</span>
								<span>{{ item.articles_count }}篇文章</span>
							</div>
							<div class="ExploreColumnCard-intro">{{ item.description }}</div>
							<button class="ExploreColumnCard-entryButton">进入专栏</button>
						</div>
					</div>
				</div>
				<div class="ExploreHomePage-ContentSection-moreButton">
					<router-link to="/column">
						查看更多专栏
						<svg class="Zi Zi--ArrowRight" fill="currentColor" viewBox="0 0 24 24" width="25" height="25">
							<path
								d="M9.218 16.78a.737.737 0 0 0 1.052 0l4.512-4.249a.758.758 0 0 0 0-1.063L10.27 7.22a.737.737 0 0 0-1.052 0 .759.759 0 0 0-.001 1.063L13 12l-3.782 3.716a.758.758 0 0 0 0 1.063z"
								fill-rule="evenodd"
							></path>
						</svg>
					</router-link>
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
			roundtables: [],
			columns: [],
			collections: [],
			count: 4,
			currentPage: 10
		};
	},
	created() {
		this.axios({
			method: 'post',
			url: this.$store.state.baseUrl + '/explore/page',
			params: {
				count: this.count,
				currentPage: this.currentPage
			}
		}).then(res => {
			console.log(res.data.data);
			this.specials = res.data.data.specials;
			this.roundtables = res.data.data.roundTables;
			this.collections = res.data.data.favorites;
			this.columns = res.data.data.columns;
			this.$nextTick(() => {
				//获得循环中的引用对象，都将会是数组的形式
				let boxArr = this.$refs.box;
				let imgArry = this.$refs.bgImg;
				let btnArr = this.$refs.btn;
				let mask1Arr = this.$refs.mask1;
				let mask2Arr = this.$refs.mask2;
				//遍历，对每个对象进行处理
				for (var i = 0, len = boxArr.length; i < len; i++) {
					let box = boxArr[i];
					let img = imgArry[i];
					let btn = btnArr[i];
					let mask1 = mask1Arr[i];
					let mask2 = mask2Arr[i];
					//第三方库，可以获取图片的主色、次色等
					RGBaster.colors(img, {
						success: function(payload) {
							// payload.dominant是主色，payload.secondary是次色, payload.palette是调色板，含多个主要颜色数组,RGB形式表示
							this.dominant = payload.dominant;
							this.secondary = payload.secondary;
							//去掉rgb的外层rgb字母和括号，得到112,34,56这样的值
							let str = payload.dominant.substring(4, payload.dominant.length - 1);
							//按逗号分割，得到字符串数组
							let strArr = str.split(',');
							//分别获得r,g,b的值，并转为整型
							let r = parseInt(strArr[0]);
							let g = parseInt(strArr[1]);
							let b = parseInt(strArr[2]);
							// console.log(r + '=>' + g + '=>' + b);
							//定义两个透明度的值
							let a1 = 0;
							let a2 = 0.5;
							//创建两个rgba颜色，用来生成遮罩层的渐变色
							let color1 = `rgba(${r},${g},${b},${a1})`;
							let color2 = `rgba(${r},${g},${b},${a2})`;
							//圆桌卡片顶部整宽部分背景色设置为图片主色
							box.style.backgroundColor = this.dominant;
							//右侧logo图覆盖两层蒙版，使用以下渐变色规则
							mask1.style.background = 'linear-gradient(to right,' + this.dominant + ' 0%,' + color1 + ' 100%)';
							mask2.style.background = 'linear-gradient(to right,' + color2 + ' 0%,' + color1 + ' 100%)';
							//关注按钮的文字颜色，使用图片主色
							btn.style.color = this.dominant;
						}
					});
				}
			});
		});
	}
};
</script>

<style lang="scss" scoped>
.ExploreRoundtableCard-headerBackgrounds {
	position: absolute;
	top: 0;
	right: 0;
	bottom: 0;
	width: 240px;
	img {
		position: absolute;
		top: 0;
		right: 0;
		width: 240px;
		height: 240px;
		border-top-right-radius: 5px;
		z-index: 0;
	}
}
.mask {
	position: absolute;
	top: 0;
	right: 0;
	width: 240px;
	height: 240px;
	border-top-right-radius: 5px;
	// 元素叠加顺序
	z-index: 1;
}
</style>
