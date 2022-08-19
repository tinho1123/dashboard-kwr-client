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
    const local = localStorage.getItem('admin')
    if (local) {
    const token = JSON.parse(local)
    await api.get('vendas/getall', {
      headers: {
        token
      }
    })
      .then(({data}) => {
        console.log(data)
      })
      .catch(({response: { data }}) => {
        console.log(data);
      })
    }
    
   
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