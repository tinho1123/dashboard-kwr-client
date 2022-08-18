import { useEffect, useState } from "react";
import { createContext } from "react";
import { api } from "../api";

export const DataContext = createContext({})

interface Props {
  children: React.ReactNode
}

const DataContextProvider: React.FC<Props> = ({ children }) => {
  
  const [data, setData] = useState({})

  async function getData() {
    const token = JSON.parse(localStorage.getItem('admin'))
    console.log(token);
    
    // await api.get('vendas/getall', {
    //   headers: 
    // })
    //   .then(({data}) => {
    //     console.log(data)
    //   })
    //   .catch((err) => {
    //     console.log(err);
    //   })
  }

  useEffect(() => {
    getData()
  }, [])

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