import React from 'react';
import App from '../../01vitereact/src/App';

import { createRoot } from 'react-dom/client'


function MyApp(){
  return(
    <div>
      <h1>Custom App!</h1>
    </div>
  )
}

// const ReactElement = {
//   type: 'a',
//   props:{
//       href: 'https://google.com',
//       target: '_blank'
//   },
//   children: 'Click me to visit google'
// }

const anotherElement = (
  <a href="https://google.com" target='_blank'>Visit google</a>
)

const anotherUser = "learning react"

const reactElement = React.createElement(
  'a',
  {href: 'https://google.com',target: '_blank'},
  'click me to visit google',
  anotherElement
)

createRoot(document.getElementById('root')).render(
  // <App/>
  reactElement
)
