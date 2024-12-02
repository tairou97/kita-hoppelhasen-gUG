import React from "react";

const ScrollButton = () => {
  const handleScrollToTop = () => {
    window.scrollTo({
      top: 0, // Scrollposition (oben)
      behavior: "smooth", // Sanftes Scrollen
    });
  };

  return (
    <button onClick={handleScrollToTop} style={styles.button}>
      Nach oben
    </button>
  );
};

const styles = {
  button: {
    position: "fixed",
    bottom: "50px",
    right: "-10px",
    padding: "10px 20px",
    backgroundColor: "#d6d02a",
    color: "#fff",
    zIndex: "1000",
    border: "none",
    borderRadius: "5px",
    cursor: "pointer",
  },
};

export default ScrollButton;
