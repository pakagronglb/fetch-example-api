const fetchBtn = document.getElementById('fetchBtn');
const postList = document.getElementById('postList');
const loadingSpinner = document.getElementById('loadingSpinner');
const prevPageBtn = document.getElementById('prevPage');
const nextPageBtn = document.getElementById('nextPage');
const currentPageLabel = document.getElementById('currentPage');

let currentPage = 1;
const postsPerPage = 5;

fetchBtn.addEventListener('click', fetchPosts);
prevPageBtn.addEventListener('click', () => changePage(-1));
nextPageBtn.addEventListener('click', () => changePage(1));

function toggleLoading(isLoading) {
  loadingSpinner.classList.toggle('hidden', !isLoading);
  fetchBtn.disabled = isLoading;
}

function changePage(direction) {
  currentPage += direction;
  fetchPosts();
}

function fetchPosts() {
  toggleLoading(true);
  postList.innerHTML = '';

  fetch(`https://jsonplaceholder.typicode.com/posts?_page=${currentPage}&_limit=${postsPerPage}`)
    .then(response => {
      if (!response.ok) throw new Error('Network response was not ok');
      return response.json();
    })
    .then(posts => {
      toggleLoading(false);
      displayPosts(posts);
      updatePagination();
    })
    .catch(error => {
      toggleLoading(false);
      postList.innerHTML = `<p>Failed to load posts. ${error.message}</p>`;
    });
}

function displayPosts(posts) {
  if (posts.length === 0) {
    postList.innerHTML = '<p>No posts available</p>';
    return;
  }

  posts.forEach(post => {
    const postDiv = document.createElement('div');
    postDiv.classList.add('post');
    postDiv.innerHTML = `
      <h2>${post.title}</h2>
      <p>${post.body}</p>
    `;
    postList.appendChild(postDiv);
  });
}

function updatePagination() {
  prevPageBtn.classList.toggle('hidden', currentPage === 1);
  currentPageLabel.textContent = `Page ${currentPage}`;
}
