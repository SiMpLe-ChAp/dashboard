let date = new Date()
let month = Number(date.getMonth())+1

document.querySelector('.day').innerHTML = date.getDate()  + "."
document.querySelector('.year').innerHTML = ''+date.getFullYear()
document.querySelector('.month').innerHTML = month + '.'

let week = date.getDay()
switch (week) {

case 1:
document.querySelector('.week').innerHTML = 'Monady'
break;
case 2:
document.querySelector('.week').innerHTML = 'Tuesday'
break;
case 3:
document.querySelector('.week').innerHTML = 'Wednesday'
break;
case 4:
document.querySelector('.week').innerHTML = 'Thursday'
break;
case 5:
document.querySelector('.week').innerHTML = 'Friday'
break;
case 6:
document.querySelector('.week').innerHTML = 'Saturday'
break;
case 7:
document.querySelector('.week').innerHTML = 'Sunday'
break;

}
document.querySelector('.hours').innerHTML = date.getHours() + ':' +date.getMinutes()+':' +date.getSeconds()


document.querySelector('#submit').addEventListener("click",function(){
    let username = document.querySelector('#text')
    let password = document.querySelector('#password')
    if(username.value == 'Muhammadyusuf' && password.value == '12022010'){
    let tanla = confirm('Do you want to enter to our site ?')
    if(tanla==true){
        document.querySelector('.container').style.display = 'block'
        document.querySelector('.form').style.display = 'none'
    }
    else{
   
        alert('What do you wanted ?')
    }
   
}
else{
    alert('Your password or username is wrong')
}
})


function log() {
    alert('Are You sure?')
    document.querySelector('.container').style.display  = 'none'  
    document.querySelector('.form').style.display  = 'block'  
}
document.querySelector('.btn_dash').addEventListener("click",function(){
    document.querySelector('.dashboard').style.display = 'block'
    document.querySelector('.sales').style.display = 'none'
})

document.querySelector('.btn_sales').addEventListener("click",function(){
    document.querySelector('.sales').style.display = 'block'
    document.querySelector('.dashboard').style.display = 'none'
    document.querySelector('.products').style.display = 'none'

})
document.querySelector('.back').addEventListener("click",function(){
    document.querySelector('.dashboard').style.display = 'block'
    document.querySelector('.sales').style.display = 'none'

})
document.querySelector('.loogo').addEventListener("click",function(){
    document.querySelector('.sales').style.display = 'block'
    document.querySelector('.dashboard').style.display = 'none'
    document.querySelector('.products').style.display = 'none'
})
document.querySelector('.btn_product').addEventListener("click",function(){
    document.querySelector('.dashboard').style.display = 'none'
    document.querySelector('.sales').style.display = 'none'
    document.querySelector('.products').style.display = 'block'
    document.querySelector('.customers').style.display = 'none'

})
document.querySelector('.back1').addEventListener("click",function(){
    document.querySelector('.sales').style.display = 'none'
    document.querySelector('.dashboard').style.display = 'block'
    document.querySelector('.products').style.display = 'none'
})
document.querySelector('.btn_sup').addEventListener("click",function(){
    document.querySelector('.dashboard').style.display = 'none'
    document.querySelector('.sales').style.display = 'none'
    document.querySelector('.products').style.display = 'none'
    document.querySelector('.customers').style.display = 'block'
})
document.querySelector('.back2').addEventListener("click",function(){
    document.querySelector('.sales').style.display = 'none'
    document.querySelector('.dashboard').style.display = 'block'
    document.querySelector('.products').style.display = 'none'
    document.querySelector('.customers').style.display = 'none'
})
document.querySelector('.add').addEventListener("click",function(){
    document.querySelector('.add_product').style.display = 'block'
})
document.querySelector('.ion-icon').addEventListener("click",function(){
    document.querySelector('.add_product').style.display = 'none'
})
document.querySelector('.save_pr').addEventListener("click",function(){
    document.querySelector('.add_product').style.display = 'none'
})

document.querySelector('.save_pr').addEventListener("click",function(){
    let Product = document.querySelector('.Product')
    let Generic = document.querySelector('.Generic')
    let Category = document.querySelector('.Category')
    let Price = document.querySelector('.Price')

    const new_pr = document.createElement('td')
    new_pr.innerHTML = Product.value
    document.querySelector('.new_tr').appendChild(new_pr)
    const new_gen = document.createElement('td')
    new_gen.innerHTML = Generic.value
    document.querySelector('.new_tr').appendChild(new_gen)
    const new_category = document.createElement('td')
    new_category.innerHTML = Category.value
    document.querySelector('.new_tr').appendChild(new_category)
    const new_price = document.createElement('td')
    new_price.innerHTML = Price.value
    document.querySelector('.new_tr').appendChild(new_price)

})
















document.querySelector('.addd').addEventListener("click",function(){
    document.querySelector('.add_product1').style.display = 'block'
})
document.querySelector('.ion-icon1').addEventListener("click",function(){
    document.querySelector('.add_product1').style.display = 'none'
})
document.querySelector('.save_pr1').addEventListener("click",function(){
    document.querySelector('.add_product1').style.display = 'none'
})






document.querySelector('.save_pr1').addEventListener("click",function(){
    let Product1 = document.querySelector('.Product1')
    let Generic1 = document.querySelector('.Generic1')
    let Category1 = document.querySelector('.Category1')
    let Price1 = document.querySelector('.Price1')
    let Note1 = document.querySelector('.Note1')
    let al5 = document.querySelector('.al5')
// 
    const new1_tr = document.createElement('td')
    new1_tr.innerHTML = Product1.value
    document.querySelector('.new1_tr').appendChild(new1_tr)

    const new_gen1 = document.createElement('td')
    new_gen1.innerHTML = Generic1.value
    document.querySelector('.new1_tr').appendChild(new_gen1)

    const new_category1 = document.createElement('td')
    new_category1.innerHTML = Category1.value
    document.querySelector('.new1_tr').appendChild(new_category1)

    const new_price1 = document.createElement('td')
    new_price1.innerHTML = Price1.value
    document.querySelector('.new1_tr').appendChild(new_price1)

    const new_note1 = document.createElement('td')
    new_note1.innerHTML = Note1.value
    document.querySelector('.new1_tr').appendChild(new_note1)


    const A = document.createElement('td')
    A.innerHTML = A.value
    document.querySelector('.new1_tr').appendChild(al5)
})







document.querySelector('.bbtn11').addEventListener("click",function(){
    document.querySelector('.al').style.display = 'none'
})
document.querySelector('.bbtn11').addEventListener("click",function(){
    document.querySelector('.al1').style.display = 'none'
})
document.querySelector('.bbtn11').addEventListener("click",function(){
    document.querySelector('.al2').style.display = 'none'
})
document.querySelector('.bbtn11').addEventListener("click",function(){
    document.querySelector('.al3').style.display = 'none'
})

document.querySelector('.bbtn11').addEventListener("click",function(){
    document.querySelector('.al4').style.display = 'none'
})

document.querySelector('.bbtn11').addEventListener("click",function(){
    document.querySelector('.al5').style.display = 'none'
})