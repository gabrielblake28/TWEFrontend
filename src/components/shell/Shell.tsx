import { useState } from "react";
import "./Shell.css";
import TopNav from "../TopNav/TopNav";

export default function Shell({ view }) {
  const [open, setOpen] = useState(false);

  return (
    <div>
      <div className="twe-shell-container">
        <div className="twe-shell-header">
          <TopNav setOpen={setOpen} />
        </div>
        <div className="twe-shell-content-body">{view}</div>
      </div>
    </div>
  );
}