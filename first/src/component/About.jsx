
import { useNavigate } from 'react-router-dom';

const About = () => {
    const navigate = useNavigate();

    const goHome = () => {
        navigate('/home'); 
    };

    return (
        <div>
            <h1>THIS IS AN EXAMPLE OF ROUTE DOM</h1>
            <button className="btn btn-success" onClick={goHome}>
            Home
            </button>
        </div>
    );
};

export default About;