/**
 *
 *
 * @param {Object} options 
 * @param {string} options.method 
 * @param {string} options.url 
 * @param {Object} [options.headers]
 * @param {Object} [options.body] 
 * @param {Object} [options.params] 
 * @returns {Promise} 
 */
async function Fetcher(options) {
    const { method, url, headers = {}, body, params } = options;
  
   
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

        return { data: null, error: data.message || 'Unknown error' };
      }
  
      return { data, error: null };
    } catch (error) {
      console.error('Fetch error:', error);
      return { data: null, error: error.message || 'An error occurred while fetching data' };
    }
  }
  
  
  export default Fetcher;
  