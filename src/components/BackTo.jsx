import {Link} from 'react-router-dom';

function BackTo(props) {
    return (
            <Link to={props.path} className = "back-to-link"><p>Back to {props.topic}</p></Link>
        
    );
}
export default BackTo;