import React, { useState, useEffect } from 'react';
import { VictoryChart, VictoryTheme, VictoryLine } from 'victory'
import { styles } from '../../Styles'
import { services } from '../../apiServices'


const h3Style = Object.assign(styles.shadowed, {width: '75%'})

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
                <h3 style={h3Style}>Introvert Interaction Metrics</h3>
                    <VictoryChart theme={VictoryTheme.material}>
                            <VictoryLine 
                                style={{
                                    data: {stroke: "rgb(235, 214, 214)"}, 
                                    parent: { border: "1px solid #ccc"}
                                }} 
                                data={chartData} 
                            />
                    </VictoryChart>
            </div>
        )
}

export default Metrics