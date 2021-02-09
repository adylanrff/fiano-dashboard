import styles from '../../styles/ProgressChart.module.css'
import { LineChart, Line, CartesianGrid, XAxis, YAxis, Tooltip, ResponsiveContainer, Legend } from 'recharts';

const ProgressChart = () => {

    const data = [
        {name: 'Page A', uv: 400, pv: 2400, amt: 2400}, 
        {name: 'Page B', uv: 300, pv: 2400, amt: 2400},
        {name: 'Page B', uv: 100, pv: 2400, amt: 2400},
        {name: 'Page B', uv: 900, pv: 2400, amt: 2400},
    ];
    return (
        <div className={styles.chartContainer}>
            <h3>Progress</h3>
            <ResponsiveContainer 
                width={"100%"} 
                height={"80%"}
            >
                <LineChart data={data}>
                    <Line type="monotone" dataKey="uv" stroke="#8884d8" />
                    <CartesianGrid stroke="#ccc" />
                    <XAxis dataKey="name" />
                    <YAxis />
                    <Tooltip />
                    <Legend iconSize={10} width={50} height={140} wrapperStyle={{ paddingLeft: "1rem"}} layout='vertical' verticalAlign='middle' align="right" />

                </LineChart>
            </ResponsiveContainer>
        </div>

    )
} 

export default ProgressChart