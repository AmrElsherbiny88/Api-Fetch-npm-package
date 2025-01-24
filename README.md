# fetchingsmart

`fetchingsmart` is a lightweight JavaScript package that simplifies making HTTP requests and handling responses, including errors. It works with React, Svelte, and pure JavaScript, and provides an easy-to-use API to interact with remote servers and handle both successful and error responses in a structured way.

---

## Installation

You can install the `fetchingsmart` package via npm or yarn:

### With npm:

```bash
npm install fetchingsmart
```

## Usage in React

```javascript
import React, { useEffect, useState } from 'react';
import Fetcher from 'fetchingsmart';

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
    <title>Fetchingsmart Example</title>
</head>
<body>
    <div id="loading">Loading...</div>
    <div id="error"></div>
    <ul id="posts"></ul>

    <script src="path/to/fetchingsmart.js"></script>
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

You can pass additional options to `fetchingsmart`:

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

### How to Include This Documentation

1. **Create a `README.md` file**: In the root directory of your project, create a file named `README.md`.
2. **Paste the content**: Copy and paste the above content into the `README.md` file.
3. **Push it to your repository**: If you're using a Git repository, don't forget to commit and push the `README.md` file along with the rest of your project files.

This will provide easy-to-follow documentation for anyone using your package.


