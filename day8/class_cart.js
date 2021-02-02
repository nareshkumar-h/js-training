class Cart{
    constructor(productName, qty, price){
        this.productName = productName;
        this.qty = qty;
        this.price = qty* price;   
        this.totalAmount = 0;     
    }

    setQuantity(qty){
        ////Encapsulation
        if(qty <= 0){
            throw new Error("Invalid Quantity");//Using methods we can protect
        }
    }

    getTotalAmount(){        
        return this.totalAmount;
    }

    applyDiscount(percentage){
        this.totalAmount = this.totalAmount * ( percentage/100);
    }
}


let c1 = new Cart("iphone", 1, 1000);
//c1.qty = -20; // We dont want to expose direct access to state variables to prevent invalid values.

let amount  = c1.getTotalAmount();
console.log("Without Discount, Total Amount=", amount);
c1.applyDiscount(10);
let discountAmount = c1.getTotalAmount();
console.log("After Discount, Total Amount=", amount);