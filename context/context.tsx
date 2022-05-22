import { createContext } from 'react'

type contextType = {
  getTopTenCoins: () => any
}

const contextDefaultValues: contextType = {
  getTopTenCoins: () => {},
}

export const CoinMarketContext =
  createContext<contextType>(contextDefaultValues)

const CoinMarketProvider = ({ children }) => {
  const getTopTenCoins = async () => {
    try {
      const res = await fetch('/api/getTopTen')
      console.log(res)
      const data = await res.json()
      return data.data.data
    } catch (e) {
      console.log(e.message)
    }
  }

  const value = {
    getTopTenCoins,
  }

  return (
    <CoinMarketContext.Provider value={value}>
      {children}
    </CoinMarketContext.Provider>
  )
}

export default CoinMarketProvider
