import { useGlobalContext } from './context'
import {FaBars} from 'react-icons/fa';

const Home = () => {
    const {openSidebar, openModal} = useGlobalContext();
    return (
        <section className='section-home'>
            <button type="button" className="btn" onClick={() => {openSidebar()}} ><FaBars /></button>
            <button type="button" className="btn" onClick={() => {openModal()}} >show Modal</button>
        </section>
    );
  };
  export default Home;