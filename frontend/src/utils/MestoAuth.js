
 class Auth {
    constructor( {baseUrl} ) {
      this._url = baseUrl;
    }

    _checkResponse(res) {
        if (res.ok) {
          return res.json();
      }
      return Promise.reject(`Ошибка ${res.status}`);
    } 

        register(password, email) {
        return fetch(`${this._url}/signup`, {
            method: 'POST',
            headers: {
              'Accept': 'application/json',
              'Content-Type': 'application/json'
            },
            body: JSON.stringify({
            password: password,
            email: email
            })
        })
      .then(this._checkResponse)
    };


    authorization(password, email) {
        return fetch(`${this._url}/signin`, {
          method: 'POST',
          headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
          },
          body: JSON.stringify({
            password: password,
            email: email
          })
        })
        .then(this._checkResponse)
      };


      
      checkToken(jwt) {
        return fetch(`${this._url}/users/me`, {
          method: 'GET',
          headers: {
             'Accept': 'application/json',
            "Content-Type": "application/json",
            "Authorization" : `Bearer ${jwt}`
          }
        })
        .then(this._checkResponse)
      };



}


const authConfigg = {
  baseUrl: 'https://api.praime.nomoredomains.work',
}

const auth = new Auth(authConfigg);

export default auth;
