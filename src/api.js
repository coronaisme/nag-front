// // const API = `http://localhost:3000/${/* our api here */}`

// const token = localStorage.getItem('token')

// const headers = {
//   'Content-Type': 'application/json',
//   Accept: 'application/json',
//   Authorization: token
// };

// // const getRestaurants = () => {
// //   return fetch(`${API}/restaurants`, { headers: headers }).then(res => res.json());
// // }

// const login = (username, password) => {
//   return fetch(`${API}/auth/`, {
//     method: 'POST',
//     headers: headers,
//     body: JSON.stringify({
//       username, password
//     })
//   }).then(res => res.json());
// };

// const getCurrentUser = () => {
//   return fetch(`${API}/user`, {
//     headers: headers
//   }).then(res => res.json());
// };

// export default {
//   auth: {
//     login: login, 
//     getCurrentUser: getCurrentUser
//   },
//   restaurants: {
//     getRestaurants
//   }
// }