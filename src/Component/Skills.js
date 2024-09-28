import '../css/skills.css';
import Range from './Range.js';

function Skills(){
  const skillP=[
    {
      id: 1,
      H:"Html",
      R:'html'
    },
    {
      id: 2,
      H:"CSS",
      R:'css',
      B:'bar'
    },
    {
      id: 3,
      H:"JAVA",
      R:'jav',
      B:'bar'
    },
    {
      id: 4,
      H:"REACT JS",
      R:'py',
      B:'bar'

    },
    {
      id: 5,
      H:"SQL",
      R:'ja',
      B:'bar'
    }
  ]
  return(
    <> 
    <div className='skill'>
    <h1>MY SKILLS</h1>
    {
    skillP.map((item)=>(
      <Range Skill={item} />
    ))
    }
    </div> 
    </>
  );
}
export default Skills;