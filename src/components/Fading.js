import React from 'react';
import { CSSTransition } from 'react-transition-group';
import '../styles/Fading.css'; // Import the CSS for fade animation

const FadeTransition = ({ children, ...props }) => {
  return (
    <CSSTransition
      {...props}
      classNames="fade"
      timeout={300}
      unmountOnExit
    >
      {children}
    </CSSTransition>
  );
};

export default FadeTransition;
