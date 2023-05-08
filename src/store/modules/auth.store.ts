import { routeNames, router } from '@/router'

export const useAuthStore = defineStore('authStore', () => {
  const accessToken = ref(localStorage.getItem('si-token'))
  const refreshToken = ref(localStorage.getItem('rfsh-token'))

  function setTokens (token: string, rfshToken: string) {
    accessToken.value = token
    localStorage.setItem('si-token', token)

    refreshToken.value = rfshToken
    localStorage.setItem('rfsh-token', rfshToken)
  }

  function login (payload: ILoginRequest) {
    return authService.login(payload)
      .then((res) => {
        setTokens(res.access_token, res.refresh_token)
      })
  }

  function logout () {
    localStorage.removeItem('si-token')
    localStorage.removeItem('rfsh-token')
    window.location.href = router.resolve(routeNames.login).href
  }

  return {
    accessToken,
    refreshToken,
    setTokens,
    login,
    logout
  }
})
