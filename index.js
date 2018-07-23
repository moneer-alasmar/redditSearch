// main search form
const searchForm = document.getElementById('search-form');

// search form input
const searchInput = document.getElementById('search-input');

searchForm.addEventListener('submit', e => {
  // get search query
  const searchTerm = searchInput.value;

  // get sort order
  const sortBy = document.querySelector('input[name="sortby"]:checked').value;
  console.log(sortBy);

  // results limit
  const searchLimit = document.getElementById('limit').value;
  console.log(searchLimit);

  console.log(searchTerm);
  e.preventDefault();
});