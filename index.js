window.onload = function(){
    createTeams()
}



let body = document.getElementsByTagName('body')[0]
let container = document.getElementById('containerOne')
let inputText = document.querySelector('.text')
let amountOfTeams = prompt("How many teams?");





let randomUl = document.getElementsByTagName("ul")[0]

function lookingForRandomTeam (){
    for (let i = 0; i < randomUl.length ; i++){
    }
    return i
}



let people = []
inputText.value = ""


//------------------------------------------Adding peoples names----------------------
function addTeamOne (){
    const valueText = inputText.value
    if (valueText !== ''){
        
    container.innerHTML += `<div class="item"><span>`+ valueText + '</span></div>' 
    people.push(valueText)
        
    }
    else{
        alert("Error:empty fields")
    }
    inputText.focus()
    inputText.value = ""
}









function clearHTML(){
    container.innerHTML = ""
    inputText.focus()
}




//-----------------Assign button-----------------
// function assign(){
//     container.innerHTML.randomUl +=`<li>` + valueText + `</li>`

// }



function putInTeams(){
    let randomName = Math.floor(Math.random()*people.length)
    randomUl.innerHTML += `<li class="team">` + people[randomName] + `</li>`
}


//-----------creating teams onload------

function createTeams(){
    for(let i=0;i<amountOfTeams;i++){
        let newTeam = document.createElement("ul")
        newTeam.innerText = "Team" + i
        newTeam.classList.add("team")
        let appendTo = document.getElementsByTagName("body")[0]
        appendTo.appendChild(newTeam)
    }
}















// // console.log(people)

// // let arrayPeople = people.length


// // function assign(){
// //     const valueText = inputText.value
// //     if(valueText !== ''){
// //         container.innerHTML += `<div class="item"><span>`+ valueText + '</span></div>'
// //         people.push({text:valueText})
// //         inputText.value = ""
// //     }
        
        




















