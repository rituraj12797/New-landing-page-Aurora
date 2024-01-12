import HeroTextContainer from "../../atoms/HeroTextContainer/HeroTextContainer";
import hero_background from '../../../assets/videos/Hero_background.mp4'
import style from './HeroSection.module.scss'
function HeroSection() {
    return ( <div className={style.HeroSection}>
        <video className={style.backvideo}  autoPlay={true}>
            <source src={hero_background}></source>
        </video>
        <div className={style.textContr}>
            <HeroTextContainer/>
        </div>
    </div> );
}

export default HeroSection;