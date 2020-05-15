// TODO: Use 'fetch' to grab POSTS from this RESTful endpoint: https://jsonplaceholder.typicode.com/posts
fetch('https://jsonplaceholder.typicode.com/posts').then(results => results.json()).then(posts => {
  document.querySelector('#root').innerHTML = post.map(({ title, body }) => `<h2>${title}</h2> <p>&{body}</p>`).join(' ')
})
