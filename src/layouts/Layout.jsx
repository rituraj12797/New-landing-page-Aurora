import style from './Layout.module.scss'
import HeroSection from '../Components/compound/HeroSection/HeroSection';
import MidSection from '../Components/compound/mid_Section/MidSection';
import Footer from '../Components/compound/Footer/Footer';
function Layout() {
    return ( <div className={style.Layout}>
        <HeroSection/>
        <MidSection/>
        <Footer/>
    </div> );
}

export default Layout;