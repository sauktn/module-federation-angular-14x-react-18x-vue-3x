import { createRoot } from 'react-dom/client';
const container = document.getElementById('root');
import { ProfileReactComponent } from './component/ProfileReactComponent';
import React from "react";

const root = createRoot(container);
root.render(<ProfileReactComponent  />);
