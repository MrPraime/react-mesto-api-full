export class Api {
  constructor({ url }) {
    this._url = url;
  }

  _checkResponse(res) {
    if (res.ok) {
      return res.json();
    }
    return Promise.reject(`Ошибка ${res.status}`);
  }

  getUserInfo(jwt) {
    return fetch(`${this._url}/users/me`, {
      method: "GET",
      headers: {
        Authorization: `Bearer ${jwt}`,
        "Content-Type": "application/json",
      },
    }).then(this._checkResponse);
  }

  patchUserInfo(name, about, jwt) {
    return fetch(`${this._url}/users/me`, {
      method: "PATCH",
      headers: {
        Authorization: `Bearer ${jwt}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        name: name,
        about: about,
      }),
    }).then(this._checkResponse);
  }

  getInitialCards(jwt) {
    return fetch(`${this._url}/cards `, {
      method: "GET",
      headers: {
        Authorization: `Bearer ${jwt}`,
        "Content-Type": "application/json",
      },
    }).then(this._checkResponse);
  }

  postNewCard(name, link, jwt) {
    return fetch(`${this._url}/cards`, {
      method: "POST",
      headers: {
        Authorization: `Bearer ${jwt}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        name: name,
        link: link,
      }),
    }).then(this._checkResponse);
  }

  deleteCard(id, jwt) {
    return fetch(`${this._url}/cards/${id}`, {
      method: "DELETE",
      headers: {
        Authorization: `Bearer ${jwt}`,
      },
    }).then(this._checkResponse);
  }

  patchNewAvatar(avatarUrl, jwt) {
    return fetch(`${this._url}/users/me/avatar`, {
      method: "PATCH",
      headers: {
        Authorization: `Bearer ${jwt}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        avatar: avatarUrl,
      }),
    }).then(this._checkResponse);
  }

  changeLikeCardStatus(id, status, jwt) {
    return status ? this._setLike(id, jwt) : this._removeLike(id, jwt);
  }

  _setLike(id, jwt) {
    return fetch(`${this._url}/cards//${id}/likes`, {
      method: "PUT",
      headers: {
        Authorization: `Bearer ${jwt}`,
      },
    }).then(this._checkResponse);
  }

  _removeLike(id, jwt) {
    return fetch(`${this._url}/cards/${id}/likes`, {
      method: "DELETE",
      headers: {
        Authorization: `Bearer ${jwt}`,
      },
    }).then(this._checkResponse);
  }
}

export const api = new Api({
  url: "https://api.praime.nomoredomains.work",
});
