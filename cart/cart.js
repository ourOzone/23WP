cart = [
    {
        name: "서울과기대 다산관 과잠",
        option: "XS_85",
        price: 45000,
        num: 1,
        src: "item1.png",
    },

    {
        name: "서울과기대 용 과잠",
        option: "L_100",
        price: 45000,
        num: 2,
        src: "item2.png",
    },

    {
        name: "서울과기대 빅로고 화이트 반팔",
        option: "XL_105",
        price: 33000,
        num: 3,
        src: "item3.png",
    }

]

var elements = document.getElementsByClassName("img");
for (var i = 0; i < elements.length; i++) {
    elements[i].src = cart[i].src
}


var elements = document.getElementsByClassName("itemTitle");
for (var i = 0; i < elements.length; i++) {
    
    elements[i].innerText = cart[i].name
}

var elements = document.getElementsByClassName("itemOption");
for (var i = 0; i < elements.length; i++) {
    
    elements[i].innerText = "[옵션: " + cart[i].option + "]";
}


var elements = document.getElementsByClassName("itemPrice");
for (var i = 0; i < elements.length-1; i++) {
    elements[i+1].innerHTML = "<strong> " + cart[i].price + "원</strong>";
}

var elements = document.getElementsByClassName("itemSum");
for (var i = 0; i < elements.length-1; i++) {
    elements[i+1].innerHTML = "<strong> " + cart[i].price * cart[i].num + "원</strong>";
}




var inputs = document.querySelectorAll('input[type="number"]');
for (var i = 0; i <inputs.length; i ++) {
    inputs[i].value = cart[i].num;
}

sum = 0
for (var i = 0; i < cart.length; i ++){
    sum += cart[i].num * cart[i].price;
}

var elements = document.getElementsByClassName("sumPrice");
for (var i = 0; i < elements.length; i++) {
    elements[i].innerHTML = sum;
}

var elements = document.getElementsByClassName("totPrice");
for (var i = 0; i < elements.length; i++) {
    elements[i].innerHTML = sum + 5500;
}

var elements = document.getElementsByClassName("numItem");
console.log(elements)
for (var i = 0; i < elements.length; i++) {
    elements[i].innerHTML = cart[i].num;
}



function saveVal() {
    var inputs = document.querySelectorAll('input[type="number"]');
    for (var i = 0; i <inputs.length; i ++) {
    cart[i].num = inputs[i].value;
    }

    var elements = document.getElementsByClassName("itemSum");
    for (var i = 0; i < elements.length-1; i++) {
        elements[i+1].innerHTML = "<strong> " + cart[i].price * cart[i].num + "원</strong>";
    }

    var elements = document.getElementsByClassName("sumPrice");
    sum = 0
    for (var i = 0; i < cart.length; i ++){
        sum += cart[i].num * cart[i].price;
    }
    for (var i = 0; i < elements.length; i++) {
        elements[i].innerHTML = sum;
    }
}

document.getElementById('checkAll').addEventListener('change', function () {
    var checkboxes = document.querySelectorAll('.checkboxItem');

    for (var i = 0; i < checkboxes.length; i++) {
        checkboxes[i].checked = this.checked;
    }
});