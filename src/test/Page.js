import React from "react";
import { Button } from "react-daisyui";

export default function TestPage(props) {
  return (
    <div className="flex flex-col items-center justify-center gap-2 pt-4">
      <div>{props.name} Page</div>
      <div>Content will soon be added here</div>
      <Button color="primary" className="m-2">
        Hello World
      </Button>
    </div>
  );
}
