export function getTrending(perPage) {
  const query = perPage ? `?per_page=${perPage}` : ``;

  return fetch(`http://api.moviepilot.com/v4/trending${query}`).then(response =>
    response.json()
  );
}
