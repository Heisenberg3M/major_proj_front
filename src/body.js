import React from "react";
import SplitPane, { Pane } from "react-split-pane";
import './body.css'; 

const Body = () => {
  return (
    <div>
      <SplitPane defaultSize="30%" split="vertical">
        <Pane initialSize="200px">You can use a Pane component</Pane>
        <div>or you can use a plain old div</div>
        <iframe src="https://docs.google.com/a/...."></iframe>
        <Pane initialSize="25%" minSize="10%" maxSize="500px">
          Using a Pane allows you to specify any constraints directly
        </Pane>
      </SplitPane>
      ;
    </div>
  );
};

export default Body;
