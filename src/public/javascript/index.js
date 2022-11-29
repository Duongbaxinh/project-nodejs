
let store = document.getElementById('store')
        console.log('hello')
        fetch('http://localhost:3000/api/catalogy/getItemStore')
        .then(Response=>Response.json())
        .then((data)=>{
            console.log(data.data[0]._id)
            data.data.forEach(element => {
                let a = document.createElement('a')
                a.setAttribute('href',`deleteStore/${element._id}`)
                let button = document.createElement('button')
                button.innerText = 'Delete'
                a.append(button)
                let item = document.createElement('div')
                item.setAttribute("class", "header__store--item")
                let form = document.createElement('form')
                form.setAttribute('class',"header__store--form")
                form.setAttribute('action','getCongThuc')
                form.setAttribute('method',"POST")
                let label = document.createElement('label')
                label.setAttribute('for',`${element._id}`) 
                let image = document.createElement('img')
                image.setAttribute('class','header__store--image')
                image.src = `${element.avartar}`
                label.append(image)
                let input1 = document.createElement('input')
                input1.setAttribute('type','text')
                input1.setAttribute('name','id')
                input1.value = `${element.idCatalogy}` 
                input1.setAttribute('class','header__store--input')
                let input2 = document.createElement('input')
                input2.setAttribute('type','submit')
                input2.setAttribute('name','id')
                input2.setAttribute('id',`${element._id}`)
                input2.value = `${element._id}`    
                input2.setAttribute('class','header__store--input')      
                let p = document.createElement('p')
                p.setAttribute('class','header__store--name')
                p.innerHTML = `${element.foodName}`

                form.append(label,input1,input2,p,)
                item.append(form)
                store.append(item,a)
            });
        }).catch(
            (error)=>{
                console.log(error)
            }
        )
      
    