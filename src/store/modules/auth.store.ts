import { routeNames, router } from '@/router'

export const useAuthStore = defineStore('authStore', () => {
  const accessToken = ref(localStorage.getItem('si-token'))
  const refreshToken = ref(localStorage.getItem('rfsh-token'))
  const tokenExpiresInTime = ref(localStorage.getItem('si-expiresInTime'))

  function setTokens (token: string, rfshToken: string, expiresIn: number) {
    accessToken.value = token
    localStorage.setItem('si-token', token)

    refreshToken.value = rfshToken
    localStorage.setItem('si-rfshToken', rfshToken)

    tokenExpiresInTime.value = String(Date.now() + expiresIn * 1000)
    localStorage.setItem('si-expiresInTime', tokenExpiresInTime.value)
  }

  function login (payload: ILoginRequest) {
    return authService.login(payload)
      .then((res) => {
        setTokens(res.access_token, res.refresh_token, res.expires_in)
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
    tokenExpiresInTime,
    setTokens,
    login,
    logout
  }
})
