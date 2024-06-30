import React, { useState } from "react";
import { AiOutlineLinkedin, AiOutlineGithub } from "react-icons/ai";

function App() {
  const [expand, setExpand] = useState(false);
  return (
    <div className="page-container">
      <div className="centered-container white">
        <div>
          <span
            onMouseEnter={() => setExpand(true)}
            onMouseLeave={() => setExpand(false)}
          >
            Halsey Quinn
          </span>
        </div>
        <div className="icon-links">
          <a href="https://github.com/quinnHalsey" className="icon-link">
            <AiOutlineGithub size={32} />
          </a>
          <a href="https://www.linkedin.com/in/halseyq/" className="icon-link">
            <AiOutlineLinkedin size={32} />
          </a>
        </div>
        <div className={expand ? "stack visible" : "stack"}>
          JavaScript | React | Gatsby | Redux | Node.js | Express | PostgreSQL | HTML5 |
          CSS3
        </div>
      </div>
    </div>
  );
}

export default App;
