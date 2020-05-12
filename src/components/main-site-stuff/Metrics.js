import React from 'react';
import { VictoryChart, VictoryTheme, VictoryLine, VictoryAxis } from 'victory'
const data = [{'week': 1, 'hangouts': 4}, {'week': 2, 'hangouts': 7},{'week': 3, 'hangouts': 6}]
function Metrics(){
        return (
            <>
                <h1>Ya Metrics</h1>
                <VictoryChart theme={VictoryTheme.material}>
                    <VictoryAxis tickValues={[1,2,3]}/>
                    <VictoryAxis dependentAxis tickValues={[2,4,6,8,10]}/>
                    {/* <VictoryStack colorScale='warm'> */}
                        <VictoryLine 
                            style={{data: {stroke: "#c43a31"}, parent: { border: "1px solid #ccc"}}} 
                            data={data} 
                            x='week' 
                            y='hangout'
                        />
                    {/* </VictoryStack> */}
                </VictoryChart>
            </>
        )
}

export default Metrics