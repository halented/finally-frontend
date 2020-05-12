import React from 'react';
import { VictoryChart, VictoryTheme, VictoryLine } from 'victory'
import { styles } from '../../Styles'
const data = [
    {x: 1, y: 4}, 
    {x: 2, y: 7},
    {x: 3, y: 6}
]

const h3Style = Object.assign(styles.shadowed, {width: '75%'})


function Metrics(){
        return (
            <div style={styles.columnFlexbox}>
                <h3 style={h3Style}>Introvert Interaction Metrics</h3>
                    <VictoryChart theme={VictoryTheme.material}>
                            <VictoryLine 
                                style={{
                                    data: {stroke: "rgb(235, 214, 214)"}, 
                                    parent: { border: "1px solid #ccc"}
                                }} 
                                data={data} 
                            />
                    </VictoryChart>
            </div>
        )
}

export default Metrics