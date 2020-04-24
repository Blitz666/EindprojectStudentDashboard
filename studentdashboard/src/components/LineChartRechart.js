import React, { useState, useEffect } from 'react';
import {
    LineChart,
    Line,
    XAxis,
    YAxis,
    CartesianGrid,
    Tooltip,
    Legend,
    ResponsiveContainer,
} from 'recharts';
import dataFromExcel from '../data/dataFromExcel';

const LineChartRechart = (props) => {
    const [data, setData] = useState([]);

    const aspect = 15 / dataFromExcel.length;

    useEffect(() => {
        filterDataByName();
    }, [props.name]);

    const filterDataByName = () => {
        const data = [];
        dataFromExcel.forEach((item) => {
            if (item.studentName === props.name) {
                data.push(item);
            }
        });
        setData(data);
    };

    return (
        <div
            style={{
                paddingRight: '3rem',
            }}
        >
            <ResponsiveContainer aspect={3} width='100%'>
                <LineChart
                    width={1500}
                    data={data}
                    margin={{
                        top: 5,
                        right: 30,
                        left: 20,
                        bottom: 5,
                    }}
                >
                    <XAxis dataKey='name' />
                    <YAxis />
                    <Tooltip />
                    <Legend />
                    <CartesianGrid stroke='#eee' strokeDasharray='5 5' />
                    <Line
                        type='monotone'
                        dataKey='difficulty'
                        stroke='#8884d8'
                        activeDot={{ r: 8 }}
                    />
                    <Line
                        type='monotone'
                        dataKey='funGrade'
                        stroke='#82ca9d'
                        activeDot={{ r: 8 }}
                    />
                </LineChart>
            </ResponsiveContainer>
        </div>
    );
};

export default LineChartRechart;
