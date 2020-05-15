import React, { useState, useEffect } from 'react';
import { VictoryChart, VictoryTheme, VictoryLine, VictoryAxis } from 'victory'
import { styles } from '../../Styles'
import { services } from '../../apiServices'


const h3Style = Object.assign(styles.shadowed, {width: '75%'})
const months = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December"]

function Metrics(){
    const [chartData, changeData] = useState([])

    function setup(){
        services.fetchChartData()
        .then(json=>{
            changeData(json.data)
        })
    }

    useEffect(setup, [])
    
        return (
            <div style={styles.columnFlexbox}>
                <h3 style={h3Style}>Hangouts per Month</h3>
                    <VictoryChart theme={VictoryTheme.material} >
                        <VictoryLine 
                            style={{
                                data: {stroke: "rgb(235, 214, 214)"}, 
                                parent: { border: "1px solid #ccc"}
                            }} 
                            data={chartData}
                            x={(item)=>`${months[item['x']-1]}`}
                        />
                    </VictoryChart>
            </div>
        )
}

export default Metrics