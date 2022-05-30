
let arr = JSON.parse(localStorage.getItem('details')) || [];

function myDetails(e){
    e.preventDefault();
    myObj ={
        name : document.getElementById('name').value,
        number : document.getElementById('number').value,
        address : document.getElementById('address').value,
    }
    arr.push(myObj);
    console.log(myObj);

    localStorage.setItem('details', JSON.stringify(arr));

    let enteredName = document.getElementById('name').value;
    let enteredNumber = document.getElementById('number').value;
    let enteredAddress = document.getElementById('address').value;

    for (var i = 0; i < arr.length; i++) {
        console.log(arr[i]);
        if(myDetails[arr.length] === 0){
            alert("Content is blank")
            break;
        }
        else if (
            arr[i].name === enteredName &&
            arr[i].number === enteredNumber && 
            arr[i].address === enteredAddress
        ) {
            setTimeout(function(){
                alert('Your order is accepted ');
            },1000)
                setTimeout(function(){
                    alert('Your order is being Prepared ');
                },3000)
                setTimeout(function(){
                    alert('Your order is being packed');
                },8000)
                setTimeout(function(){
                    alert('Your order is out for delivery');
                },10000)
                setTimeout(function(){
                    alert('Order delivered');
                },12000)
            break;
        }
      
        else{
            alert('Wrong Crendentials')
            break;
        }
        break;
    }
    // window.location.href="index.html"
}