export const isAuthenticated = () => {
  let getToken = window.localStorage.getItem("@KenzieHUB:Token");
  let getUser = window.localStorage.getItem("@KenzieHUB:User");

  if (getToken && getUser) {
    return true;
  } else {
    return false;
  }
};
