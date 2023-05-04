import { routeNames, router } from '@/router'

export const useAuthStore = defineStore('authStore', () => {
  const accessToken = ref(localStorage.getItem('si-token'))
  const refreshToken = ref('')

  function setToken (token: string, refreshTok: string) {
    accessToken.value = token
    localStorage.setItem('si-token', token)
    refreshToken.value = refreshTok
  }

  function login (payload: ILoginRequest) {
    return authService.login(payload)
      .then((res) => {
        console.log(res)
        setToken(res.access_token, res.refresh_token)
      })
  }

  function logout () {
    localStorage.removeItem('si-token')
    window.location.href = router.resolve(routeNames.login).href
  }

  return {
    accessToken,
    login,
    logout
  }
})
