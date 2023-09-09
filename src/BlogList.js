import { Link } from "react-router-dom/cjs/react-router-dom.min";

const BlogList = ({blogs,title}) => {
   if(blogs.length===0){
      title="";
   }
    return ( 
    <div className="blog-list">
      <h2>{title}</h2>
      {blogs.map((blog)=> (
         <div className="blog-preview" key = {blog.id}>
            <Link to={`/blogs/${blog.id}`}>
            <h2>{blog.title}</h2>
            <p>Written by {blog.author}</p>
            </Link>
         </div>
       ))}
       {!blogs.length && <div className="addBlog">
            <h3>There are no blogs!!</h3>
            <Link to="/create">Add a new blog!!</Link>
         </div>}
    </div>
   );
}
 
export default BlogList;