// main search form
const searchForm = document.getElementById('search-form');

// search form input
const searchInput = document.getElementById('search-input');

// form event listener
searchForm.addEventListener('submit', e => {
  // get search query
  const searchTerm = searchInput.value;
  console.log(searchTerm);

  // get sort order
  const sortBy = document.querySelector('input[name="sortby"]:checked').value;
  console.log(sortBy);

  // results limit
  const searchLimit = document.getElementById('limit').value;
  console.log(searchLimit);

  // check if no input
  if(searchTerm === ''){
    // display alert
    showMessage('Please add a search query', 'alert-danger');
  }

  // clear input
  searchInput.value = '';

  // search reddit api
  

  e.preventDefault();
});

// show message function
function showMessage(message, className) {
  // create alert div
  const div = document.createElement('div');
  div.className = `alert ${className}`;

  // add text
  div.appendChild(document.createTextNode(message));

  // get parent container
  const searchContainer = document.getElementById('search-container');

  // get search
  const search = document.getElementById('search');

  // insert message
  searchContainer.insertBefore(div, search);

  // timeout alert
  setTimeout(() => document.querySelector('.alert').remove(), 3000);
}