import React from 'react';
import './App.css';
import Work from './Work';
import dog from './image/dog.png';
import html5 from './image/html-5.svg';
import css3 from './image/css-3.svg';
import javascript from './image/javascript.svg';
import react from './image/react.svg';
import gatsby from './image/gatsby.svg';
import python from './image/python.svg';
import c from './image/c.svg';


function Profile() {
    const skillLists = [
        {
            name:'HTML5',
            description:'',
            image:html5,
        },
        {
            name:'CSS3',
            description:'',
            image:css3,
        },
        {
            name:'JavaScript',
            description:'',
            image:javascript,
        },
        {
            name:'react',
            description:'',
            image:react,
        },
        {
            name:'gatsby',
            description:'',
            image:gatsby,
        },
        {
            name:'Python',
            description:'',
            image:python,
        },
        {
            name:'C',
            description:'',
            image:c,
        },
    ]

  return (
    <div className='contents'>
        <h2>Profile</h2>
        <div className='wrapper'>
            <div className='profile'>
                <div>
                    <img src={dog} alt='プロフィール写真'/>
                </div>
                <div className='myname'>
                    <p>name：若杉凌大(Wakasugi Ryota)</p>
                    <p>GitHub：<a href='https://github.com/sugiwa'>sugiwa</a></p>
                </div>
            </div>
        </div>
        <div className='wrapper'>
            <h3>Skill</h3>
            <div className='work-back'>
            {skillLists.map((skill) => {
                return(
                    <Work 
                        name={skill.name}
                        description={skill.description}
                        image={skill.image}
                        isPortfolio={false}                        
                    />
                );
            })}
            </div>
        </div>
    </div>
  );
}

export default Profile;
