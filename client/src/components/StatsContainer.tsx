import Wrapper from '../assets/styled_components/components/StatsContainer';
import { technology } from '../types';

interface Props {
    topTechnologies: technology[] | undefined;
}

const StatsContainer = ({ topTechnologies }: Props) => {
    return (
        <Wrapper>
            <div className='stats'>
                {topTechnologies?.slice(0, 3).map((technology, index) => {
                    return (
                        <article key={index}>
                            <header>
                                <span className='count'>{technology.count}</span>
                                <span className='technology'>{technology.technology}</span>
                            </header>
                            <h5 className='title'>
                                {technology.technology} is used by <span>{technology.count}</span> companies
                            </h5>
                        </article>
                    );
                })}
            </div>
        </Wrapper>
    );
};

export default StatsContainer;
