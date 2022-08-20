import { useState } from "react";
import { LineChart } from "../";


const Home = () => {

  const [userAgain, setUserAgain] = useState({
    labels: ['2015', '2016', '2017', '2018', '2019', '2020', '2021', '2022'],
    datasets: [
    {
      label: 'Vendas',
      data: [20000, 30000, 40000, 50000, 30000, 50000, 20000, 10000],
      backgroundColor: ['red', 'blue', 'green'] 
    }
  ] 
  })

  return (
    <div>
      <LineChart chartData={userAgain} />
    </div>
  )
}

export default Home;