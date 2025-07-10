import React from 'react';

const Portfolio = () => {
  return (
    <div style={styles.container}>
      <h1 style={styles.header}>Hi, I'm Atharv Suryawanshi</h1>
      <p style={styles.subHeader}>Frontend Developer | React Enthusiast</p>

      <section style={styles.section}>
        <h2>About Me</h2>
        <p>
          I'm a passionate frontend developer who loves building clean and responsive web applications using React.
        </p>
      </section>

      <section style={styles.section}>
        <h2>Projects</h2>
        <ul>
          <li>✅ Portfolio Website</li>
          <li>✅ Weather App</li>
          <li>✅ Todo List</li>
        </ul>
      </section>

      <section style={styles.section}>
        <h2>Contact</h2>
        <p>Email: atharvs227@gmail.com</p>
      </section>
    </div>
  );
};

const styles = {
  container: {
    fontFamily: 'Arial, sans-serif',
    padding: '20px',
    maxWidth: '800px',
    margin: '0 auto',
    lineHeight: '1.6',
  },
  header: {
    fontSize: '2.5rem',
    marginBottom: '10px',
  },
  subHeader: {
    fontSize: '1.2rem',
    color: 'gray',
  },
  section: {
    marginTop: '40px',
  },
};

export default Portfolio;
