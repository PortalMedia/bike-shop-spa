let cart = {
	id: 123,
	deliveryMethod: "S",
	shipCost: 15.00,
	products: [
		{
			portalNumber: "71842",
			productName: "Electric Bike 2.0",
			brandName: "Buzz",
			regularPrice: 4000.00,
			qty: 1,
			salePrice: 3500.00,
			imageUrl: "assets/electricBike.png"
		},
		{
			portalNumber: "02043",
			productName: "Helmet",
			brandName: "Noggin",
			regularPrice: 80.00,
			qty: 1,
			salePrice: null,
			imageUrl: "assets/helmet.png"
		},
		{
			portalNumber: "13652",
			productName: "Tire Patch Kit",
			brandName: "Stop Seep",
			regularPrice: 5.00,
			qty: 3,
			salePrice: 3.00,
			imageUrl: "assets/tirePatchKit.png"
		}
	]
}

export default cart;