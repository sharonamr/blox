import { BloxRoutes } from './generated-docs/Routes'
import { Menu } from './generated-docs/Menu'
import * as componentLib from 'blox-example-components';
import { HashRouter as Router } from "react-router-dom";
import bloxLogo from './assets/blox-logo.svg'
import githubLogo from './assets/github.svg'

const dependencies = {
  'blox-example-components': componentLib,
};

export default () => (
  <Router basename={window.location.href.includes('localhost') ? '' : '/blox'}>
    <div className="flex h-screen w-full flex-grow flex-col sm:flex-row sm:overflow-hidden">
      <div className="flex-shrink flex-grow-0 bg-white p-4 sm:w-full md:w-1/4 lg:w-1/5 shadow-lg">
        <img className="w-36 top-0 m-auto" src={bloxLogo} alt="blox logo" />
        <Menu className='md:w-32 lg:w-48 m-auto mt-8' />
      </div>
      <main role="main" className="flex h-full w-full flex-grow flex-col">
        <header className="flex-shrink-0 bg-primary h-16 flex items-center shadow-md">
          <a href="https://github.com/sharonamr/blox" className="blox-github-btn right-2 absolute">
            <img src={githubLogo} alt="Github logo" />
          </a>
        </header>
        <div className="h-full sm:overflow-auto md:px-32 lg:px-48 px-8">
          <BloxRoutes dependencies={dependencies} />
        </div>
      </main>
    </div>
  </Router>
)
