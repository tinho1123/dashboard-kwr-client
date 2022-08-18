import { createContext } from "vm";

export const DataContext = createContext({})

interface Props {
  children: React.ReactNode
}

const DataContextProvider: React.FC<Props> = ({ children }) => {

  const value = {

  }

  return (
    <DataContext.Provider value={value}>
      { children }
    </DataContext.Provider>
  )
}

export default DataContextProvider;