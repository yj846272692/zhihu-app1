<template>
	<div>
		<div class="top">
			<div class="top-narBar" :class="{ up: isUp }">
				<div class="nav">
					<div class="inner">
						<div class="fx-between col-1">
							<a href="//www.zhihu.com" aria-label="知乎">
								<svg
									viewBox="0 0 200 91"
									class="Icon ZhihuLogo ZhihuLogo--blue Icon--logo"
									width="64"
									height="30"
									aria-hidden="true"
									style="height: 30px; width: 64px; color: 0084ff;"
								>
									<title></title>
									<g>
										<path
											d="M53.29 80.035l7.32.002 2.41 8.24 13.128-8.24h15.477v-67.98H53.29v67.978zm7.79-60.598h22.756v53.22h-8.73l-8.718 5.473-1.587-5.46-3.72-.012v-53.22zM46.818 43.162h-16.35c.545-8.467.687-16.12.687-22.955h15.987s.615-7.05-2.68-6.97H16.807c1.09-4.1 2.46-8.332 4.1-12.708 0 0-7.523 0-10.085 6.74-1.06 2.78-4.128 13.48-9.592 24.41 1.84-.2 7.927-.37 11.512-6.94.66-1.84.785-2.08 1.605-4.54h9.02c0 3.28-.374 20.9-.526 22.95H6.51c-3.67 0-4.863 7.38-4.863 7.38H22.14C20.765 66.11 13.385 79.24 0 89.62c6.403 1.828 12.784-.29 15.937-3.094 0 0 7.182-6.53 11.12-21.64L43.92 85.18s2.473-8.402-.388-12.496c-2.37-2.788-8.768-10.33-11.496-13.064l-4.57 3.627c1.363-4.368 2.183-8.61 2.46-12.71H49.19s-.027-7.38-2.372-7.38zm128.752-.502c6.51-8.013 14.054-18.302 14.054-18.302s-5.827-4.625-8.556-1.27c-1.874 2.548-11.51 15.063-11.51 15.063l6.012 4.51zm-46.903-18.462c-2.814-2.577-8.096.667-8.096.667s12.35 17.2 12.85 17.953l6.08-4.29s-8.02-11.752-10.83-14.33zM199.99 46.5c-6.18 0-40.908.292-40.953.292v-31.56c1.503 0 3.882-.124 7.14-.376 12.773-.753 21.914-1.25 27.427-1.504 0 0 3.817-8.496-.185-10.45-.96-.37-7.24 1.43-7.24 1.43s-51.63 5.153-72.61 5.64c.5 2.756 2.38 5.336 4.93 6.11 4.16 1.087 7.09.53 15.36.277 7.76-.5 13.65-.76 17.66-.76v31.19h-41.71s.88 6.97 7.97 7.14h33.73v22.16c0 4.364-3.498 6.87-7.65 6.6-4.4.034-8.15-.36-13.027-.566.623 1.24 1.977 4.496 6.035 6.824 3.087 1.502 5.054 2.053 8.13 2.053 9.237 0 14.27-5.4 14.027-14.16V53.93h38.235c3.026 0 2.72-7.432 2.72-7.432z"
											fill-rule="evenodd"
										></path>
									</g>
								</svg>
							</a>
							<ul class="fx-around col-1" style="margin-left: 29px; width: 580px;">
								<li @click="changeActive_home()" class="Tabs-item">
									<router-link class="Tabs-link" :class="{ 'is-active': isActive_home }" to="/home">首页</router-link>
								</li>
								<li @click="changeActive_explore()" class="Tabs-item">
									<router-link class="Tabs-link" :class="{ 'is-active': isActive_explore }" to="/explore"><span>发现</span></router-link>
								</li>
								<li @click="changeActive_wating()" class="Tabs-item">
									<router-link class="Tabs-link" :class="{ 'is-active': isActive_wating }" to="/question/waiting"><span>等你来答</span></router-link>
								</li>
							</ul>
							<div class="row col-6">
								<label class="Input-wrapper  SearchBar-input Input-wrapper--grey">
									<input
										type="text"
										maxlength="100"
										autocomplete="off"
										role="combobox"
										aria-expanded="false"
										aria-autocomplete="list"
										aria-activedescendant="AutoComplete2-topSearch--1"
										aria-haspopup="true"
										aria-owns="Popover1-content"
										class="Input"
										placeholder="世界首个活体机器人"
										value=""
									/>
									<button aria-label="搜索" type="button" class="btn btn-primary SearchBar-searchButton">
										<span style="display: inline-flex; align-items: center;">
											<svg class="SearchBar-searchIcon" fill="currentColor" viewBox="0 0 24 24" width="18" height="18">
												<path
													d="M17.068 15.58a8.377 8.377 0 0 0 1.774-5.159 8.421 8.421 0 1 0-8.42 8.421 8.38 8.38 0 0 0 5.158-1.774l3.879 3.88c.957.573 2.131-.464 1.488-1.49l-3.879-3.878zm-6.647 1.157a6.323 6.323 0 0 1-6.316-6.316 6.323 6.323 0 0 1 6.316-6.316 6.323 6.323 0 0 1 6.316 6.316 6.323 6.323 0 0 1-6.316 6.316z"
													fill-rule="evenodd"
												></path>
											</svg>
										</span>
									</button>
								</label>
							</div>
							<div class="row login">
								<button class="btn AppHeader-login btn-bule">登录</button>
								<button class="btn btn-primary btn-bule">加入知乎</button>
							</div>
						</div>
						<div></div>
					</div>
				</div>
				<div class="nav" v-if="isExplore">
					<div class="inner">
						<div class="fx-between col-1">
							<a href="//www.zhihu.com" aria-label="知乎">
								<svg
									viewBox="0 0 200 91"
									class="Icon ZhihuLogo ZhihuLogo--blue Icon--logo"
									width="64"
									height="30"
									aria-hidden="true"
									style="height: 30px; width: 64px; color: 0084ff;"
								>
									<title></title>
									<g>
										<path
											d="M53.29 80.035l7.32.002 2.41 8.24 13.128-8.24h15.477v-67.98H53.29v67.978zm7.79-60.598h22.756v53.22h-8.73l-8.718 5.473-1.587-5.46-3.72-.012v-53.22zM46.818 43.162h-16.35c.545-8.467.687-16.12.687-22.955h15.987s.615-7.05-2.68-6.97H16.807c1.09-4.1 2.46-8.332 4.1-12.708 0 0-7.523 0-10.085 6.74-1.06 2.78-4.128 13.48-9.592 24.41 1.84-.2 7.927-.37 11.512-6.94.66-1.84.785-2.08 1.605-4.54h9.02c0 3.28-.374 20.9-.526 22.95H6.51c-3.67 0-4.863 7.38-4.863 7.38H22.14C20.765 66.11 13.385 79.24 0 89.62c6.403 1.828 12.784-.29 15.937-3.094 0 0 7.182-6.53 11.12-21.64L43.92 85.18s2.473-8.402-.388-12.496c-2.37-2.788-8.768-10.33-11.496-13.064l-4.57 3.627c1.363-4.368 2.183-8.61 2.46-12.71H49.19s-.027-7.38-2.372-7.38zm128.752-.502c6.51-8.013 14.054-18.302 14.054-18.302s-5.827-4.625-8.556-1.27c-1.874 2.548-11.51 15.063-11.51 15.063l6.012 4.51zm-46.903-18.462c-2.814-2.577-8.096.667-8.096.667s12.35 17.2 12.85 17.953l6.08-4.29s-8.02-11.752-10.83-14.33zM199.99 46.5c-6.18 0-40.908.292-40.953.292v-31.56c1.503 0 3.882-.124 7.14-.376 12.773-.753 21.914-1.25 27.427-1.504 0 0 3.817-8.496-.185-10.45-.96-.37-7.24 1.43-7.24 1.43s-51.63 5.153-72.61 5.64c.5 2.756 2.38 5.336 4.93 6.11 4.16 1.087 7.09.53 15.36.277 7.76-.5 13.65-.76 17.66-.76v31.19h-41.71s.88 6.97 7.97 7.14h33.73v22.16c0 4.364-3.498 6.87-7.65 6.6-4.4.034-8.15-.36-13.027-.566.623 1.24 1.977 4.496 6.035 6.824 3.087 1.502 5.054 2.053 8.13 2.053 9.237 0 14.27-5.4 14.027-14.16V53.93h38.235c3.026 0 2.72-7.432 2.72-7.432z"
											fill-rule="evenodd"
										></path>
									</g>
								</svg>
							</a>
							<ul class="fx-around col-1" style="margin-left: 29px; width: 900px;">
								<li class="Tabs-item"><router-link class="Tabs-link" to="/home">最新专题</router-link></li>
								<li class="Tabs-item"><router-link class="Tabs-link" to="/explore">圆桌讨论</router-link></li>
								<li class="Tabs-item"><router-link class="Tabs-link" to="/question/waiting">热门收藏夹</router-link></li>
								<li class="Tabs-item"><router-link class="Tabs-link" to="/question/waiting">专栏</router-link></li>
							</ul>
							<div class="row col-6" style="width: 200px;">
								<label class="Input-wrapper  SearchBar-input Input-wrapper--grey">
									<input
										type="text"
										maxlength="100"
										autocomplete="off"
										role="combobox"
										aria-expanded="false"
										aria-autocomplete="list"
										aria-activedescendant="AutoComplete2-topSearch--1"
										aria-haspopup="true"
										aria-owns="Popover1-content"
										class="Input"
										placeholder="搜索你兴趣的内容..."
										value=""
									/>
									<button aria-label="搜索" type="button" class="btn btn-primary SearchBar-searchButton">
										<span>
											<svg class="SearchBar-searchIcon" fill="currentColor" viewBox="0 0 24 24" width="18" height="18">
												<path
													d="M17.068 15.58a8.377 8.377 0 0 0 1.774-5.159 8.421 8.421 0 1 0-8.42 8.421 8.38 8.38 0 0 0 5.158-1.774l3.879 3.88c.957.573 2.131-.464 1.488-1.49l-3.879-3.878zm-6.647 1.157a6.323 6.323 0 0 1-6.316-6.316 6.323 6.323 0 0 1 6.316-6.316 6.323 6.323 0 0 1 6.316 6.316 6.323 6.323 0 0 1-6.316 6.316z"
													fill-rule="evenodd"
												></path>
											</svg>
										</span>
									</button>
								</label>
							</div>
							<div class="row login quiz"><button class="btn btn-primary btn-bule">提问</button></div>
						</div>
						<div></div>
					</div>
				</div>
				<div class="nav" v-if="isHome">
					<div class="inner">
						<div class="home-main">
							<a href="//www.zhihu.com" aria-label="知乎">
								<svg
									viewBox="0 0 200 91"
									class="Icon ZhihuLogo ZhihuLogo--blue Icon--logo"
									width="64"
									height="30"
									aria-hidden="true"
									style="height: 30px; width: 64px; color: 0084ff;"
								>
									<title></title>
									<g>
										<path
											d="M53.29 80.035l7.32.002 2.41 8.24 13.128-8.24h15.477v-67.98H53.29v67.978zm7.79-60.598h22.756v53.22h-8.73l-8.718 5.473-1.587-5.46-3.72-.012v-53.22zM46.818 43.162h-16.35c.545-8.467.687-16.12.687-22.955h15.987s.615-7.05-2.68-6.97H16.807c1.09-4.1 2.46-8.332 4.1-12.708 0 0-7.523 0-10.085 6.74-1.06 2.78-4.128 13.48-9.592 24.41 1.84-.2 7.927-.37 11.512-6.94.66-1.84.785-2.08 1.605-4.54h9.02c0 3.28-.374 20.9-.526 22.95H6.51c-3.67 0-4.863 7.38-4.863 7.38H22.14C20.765 66.11 13.385 79.24 0 89.62c6.403 1.828 12.784-.29 15.937-3.094 0 0 7.182-6.53 11.12-21.64L43.92 85.18s2.473-8.402-.388-12.496c-2.37-2.788-8.768-10.33-11.496-13.064l-4.57 3.627c1.363-4.368 2.183-8.61 2.46-12.71H49.19s-.027-7.38-2.372-7.38zm128.752-.502c6.51-8.013 14.054-18.302 14.054-18.302s-5.827-4.625-8.556-1.27c-1.874 2.548-11.51 15.063-11.51 15.063l6.012 4.51zm-46.903-18.462c-2.814-2.577-8.096.667-8.096.667s12.35 17.2 12.85 17.953l6.08-4.29s-8.02-11.752-10.83-14.33zM199.99 46.5c-6.18 0-40.908.292-40.953.292v-31.56c1.503 0 3.882-.124 7.14-.376 12.773-.753 21.914-1.25 27.427-1.504 0 0 3.817-8.496-.185-10.45-.96-.37-7.24 1.43-7.24 1.43s-51.63 5.153-72.61 5.64c.5 2.756 2.38 5.336 4.93 6.11 4.16 1.087 7.09.53 15.36.277 7.76-.5 13.65-.76 17.66-.76v31.19h-41.71s.88 6.97 7.97 7.14h33.73v22.16c0 4.364-3.498 6.87-7.65 6.6-4.4.034-8.15-.36-13.027-.566.623 1.24 1.977 4.496 6.035 6.824 3.087 1.502 5.054 2.053 8.13 2.053 9.237 0 14.27-5.4 14.027-14.16V53.93h38.235c3.026 0 2.72-7.432 2.72-7.432z"
											fill-rule="evenodd"
										></path>
									</g>
								</svg>
							</a>
							<div class="home-tabs">
								<span @click="changeRecommend()"><router-link :class="{ HomeActive: isRecommend }" class="tab" to="/home/recommend">推荐</router-link></span>
								<span @click="changeFollow()"><router-link :class="{ HomeActive: isFollow }" class="tab" to="/home/follow">关注</router-link></span>
								<span @click="changeHot()"><router-link :class="{ HomeActive: isHot }" class="tab" to="/home/hot">热榜</router-link></span>
							</div>
						</div>
						<div class="home-aside">
							<form class="SimpleSearchBar-wrapper">
								<label class="SimpleSearchBar-input ">
									<input class="Input" placeholder="搜索你感兴趣的内容…" value="" />
									<button type="button" class="Button SimpleSearchBar-plainSearchButton Button--primary">
										<span style="display: inline-flex; align-items: center;">
											​
											<svg class="Zi Zi--Search" fill="currentColor" viewBox="0 0 24 24" width="18" height="18">
												<path
													d="M17.068 15.58a8.377 8.377 0 0 0 1.774-5.159 8.421 8.421 0 1 0-8.42 8.421 8.38 8.38 0 0 0 5.158-1.774l3.879 3.88c.957.573 2.131-.464 1.488-1.49l-3.879-3.878zm-6.647 1.157a6.323 6.323 0 0 1-6.316-6.316 6.323 6.323 0 0 1 6.316-6.316 6.323 6.323 0 0 1 6.316 6.316 6.323 6.323 0 0 1-6.316 6.316z"
													fill-rule="evenodd"
												></path>
											</svg>
										</span>
									</button>
								</label>
							</form>
							<button class="askButton Button">提问</button>
						</div>
					</div>
				</div>
			</div>
		</div>

		<router-view />
	</div>
</template>

<script>
export default {
	name: 'banner',
	data() {
		return {
			isActive_home: true,
			isActive_explore: false,
			isActive_wating: false,
			isRecommend: true,
			isFollow: false,
			isHot: false,
			isUp: false, // 判断是否是向上滚动
			changeUpDir: 0, // 设置从向下滚动到向上滚动时的位置（距离滚动条顶部）
			changeDownDir: 0, // 设置从向上滚动到向下滚动时的位置（距离滚动条顶部）
			token: this.$store.state.token,
			user: this.$store.state.user,
			isHome: true,
			isExplore: false,
			inputFocus: false
		};
	},
	created() {
		// this.$store.commit('setPathUrl', JSON.stringify(this.$route.path));
		// console.log(this.$store.state.params.pathUrl);
		// if(this.$store.state.params.pathUrl.indexOf('/explore') == 1){
		// 	this.isExplore = true;
		// }
	},
	mounted() {
		const _this = this;
		let scrollTop = 0; // 初始化滚动条为位置为0
		let topValue = this.getScrollTop(); // 设置一个标识位，即复制一个滚动条位置，但是这个位置获取的时间比 scrollTop慢，
		document.onscroll = function() {
			scrollTop = _this.getScrollTop(); // 滚动条的位置
			if (scrollTop <= topValue) {
				// 当后者滚动条大于前者滚动条时，即认为滚动条向上运动，但是我们设置一个临界值，当大于这个临界值时，即认为是用户有意向上滚动
				_this.changeUpDir = scrollTop; //  changeUpDir 这个是 刚好从向下滚动到向上滚动改变方向时的位置
				if (_this.changeDownDir - scrollTop > 120) {
					// 这个是else 里面记录的值减滚动条位置 大于120 即认为是向上滚动
					_this.isUp = false;
					// console.log(_this.isUp);
				}
			} else {
				_this.changeDownDir = scrollTop;
				if (scrollTop - _this.changeUpDir > 120) {
					_this.isUp = true;
					// console.log(_this.isUp);
				}
			}
			setTimeout(function() {
				topValue = scrollTop;
			}, 0);
		};
	},
	methods: {
		changeRecommend() {
			this.isRecommend = true;
			this.isFollow = false;
			this.isHot = false;
		},
		changeFollow() {
			this.isRecommend = false;
			this.isFollow = true;
			this.isHot = false;
		},
		changeHot() {
			this.isRecommend = false;
			this.isFollow = false;
			this.isHot = true;
		},
		changeActive_home() {
			this.isActive_home = true;
			this.isActive_explore = false;
			this.isActive_wating = false;
			this.isHome = true;
			this.isExplore = false;
		},
		changeActive_explore() {
			this.isActive_explore = true;
			this.isActive_home = false;
			this.isActive_wating = false;
			this.isExplore = true;
			this.isHome = false;
		},
		changeActive_wating() {
			this.isActive_wating = true;
			this.isActive_explore = false;
			this.isActive_home = false;
		},

		getScrollTop() {
			// 获取滚动条位置
			var scrollTop = 0;
			if (document.documentElement && document.documentElement.scrollTop) {
				scrollTop = document.documentElement.scrollTop;
				// console.log(scrollTop);
			} else if (document.body) {
				scrollTop = document.body.scrollTop;
				// console.log(scrollTop);
			}
			return scrollTop;
		}
	}
};
</script>

<style lang="scss" scoped>
.top {
	position: fixed;
	top: 0;
	left: 0;
	width: 100%;
	height: 52px;
	background: #ffffff;
	z-index: 100;
	overflow: hidden;
	box-shadow: 0 1px 3px rgba(26, 26, 26, 0.1);
}
.AppHeader-login {
	margin-right: 16px;
}
.PageHeader {
	position: absolute;
	top: 0;
	left: 0;
	width: 100%;
	height: 100%;
}

.ExploreHeader {
	margin: 0 auto;
	width: 1000px;
	display: flex;
	align-items: center;
	height: 100%;
}

.nav {
	position: relative;
	z-index: 100;
	min-width: 1032px;
	overflow: hidden;
	background: #fff;
	height: 52px;
	line-height: 52px;
	box-shadow: 0 1px 3px rgba(26, 26, 26, 0.1);
	background-clip: content-box;
	position: sticky;
	top: 0px;
}

.top-narBar {
	// 过度动画
	transition: all 0.3s cubic-bezier(0.645, 0.045, 0.355, 1);
}

.up {
	transform: translateY(-52px);
}

.inner {
	position: relative;
	display: flex;
	width: 1000px;
	height: 52px;
	padding: 0 16px;
	margin: 0 auto;
	align-items: center;
}

.Tabs-item {
	​​​​​​​​padding: 0 17px;
	margin-left: 10px;
	display: inline-block;
	position: relative;
	display: inline-block;
	font-size: 15px;
	line-height: 22px;
	color: #8790a4;
	text-align: center;
}
.Tabs-link {
	position: relative;
	display: inline-block;
	padding: 14px 0;
	font-size: 16px;
	line-height: 22px;
	color: #5c5c5c;
	text-align: center;
}
.is-active {
	font-weight: 600;
	color: #444;
}

.is-active:after {
	position: absolute;
	right: 0;
	bottom: -1px;
	left: 0;
	height: 3px;
	background: #0084ff;
	content: '';
}

a :hover {
	color: #444;
}

a ::before {
	content: '';
	position: absolute;
	top: 0;
	left: 100%;
	width: 0;
	height: 100%;
	border-bottom: 2px solid #000;
}

.login {
	margin-left: -148px;
}
.quiz {
	margin-left: -260px;
}
.SearchBar-searchIcon {
	margin-top: 10px;
}
.home-main {
	align-self: stretch;
	flex: 1 1;
	align-items: center;
	display: flex;
}
.home-aside {
	align-items: center;
	display: flex;
	justify-content: space-between;
	width: 296px;
}
.home-tabs {
	align-self: stretch;
	border-bottom: none;
	padding-left: 18px;
	height: 100%;
	display: flex;
}
.tab {
	align-items: center;
	display: flex;
	font-size: 16px;
	margin: 0 22px;
}
.SimpleSearchBar-wrapper {
	margin: auto 0;
}
.SimpleSearchBar-input {
	width: 216px;
	padding-right: 0;
	background-color: #f6f6f6;
	position: relative;
	display: flex;
	align-items: center;
	height: 34px;
	padding: 4px 10px;
	font-size: 14px;
	background: #f6f6f6;
	border: 1px solid #ebebeb;
	border-radius: 3px;
	box-sizing: border-box;
	transition: background 0.2s, border 0.2s;
}
.Input {
	color: #1a1a1a;
	height: 24px;
	line-height: 24px;
}
.SimpleSearchBar-plainSearchButton {
	padding: 0 12px;
	border-color: transparent;
	background-color: transparent;
}
.askButton {
	color: #fff;
	background-color: #0084ff;
	padding: 0 14px;
	border-color: #0084ff;
}
.is-focus {
	background: #fff;
	border-color: #8590a6;
}
.HomeActive {
	color: #0084ff;
	font-weight: 500;
}
</style>
