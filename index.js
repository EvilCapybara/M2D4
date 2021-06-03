
let container = document.getElementById('container')
let inputText = document.querySelector('.text')
let container2 = document.getElementById('container2')
let inputText2 = document.querySelector('.text2')

const container3 = document.getElementById('container3')
let people = ["raia", "sarath"]

inputText.value = ""

function addTeamOne (){
    const valueText = inputText.value
    if (valueText !== ''){
        container.innerHTML += `<div class="item"><span>`+ valueText + '</span></div>' 
        people.push({text:valueText})
        inputText.value = ""
    }
    else{
        alert("Error:empty fields")
    }
    inputText.focus()
    return people
}


function addTeamTwo (){
    const valueText2 = inputText2.value
    if (valueText2 !== ''){
        container2.innerHTML += `<div class="item"><span>`+ valueText2 + '</span></div>' 
        people.push({text:valueText2})
        inputText2.value = ""
    }
    else{
        alert("Error:empty fields")
    }
    inputText2.focus()
    return people
}

// console.log(people)

// let arrayPeople = people.length


// function assign(){
//     const valueText = inputText.value
//     if(valueText !== ''){
//         container.innerHTML += `<div class="item"><span>`+ valueText + '</span></div>'
//         people.push({text:valueText})
//         inputText.value = ""
//     }
        
        


    // const random = Math.floor(Math.random()*arrayPeople)
    

// }

















function clearHTML(){
    container.innerHTML = ""
    inputText.focus()
}
function clearHTML2(){
    container2.innerHTML = ""
    inputText2.focus()
}



