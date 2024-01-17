import React from "react";

const CopyRight = () => {
  return (
    <div className="copyright">
      <p>
        &copy; {new Date().getFullYear()} | Made with lots of{" "}
        <span role="img" aria-label="heart">
          ☕
        </span>{" "}
        by 
        <a href="https://manish.dev" target="_blank" rel="noreferrer">
          manish.dev
        </a>
      </p>
    </div>
  );
};

export default CopyRight;
