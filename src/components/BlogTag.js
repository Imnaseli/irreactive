import React from 'react'

const BlogTag = ({tags}) => {
    
  return (
    <div className='blogtagmain'>
        {tags.map((tag) => (
            <div className='blogtagindividual' key={tag.id}> {tag} </div>
        ))
        }
    </div>
  )
}

export default BlogTag