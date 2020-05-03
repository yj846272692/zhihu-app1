<template>
	<div>
		<div class="recommend" v-for="(item, index) in recommendList" :key="index">
			<div class="item">
				<h3 class="title" v-if="item.target.question == null">{{ item.target.title }}</h3>
				<h3 class="title" v-else>{{ item.target.question.title }}</h3>
				<!-- 初始状态都是收起来的 -->
				<div v-if="!flags[index]">
					<!-- 有封面图的主体内容的显示 -->
					<div class="content" v-if="item.target.thumbnail">
						<div class="cover">
							<div class="cover-inner"><img :src="item.target.thumbnail" /></div>
						</div>
						<div class="text">
							<span class="richText-simple">
								{{ item.target.author.name }}:
								<span v-html="item.target.excerpt"></span>
							</span>
							<button class="Button readMore Button--plain" @click="change(index)">
								阅读全文
								<span style="display: inline-flex; align-items: center;">
									​
									<svg class="Zi Zi--ArrowDown ContentItem-arrowIcon" fill="currentColor" viewBox="0 0 24 24" width="24" height="24">
										<path
											d="M12 13L8.285 9.218a.758.758 0 0 0-1.064 0 .738.738 0 0 0 0 1.052l4.249 4.512a.758.758 0 0 0 1.064 0l4.246-4.512a.738.738 0 0 0 0-1.052.757.757 0 0 0-1.063 0L12.002 13z"
											fill-rule="evenodd"
										></path>
									</svg>
								</span>
							</button>
						</div>
					</div>
					<!-- 无封面图的主体内容的显示 -->
					<div class="content" v-else>
						<div class="text">
							<span class="richText-simple">
								{{ item.target.author.name }}:
								<span v-html="item.target.excerpt"></span>
							</span>
							<button class="Button readMore Button--plain" @click="change(index)">
								阅读全文
								<span style="display: inline-flex; align-items: center;">
									​
									<svg class="Zi Zi--ArrowDown ContentItem-arrowIcon" fill="currentColor" viewBox="0 0 24 24" width="24" height="24">
										<path
											d="M12 13L8.285 9.218a.758.758 0 0 0-1.064 0 .738.738 0 0 0 0 1.052l4.249 4.512a.758.758 0 0 0 1.064 0l4.246-4.512a.738.738 0 0 0 0-1.052.757.757 0 0 0-1.063 0L12.002 13z"
											fill-rule="evenodd"
										></path>
									</svg>
								</span>
							</button>
						</div>
					</div>
				</div>
				<!-- 点击阅读全文后 -->
				<div v-else>
					<div class="authorInfo">
						<div class="avatar"><img :src="item.target.author.avatar_url" /></div>
						<div class="content">
							<span class="name">{{ item.target.author.name }}</span>
							<span class="badgeText">{{ item.target.author.headline }}</span>
						</div>
					</div>
					<button class="Button--plain Button like">{{ item.target.voteup_count }}人赞同了该回答</button>
					<div v-html="item.target.content" class="content"></div>
				</div>

				<div class="actions row fx-center sticky-bar" :class="{ active: flags[index] }">
					<span class="first">
						<button class="Button VoteButton VoteButton--up">
							<span style="display: inline-flex; align-items: center;">
								​
								<svg class="Zi Zi--TriangleUp VoteButton-TriangleUp" fill="currentColor" viewBox="0 0 24 24" width="10" height="10">
									<path
										d="M2 18.242c0-.326.088-.532.237-.896l7.98-13.203C10.572 3.57 11.086 3 12 3c.915 0 1.429.571 1.784 1.143l7.98 13.203c.15.364.236.57.236.896 0 1.386-.875 1.9-1.955 1.9H3.955c-1.08 0-1.955-.517-1.955-1.9z"
										fill-rule="evenodd"
									></path>
								</svg>
							</span>
							赞同{{ item.target.voteup_count }}
						</button>
						<button class="Button VoteButton VoteButton--down">
							<span style="display: inline-flex; align-items: center;">
								​
								<svg class="Zi Zi--TriangleDown" fill="currentColor" viewBox="0 0 24 24" width="10" height="10">
									<path
										d="M20.044 3H3.956C2.876 3 2 3.517 2 4.9c0 .326.087.533.236.896L10.216 19c.355.571.87 1.143 1.784 1.143s1.429-.572 1.784-1.143l7.98-13.204c.149-.363.236-.57.236-.896 0-1.386-.876-1.9-1.956-1.9z"
										fill-rule="evenodd"
									></path>
								</svg>
							</span>
						</button>
					</span>
					<button class="Button ContentItem-action Button--plain">
						<span class="icon">
							<svg class="Zi Zi--Comment Button-zi" fill="currentColor" viewBox="0 0 24 24" width="1.2em" height="1.2em">
								<path
									d="M10.241 19.313a.97.97 0 0 0-.77.2 7.908 7.908 0 0 1-3.772 1.482.409.409 0 0 1-.38-.637 5.825 5.825 0 0 0 1.11-2.237.605.605 0 0 0-.227-.59A7.935 7.935 0 0 1 3 11.25C3 6.7 7.03 3 12 3s9 3.7 9 8.25-4.373 9.108-10.759 8.063z"
									fill-rule="evenodd"
								></path>
							</svg>
						</span>
						{{ item.target.comment_count }}条评论
					</button>
					<button class="Button ContentItem-action Button--plain">
						<span class="icon">
							<svg class="Zi Zi--Comment Button-zi" fill="currentColor" viewBox="0 0 24 24" width="1.2em" height="1.2em">
								<path
									d="M2.931 7.89c-1.067.24-1.275 1.669-.318 2.207l5.277 2.908 8.168-4.776c.25-.127.477.198.273.39L9.05 14.66l.927 5.953c.18 1.084 1.593 1.376 2.182.456l9.644-15.242c.584-.892-.212-2.029-1.234-1.796L2.93 7.89z"
									fill-rule="evenodd"
								></path>
							</svg>
						</span>
						分享
					</button>
					<button class="Button ContentItem-action Button--plain">
						<span class="icon">
							<svg class="Zi Zi--Comment Button-zi" fill="currentColor" viewBox="0 0 24 24" width="1.2em" height="1.2em">
								<path
									d="M5.515 19.64l.918-5.355-3.89-3.792c-.926-.902-.639-1.784.64-1.97L8.56 7.74l2.404-4.871c.572-1.16 1.5-1.16 2.072 0L15.44 7.74l5.377.782c1.28.186 1.566 1.068.64 1.97l-3.89 3.793.918 5.354c.219 1.274-.532 1.82-1.676 1.218L12 18.33l-4.808 2.528c-1.145.602-1.896.056-1.677-1.218z"
									fill-rule="evenodd"
								></path>
							</svg>
						</span>
						收藏
					</button>
					<button class="Button ContentItem-action Button--plain">
						<span class="icon">
							<svg class="Zi Zi--Comment Button-zi" fill="currentColor" viewBox="0 0 24 24" width="1.2em" height="1.2em">
								<path
									d="M2 8.437C2 5.505 4.294 3.094 7.207 3 9.243 3 11.092 4.19 12 6c.823-1.758 2.649-3 4.651-3C19.545 3 22 5.507 22 8.432 22 16.24 13.842 21 12 21 10.158 21 2 16.24 2 8.437z"
									fill-rule="evenodd"
								></path>
							</svg>
						</span>
						喜欢
					</button>
					<button class="Button ContentItem-action Button--plain">
						<span class="icon popover">
							<svg class="Zi Zi--Comment Button-zi" fill="currentColor" viewBox="0 0 24 24" width="1.2em" height="1.2em">
								<path d="M5 14a2 2 0 1 1 0-4 2 2 0 0 1 0 4zm7 0a2 2 0 1 1 0-4 2 2 0 0 1 0 4zm7 0a2 2 0 1 1 0-4 2 2 0 0 1 0 4z" fill-rule="evenodd"></path>
							</svg>
						</span>
					</button>

					<button class="Button ContentItem-action Button--plain close" @click="change(index)" v-if="flags[index]">
						<span>收起</span>
						<span class="icon-close">
							<svg class="Zi Zi--ArrowDown ContentItem-arrowIcon up" fill="currentColor" viewBox="0 0 24 24" width="24" height="24">
								<path
									d="M12 13L8.285 9.218a.758.758 0 0 0-1.064 0 .738.738 0 0 0 0 1.052l4.249 4.512a.758.758 0 0 0 1.064 0l4.246-4.512a.738.738 0 0 0 0-1.052.757.757 0 0 0-1.063 0L12.002 13z"
									fill-rule="evenodd"
								></path>
							</svg>
						</span>
					</button>
				</div>
			</div>
		</div>
	</div>
</template>

<script>
export default {
	name: 'recommend',
	data() {
		return {
			recommendList: [],
			flags: []
		};
	},
	mounted() {
		window.addEventListener('scroll', this.scrollToTop);
	},
	created() {
		this.axios.get('/api/recommend').then(res => {
			this.recommendList = res.data.data.data;
			//定义一个正则规则，用来处理富文本中的图片
			const regex = new RegExp('<img', 'gi');
			for (var i = 0; i < this.recommendList.length; i++) {
				//给每篇文章添加一个标记，默认为false，表示未展开全文
				this.flags.splice(i, 0, false);
				//将富文本中的图片处理大小
				this.recommendList[i].target.content = this.recommendList[i].target.content.replace(regex, `<img style="max-width: 100%; height: auto"`);
			}
		});
	},
	methods: {
		//展开、收起的切换
		change(index) {
			//将flag数组索引为index的项置反，注意splice用法，不要直接给数组元素赋值（无法监听flag变化）
			this.flags.splice(index, 1, !this.flags[index]);
		}
	}
};
</script>
<style lang="scss" scoped>
.item {
	overflow: initial;
	position: relative;
	border-radius: 0;
	padding: 20px;
	margin-bottom: 0;
	box-shadow: none;
	border-bottom: 1px solid #f0f2f7;
	background: #fff;
	box-sizing: border-box;
}
.title {
	font-size: 18px;
	font-weight: 600;
	line-height: 1.6;
	color: #1a1a1a;
	margin-top: -4px;
	margin-bottom: -4px;
}
.title:hover {
	color: #285094;
	cursor: pointer;
}
.content {
	width: 625px;
	line-height: 1.67;
}
.cover {
	position: relative;
	width: 190px;
	height: 105px;
	margin-top: -2px;
	margin-right: 18px;
	margin-bottom: 4px;
	float: left;
	overflow: hidden;
	background-position: 50%;
	background-size: cover;
	border-radius: 4px;
	transform: translateZ(0);
}
.cover:after {
	position: absolute;
	z-index: 1;
	display: block;
	width: 100%;
	height: 100%;
	background: rgba(26, 26, 26, 0.02);
	content: '';
}
.cover-inner {
	position: absolute;
	top: 50%;
	left: 0;
	height: 100%;
	width: 100%;
	transform: translateY(-50%);
	overflow: hidden;
}
.cover-inner img {
	position: absolute !important;
	top: 50%;
	left: 50%;
	width: 100%;
	transform: translate3d(-50%, -50%, 0);
}
.text {
	max-height: 100px;
	margin-top: 16px;
	margin-bottom: -4px;
	overflow: hidden;
}

.text:hover {
	color: #646464;
	cursor: pointer;
}

.richText {
	padding-right: 10px;
	display: -webkit-box;
	-webkit-box-orient: vertical;
	-webkit-line-clamp: 3;
	overflow: hidden;
	white-space: normal;
	word-break: break-word;
	line-height: 1.6;
	pointer-events: none;
}

.richText-simple {
	padding-right: 10px;
	display: -webkit-box;
	-webkit-box-orient: vertical;
	-webkit-line-clamp: 2;
	overflow: hidden;
	white-space: normal;
	word-break: break-word;
	line-height: 1.6;
	pointer-events: none;
}

.readMore {
	margin-left: 4px;
	color: #175199;
}
.actions {
	justify-content: left;
	padding: 0px 20px;
	margin: 0 -20px -10px;
	color: #646464;
	background: #fff;
	clear: both;
	.first {
		margin-right: 20px;
	}
}

.VoteButton--up {
	line-height: 30px;
	padding: 0 12px;
}

.VoteButton:hover {
	background-color: #e2ecfe !important;
}

.VoteButton--down {
	margin-left: 4px;
	line-height: 30px;
	padding: 0 12px;
}
.ContentItem-action {
	height: 52px;
	line-height: 52px;
	position: relative;
	margin-left: 35px;
	font-size: 14px;
	.icon {
		position: absolute;
		top: 2.3px;
		left: -22px;
	}
	.icon-close {
		position: absolute;
		top: 5.3px;
		// left: -22px;
	}
	.popover {
		position: absolute;
		top: 2px;
	}
}

.ContentItem-action:hover {
	color: #788399;
}

.close {
	margin-left: 70px;
	height: 52px;
	line-height: 52px;
}
.authorInfo {
	margin-top: 10px;
	display: flex;
	align-items: center;
	font-size: 15px;
	color: #646464;
	.avatar img {
		background: #fff;
		border-radius: 2px;
		width: 24px;
		height: 24px;
	}
	.content {
		margin-left: 10px;
		display: flex;
		align-items: center;
		flex: 1 1;
		overflow: hidden;
		.name {
			font-size: 15px;
			font-weight: 600;
			color: #444;
		}
		.badgeText {
			overflow: hidden;
			text-overflow: ellipsis;
			white-space: nowrap;
			color: #646464;
		}
		.badgeText:before {
			content: '\FF0C';
		}
	}
}

.like {
	padding: 0;
}

.read-more {
	position: relative;
	.deep-blue-icon {
		position: absolute;
		bottom: -2px;
	}
}
.avatar {
	width: 24px;
	height: 24px;
	border-radius: 50%;
	background-color: #fff;
}

.active {
	position: sticky;
	bottom: 0;
	z-index: 10;
	background-color: #fff;
	width: 655px;
	height: 50px;
	box-shadow: 0 -1px 3px rgba(26, 26, 26, 0.1);
	border-radius: 3px;
}
.up {
	transform: rotate(180deg);
}
</style>
