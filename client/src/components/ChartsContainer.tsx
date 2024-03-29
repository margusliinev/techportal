import { useEffect, useState } from 'react';
import { Bar, BarChart, CartesianGrid, ResponsiveContainer, Tooltip, XAxis, YAxis } from 'recharts';

import { useAppSelector } from '../hooks';
import Wrapper from '../styles/styled_components/components/ChartsContainer';
import { technology } from '../types';

interface Props {
    topTechnologies: technology[] | undefined;
}

const ChartsContainer = ({ topTechnologies }: Props) => {
    const { theme } = useAppSelector((store) => store.navigation);
    const [numBars, setNumBars] = useState(7);
    const [barSize, setBarSize] = useState(75);

    // Resizing the graph on window resize, removing number of bars and/or shrinking bar size.

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
                    <XAxis
                        dataKey='technology'
                        tick={theme === 'dark-theme' ? { fill: '#F3F4F6' } : { fill: '#111827' }}
                        tickFormatter={(value: string) => value.charAt(0).toUpperCase() + value.slice(1)}
                    />
                    <YAxis dataKey='count' allowDecimals={false} tick={theme === 'dark-theme' ? { fill: '#F3F4F6' } : { fill: '#111827' }} />
                    <Tooltip labelStyle={{ color: '#4f4f4f', fontWeight: '500' }} labelFormatter={(value: string) => value.charAt(0).toUpperCase() + value.slice(1)} />
                    <Bar dataKey='count' fill='#60a5fa' barSize={barSize} />
                </BarChart>
            </ResponsiveContainer>
        </Wrapper>
    );
};

export default ChartsContainer;
