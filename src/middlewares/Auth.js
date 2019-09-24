export function requireAuth(to, from, next) {
  if (!localStorage.getItem("access_token")) {
    return next({ path: "/login" });
  }

  return next();
}

export function isGuest(to, from, next) {
  if (localStorage.getItem("access_token")) {
    return next({ path: "/" });
  }

  return next();
}
