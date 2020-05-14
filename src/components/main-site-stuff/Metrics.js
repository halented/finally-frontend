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
    // right now, the months don't show up in order because the x values aren't in numerical order.

    function setup(){
        services.fetchChartData()
        .then(json=>{
            changeData(json.data)
        })
    }

    useEffect(setup, [])

    const xDataMaker = () => {
        // console.log(chartData.map(item => {`${months[item['x']-1]}`}))
        console.log(chartData)
        debugger;
    }

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



// (item)=>`${months[item['x']-1]}`

// data.map(item =>`${months[item['x']-1]}`)