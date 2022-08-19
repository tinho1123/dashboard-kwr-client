import { useState } from "react";
import { createContext } from "react";

export const DataContext = createContext({})

interface Props {
  children: React.ReactNode
}

const DataContextProvider: React.FC<Props> = ({ children }) => {
  
  const [data, setData] = useState({})

  

  const value = {
    data,
    setData
  }

  return (
    <DataContext.Provider value={value}>
      { children }
    </DataContext.Provider>
  )
}

export default DataContextProvider;