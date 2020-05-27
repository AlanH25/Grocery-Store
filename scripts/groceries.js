	
// Array of products, each product is an object with different fieldset
// A set of ingredients should be added to products		 

var products = [
	{
		name: "Broccoli",
		vegetarian: true,
		glutenFree: true,
		price: 1.99,
		organic: true
	},
	{
		name: "Bread",
		vegetarian: true,
		glutenFree: false,
		price: 2.35,
		organic: true
	},
	{
		name: "Salmon",
		vegetarian: false,
		glutenFree: true,
		price: 10.00,
		organic: true
	},
	{
		name: "Chicken Tenders",
		vegetarian: false,
		glutenFree: false,
		price: 8.69,
		organic: false
	},
	{
		name: "Milk",
		vegetarian: true,
		glutenFree: true,
		price: 3.50,
		organic: true
	},
	{
		name: "Rease's Puffs",
		vegetarian: true,
		glutenFree: true,
		price: 3.99,
		organic: false
	},
	{
		name: "Bananas",
		vegetarian: true,
		glutenFree: true,
		price: 2.99,
		organic: true
	},
	{
		name: "Bigger Bananas",
		vegetarian: true,
		glutenFree: true,
		price: 5.99,
		organic: true
	},
	{
		name: "Biggest Bananas",
		vegetarian: true,
		glutenFree: true,
		price: 10.99,
		organic: true
	},
	{
		name: "Lettuce",
		vegetarian: true,
		glutenFree: true,
		price: 3.00,
		organic: true
	},
	{
		name: "Ground Beef",
		vegetarian: false,
		glutenFree: true,
		price: 9.99,
		organic: false
	},
	{
		name: "Spaghetti",
		vegetarian: true,
		glutenFree: false,
		price: 4.20,
		organic: false
	},
	{
		name: "Szechuan Sauce",
		vegetarian: true,
		glutenFree: true,
		price: 5.49,
		organic: false
	}
];
	


// given restrictions provided, make a reduced list of products
// prices should be included in this list, as well as a sort based on price

function restrictListProducts(prods, restriction, organic) {
	let product_names = [];

	for (let i=0; i<prods.length; i+=1) {
		if ((restriction == "Vegetarian") && (prods[i].vegetarian == true)){
			if((organic && prods[i].organic) || !organic){
				product_names.push(prods[i]);
			}
		}
		else if ((restriction == "GlutenFree") && (prods[i].glutenFree == true)){
			if((organic && prods[i].organic) || !organic){
				product_names.push(prods[i]);
			}
		}
		else if ((restriction == "UltraGooberBaby") && (prods[i].glutenFree == true && prods[i].vegetarian == true)){
			if((organic && prods[i].organic) || !organic){
				product_names.push(prods[i]);
			}
		}
		else if (restriction == "None"){
			if((organic && prods[i].organic) || !organic){
				product_names.push(prods[i]);
			}
		}
	}
	
	for(let i = 0; i < product_names.length; i ++){
		  for (let j = 0; j < product_names.length - 1; j ++){
			  if(product_names[j].price > product_names[j+1].price){
				  var temp = product_names[j];
				  product_names[j] = product_names[j+1];
				  product_names[j+1] = temp;
			  }
		  }
	  }
	
	return product_names;
}

// Calculate the total price of items, with received parameter being a list of products
function getTotalPrice(chosenProducts) {
	totalPrice = 0;
	for (let i=0; i<products.length; i+=1) {
		if (chosenProducts.indexOf(products[i].name) > -1){
			totalPrice += products[i].price;
		}
	}
	return totalPrice;
}
