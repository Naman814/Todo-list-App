import WriteNote from "./WriteNote";
import { FaClipboard } from "react-icons/fa";
const List=()=>{

    return(
        <div className="list-body">
        <h1> NOTES <FaClipboard /></h1>
        <br />
        <WriteNote />
        </div>
    );

}


export default List;