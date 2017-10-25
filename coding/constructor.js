// var m1 = {
// 	name: "jina",
// 	hp: 100,
// 	mp: 50,
// 	power: 10,
// 	attack: function(target) {
// 		target.hp -= this.power;
// 	}
// };

// var m2 = {
// 	name: "nana",
// 	hp: 100,
// 	mp: 50,
// 	power: 10,
// 	attack: function(target) {
// 		target.hp -= this.power;
// 	}
// };

// var c1 = {
// 	type: "coffee",
// 	energy:10,
// 	eat: function(target) {
// 		target.hp += Human.power
// 	}
// };

// //food(name,energy)생성자 만들기
// //eat() 메소드를 Human에 추가해봅시다
// //커피와 도너츠 객체를 생성해서 크롱에게
// function Food(name,energy) {
// 	this.name = name,
// 	this.energy = energy;
// }




// var m3 = new Human("Honux",100,10);
// var m4 = new Human("Crong",100,10);
// var f1 = new Food("coffee",10);
// var f2 = new Food("donut",100);

// m4.eat(f1);
// m4.eat(f2);

//Human객체를 하나 만들고 모든 속성과 값을 출력, 
function Human(name,hp,power,item) {
this.name = name;
this.hp = hp;
this.power = power;
this.item = [];
this.item .push(item);
}

Human.prototype.eat = function(food) {
	this.hp += food.energy;
};

var h1 = new Human("김지나",100,10,'pen');

var chicken = {energy: 30};
h1.eat(chicken);
var keys = Object.keys(h1);
for (var i = 0; i < keys.length; i++) {
	var key = keys[i];
	console.log(keys + ":" + h1[key]);
}

