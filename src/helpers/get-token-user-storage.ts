export const getTokenUserStorage = () => {
  const userStorage = localStorage.getItem('user-storage')
  if (userStorage) {
    const { state } = JSON.parse(userStorage)
    const token = state.accessToken
    if (token) {
      return token
    }
  }
}
