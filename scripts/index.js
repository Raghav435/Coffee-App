// Add the coffee to local storage with key "coffee"

// API:- https://masai-mock-api.herokuapp.com/coffee/menu

let arr = JSON.parse(localStorage.getItem("coffee")) || [];


let count = arr.length;
console.log(count);

document.querySelector('#coffee_count').innerText = `${count}`;

async function myCoffee(){

    const url = "https://masai-mock-api.herokuapp.com/coffee/menu";
    try{
        let res = await fetch(url);

        let data = await res.json();

        console.log('data',data.menu.data);
        appendData(data.menu.data);

    }catch(err){
        console.log('err',err);
    }
}
myCoffee();

function appendData(data){
    if(data === undefined){
        return false
    }

    let  container = document.getElementById('menu');

    data.forEach(function (ele){
        let div = document.createElement("div");

        let img = document.createElement("img");
        img.src = ele.image;

        let title = document.createElement("p");
        title.innerText = `Type - ${ele.title}`;

        let price = document.createElement("p");
        price.innerText = `Price - ${ele.price}`;

        let btn = document.createElement("button")
        btn.innerText = "Add to bucket";
        btn.setAttribute("id","add_to_bucket");
        btn.addEventListener("click", function(){
            myBucket(ele);
        })

        div.append(img, title, price, btn);

        container.append(div);
    });

    // window.location.reload();
};

function myBucket(ele){
    console.log(ele);
    arr.push(ele);

    localStorage.setItem("coffee",JSON.stringify(arr));
    window.location.reload();
}
