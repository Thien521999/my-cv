import { About } from './About';
import { Skills } from './Skills';
import { Experience } from './Experience';
import { Education } from './Education';
import { Hobbies } from './Hobbies';
import { End } from './End';
import { Project } from './Project';

export const Main = () => {
  return (
    <div style={{ overflow: 'scroll' }}>
      <About />
      <hr />
      <Experience />
      <hr />
      <Skills />
      <hr />
      <Education />
      <hr />
      <Project />
      {/* <hr />
      <Hobbies /> */}
      <hr />
      <End />
    </div>
  );
};
