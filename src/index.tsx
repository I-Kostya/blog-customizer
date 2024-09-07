import { createRoot } from 'react-dom/client';
import { StrictMode } from 'react';
import { App } from './App/App';

const domNode = document.getElementById('root') as HTMLDivElement;
const root = createRoot(domNode);

root.render(
	<StrictMode>
		<App />
	</StrictMode>
);
