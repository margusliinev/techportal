import { useState, useEffect } from 'react';
import { technology } from '../types';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';
import Wrapper from '../assets/styled_components/components/ChartsContainer';

interface Props {
    topTechnologies: technology[] | undefined;
}

const ChartsContainer = ({ topTechnologies }: Props) => {
    const [numBars, setNumBars] = useState(7);
    const [barSize, setBarSize] = useState(75);

    useEffect(() => {
        const handleResize = () => {
            const containerWidth = document.getElementById('chart-container')?.clientWidth || 0;

            let newNumBars = 7;
            let newBarSize = 75;
            if (containerWidth < 375) {
                newNumBars = 3;
                newBarSize = 50;
            } else if (containerWidth < 450) {
                newNumBars = 4;
                newBarSize = 50;
            } else if (containerWidth < 600) {
                newNumBars = 5;
                newBarSize = 60;
            } else if (containerWidth < 900) {
                newBarSize = 65;
            }

            setNumBars(newNumBars);
            setBarSize(newBarSize);
        };

        window.addEventListener('resize', handleResize);
        handleResize();

        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, []);

    const barsToShow = topTechnologies?.slice(0, numBars);

    return (
        <Wrapper id='chart-container'>
            <div className='chart-title'>
                <h4>Most Popular Technologies</h4>
            </div>
            <ResponsiveContainer className='responsive-container' width='100%' height={400}>
                <BarChart data={barsToShow} margin={{ top: 50 }}>
                    <CartesianGrid strokeDasharray={'1 1 '} />
                    <XAxis dataKey='technology' tick={{ fill: '#F3F4F6' }} tickFormatter={(value: string) => value.charAt(0).toUpperCase() + value.slice(1)} />
                    <YAxis dataKey='count' allowDecimals={false} tick={{ fill: '#F3F4F6' }} />
                    <Tooltip />
                    <Bar dataKey='count' fill='#60a5fa' barSize={barSize} />
                </BarChart>
            </ResponsiveContainer>
        </Wrapper>
    );
};

export default ChartsContainer;
