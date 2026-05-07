import { About } from './About';
import { Skills } from './Skills';
import { Experience } from './Experience';
import { Education } from './Education';

export { PrintView } from './PrintView';

export const Main = () => {
  return (
    <div style={{ overflow: 'scroll' }} className="sm:p-12 px-5 py-8">
      <About />
      <hr />
      <Experience />
      <hr />
      <Skills />
      <hr />
      <Education />
    </div>
  );
};
