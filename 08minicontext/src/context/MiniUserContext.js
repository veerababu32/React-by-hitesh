import { createContext, useContext } from "react"
export const miniContext = createContext({
  name: '',
  pass: '',
  someMethod: () => {}
})

export const MiniProvider = miniContext.Provider

export default function useMini() {
  return useContext(miniContext)
}