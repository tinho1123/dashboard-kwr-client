import { Box } from '@mui/material'
import React, { useEffect } from 'react'
import { api } from '../../api';

const Products = () => {

  async function getData() {
    const local = localStorage.getItem('admin')
    if (local) {
    const token = JSON.parse(local)
    await api.get('produtos/getall', {
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
    <Box >
      adsa
    </Box>
  )
}

export default Products