// importing reddit js
import reddit from './redditapi';

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
  reddit.search(searchTerm, searchLimit, sortBy).then(results => {
    let output = '<div class="card-columns">';

    // loop through posts
    results.forEach(post => {
      // check for image
      const image = post.preview ? post.preview.images[0].source.url : 'https://i.imgur.com/9z9ZpLg.jpg'

      output += `
      <div class="card">
      <img class="card-img-top" src="${image}" alt="Card image cap">
      <div class="card-body">
        <h5 class="card-title">${post.title}</h5>
        <p class="card-text">${truncateText(post.selftext, 100)}</p>
        <a href="${post.url}" target="_blank" class="btn btn-primary">Read More</a>
        <hr>
        <span class="badge badge-secondary">r/${post.subreddit}/</span>
        <span class="badge badge-dark">Score: ${post.score}</span>
      </div>
    </div>
      `
    })
    output += '</div>';
    document.getElementById('results').innerHTML = output;
  });

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

// truncate text
function truncateText(text, limit) {
  const shortened = text.indexOf(' ', limit);
  if(shortened == -1) return text;
  return text.substring(0, shortened);
};