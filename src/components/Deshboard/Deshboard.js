import React, { Fragment } from "react";
import Button from "../UI/Button/Button";
import Basiclayout from "../layout/basiclayout";
import './dashboard.css'
import { color } from "framer-motion";

export default function Dashboard(props) {
  return (
    <Fragment>
      <Basiclayout>
        <div className="dasContainer">
          <div className="dasHeader">
            <h1>DASHBOARD</h1>
            <Button>Add Entry</Button>
          </div>
          <div className="dasCard">
            <div className="items-1">
              <div style={{width:"15%",height:"35%",background:"red"}}>item</div>
            </div>
            <div className="items-2">item2</div>
            <div className="items-3">item3</div>
          </div>
        </div>
      </Basiclayout>
    </Fragment>
  );
}
