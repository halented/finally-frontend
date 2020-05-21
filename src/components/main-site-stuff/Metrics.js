import React, { useState } from 'react';
import { VictoryChart, VictoryTheme, VictoryLine } from 'victory'
import { styles } from '../../Styles'
import { services } from '../../apiServices'


const h3Style = Object.assign({width: '75%'}, styles.shadowed)
const graphBox = Object.assign({overflow: 'scroll'}, styles.columnFlexbox)

export const months = [
    "J\na\nn",
    "F\ne\nb",
    "M\na\nr",
    "A\np\nr",
    "M\na\ny",
    "J\nu\nn",
    "J\nu\nl",
    "A\nu\ng",
    "S\ne\np",
    "O\nc\nt",
    "N\no\nv",
    "D\ne\nc"]

function Metrics(){
    const [chartData, changeData] = useState([])
    const [showChart, changeShow] = useState(false)
    const [header, changeHeader] = useState("Hangout Metrics")

    // const chartsData =  [
    //          {x: 1, y: 4}, 
    //          {x: 2, y: 7},
    //          {x: 3, y: 0},
    //          {x: 4, y: 0},
    //          {x: 5, y: 0},
    //          {x: 6, y: 0},
    //          {x: 7, y: 0},
    //          {x: 8, y: 0},
    //          {x: 9, y: 0},
    //          {x: 10, y: 0},
    //          {x: 11, y: 0},
    //          {x: 12, y: 0},
    //      ]
// show page, have user select year. repopulate with that year. still need 2 fix labels. 
// auto set to twelve months with a "maxDomain" of 10 hangouts

    function setup(ev){
        ev.preventDefault()
        const year = parseInt(ev.target.year.value)
        services.fetchChartData(year)
        .then(json=>{
            if (json.error) {
                alert(`${json.error} (${year})`)
            }
            else {
                changeData(json.data)
                changeShow(true)
                changeHeader(`Hangouts per Month in ${year}`)
            }
        })
    }

    function populateYears(){
        const year = (new Date()).getFullYear();
        const years = Array.from(new Array(20),( val, index) => year-index);
        return years.map((year, index) => {
            return <option key={`year${index}`} value={year}>{year}</option>
        })
    }
    
        return (
            <div style={graphBox}>
                <h3 style={h3Style}>{header}</h3>
                {showChart? 
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
                :
                    <form onSubmit={(ev)=>setup(ev)}>
                        <label>Please select a year</label>
                        <div>
                            <select name='year'>
                                {populateYears()}
                            </select>
                        </div>
                        <button type='submit'>Go</button>
                    </form>
                }
            </div>
        )
}

export default Metrics