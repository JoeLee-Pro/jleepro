import { motion } from "framer-motion";
import Typewriter from "typewriter-effect";
import homeImage from "../../images/Fullstack.jpg";
import SocialIcons from "../../components/SocialIcons";

const Home = ({ name }) => {
  const styles = {
    home: {
      height: "calc(100% - 93px)",
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
    },

    homeImage: {
      position: "absolute",
      bottom: "0",
      opacity: "0.3",
      mixBlendMode: "lighten",
      height: "80%",
    },

    textContainer: {
      display: "flex",
      flexDirection: "column",
      letterSpacing: "1px",
      textAlign: "center",
      zIndex: "1",
      color: "#fff",
      textShadow: "1px 1px 3px #000",
    },

    name: {
      color: "#fff",
      fontWeight: "700",
      marginTop: "-100px",
      paddingBottom: "28px",
    },
  };

  return (
    <section className="home" style={styles.home}>

      <div className="textContainer" style={styles.textContainer}>
        <h1 className="name" style={styles.name}>
          {name}
        </h1>
        <div className="description">
          <Typewriter
            className="description"
            onInit={(typewriter) => {
              typewriter
                .changeDelay(80)
                .typeString("I'm a Software Engineer")
                .pauseFor(1500)
                .deleteAll()
                .typeString("Backend Focus. ")
                .pauseFor(500)
                .typeString("Frontend Capable. ")
                .pauseFor(500)
                .typeString("Full-stack.")

                .start();
            }}
          />
        </div>
      </div>
      <div className="image-container">
        <motion.img
          className="homeImage"
          initial={{ opacity: 0 }}
          animate={{ opacity: 0.4 }}
          transition={{ duration: 1, ease: "easeInOut" }}
          style={styles.homeImage}
          src={homeImage}
          alt="Joe Lee"
        />
      </div>
      <SocialIcons />
    </section>
  );
};

export default Home;
