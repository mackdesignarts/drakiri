export const getUserCount = (count) => {
    return fetch({
      method: 'GET',
      //url: `${API}/sign-up`,
      headers: {
        'Content-Type': 'application/json',
      },
      count: JSON.stringify(count),
    })
  }