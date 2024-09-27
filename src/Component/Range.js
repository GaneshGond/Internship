import '../css/skills.css';

function Range({Skill}) {
    return(<>
        <div>
         <li>   
        <h2>{Skill.H}</h2>
        <span className='bar'><span className={Skill.R}></span></span>
        </li>
        </div>
        </>
    );
}
export default Range;