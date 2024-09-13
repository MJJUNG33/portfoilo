import styles from "./ProjectsStyles.module.css"
import ProjectCard from "../../common/ProjectCard"
import royalsavemart from "../../assets/royalsavemart-demo.mp4"
import netflix from "../../assets/netflix-demo.mp4"
import rentreact from "../../assets/rentreact-demo.mp4"

function Projects() {
  return (
    <section id="projects" className={styles.container}> 
      <h1 className="sectionTitle">Projects</h1>
      <div className={styles.projectsContainer}>
        <ProjectCard 
          src={rentreact}
          title="React Rent"
          stack="React, React Query, Redux Toolkit, Google OAuth, Bootstrap"
          description="Rent React is a rental property search application built with React. It enables users to find properties using Google Maps, filters, and a favourite list. The app integrates the Apartments.com API for real-time data, React Query for efficient fetching, Redux Toolkit for state management, and Google OAuth for secure authentication. I contributed to the Property Detail Page, developing a responsive UI, displaying property details, and optimizing the user experience with custom hooks and smooth loading."
        /> 
        <ProjectCard src={netflix} 
          title="Netflix"
          stack="React, React Query, Redux Toolkit, Bootstrap"
          description="A Netflix project developed using React, React Query, Redux, and Bootstrap that replicates core functionalities of Netflix. The project utilizes the TMDB API to dynamically fetch and display movie data, such as genres, recommendations, reviews, popular movies, and top-rated movies. Implement react query to make custom hooks for efficient data fetching and state management, ensuring a seamless user experience with automatic updates and optimized performance."/>
        <ProjectCard src={royalsavemart}
          title="Royal save mart"
          stack="React, Redux Toolkit, Bootstrap"
          description="Royal Save Mart project was built online Korean grocery store. Implement Redux Toolkit to make the user can add or remove the items in the cart also increase or decrease the number of items. And tried to make user friendly UI/UX by implementing responsive design."
        />

      </div>
      
  
    </section>
  )
}

export default Projects