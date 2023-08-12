import axios from "axios";
import { getRequestData } from "./utils";
import store from "../store";

const instance = axios.create({});
instance.defaults.withCredentials = false;
export default function backendApi(api, data, headers = {}, method = "post") {
  const request = getRequestData(api, data);
  //instance.defaults.timeout =10000;
  const body = request.body;
  let url = request.url;
  const baseURL = request.baseURL;
  instance.defaults.baseURL = baseURL;
  //console.log('method: ', method)

  // if (method == "get") {
  //console.log('get condition')
  let i = 1;
  for (const key in data) {
    url = url.replace("param" + i, data[key]);
    i++;
  }
  let header = headers
  if (api != "generateToken" && api != "refreshToken") {
    let token = store.state.token;
    //if (token && checkTokenValidity(token)) {
      header['Authorization'] = `Bearer ${store.state.token}`;
    // } else {
    //     sessionStorage.removeItem('vuex')
    //     window.location.href = `${window.location.origin}/#/networkalert?msg=Your session time is expired , kindly login again`
    // }
  }
  return wrap(method, { url, body, header })
    .then(response => {
      return response;
    })
    .catch(error => {
      console.log(api, "ERROR ee", error.response);
      console.log(error.response);

      let data;
      if (error.response) {
        data = {
          "status": 'error',
          "data": error.response.data
        }
      } else {
        data = {
          "status": 'error'
        }
      }
      return data;
    });
}

const wrap = (method, { url, body, header }) => {
  if (method === "get") {
    console.log(method)
    return instance.get(url, { headers: header })
  } else if (method === "post") {
    return instance.post(url, body, { headers: header })
  }
}
const checkTokenValidity = (token) => {
  let decodedToken = parseJwt(token)
  if (decodedToken && decodedToken['expires'] < Date.now() / 1000) {
    // token expired (session)
    console.log("expired");
    return false;
  } else {
    if (((decodedToken['expires'] - Date.now() / 1000) / 60) < 29) {
      // token getting expired (have to refresh)
      console.log("refresh token");
      let data = {
        currentToken: token
      }
      backendApi("refreshToken", data)
        .then((resp) => {
          let accessToken = resp.data.data.newToken.access_token;
          store.commit('setToken', accessToken)
          return true;
        })
        .catch((error) => {
          console.log("refresh token failed")
          console.log(JSON.stringify(error));
        })
    }
    return true;
  }
}

function parseJwt(token) {
  return JSON.parse(Buffer.from(token.split('.')[1], 'base64').toString());
}
