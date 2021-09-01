import React, {useState} from 'react'
import blogData from "./blogData"
import {List} from "./List"

export const App = () => {
    const [blogPosts, setBlogPosts] = useState(blogData);

    return (
        <section className="container">
          <h2 className="blog-header">{blogPosts.length} blog posts left</h2>
          {/*have to pass the state value NOT the data*/}
          <List blogData={blogPosts}/>
          <button className="deleteAllBtn" onClick={() => setBlogPosts([])}>Delete All</button>
        </section>
    )
}
