import axios from 'axios';
import NavBar from "../components/NavBar";
import Collocations from "../components/Collocations";

const CollocationPage = () => { 

    return (
        <div className="colloc-forms">
            <NavBar />
            <Collocations />      
        </div>
    )
}

export default CollocationPage;