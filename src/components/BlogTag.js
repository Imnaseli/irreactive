import React from 'react'

const BlogTag = ({tags}) => {
    //let index = Math.Random()
    
  return (
    <div className='blogtagmain'>
        {tags.map((tag) => (
            <div className='blogtagindividual' key={tag} > {tag} </div>
        ))
        }
    </div>
  )
}

export default BlogTag
