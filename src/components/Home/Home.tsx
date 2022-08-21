import { Box } from "@mui/material";
import { useState } from "react";
import { LineChart, MonthGain } from "../";


const Home = () => {
  const optionsData = {
    plugins: {
      title: {
        display: true,
        text: 'Resumo de custos e vendas'
      },
    },
}

  const [userAgain, setUserAgain] = useState({
    labels: ['2015', '2016', '2017', '2018', '2019', '2020', '2021', '2022'],
    datasets: [
    {
      label: 'Vendas',
      data: [20000, 30000, 40000, 50000, 30000, 50000, 20000, 10000],
      backgroundColor: ['blue'],
      borderColor: ['blue'],
    }
  ] 
  })
  const reqGainTest = '200.00'



  return (
    <Box sx={{ display: 'flex', gap: '1rem' }}>
        <MonthGain gain={reqGainTest}/>
        <LineChart chartData={userAgain} optionsData={optionsData} />
    </Box>
  )
}

export default Home;