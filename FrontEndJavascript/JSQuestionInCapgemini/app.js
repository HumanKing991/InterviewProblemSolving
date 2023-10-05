document.addEventListener("DOMContentLoaded", function () {
    const decrementButton = document.getElementById("decrement");
    const incrementButton = document.getElementById("increment");
    const countElement = document.getElementById("count");
  
    let count = 0;
  
    // Initial display
    countElement.textContent = count;
  
    // Event listener for decrement button
    decrementButton.addEventListener("click", function () {
      count--;
      updateCount();
    });
  
    // Event listener for increment button
    incrementButton.addEventListener("click", function () {
      count++;
      updateCount();
    });
  
    // Function to update the displayed count
    function updateCount() {
      countElement.textContent = count;
    }
  });
  