import { Link } from "react-router-dom";

const Errormsg = () => {
  return ( 
    
    <div className="err">
      <h2>Sorry!</h2>
      <p>Page Not found!</p>
      <Link to="/">Back to homepage...</Link>
    </div>
   );
}
 
export default Errormsg;