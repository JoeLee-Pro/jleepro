const SocialIcons = () => {
  const styles = {
    icon: {
      textDecoration: "none",
      fontSize: "22px",
      padding: "10px",
      transition: "0.2s ease-in",
      fontColor: "#fff",
    },
  };

  return (
    <div className="socialIcons" style={styles.socialicons}>
      <a className="icon" style={styles.icon} href="https://github.com/JoeLee-Pro">
        <i className="fa-brands fa-github" aria-hidden="true" title="Joe Lee's GitHub Profile"></i>
      </a>
      <a className="icon" style={styles.icon} href="https://www.linkedin.com/in/jleepro/">
        <i className="fa-brands fa-linkedin" aria-hidden="true" title="Joe Lee's LinkedIn Profile"></i>
      </a>
      <a className="icon" style={styles.icon} href="https://www.facebook.com/JLeePro.WebDev/">
        <i className="fa-brands fa-facebook" aria-hidden="true" title="Joe Lee's Facebook Profile"></i>
      </a>
      <a className="icon" style={styles.icon} href="https://twitter.com/j_leepro">
        <i className="fa-brands fa-x-twitter" aria-hidden="true" title="Joe Lee's Twitter Profile"></i>
      </a>
    </div>
  );
};

export default SocialIcons;
