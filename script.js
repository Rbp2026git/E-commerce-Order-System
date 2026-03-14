function order(customerName, items){
    console.log("Customer : ", customerName);

    function calculateTotal(){
        total = 0;
        for(let item of items){
            total += item.price * item.quantity;
        }
        return total;
    }
    let totalAmount = calculateTotal();

    function applyDiscount(total){
        if(total > 1000){
            return total * 0.9;
        }
        return total;
    }
    let finalAmount = applyDiscount(totalAmount);

    console.log("Total Amount : ", totalAmount);
    console.log("Final Amount : ", finalAmount);

}
order("Raushan Bhai Patel",[ {name : "shirt", price : 1000, quantity : 2 }, {name : "paint", price : 300, quantity : 1 } ]);
