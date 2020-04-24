import React, { PureComponent } from 'react';
import {
    BarChart,
    Bar,
    XAxis,
    YAxis,
    CartesianGrid,
    Tooltip,
    Legend,
    ResponsiveContainer,
} from 'recharts';
import dataFromExcel from '../data/dataFromExcel';

export default class BarChartRechart extends PureComponent {
    constructor(props) {
        super(props);
        this.state = {
            data: [],
        };
    }

    componentDidMount() {
        this.filterDataByName();
    }

    filterDataByName = () => {
        const data = [];
        dataFromExcel.forEach((item) => {
            if (item.studentName === this.props.name) {
                data.push(item);
            }
        });
        this.setState({
            data,
        });
    };

    render() {
        return (
            <div style={{ paddingRight: '2rem' }}>
                <h1>{this.props.name}</h1>
                <ResponsiveContainer width='100%' aspect='3'>
                    <BarChart
                        data={this.state.data}
                        margin={{
                            top: 5,
                            right: 30,
                            left: 20,
                            bottom: 5,
                        }}
                    >
                        <CartesianGrid strokeDasharray='3 3' />
                        <XAxis dataKey='name' />
                        <YAxis />
                        <Tooltip />
                        <Legend />
                        <Bar dataKey='difficulty' fill='#2C5F2D' />
                        <Bar dataKey='funGrade' fill='#97BC62FF' />
                    </BarChart>
                </ResponsiveContainer>
            </div>
        );
    }
}
