const posts = [
  {
    title: 'Post one',
    description: 'Hello, from post one',
  },
  {
    title: 'Post two',
    description: 'Hello, from post two',
  },
];

function getPosts() {
  setTimeout(() => {
    let output = '';
    posts.forEach(post => {
      output += `
        <li>${post.title}</li>
      `;
    });
    document.body.innerHTML = output;
  }, 1000);
}

function addPost({ title, description }, callback) {
  setTimeout(() => {
    posts.push({
      title,
      description,
    });
    callback();
  }, 1000);
}

const newPost = {
  title: 'test title',
  description: 'test description',
};
addPost(newPost, getPosts);
