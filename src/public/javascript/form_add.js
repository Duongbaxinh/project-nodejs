
let form = document.getElementById('form-in')
let plush = document.getElementById('circlePlush')
let form2 = document.getElementById('form-list')
function Myfunction(){}
plush.addEventListener('click',(e)=>{
    let wraper = document.createElement('div')
    let icon = document.createElement('i')
    icon.setAttribute('class','fa-solid fa-circle-minus')
    icon.classList.add('form__controll--circlePlush')
    icon.setAttribute('onclick','Myfunction()')
    wraper.setAttribute('class','form__wraper')
    let formControll = document.createElement('div')
    formControll.setAttribute('class','form__controll')
    let lable = document.createElement('label')
    lable.setAttribute('class','form__lable')
    lable.innerText = 'nameIngredient'
    let input1 = document.createElement('input')
    input1.setAttribute('type','text')
    input1.setAttribute('class','form__input')
    input1.setAttribute('name','nameIngredient')
    input1.setAttribute('placeholder','Enter information')

    formControll.append(lable,input1)

    let formControll2 = document.createElement('div')
    formControll2.setAttribute('class','form__controll')
    let lable2 = document.createElement('label')
    lable2.setAttribute('class','form__lable')
    lable2.innerText = 'mass'
    let input2 = document.createElement('input')
    input2.setAttribute('class','form__input')
    input2.setAttribute('type','text')
    input2.setAttribute('name','mass')
    input2.setAttribute('placeholder','Enter information')

    formControll2.append(lable2,input2)
    wraper.append(formControll,formControll2,icon)
    form.append(wraper)
})

document.getElementById('circlePlush-list').addEventListener('click',()=>{
     let label = document.createElement('label')
     label.setAttribute('class','form__lable')
     label.innerText = 'list'
     let input = document.createElement('input')
     input.setAttribute('type','text')
     input.setAttribute('name','list')
     input.setAttribute('class','form__input')
     input.setAttribute('placeholder','Enter infomattion')
    document.getElementById('form__list').append(label,input)

})