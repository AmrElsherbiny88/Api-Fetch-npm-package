/**
 * Fetch utility that can be used in React, Svelte, or pure JavaScript.
 *
 * @param {Object} options - The fetch configuration.
 * @param {string} options.method - The HTTP method (GET, POST, PUT, DELETE, PATCH).
 * @param {string} options.url - The API endpoint URL.
 * @param {Object} [options.headers] - Optional headers for the request.
 * @param {Object} [options.body] - Optional body for POST/PUT/PATCH methods.
 * @param {Object} [options.params] - Optional query parameters.
 * @returns {Promise} Resolves with the response data or rejects with an error message.
 */
async function Fetcher(options) {
    const { method, url, headers = {}, body, params } = options;
  
    // Add query parameters to URL if available
    let finalUrl = url;
    if (params) {
      const query = new URLSearchParams(params).toString();
      finalUrl = `${url}?${query}`;
    }
  
    const fetchOptions = {
      method,
      headers: {
        'Content-Type': 'application/json',
        ...headers,
      },
      body: body ? JSON.stringify(body) : undefined,
    };
  
    try {
      const response = await fetch(finalUrl, fetchOptions);
      const data = await response.json();
  
      if (!response.ok) {
        throw new Error(data.message || 'Something went wrong');
      }
  
      return data;
    } catch (error) {
      console.error('Fetch error:', error);
      throw new Error(error.message || 'An error occurred while fetching data');
    }
  }
  
  // Export the function to be used by other modules
  export default Fetcher;
  