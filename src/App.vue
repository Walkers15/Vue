<template>
	<div>
		<div class="black-bg" v-if="isModalOpened === true" @click="isModalOpened = false">
			<div class="white-bg">
				<h4>상세페이지</h4>
				<p>상세페이지내용임</p>
			</div>
		</div>
		<div class="menu">
			<a v-for="(menuName, i) in menuNames" :key="(menuName, i)">{{ i }}_{{ menuName }}</a>
		</div>

		<div v-for="(room, i) in products" :key="(room, i)">
			<img :src="room.image">
			<h4 :style="style">
				ABC
				{{ room.title }}
			</h4>
			<p>{{ room.price }}</p>
		</div>
		<!-- <div> 
			<img src="{{ products[0].title }}">
			<h4 @click="isModalOpened = true">
				{{ products[0].title }}
			</h4>
			<p>50만원</p>
			<button @click="increase(reportCounts, '역삼')">
				허위매물신고
			</button> <span> 신고수: {{ reportCounts['역삼'] }}</span>
		</div>
		<div>
			<h4>{{ products[1].title }}}</h4>
			<p>50만원</p>
			<button @click="increase(reportCounts, '천호')">
				허위매물신고
			</button> <span> 신고수: {{ reportCounts['천호'] }}</span>
		</div>
		<div>
			<h4>{{ products[2].title }}</h4>
			<p>50만원</p>
			<button @click="increase(reportCounts, '마포')">
				허위매물신고
			</button> <span> 신고수: {{ reportCounts['마포'] }}</span>
		</div>
		<button @click="prices[0] *= 3;">
			엄준식
		</button> -->
	</div>
</template>

<script>
import products from './assets/products'
export default {
	name: "App",
	data() {
		return {
			isModalOpened: false, // ui의 상태 저장: State
			prices: [60, 70, 80],
			productss: ["역삼동원룸", "천호동원룸", "마포구원룸"],
			products,
			menuNames: ["Home", "Objects", "About"],
			style: "color:red",
			reportCounts: {'역삼': 0, '천호': 0, '마포': 0},
			
		};
	},
	methods: {
		increase(obj, key){
			obj[key]++;
		}
	},
	components: {
	}
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

.menu {
  background : darkslateblue;
  padding : 15px;
  border-radius : 5px;
}
.menu a {
  color : white;
  padding : 10px;
}
body {
  margin : 0;
}
div {
  box-sizing: border-box;
}
.black-bg {
  width: 100%; height:100%;
  background: rgba(0,0,0,0.5);
  position: fixed; padding: 20px;
}
.white-bg {
  width: 100%; background: white;
  border-radius: 8px;
  padding: 20px;
} 
</style>
