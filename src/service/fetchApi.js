export const makeARequest = async (method, URL, body) => {
  let res;

  if(method === 'GET') {
    res = await fetch(URL);
  } else {
    res = await fetch(URL, {
      method,
      body: JSON.stringify(body),
      headers: { 'Content-Type': 'application/json' },
    });
    return res.json();
  }
};
