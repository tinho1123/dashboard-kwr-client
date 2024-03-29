import { Box } from "@mui/material";
import { useState } from "react";
import { LineChart, MonthGain, MonthLoss, ClearAmount } from "../";


const Home = () => {
  const optionsData = {
    plugins: {
      title: {
        display: true,
        text: 'Resumo de custos e vendas'
      },
    },
}

  const [userAgain] = useState({
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
  const reqGainTest = '1000.00'
  const reqLossTest = '200.00'



  return (
    <Box>
      <Box sx={{ display: 'flex', justifyContent: 'space-between' }}>
        <MonthGain gain={reqGainTest}/>
        <MonthLoss loss={reqLossTest}/>
        <ClearAmount gain={reqGainTest} loss={reqLossTest}/>
      </Box>
        <LineChart chartData={userAgain} optionsData={optionsData} />
    </Box>
  )
}

export default Home;