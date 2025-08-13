import React from "react";

export default function Footer() {
  return (
    <footer
      style={{
        textAlign: "center",
        padding: "10px",
        fontSize: "14px",
        color: "#555",
        borderTop: "1px solid #ddd",
        marginTop: "20px",
      }}
    >
      ☀️ Weather App &copy; {new Date().getFullYear()} | Built with ❤️ in React
    </footer>
  );
}
