// On clicking remove button the item should be removed from DOM as well as localstorage.

let myProduct = JSON.parse(localStorage.getItem("coffee"));
console.log(myProduct);

let bucket = document.getElementById("total_amount")
let total = myProduct.reduce(function (sum, elem, index, arr){
    return sum + Number(elem.price);
},0);
bucket.append(total);



myProduct.map(function(ele,index){
    let div = document.createElement("div");

        let img = document.createElement("img");
        img.src = ele.image;

        let title = document.createElement("p");
        title.innerText = `Type - ${ele.title}`;

        let price = document.createElement("p");
        price.innerText = `Price - ${ele.price}`;

        let btn = document.createElement("button")
        btn.innerText = "Remove";
        btn.setAttribute("id","remove_coffee");
        btn.addEventListener("click", function(){
            removeBucket(ele);
        })

        div.append(img, title, price, btn);

        document.getElementById('bucket').append(div);
    });

    function removeBucket(ele,index){
        console.log(ele);
        myProduct.splice(index, 1);
        console.log(myProduct)

        localStorage.setItem("coffee", JSON.stringify(myProduct));
        window.location.reload();
    }



