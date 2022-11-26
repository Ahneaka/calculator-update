// const previous = document.getElementById("previous");
// const current = document.getElementById("current");
// function display(num){
//     previous.innerHTML += num;
// }
// function allClear(){
//     previous.innerHTML = '';
//     current.innerHTML = '';
// }
// function del(){
//     previous.innerText = previous.innerText.slice(0.-1);
// }
// function calculate(){
//     current.innerHTML = eval(previous.innerText);
// }
 
// previous = calculation from input buttons****** current= output result from input


// let display = document.getElementById('output');

// function display(anyVal) {
//     display.value = display.value + anyVal;
// }
//===========================================================================================
// class Calculator {
//     constructor (previousOperandTextElement, currentOperandTextElement){
//         this.previousOperandTextElement = previousOperandTextElement
//         this.currentOperandTextElement = currentOperandTextElement
    
//     }
// getDisplayNumber(number) {
//     const stringNuber = number.toString()
//     const integerDigits = parseFloat(stringNumber.split('.')[0])
//     const decimalDigits = stringNumber.split('.')[1]
//     let integerDisplay 
//     if (isNaN(integrDigits)) {
//         integerDisplay = ''
//     } else {
//         integerDisplay = integerDigits.toLocaleString('en',{maximumFractionDigits:0})
//     }
//     if (decimalDigits != null) {
//         return `${integerDisplay}.${decimalDigits}`
//     } else {
//         return integerDisplay
//     }
// }
// }
// const numberBtns = document.querySelectorAll('[numberButton]')

// const calculator = new Calculator(previousOperandTextElement, currentOperandTextElement)

// numberBtns.forEach(button =>{
//     button.addEventListener('click', () => {
//         calculator.appendNumber(button.innerText)
//     })
// })
//================================================================================================

const numberButtons = document.querySelectorAll('[data-number]')
const decimalButton = document.querySelector('[data-decimal]')
const opButtons = document.querySelectorAll('[data-op]')
const equalButton = document.querySelector('[data-equal]')
const deleteButton = document.querySelector('[data-delete]')
const allClrButton = document.querySelector('[data-clr]')
const previousOutput = document.querySelector('[data-previous]')
const currentOutput = document.querySelector('[data-current]')

allowDecimal = true


class Calculator {
    constructor (previousOperandTextElement, currentOperandTextElement){
        this.previousOperandTextElement = previousOperandTextElement
        this.currentOperandTextElement = currentOperandTextElement 
        this.currentOperand
        this.previousOperand
    }
    
    clear(){
        this.currentOperand = ''
        this.previousOperand = ''
        this.currentOperandTextElement.innerText = ''
        allowDecimal = true
    }
    delete(){
        if (this.currentOperandTextElement.innerText[this.currentOperandTextElement.innerText.length-1] == '.') {
            allowDecimal = true
        } else allowDecimal = false
        this.currentOperandTextElement.innerText = this.currentOperandTextElement.innerText.slice(0, -1)

    }

    addNumber(number){
        this.currentOperand = number
        this.updateDisplay()
    }

    addOp(op){
        this.currentOperand = op
        this.updateDisplay()
        allowDecimal = true
    }

    addDecimal() {
        if (allowDecimal) {
            this.currentOperand = '.'
            this.updateDisplay()
            allowDecimal = false
        }
    }

    compute(){
        let result = eval(this.currentOperandTextElement.innerText)
        this.currentOperandTextElement.innerText = result
        if (this.currentOperandTextElement.innerText.includes('.')) {
            allowDecimal = false
        } else allowDecimal = true
    }

    updateDisplay(){
        this.currentOperandTextElement.innerText += this.currentOperand
    }
}
const calculator = new Calculator(previousOutput, currentOutput)

numberButtons.forEach( (button) =>{
    button.addEventListener('click', () => {
        calculator.addNumber(button.innerText)
        
    })
})

opButtons.forEach( (button) =>{
    button.addEventListener('click', () => {
        calculator.addOp(button.innerText)
        
    })
})

allClrButton.addEventListener('click', () => {
    calculator.clear()
})

deleteButton.addEventListener('click', () => {
    calculator.delete()
})

equalButton.addEventListener('click', () => {
    calculator.compute()
})

decimalButton.addEventListener('click', () => {
    calculator.addDecimal()
})