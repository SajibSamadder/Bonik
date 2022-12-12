import React from 'react'

import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer, AreaChart, Area } from 'recharts';

function Dashbord() {
    const data = [
        {
            name: 'Page A',
            uv: 12000,
            pv: 2400,
            amt: 2400,
        },
        {
            name: 'Page B',
            uv: 1300,
            pv: 2398,
            amt: 2210,
        }
        ,
        {
            name: 'Page B',
            uv: 5000,
            pv: 3333,
            amt: 2210,
        }
        ,
        {
            name: 'Page B',
            uv: 1000,
            pv: -1398,
            amt: 2210,
        }
        ,
        {
            name: 'Page B',
            uv: 1000,
            pv: 1398,
            amt: 2210,
        }
        ,
        {
            name: 'Page B',
            uv: 1000,
            pv: 2398,
            amt: 2210,
        }
    ];
    const data1 = [
        {
            name: 'Page A',
            high: 1200,
            low: 2400,
            amt: 2400,
        },
        {
            name: 'Page B',
            high: 1300,
            low: 2398,
            amt: 2210,
        }
        ,
        {
            name: 'Page B',
            high: 5000,
            low: 3333,
            amt: 2210,
        }
        ,
        {
            name: 'Page B',
            high: 1000,
            low: -1398,
            amt: 2210,
        }
        ,
        {
            name: 'Page B',
            high: 1000,
            low: 1398,
            amt: 2210,
        }
        ,
        {
            name: 'Page B',
            high: 1000,
            low: 2398,
            amt: 2210,
        }
    ];
    return (
        <div>

            <LineChart
                width={500}
                height={300}
                data={data}
                margin={{
                    top: 5,
                    right: 30,
                    left: 20,
                    bottom: 5,
                }}
            >

                <XAxis dataKey="name" />
                <YAxis />
                <Tooltip />

                <Line type="monotone" dataKey="pv" stroke="#8884d8" />

            </LineChart>
            <AreaChart
                width={500}
                height={300}
                data={data1}
                margin={{
                    top: 5,
                    right: 30,
                    left: 20,
                    bottom: 5,
                }}
            >
                <XAxis></XAxis>
                <YAxis></YAxis>
                <Tooltip></Tooltip>
                <Area type="monotone" dataKey="high" stroke="#8884d8" fill="#8884d8" />
                <Area type="monotone" dataKey="low" stroke="#8884d8" fill="red" />
            </AreaChart>
        </div>

    )
}

export default Dashbord