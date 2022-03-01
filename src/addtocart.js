var products = [
	{ id: 101, name: 'Basket Ball', image: 'basketball.png', price: 150 },
	{ id: 102, name: 'Football', image: 'football.png', price: 120 },
	{ id: 103, name: 'Soccer', image: 'soccer.png', price: 110 },
	{ id: 104, name: 'Table Tennis', image: 'table-tennis.png', price: 130 },
	{ id: 105, name: 'Tennis', image: 'tennis.png', price: 100 }
];
var buyNow = [];
var cart = [];
$(document).ready(function() {
	$('#clearCart').on('click', function() {
		cart = [];
		dis();
	});
	display();
});

function addTCart(x) {
	var id = x;
	if (cart.length == 0) {
		for (var i = 0; i < products.length; i++) {
			if (products[i].id == id) {
				var obj = {
					image: products[i].image,
					id: products[i].id,
					price: products[i].price,
					name: products[i].name,
					quantity: 1
				};
				cart.push(obj);
			}
			dis();
		}
	} else {
		var flag = 0;
		for (var j = 0; j < cart.length; j++) {
			if (cart[j].id == id) {
				flag = 1;
			}
		}
		if (flag == 1) {
			for (var j = 0; j < cart.length; j++) {
				if (cart[j].id == id) {
					cart[j].quantity++;
					dis();
					return;
				}
			}
		} else {
			for (var i = 0; i < products.length; i++) {
				if (products[i].id == id) {
					var obj = {
						image: products[i].image,
						id: products[i].id,
						price: products[i].price,
						name: products[i].name,
						quantity: 1
					};

					cart.push(obj);
				}
				dis();
			}
			return;
		}
	}
}
function remove(x) {
	for (var i = 0; i < cart.length; i++) {
		if (cart[i].id == x) {
			if (confirm('Are you sure you want to delete' + cart[i].id + ' row')) {
				cart.splice(i, 1);
			}
		}
	}
	dis();
}
function removeFromBuyNow(x) {
	for (var i = 0; i < buyNow.length; i++) {
		if (buyNow[i].id == x) {
			if (confirm('Are you sure you want to delete' + buyNow[i].id + ' row')) {
				buyNow.splice(i, 1);
			}
		}
	}
	display_buynow();
}
function update(x) {
	for (var i = 0; i < cart.length; i++) {
		if (cart[i].id == x) {
			var u_value = document.getElementById('quantity' + [ i ]).value;
			console.log(u_value);
			if (u_value == '') {
				alert('please enter a value');
			} else {
				cart[i].quantity = u_value;
				dis();
			}
		}
	}
}
function updateInBuyNow(x) {
	for (var i = 0; i < buyNow.length; i++) {
		if (buyNow[i].id == x) {
			var u_value = document.getElementById('quantity' + [ i ]).value;
			if (u_value == '') {
				alert('please enter a value');
			} else {
				buyNow[i].quantity = u_value;
				display_buynow();
			}
		}
	}
}
function increace(x) {
	for (var i = 0; i < cart.length; i++) {
		if (cart[i].id == x) {
			cart[i].quantity++;
			dis();
		}
	}
}
function increaceInBuyNow(x) {
	for (var i = 0; i < buyNow.length; i++) {
		if (buyNow[i].id == x) {
			buyNow[i].quantity++;
			display_buynow();
		}
	}
}
function decreace(y) {
	for (var i = 0; i < cart.length; i++) {
		if (cart[i].id == y) {
			cart[i].quantity--;
			dis();
		}
	}
}
function decreaceInBuyNow(y) {
	for (var i = 0; i < buyNow.length; i++) {
		if (buyNow[i].id == y) {
			buyNow[i].quantity--;
			display_buynow();
		}
	}
}
function buy_now(x) {
	if (buyNow.length == 0) {
		for (var i = 0; i < cart.length; i++) {
			if (cart[i].id == x) {
				var buynowobj = {
					image: cart[i].image,
					id: cart[i].id,
					price: cart[i].price,
					name: cart[i].name,
					quantity: cart[i].quantity
				};
				buyNow.push(buynowobj);
				display_buynow();
				cart.splice(i, 1);
			}
		}
		dis();
	} else {
		var flag = 0;
		for (var i = 0; i < buyNow.length; i++) {
			if (x == buyNow[i].id) {
				flag = 1;
			}
		}
		if (flag == 1) {
			for (var i = 0; i < cart.length; i++) {
				for (var j = 0; j < buyNow.length; j++) {
					if (cart[i].id == x) {
						if (buyNow[j].id == x) {
							buyNow[j].quantity = buyNow[j].quantity + cart[i].quantity;
							cart.splice(i, 1);
						}
					}
				}
			}
			dis();
			display_buynow();
		} else {
			for (var i = 0; i < cart.length; i++) {
				if (cart[i].id == x) {
					var buynowobj = {
						image: cart[i].image,
						id: cart[i].id,
						price: cart[i].price,
						name: cart[i].name,
						quantity: cart[i].quantity
					};
					buyNow.push(buynowobj);
					cart.splice(i, 1);
					display_buynow();
				}
				dis();
			}
		}
	}
}
function moveToCart(x) {
	if (cart.length == 0) {
		for (var i = 0; i < buyNow.length; i++) {
			if (buyNow[i].id == x) {
				var moveToCartobj = {
					image: buyNow[i].image,
					id: buyNow[i].id,
					price: buyNow[i].price,
					name: buyNow[i].name,
					quantity: buyNow[i].quantity
				};
				cart.push(moveToCartobj);
				dis();
				buyNow.splice(i, 1);
			}
		}
		display_buynow();
	} else {
		var flag = 0;
		for (var i = 0; i < cart.length; i++) {
			if (x == cart[i].id) {
				flag = 1;
			}
		}
	}
	if (flag == 1) {
		for (var i = 0; i < buyNow.length; i++) {
			for (var j = 0; j < cart.length; j++) {
				if (buyNow[i].id == x) {
					if (cart[j].id == x) {
						cart[j].quantity = cart[j].quantity + buyNow[i].quantity;
						buyNow.splice(i, 1);
					}
				}
			}
		}
		dis();
		display_buynow();
	} else {
		for (var i = 0; i < buyNow.length; i++) {
			if (buyNow[i].id == x) {
				var moveToCartobj = {
					image: buyNow[i].image,
					id: buyNow[i].id,
					price: buyNow[i].price,
					name: buyNow[i].name,
					quantity: buyNow[i].quantity
				};
				cart.push(moveToCartobj);
				dis();
				buyNow.splice(i, 1);
			}
		}
		display_buynow();
	}
}
function addAll() {
	for (var i = 0; i < cart.length; i++) {
		var addallobj = {
			image: cart[i].image,
			id: cart[i].id,
			price: cart[i].price,
			name: cart[i].name,
			quantity: cart[i].quantity
		};
		buyNow.push(addallobj);
	}
	cart = [];
	dis();
	display_buynow();
}
function removeAll() {
	buyNow = [];
	display_buynow();
}
function clearAll() {
	cart = [];
	dis();
}


function display() {
	var dis = '<div id="products"><div id="product-101" class="product">';
	for (var i = 0; i < products.length; i++) {
		dis +=
			'<img src="images/' +
			products[i].image +
			'"</img><h3 class="title"><a href="#">Product' +
			products[i].id +
			'</a></h3><span>Price: $' +
			products[i].price +
			'</span><a class="add-to-cart" onclick="addTCart(' +
			parseInt(products[i].id) +
			')" href="#">Add To Cart</a>';
	}

	dis += '</div></div>';
	document.getElementById('products').innerHTML = dis;
}

function dis() {
	var html =
		'<table><tr><td><button class="Submit" id="buy-all" value="moveToCart" onclick="addAll()">ADD ALL</button>';
	html += '<td><button class="Submit" id="clearAll" value="clearAll" onclick="clearAll()">CLEAR ALL</button>';
	html +=
		'</td></tr><tr><th>image</th><th>id</th><th>price</th><th>Quantity</th><th>ADD</th><th>SUB</th><th>edit quantity</th><th>update quantity</th><th>remove product</th><th>buy now</th></tr>';
	for (var i = 0; i < cart.length; i++) {
		html +=
			'<tr><td>' +
			cart[i].image +
			'</td><td>' +
			cart[i].id +
			'</td><td>' +
			cart[i].price +
			'</td><td>' +
			cart[i].quantity +
			'</td><td><button class="Submit" id="btn" value="update" onclick="increace(' +
			parseInt(cart[i].id) +
			')">+</button></td><td><button class="Submit" id="btn" value="update" onclick="decreace(' +
			parseInt(cart[i].id) +
			')">-</button></td><td><input type="text" id="quantity' +
			[ i ] +
			'" ></td><td><button class="Submit" id="remove' +
			[ i ] +
			'" value="update" onclick="update(' +
			parseInt(cart[i].id) +
			')">update</button></td><td><button class="Submit" id="remove' +
			[ i ] +
			'" value="remove" onclick="remove(' +
			parseInt(cart[i].id) +
			')">remove product</button></td><td><button class="Submit" id="remove' +
			[ i ] +
			'" value="remove" onclick="buy_now(' +
			parseInt(cart[i].id) +
			')">buy now</button></td></tr>';
	}
	html += '</table>';
	document.getElementById('addtocart').innerHTML = html;
}
function display_buynow() {
	var html =
		'<table><tr><td><button class="Submit" id="remove_all" value="removeall" onclick="removeAll()">REMOVE ALL</button>';
	html +=
		'</td></tr><tr><th>image</th><th>id</th><th>price</th><th>Quantity</th><th>ADD</th><th>SUB</th><th>edit quantity</th><th>update quantity</th><th>remove product</th><th>buy now</th></tr>';

	for (var i = 0; i < buyNow.length; i++) {
		html +=
			'<tr><td>' +
			buyNow[i].image +
			'</td><td>' +
			buyNow[i].id +
			'</td><td>' +
			buyNow[i].price +
			'</td><td>' +
			buyNow[i].quantity +
			'</td><td><button class="Submit" id="btn" value="update" onclick="increaceInBuyNow(' +
			parseInt(buyNow[i].id) +
			')">+</button></td><td><button class="Submit" id="btn" value="update" onclick="decreaceInBuyNow(' +
			parseInt(buyNow[i].id) +
			')">-</button></td><td><input type="text" id="quantity' +
			[ i ] +
			'" ></td><td><button class="Submit" id="remove' +
			[ i ] +
			'" value="update" onclick="updateInBuyNow(' +
			parseInt(buyNow[i].id) +
			')">update</button></td><td><button class="Submit" id="remove' +
			[ i ] +
			'" value="remove" onclick="removeFromBuyNow(' +
			parseInt(buyNow[i].id) +
			')">remove product</button></td><td><button class="Submit" id="moveToCart' +
			[ i ] +
			'" value="moveToCart" onclick="moveToCart(' +
			parseInt(buyNow[i].id) +
			')">Move To Cart</button></td></tr>';
	}
	html += '<td><button class="Submit" id="checkOut" value="checkOut" onclick="checkOut()">Check Out</button>';
	html += '</table>';
	document.getElementById('buynow').innerHTML = html;
}
