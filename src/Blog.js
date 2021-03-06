import React, { useEffect, useState } from 'react';
import './App.css';
import Work from './Work';
import * as contentful from 'contentful';
import Button from '@material-ui/core/Button';

require('dotenv').config();

function Blog() {
  const client = contentful.createClient({
    space: process.env.REACT_APP_SPACE,
    accessToken: process.env.REACT_APP_ACCESS_TOKEN
  });

  const [blogs, setBlogs] = useState([])
  const [isLoading, setIsLoading] = useState(true)

  const fetchBlogPost = async() => {
    const response = await client.getEntries({
      content_type: "blogPost",
      order: "-sys.createdAt",
      limit: 6
    })
    setBlogs(response.items);
    setIsLoading(false);
  }
  
  useEffect(() => {
    fetchBlogPost();
  },[isLoading])

  return (
    <div className='contents'>
        <h2>Blog</h2>
        <div className='wrapper'>
            {isLoading ? (
              <p>Now Loading...</p>
            ) : (
              <div>
                <div className='work-back'>
                  {blogs.map(blog => {
                    return(
                      <a href={'https://www.ryoblg.com/blog/post/'+blog.fields.slug}>
                        <Work 
                            name={blog.fields.title}
                            description=''
                            image={'https:'+blog.fields.eyecatch.fields.file.url}
                            isPortfolio={false}                        
                            experience=''                   
                        />
                      </a>
                    )
                  })}
                </div>
                <Button variant='outlined' className='moreButton' href='https://ryoblg.com/blog/'>
                  More
                </Button>
              </div>
            )}
        </div>
    </div>
  );
}

export default Blog;
