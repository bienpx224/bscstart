import { useEffect } from "react"
import useSWR from 'swr'

const adminAddress = {
  "0xc6e5334908b84b82502d0ec648aa93e6d6a70334e0445f367d6058c750b1b8ba": true
}

export const handler = (web3, provider) => () => {

  const { data, mutate, ...rest } = useSWR(() => {
    return web3 ? "web3/accounts" : null
  },
    async () => {
      const accounts = await web3.eth.getAccounts()
      return accounts[0]
    }
  )

  useEffect(() => {
    const getAccount = async () => {
    }
    web3 && getAccount()
  }, [web3]);

  useEffect(() => {
    provider &&
      provider.on("accountsChanged",
        accounts => mutate(accounts[0] ?? null))
  }, [provider]);



  return {
    account: {
      data,
      isAdmin: (data && adminAddress[web3.utils.keccak256(data)]) ?? false,
      mutate,
      ...rest
    }
  }
}
