let buttonDiv =  document.getElementById('buttons-container')
let buttonSpans = buttonDiv.querySelectorAll('span')
let screen = document.getElementById('screen')


const buttonEquals = document.getElementById('equals')
buttonEquals.addEventListener('click', function () {
    screen.innerText = eval(screen.innerText)
  })

const buttonZero = document.querySelector('#zero')
buttonZero.addEventListener('click', function () {
    screen.innerHTML += buttonZero.textContent
  })

const operators = document.querySelectorAll(".operator")
operators.forEach(function(operator) {
  if (operator.innerHTML === "x") {
    operator.innerHTML = "*"
    operator.addEventListener('click', function (){
      screen.innerHTML += operator.textContent
    })
  } else if (operator.innerHTML === "÷") {
    operator.innerHTML = "/"
    operator.addEventListener('click', function (){
      screen.innerHTML += operator.textContent
    })
  } else if (operator.innerHTML === "C") {
    operator.addEventListener('click', function (){
      screen.innerHTML = null
    })
  } else if (operator.innerHTML === "-") {
    operator.innerHTML = "-"
    operator.addEventListener('click', function (){
      screen.innerHTML += operator.textContent
    })
  } else if (operator.innerHTML === "+") {
    operator.innerHTML = "+"
    operator.addEventListener('click', function (){
      screen.innerHTML += operator.textContent
    })
  }
})


function hasClass(buttonSpans){
  buttonSpans.forEach(function(span){
    if (span.innerText === "1"){
      span.addEventListener('click', function (){
        screen.innerHTML += span.innerText
        console.log(span)
      })
    } else if (span.innerText === "2") {
      span.addEventListener('click', function (){
        screen.innerHTML += span.innerText
      })
    } else if (span.innerText === "3") {
      span.addEventListener('click', function (){
        screen.innerHTML += span.innerText
      })
    } else if (span.innerText === "4") {
      span.addEventListener('click', function (){
        screen.innerHTML += span.innerText
      })
    } else if (span.innerText === "5") {
      span.addEventListener('click', function (){
        screen.innerHTML += span.innerText
      })
    } else if (span.innerText === "5") {
      span.addEventListener('click', function (){
        screen.innerHTML += span.innerText
      })
    } else if (span.innerText === "6") {
      span.addEventListener('click', function (){
        screen.innerHTML += span.innerText
      })
    } else if (span.innerText === "7") {
      span.addEventListener('click', function (){
        screen.innerHTML += span.innerText
      })
    } else if (span.innerText === "8") {
      span.addEventListener('click', function (){
        screen.innerHTML += span.innerText
      })
    } else if (span.innerText === "9") {
      span.addEventListener('click', function (){
        screen.innerHTML += span.innerText
      })
    }
  })
}

hasClass(buttonSpans)



// 
// const buttons = document.getElementById('buttons-container')
// const screen = document.getElementById('screen')
// const operators = document.querySelectorAll(".operator")
//
// const numbers = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "0"]
//
// buttons.addEventListener("click", function(){
//     if (numbers.includes(event.target.innerText)){
//         screen.textContent += event.target.innerText
//     }
// })
//
// operators.forEach(function(operator){
// operator.addEventListener("click", function(func){
//     // func.forEach(function(){
//         if (operator.innerText === "C") {
//         screen.innerHTML = null
//         } else if (operator.innerText === "+"){
//             screen.innerHTML += operator.innerText
//         } else if (operator.innerText === "-"){
//             screen.innerHTML += operator.innerText
//         } else if (operator.innerText === "x"){
//              screen.innerHTML = "*"
//         } else if (event.target.innerText === "÷"){
//             screen.innerHTML += "/"
//         } else if (event.target.id === "equals"){
//             screen.innerText = eval(screen.innerText)
//         }
//     })
// })
