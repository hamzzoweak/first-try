//USING ASYNC AWAITS feat ES7
class EasyHttp {
  // MAKE AN HTTP GET REQUEST
  async get(url) {
    const response = await fetch(url);
    const resData = await response.json();
    return resData;
  }

  //MAKE AN HTTP POST REQUEST
  async post(url, data) {
    const response = await fetch(url, {
      method: "POST",
      headers: {
        "Content-type": "application/json"
      },
      body: JSON.stringify(data)
    });
    const resData = await response.json();
    return resData;
  }

  //MAKE AN HTTP PUT REQUEST
  async put(url, data) {
    const response = await fetch(url, {
      method: "PUT",
      headers: {
        "Content-type": "application/json"
      },
      body: JSON.stringify(data)
    });
    const resData = await response.json();
    return resData;
  }

  //MAKE AN HTTP DELETE REQUEST
  async delete(url) {
    const response = await fetch(url);
    const resData = await response.json();
    return resData;
  }
}
