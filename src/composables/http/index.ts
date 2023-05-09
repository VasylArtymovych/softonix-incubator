import axios from 'axios'

const instance = axios.create({
  baseURL: import.meta.env.VITE_API_URL,
  headers: {
    apikey: import.meta.env.VITE_API_KEY
  }
})

instance.interceptors.request.use(
  async config => {
    const { refreshToken, tokenExpiresInTime, setTokens, logout } = useAuthStore()

    // check and refresh token 10 min before expire time
    if (Date.now() >= Number(tokenExpiresInTime) - 10 * 60 * 1000 && refreshToken) {
      try {
        const res = await authService.refreshToken(refreshToken)

        setTokens(res.access_token, res.refresh_token, res.expires_in)

        config.headers = {
          ...config.headers,
          authorization: `Bearer ${res.access_token}`
        }

        return config
      } catch (error) {
        logout()
      }
    }

    const { accessToken } = useAuthStore()
    if (accessToken) {
      config.headers = {
        ...config.headers,
        authorization: `Bearer ${accessToken}`
      }
    }
    return config
  }
)

instance.interceptors.response.use(
  res => res.data,

  async error => {
    const { refreshToken, setTokens, logout } = useAuthStore()
    // if (error.response.status === 401 && error.response.data.message === 'JWT expired' && refreshToken) {
    //   try {
    //     const res = await authService.refreshToken(refreshToken)

    //     setTokens(res.access_token, res.refresh_token)

    //     error.config.headers = {
    //       ...error.config.headers,
    //       authorization: `Bearer ${res.access_token}`
    //     }

    //     return instance(error.config)
    //   } catch (error) {
    //     logout()
    //   }
    // }

    if (error.response.status === 401) {
      return logout()
    }

    return Promise.reject(error)
  }
)

export const useHttp = instance
