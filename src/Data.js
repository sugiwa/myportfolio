import React from 'react';
import './App.css';
import exampleblog from './image/exampleblog.png';
import portfolio from './image/portfolio.png';
import Work from './Work';

function Data() {
    const WorkLists = [
        {
            name:'Example Blog',
            description:'ReactベースのフレームワークであるGatsbyを用いて作成し、Netlifyへデプロイしました。',
            image:exampleblog,
            url:'https://youthful-williams-7f4bf8.netlify.app',
            details:'Reactでブログを作成するにあたり、フレームワークの候補としてGatsbyかNextが挙がりましたがGatsbyの方が速くGraphQLが使えるとのことなのでこちらを採用しました。',
            skill:'ReactJS,Gatsby',
        },
        {
            name:'Ryo portfolio',
            description:'Reactを用いて作成したポートフォリオです。',
            image:portfolio,
            url:'https://youthful-williams-7f4bf8.netlify.app/',
            details:'',
            skill:'React'
        },
    ]
    return (
        <div className='contents'>
            <h2>Works</h2>
            <div className='wrapper'>
                <div className='work-back'>
                    {WorkLists.map((work) => {
                        return(
                            <Work 
                                name={work.name}
                                description={work.description}
                                image={work.image}
                                url={work.url}
                                details={work.details}
                                skill={work.skill}
                                isPortfolio={true}
                            />
                        );
                    })}
                </div>
            </div>
        </div>
    );
}

export default Data;
