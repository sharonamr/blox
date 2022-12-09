import { BloxRoutes } from './generated-docs/Routes';
import * as componentLib from 'blox-example-components';
import { BrowserRouter as Router } from 'react-router-dom';
import { Layout } from './Layout';
import { ThemeProvider } from './theme';

const dependencies = {
  'blox-example-components': componentLib,
};

export default () => (
  <Router basename={process.env.BLOX_PUBLIC_PATH || ''}>
    <ThemeProvider>
      <Layout>
        <BloxRoutes dependencies={dependencies} />
      </Layout>
    </ThemeProvider>
  </Router>
);
