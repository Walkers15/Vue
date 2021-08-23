<template>
	<div>
		<nav class="navbar navbar-expand-sm navbar-dark bg-primary">
			<div class="container-fluid">
				<a class="navbar-brand" href="#">Shoon's Blog</a>
				<div class="collapse navbar-collapse" id="navbarText">
					<ul class="navbar-nav me-auto mb-2 mb-lg-0">
						<li v-for="(element, i) in navList" :key="(element, i)">
							<a class="nav-link" :class="{ active: clickedId === i }" @click="this.clickedId = element.id"> {{ element.text }} </a>
						</li>
					</ul>
					<span class="navbar-text">
						백승훈의 두 번쨰 Vue Js Page
					</span>
				</div>
			</div>
		</nav>
		<div class="container-fluid" style="margin-top: 10px">
			<div class="row">
				<div class="col-3">
					<div class="border border-primary">
						<img class="img-fluid rounded-circle" src="https://avatars.githubusercontent.com/u/46189249">
						<p class="text-start" style="margin-top: 5px">
							😀
							<mark> 백승훈</mark>
						</p>
						<p class="text-start" style="margin-top: 5px">
							✍️ Vue is Good
						</p>
						<p class="text-start" style="margin-top: 5px">
							🔗
							<a href="https://github.com/Walkers15"> Github </a>
						</p>
					</div>
					<hr>
					<p class="text-start">
						📝 글 싸지르기
					</p>
					<hr>
					<div class="card text-start border-primary" style="margin-top: 10px">
						<div class="card-header">
							Category
						</div>
						<ul class="list-group list-group-flush">
							<li class="list-group-item">
								Daily
							</li>
							<li class="list-group-item">
								Study
							</li>
							<li class="list-group-item">
								Memo
							</li>
						</ul>
					</div>
				</div>
				<div class="col-9">
					<div class="card text-start" style="margin-bottom: 10px">
						<div class="card-body">
							<h5 class="card-title">
								화성의 비밀
							</h5>
							<h6 class="card-subtitle mb-2 text-muted">
								백승훈
							</h6>
							<p class="card-text">
								화성에는 외계인이 산다. 구라아님
							</p>
							<a href="#" class="card-link">ㄹㅇ?</a>
						</div>
					</div>
					<div class="card text-start">
						<div class="card-body">
							<h5 class="card-title">
								케인인님
							</h5>
							<h6 class="card-subtitle mb-2 text-muted">
								큰코루삥뽕
							</h6>
							<p class="card-text">
								케인인님 한판해요
							</p>
							<button class="btn btn-primary">
								동의하기
							</button>
						</div>
					</div>
				</div>
			</div>
		</div>
	</div>
</template>

<script>

export default {
  name: 'App',
  components: {
  },
  data() {
		return {
			isActive: true,
			clickedId: 0,
			isWriteCollapse: false,
			navList: [
				{
				id: 0,
				text: 'Home'
				},
				{
				id: 1,
				text: 'Features'
				},
				{
					id: 2,
					text: 'Um'
				}
			]
		}
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
</style>
