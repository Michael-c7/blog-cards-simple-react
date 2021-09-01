import React from 'react'

export const List = (props) => {

    const blog = props.blogData.map(data => {
        const {description, heroImg, id, name, profileImg, tag, timePosted, title} = data;
        // console.log(description)

        return (
            <article key={id} className="blog-entry">
           <h2>{title}</h2>
           <h3 className="tag">{tag}</h3>
           <p className="desc">{description}</p>
            </article>
        )
    })

    return (
        <>
           {blog}
        </>
    )
}
