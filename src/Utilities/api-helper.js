export const fetchApi = async (url) => {
  const initialFetch = await fetch(url)
  const response = await initialFetch.json();
  return response;
}