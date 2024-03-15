// import './TabButton.css';
// export default function TabButton({children, onClick}) {

//   return (
//     <li>
//       <button onClick={onClick}>{children}</button>
//     </li>
//   );
// }

//--------------------------------------------------------------
import React from 'react';
import './TabButton.css';
export default function TabButton({children, onClick}) {

  return (
    React.createElement(
      'li',
      null,
      React.createElement(
        'button',
        {onClick: onClick},
        children
      )
    )
  );
}
