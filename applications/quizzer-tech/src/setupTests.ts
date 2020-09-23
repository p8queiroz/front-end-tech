
//Using Ionic React Test Utils to mock Ionic Web Components
/*
Ionic is written in web components, and Ionic React is a thin layer 
around those components to make them feel and behave more like the 
React components. Unfortunately, JSDOM does not currently support web 
components and errors if trying to access web component API. SO, in 
order to test these components, use Jest to mock out the Ionic React 
components that can’t render (like IonModal), which is where Ionic 
React Test Utils (IRTU) comes into play. IRTU provides a helper that 
can mock out all known Ionic components that have issues rendering in 
JSDOM. The mocked components simulate the actual ones by rendering 
minimal DOM to test.*/

import { mockIonicReact } from '@ionic/react-test-utils';
mockIonicReact();