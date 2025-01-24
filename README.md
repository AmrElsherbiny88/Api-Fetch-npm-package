# fetchingsmarter

`fetchingsmarter` is a lightweight JavaScript package that simplifies making HTTP requests and handling responses, including errors. It works with React, Svelte, and pure JavaScript, and provides an easy-to-use API to interact with remote servers and handle both successful and error responses in a structured way.

---

## Installation

You can install the `fetchingsmarter` package via npm or yarn:

### With npm:

```bash
npm install fetchingsmarter
```

## Usage in React

```javascript
import React, { useEffect, useState } from 'react';
import Fetcher from 'fetchingsmarter';

const Dataa = () => {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');

  useEffect(() => {
    const fetchData = async () => {
      const data = await Fetcher({
        method: 'GET',
        url: 'https://jsonplaceholder.typicode.com/posts',
      });

      setPosts(data.data); 
      setError(data.error);
      setLoading(false);
    };

    fetchData();
  }, []);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error}</div>;
  }

  return (
    <div>
      <h1>Posts</h1>
      <ul>
        {posts?.map((post) => (
          <li key={post.id}>
            <h3>{post.title || post.error}</h3>
            <p>{post.body || ""}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Dataa;
```





## Usage in Pure JavaScript

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>fetchingsmarter Example</title>
</head>
<body>
    <div id="loading">Loading...</div>
    <div id="error"></div>
    <ul id="posts"></ul>

    <script src="path/to/fetchingsmarter.js"></script>
    <script>
        const postsContainer = document.getElementById('posts');
        const loadingMessage = document.getElementById('loading');
        const errorMessage = document.getElementById('error');

        async function fetchData() {
            const data = await Fetcher({
                method: 'GET',
                url: 'https://jsonplaceholder.typicode.com/posts',
            });

            if (data.error) {
                errorMessage.innerHTML = `Error: ${data.error}`;
            } else {
                const posts = data.data;
                postsContainer.innerHTML = posts
                    .map((post) => `<li><h3>${post.title}</h3><p>${post.body}</p></li>`)
                    .join('');
            }

            loadingMessage.style.display = 'none';
        }

        fetchData();
    </script>
</body>
</html>
```


## Advanced Options

You can pass additional options to `fetchingsmarter`:

- **headers** (Object): Custom headers for the request.
- **params** (Object): Query parameters for the URL.

### Example with additional options:

```javascript
const data = await Fetcher({
    method: 'GET',
    url: 'https://jsonplaceholder.typicode.com/posts',
    headers: { 'Authorization': 'Bearer your_token' },
    params: { userId: 1 }
});
```

---



