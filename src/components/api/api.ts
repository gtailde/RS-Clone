/* eslint-disable @typescript-eslint/no-explicit-any */
class Api {
  public async newUser(username: string, password: string, name?: string, email?: string) {
    const res = await fetch('https://rs-clone-server-production-8682.up.railway.app/basicRouts/registration', {
      method: 'POST',
      body: JSON.stringify({
        username: username,
        email: email ? email : '',
        name: name ? name : '',
        password: password,
      }),
      headers: {
        'Content-Type': 'application/json',
      },
    });
    return await res.json();
  }

  public async login(password: string, username?: string, name?: string, email?: string) {
    const res = await fetch('https://rs-clone-server-production-8682.up.railway.app/basicRouts/login', {
      method: 'POST',
      body: JSON.stringify({
        username: username ? username : email,
        email: email ? email : '',
        name: name ? name : '',
        password: password,
      }),
      headers: {
        'Content-Type': 'application/json',
      },
    });
    return await res.json();
  }

  public async checkAcces(token: string) {
    const res = await fetch('https://rs-clone-server-production-8682.up.railway.app/basicRouts/check', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${token}`,
      },
    });
    return await res.json();
  }

  public async getDataFromUser(id: string) {
    const res = await fetch('https://rs-clone-server-production-8682.up.railway.app/basicRouts/getUser', {
      method: 'POST',
      body: JSON.stringify({
        _id: id,
      }),
      headers: {
        'Content-Type': 'application/json',
      },
    });
    return await res.json();
  }

  public async updateUser(id: string, password?: string, username?: string, name?: string, email?: string) {
    const res = await fetch('https://rs-clone-server-production-8682.up.railway.app/basicRouts/update', {
      method: 'POST',
      body: JSON.stringify({
        _id: id,
        username: username ? username : '',
        email: email === '' || email !== undefined ? email : undefined,
        name: name ? name : '',
        password: password ? password : '',
      }),
      headers: {
        'Content-Type': 'application/json',
      },
    });
    return await res.json();
  }

  public async deleteUser(id: string) {
    const res = await fetch('https://rs-clone-server-production-8682.up.railway.app/basicRouts/deleteUser', {
      method: 'POST',
      body: JSON.stringify({
        _id: id,
      }),
      headers: {
        'Content-Type': 'application/json',
      },
    });
    return await res.json();
  }

  public async uploadIMG(img: HTMLInputElement) {
    let imageData;
    if (img.files) {
      imageData = img.files[0];
    }
    const formData: any = new FormData();
    formData.append('file', imageData);
    try {
      const response = await fetch('https://rs-clone-server-production-8682.up.railway.app/upload', {
        method: 'POST',
        body: formData,
      });
      const result = await response.json();
      return result;
    } catch (error) {
      console.error(error);
    }
  }

  async deleteIMG(id: string, link: string) {
    const res = await fetch('https://rs-clone-server-production-8682.up.railway.app/basicRouts/deleteIMG', {
      method: 'POST',
      body: JSON.stringify({
        _id: id,
        link: link,
      }),
      headers: {
        'Content-Type': 'application/json',
      },
    });
    return await res.json();
  }

  async addIMG(id: string, type: string, link: string) {
    const res = await fetch('https://rs-clone-server-production-8682.up.railway.app/basicRouts/addIMG', {
      method: 'POST',
      body: JSON.stringify({
        _id: id,
        type: type,
        link: link,
      }),
      headers: {
        'Content-Type': 'application/json',
      },
    });
    return await res.json();
  }
}

const getApi = new Api();
export { getApi };
