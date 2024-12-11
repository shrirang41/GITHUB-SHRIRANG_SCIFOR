import React from "react";
import "./App.css";

class App extends React.Component {
  render() {
    // Inline styles for the heading and paragraph
    const styles = {
      heading: {
        color: "#4CAF50",
        fontSize: "2rem",
        textAlign: "center",
      },
      paragraph: {
        color: "#555",
        fontSize: "1.2rem",
        lineHeight: "1.6",
        margin: "20px",
      },
    };

    return (
      <div>
        {/* Heading */}
        <h1 style={styles.heading}>Welcome to My React App</h1>
        {/* Paragraph */}
        <p style={styles.paragraph}>
          This is a simple React application created using a class component.
        </p>
      </div>
    );
  }
}

export default App;
