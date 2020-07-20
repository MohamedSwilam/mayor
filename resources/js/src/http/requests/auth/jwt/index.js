import axios from "../../../axios"
import store from "../../../../store/store.js"

// Token Refresh
let isAlreadyFetchingAccessToken = false;
let subscribers = [];

function onAccessTokenFetched(access_token) {
  subscribers = subscribers.filter(callback => callback(access_token))
}

function addSubscriber(callback) {
  subscribers.push(callback)
}

export default {
  init() {
    axios.interceptors.response.use(function (response) {
      return response
    }, function (error) {
      // const { config, response: { status } } = error
      const { config, response } = error;
      const originalRequest = config;

      // if (status === 401) {
      if (response && response.status === 401) {
        if (!isAlreadyFetchingAccessToken) {
          isAlreadyFetchingAccessToken = true;
          store.dispatch("auth/fetchAccessToken")
            .then((access_token) => {
              isAlreadyFetchingAccessToken = false;
              onAccessTokenFetched(access_token)
            })
        }

        const retryOriginalRequest = new Promise((resolve) => {
          addSubscriber(access_token => {
            originalRequest.headers.Authorization = 'Bearer ' + access_token;
            resolve(axios(originalRequest))
          })
        });
        return retryOriginalRequest
      }
      return Promise.reject(error)
    })
  },
  login(email, pwd) {
    return axios.post("login", {email: email, password: pwd})
  },
  // displayName: this.displayName,
  // email: this.email,
  // password: this.password,
  // first_name:this.first_name,
  // last_name:this.last_name,
  // is_male:this.is_male,
  // ssn:this.ssn,
  // image:this.image,
  // phone:this.phone,
  // address:this.address,
  registerUser(first_name, last_name, pwd,email, is_male, ssn , image , mobile , address ,nationality) {

    return axios.post("register", {first_name: first_name,last_name :last_name, email: email, password: pwd, is_male: is_male ,
                                    ssn : ssn , image : image , mobile : mobile , address : address ,nationality: nationality})
  },
  refreshToken() {
    return axios.post("/api/auth/refresh-token", {accessToken: localStorage.getItem("accessToKen")})
  }
}
