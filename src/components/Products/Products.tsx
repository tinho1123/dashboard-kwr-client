import { Box } from '@mui/material'
import React, { useEffect } from 'react'
import { api } from '../../api';

interface Props {
  drawerWidth: string;
  mobile: boolean;
}

const Products: React.FC<Props> = ({ drawerWidth, mobile }) => {

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

  return (
    <Box sx={{ width: `100% - ${mobile ? 0 : drawerWidth}`, mt: '4rem', ml: `${mobile ? 0 : drawerWidth}` }}>
      Produto
    </Box>
  )
}

export default Products