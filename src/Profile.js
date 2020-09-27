import React from 'react';
import './App.css';
import Work from './Work';
import profile from './image/profile.png';
import html5 from './image/html-5.svg';
import css3 from './image/css-3.svg';
import javascript from './image/javascript.svg';
import react from './image/react.svg';
import gatsby from './image/gatsby.svg';
import python from './image/python.svg';
import c from './image/c.svg';
import nextjs from './image/nextjs.svg';
import redux from './image/redux.svg';


function Profile() {
    const skillList = [
        {
            name:'HTML5',
            description:'基本的な操作やweb制作は可能です。',
            image:html5,
            experience:'半年',
        },
        {
            name:'CSS3',
            description:'基本的な操作やデザインは可能です。',
            image:css3,
            experience:'半年',
        },
        {
            name:'JavaScript',
            description:'基本的な操作や関数は可能です。',
            image:javascript,
            experience:'半年',
        },
        {
            name:'React',
            description:'基本的な操作は可能です。Vueは学習コストが少ないと聞くのでこちらを学んでおくのが無難だと考えました。',
            image:react,
            experience:'3ヶ月',
        },
        {
            name:'Gatsby',
            description:'GraghQLは学習中ですが、基本的な操作は可能です。',
            image:gatsby,
            experience:'1ヶ月',
        },
        {
            name:'Python',
            description:'Numpyなどの基本的なライブラリも使用可能です。',
            image:python,
            experience:'1年以上',
        },
        {
            name:'C',
            description:'一通り学習済みです。Linuxも少し触ることが出来ます。',
            image:c,
            experience:'1年以上',
        },
    ]
    const learningList = [
        {
            name:'Next.js',
            description:'GatsbyとNextのどちらを学ぶべきか分からないのでとりあえず両方触ってみるつもりで学習しています。',
            image:nextjs,
            experience:'',
        },
        {
            name:'Redux',
            description:'Reactでコーディングする際にコンポーネント間での状態管理が難しいのでRuduxを学習することにしました。',
            image:redux,
            experience:'',
        }
    ]

  return (
    <div className='contents'>
        <h2>Profile</h2>
        <div className='wrapper'>
            <div className='profile'>
                <div>
                    <img src={profile} alt='プロフィール写真'/>
                </div>
                <div className='myname'>
                    <p>若杉凌大(Wakasugi Ryota)</p>
                    <p>大学：信州大学工学部3年</p>
                    <p>趣味：旅行、音楽、読書</p>
                    <p>GitHub：<a href='https://github.com/sugiwa'>sugiwa</a></p>
                </div>
            </div>
        </div>
        <div className='wrapper'>
            <h3>Skill</h3>
            <div className='work-back'>
            {skillList.map((skill) => {
                return(
                    <Work 
                        name={skill.name}
                        description={skill.description}
                        image={skill.image}
                        isPortfolio={false}
                        experience={skill.experience}                    
                    />
                );
            })}
            </div>
        </div>
        <div className='wrapper'>
            <h3>Learning</h3>
            <div className='work-back'>
            {learningList.map((skill) => {
                return(
                    <Work 
                        name={skill.name}
                        description={skill.description}
                        image={skill.image}
                        isPortfolio={false}                        
                        experience={skill.experience}                    
                    />
                );
            })}
            </div>
        </div>
    </div>
  );
}

export default Profile;
