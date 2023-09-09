import {useParams} from "react-router-dom";
import useFetch from './useFetch';
import { useHistory } from "react-router-dom/cjs/react-router-dom.min";


const BlogDetails = () => {
  const history = useHistory();
  const { id } = useParams();

  const {data:blog , Loading ,error} = useFetch('http://localhost:8000/blogs/' + id);
  const handledelete = () => {
    fetch('http://localhost:8000/blogs/' + blog.id,{
      method:'DELETE'
    })
    .then(() =>{
        history.push('/');
    })
  }
  return (  
    <div className="blog-details">
        {Loading && <div>Loading...</div>}
        {error && <div>{error}</div>}
        {blog && (
          <article>
            <h2>{blog.title}</h2>
            <p>Written by { blog.author }</p>
            <div>
              {blog.body}
            </div>
            <button onClick={handledelete}>Delete</button>
          </article>
        )}
    </div>
  );
}
 
export default BlogDetails;
