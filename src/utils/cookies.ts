import Cookies from "js-cookie";

const TOKEN_KEY = "access_token";

export const cookie = {
  setToken(token: string) {
    Cookies.set(TOKEN_KEY, token, {
      expires: 37,
      secure: true,
      sameSite: "strict",
      path: "/",
    });
  },

  getToken() {
    return Cookies.get(TOKEN_KEY);
  },

  removeToken() {
    Cookies.remove(TOKEN_KEY, { path: "/" });
  },
};
