import styles from './SkillsStyles.module.css'
import jsLight from "../../assets/js-light.svg"
import jsDark from "../../assets/js-dark.svg"
import reactLight from "../../assets/react-light.svg"
import reactDark from "../../assets/react-dark.svg"
import nodeLight from "../../assets/node-light.svg"
import nodeDark from "../../assets/node-dark.svg"
import reduxLight from "../../assets/redux-light.svg"
import reduxDark from "../../assets/redux-dark.svg"
import bootstrapLight from "../../assets/bootstrap-light.png"
import bootstrapDark from "../../assets/bootstrap-dark.png"
import cssLight from "../../assets/css-light.svg"
import cssDark from "../../assets/css-dark.svg"
import htmlLight from "../../assets/html-light.png"
import htmlDark from "../../assets/html-dark.png"
import gitLight from "../../assets/git-light.svg"
import gitDark from "../../assets/git-dark.svg"
import reactQueryLight from "../../assets/reactquery-light.svg"
import SkillList from "../../common/SkillList"
import { useTheme } from "../../common/ThemeContext"

function Skills() {
  const {theme} = useTheme();

  const jsIcon = theme === "light" ? jsLight : jsDark;
  const reactIcon = theme === "light" ? reactLight : reactDark;
  const nodeIcon = theme === "light" ? nodeLight : nodeDark;
  const bootstrapIcon = theme === "light" ? bootstrapLight : bootstrapDark;
  const reduxIcon = theme === "light" ? reduxLight : reduxDark;
  const cssIcon = theme === "light" ? cssLight : cssDark;
  const htmlIcon = theme === "light" ? htmlLight : htmlDark;
  const gitIcon = theme === "light" ? gitLight : gitDark;
  const reactQeuryIcon = theme === "light" ? reactQueryLight : reactQueryLight;

  return (
    <section id='skills' className={styles.container}> 
        <h1 className="sectionTitle">Skills</h1>
        <div className={styles.skillList}> 
            <SkillList src={jsIcon} title="JS" />
            <SkillList src={cssIcon} title="CSS"/>
            <SkillList src={htmlIcon} title="HTML" />
            <SkillList src={nodeIcon} title="Node" /> 
        </div>
        <div className={styles.skillList}> 
        <SkillList src={reactIcon} title="React" />
        <SkillList src={reactQeuryIcon} title="React Query"/>  
        <SkillList src={reduxIcon} title="Redux"/> 
       
        </div>
        <div className={styles.skillList}> 
        <SkillList src={bootstrapIcon} title="Bootstrap" />
        <SkillList src={gitIcon} title="Git" />
        </div>
    </section>
  )
}

export default Skills