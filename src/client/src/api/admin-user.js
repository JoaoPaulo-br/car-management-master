import axios from 'axios'
const baseUrl = process.env.VUE_APP_BASE_API

const currentUserInfo = JSON.parse(localStorage.getItem('currentUserInfo'))
const token = currentUserInfo['x-auth-token']

const headers = {
  'Content-Type': 'application/json',
  'x-auth-token': token
}

export function getAdminUserList(cb) {
  axios.get(`${baseUrl}/userList/get-admin-users`, {
    headers
  }).then(response => cb(null, response))
    .catch(error => cb(error, null))
}
