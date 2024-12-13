export default class UsersClient {
  static BaseUrl = `${process.env.DOMAIN_URL}/api`;

  static async getUserList({ offset = 0, size = 30 } = {}) {
    const url = `${UsersClient.BaseUrl}/users?since=${offset}&per_page=${size}`;

    const response = await fetch(url);

    if (!response.ok) {
      throw new Error(
        `Something went wrong fetching user list: ${response.statusText}`,
      );
    }

    return response.json();
  }

  static async searchUsers({ query, page = 1, size = 30 } = {}) {
    const url = `${UsersClient.BaseUrl}/search/users?q=${query}&page=${page}&per_page=${size}`;

    const response = await fetch(url);

    if (!response.ok) {
      throw new Error(
        `Something went wrong searching users by name: ${response.statusText}`,
      );
    }

    const body = await response.json();

    const { items } = body;

    return items;
  }
}
