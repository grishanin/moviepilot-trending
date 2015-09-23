export function getTrending(count) {
  const query = count ? `?per_page=${count}` : ``;

  return fetch(`http://api.moviepilot.com/v4/trending${query}`).then(response =>
    response.json()
  );
}
