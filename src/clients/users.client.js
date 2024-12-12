export default class UsersClient {
  static Endpoint = 'https://api.github.com/users';

  static async getUserList({ offset = 0, size = 30 } = {}) {
    const url = new URL(UsersClient.Endpoint);
    url.searchParams.append('since', offset);
    url.searchParams.append('per_page', size);

    const response = await fetch(url);

    if (!response.ok) {
      throw new Error(`Error al obtener usuarios: ${response.statusText}`);
    }

    return response.json();
  }
}
