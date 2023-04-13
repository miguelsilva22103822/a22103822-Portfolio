const calculator = document.querySelector('.calculator')
const keys = calculator.querySelector('#calculator-buttons')

keys.addEventListener('click', e => {
 if (e.target.matches('button, i')) {
    const key = e.target
    const action = key.dataset.action

    if (!action) {
        console.log('number key!')
    }

    if (
        action === 'add' ||
        action === 'subtract' ||
        action === 'multiply' ||
        action === 'divide' ||
        action === 'sqrt' ||
        action === 'percent'
      ) {
        console.log('operator key!')
    }

    if (action === 'decimal') {
        console.log('decimal key!')
    }
      
    if (action === 'clear') {
        console.log('clear key!')
    }
      
    if (action === 'calculate') {
        console.log('equal key!')
    }



 }
})