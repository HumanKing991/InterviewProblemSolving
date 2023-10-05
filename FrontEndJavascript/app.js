function createButton() {
    // Create a new button element
    const button = document.createElement('button')
  
    // Set the button's text
    button.innerText = 'Click Me'
  
    // Set the button's CSS styles
    button.style.backgroundColor = 'green'
    button.style.color = 'white'
    button.style.fontSize = '16px'
    button.style.width = '100px'
    button.style.height = '40px'
  
    // Add a click event listener
    button.addEventListener('click', function () {
      alert('Button Clicked!')
    })
  
    // Return the button element
    return button
  }
  
  // Get a reference to the HTML element where you want to append the button
  const container = document.getElementById('container') // Replace 'container' with the actual ID of your container element.
  
  // Create the button element
  const myButton = createButton()
  
  // Append the button to the container
  container.appendChild(myButton)
  