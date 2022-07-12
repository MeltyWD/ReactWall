class NewsApi {
  constructor(option) {
    this._baseUrl = option.baseUrl;
    this._key = option.key;
    this._country = option.country;
  }

  _apiResultReturn(res) {
    if (res.ok) {
      return res.json();
    }
    return res.json().then((err) => {
      throw err;
    });
  }

  _fetch(params) {
    return fetch(`${this._baseUrl}?${params}`, {
      headers: {
        Authorization: "78b34cc3faef4cf8b4eb03c30ffefbc5",
      },
    }).then((res) => this._apiResultReturn(res));
  }

  getTechNews() {
    return this._fetch(
      `country=${this._country}&category=technology&apiKey=${this._key}`
    );
  }
}

const newsApi = new NewsApi({
  baseUrl: "https://newsapi.org/v2/top-headlines",
  key: "78b34cc3faef4cf8b4eb03c30ffefbc5",
  country: "jp",
});
export default newsApi;
