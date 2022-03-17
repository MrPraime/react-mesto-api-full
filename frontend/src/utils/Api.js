export class Api {
  constructor({ url, headers }) {
    this._url = url;
    this._headers = headers;
  }

  _checkResponse(res) {
    if (res.ok) {
      return res.json();
  }
  return Promise.reject(`Ошибка ${res.status}`);
} 

  getUserInfo() {
    return fetch(`${this._url}/users/me`, {
      headers: this._headers,
    })
    .then(this._checkResponse)
     
  }

  patchUserInfo(name, about) {
    // loading(true); 
    return fetch(`${this._url}/users/me`, {
      method: "PATCH",
      headers: this._headers,
      "Content-Type": "application/json",

      body: JSON.stringify({
        name: name,
        about: about,
      }),
    })
    .then(this._checkResponse)  
  }

  

  getInitialCards() {
    return fetch(`${this._url}/cards `, {
      headers: this._headers,
    })
    .then(this._checkResponse)

  }

  postNewCard(name, link) {
    return fetch(`${this._url}/cards `, {
      method: "POST",
      headers: this._headers,

      body: JSON.stringify({
        name: name,
        link: link,
      }),
    })
    .then(this._checkResponse)

  }

  deleteCard(id) {
    return fetch(`${this._url}/cards/${id}`, {
      method: "DELETE",
      headers: this._headers,
    })
    .then(this._checkResponse)
     
  }

  patchNewAvatar(avatarUrl) {
    return fetch(`${this._url}/users/me/avatar`, {
      method: "PATCH",
      headers: this._headers,

      body: JSON.stringify({
        avatar: avatarUrl,
      }),
    })
    .then(this._checkResponse)     
  }


  changeLikeCardStatus(cardId, status) {
    return status ? this._setLike(cardId) : this._removeLike(cardId);
}

_setLike(id) {
  return fetch(`${this._url}/cards/likes/${id}`, {
      method: "PUT",
      headers: this._headers})
  .then(this._checkResponse);
}

_removeLike(id) {
  return fetch(`${this._url}/cards/likes/${id}`, {
      method: "DELETE",
      headers: this._headers,
  })
  .then(this._checkResponse);
}


}

export  const api = new Api({
  url: "api.praime.nomoredomains.work",
});

// export default api;