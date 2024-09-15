import styles from './HeroStyles.module.css'
import heroImg from "../../assets/hero-img.png"
import sun from "../../assets/sun.svg"
import moon from "../../assets/moon.svg"
import githubLight from "../../assets/github-light.svg"
import githubDark from "../../assets/github-dark.svg"
import linkedinLight from "../../assets/linkedin-light.svg"
import linkedinDark from "../../assets/linkedin-dark.svg"
import CV from "../../assets/MJ(MINJI)_JUNG_CV.pdf"
import { useTheme } from "../../common/ThemeContext"

function Hero() {
    const {theme, toggleTheme} = useTheme();

    const themeIcon = theme === "light" ? sun : moon;
    const githubIcon = theme === "light" ? githubLight : githubDark;
    const linkedinIcon = theme === "light" ? linkedinLight : linkedinDark;


  return (
    <section id="hero" className={styles.container}>
        <div className={styles.colorModeContainer}>
            <img className={styles.heroImg} src={heroImg} alt="Profile photo of MJ"/>
            <img className={styles.colorMode} src={themeIcon} alt="Color mode icon"
            onClick={toggleTheme}
            />
        </div>
        
        <div className={styles.info}>
            <h1>
                MJ Jung
            </h1>
            <h2>
                Software Engineer
            </h2>
            <span>
                <a href="https://github.com/MJJUNG33" target="_blank">
                <img src={githubIcon} alt="github icon"/>
                </a>
                <a href="https://www.linkedin.com/in/mj-jung/" target="_blank">
                <img src={linkedinIcon} alt="linkedin icon"/>
                </a>
            </span>
            <p className={styles.description}>
            Passionate about coding, solving problems, and continuous learning. I thrive on building innovative solutions and tackling complex challenges. 
            </p>
            <a href={CV} download>
                <button className="hover" >
                    Resume
                </button>
            </a>
        </div>
        </section>
  )
}

export default Hero;