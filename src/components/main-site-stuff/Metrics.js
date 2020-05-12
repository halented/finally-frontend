import React from 'react';
import { VictoryChart, VictoryTheme, VictoryLine, VictoryAxis } from 'victory'
const data = [
    {x: 1, y: 4}, 
    {x: 2, y: 7},
    {x: 3, y: 6}
]


function Metrics(){
        return (
            <>
                <h1>Ya Metrics</h1>
                <VictoryChart theme={VictoryTheme.material}>
                    <VictoryAxis tickValues={[1,2,3]}/>
                    <VictoryAxis dependentAxis tickFormat={[0, 2,4,6,8,10]}/>
                        <VictoryLine 
                            style={{
                                data: {stroke: "rgb(235, 214, 214)"}, 
                                parent: { border: "1px solid #ccc"}
                            }} 
                            data={data} 
                        />
                </VictoryChart>
            </>
        )
}

export default Metrics