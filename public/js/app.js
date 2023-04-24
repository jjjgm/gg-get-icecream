// Make an API call to get data
fetch('/api/data')
  .then(response => response.json())
  .then(data => {
    // Manipulate the DOM with the received data
    const container = document.getElementById('data-container');
    container.innerHTML = data;
  })
  .catch(error => console.error(error));

// Add an event listener to a button
const button = document.getElementById('my-button');
button.addEventListener('click', event => {
  event.preventDefault();
  console.log('Button clicked!');
});
