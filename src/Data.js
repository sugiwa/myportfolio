import React from 'react';
import './App.css';
import exampleblog from './image/exampleblog.png';
import portfolio from './image/portfolio.png';
import ryoblog from './image/ryoblog.png';
import Work from './Work';

function Data() {
    const WorkLists = [
        {
            name:'Example Blog',
            description:'Gatsbyを学習するためチュートリアルを参考にして作成し、Netlifyへデプロイしました。',
            image:exampleblog,
            url:'https://youthful-williams-7f4bf8.netlify.app',
            details:'Reactでブログを作成するにあたり、フレームワークの候補としてGatsbyかNextが挙がりましたがGatsbyの方が速くGraphQLが使えるとのことなのでこちらを採用しました。',
            skill:'React,Gatsby',
        },
        {
            name:'Ryo Portfolio',
            description:'Reactを用いて作成したポートフォリオで、Netlifyにデプロイしました。',
            image:portfolio,
            url:'https://wonderful-agnesi-db77e9.netlify.app/',
            details:'ポートフォリオサイトをまだ持っておらず、Reactの技術をより深めたいと思い作成しました。レスポンシブで白を基調としたシンプルなデザインとなるよう意識しました。',
            skill:'React'
        },
        {
            name:'Ryo Blog',
            description:'学習のアウトプットとしての情報発信兼新たな技術を試すためのサイトです',
            image:ryoblog,
            url:'https://www.ryoblg.com',
            details:'このサイトはNetlifyにデプロイされ、Contentfulで書かれた記事を取得しています。また、シンタックスハイライトやその他ツールなどブログとして活用できそうな機能を実際に取り入れて試すということも行っています。',
            skill:'React,Gatsby,GraphQL'
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
