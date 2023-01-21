import { Summary } from './Summary';
import { Skills } from './Skills';
import { Experience } from './Experience';
import { Education } from './Education';


export const Main = () => {
  return (
    <div className='m-4 ' style={{overflow: 'scroll'}}>
        <Summary />
        <Skills />
        <Experience />
        <Education />
    </div>
  )
}