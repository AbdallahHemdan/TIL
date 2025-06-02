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

function addPost({ title, description }) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      posts.push({
        title,
        description,
      });

      let isSuccess = true;
      if (isSuccess) {
        resolve();
      } else {
        reject('Error, Something went wrong while getting your posts');
      }
    }, 1000);
  });
}

const newPost = {
  title: 'test title',
  description: 'test description',
};

// ! Async / Await
// async function init() {
//   await addPost(newPost);
//   getPosts();
// }
// init();

// ! Async / Await with fetch
async function fetchData() {
  const ret = await fetch('https://jsonplaceholder.typicode.com/posts');
  const data = await ret.json();
  console.log(data);
}
fetchData();

// addPost(newPost)
//   .then(getPosts)
//   .catch(err => {
//     console.log(err);
//   });

// ! Promise.all
// const promise_1 = Promise.resolve('Hello, World');
// const promise_2 = 10;
// const promise_3 = new Promise((resolve, reject) => setTimeout(resolve, 2000, 'Goodbye'));
// const promise_4 = fetch('https://jsonplaceholder.typicode.com/posts')
//   .then(result => result.json())
//   .catch(err => {
//     console.log(err);
//   });

// Promise.all([promise_1, promise_2, promise_3, promise_4])
//   .then(result => {
//     console.log(result);
//   })
//   .catch(err => {
//     console.log(err);
//   });
