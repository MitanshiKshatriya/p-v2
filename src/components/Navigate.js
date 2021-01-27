import '../App.css';

function Navigate(props) {

    const { changePage } = props;

  return (
      <div className="nav-box">
    <div>

<a className="nav-link" onClick={()=>{changePage("About")}}>About</a>
</div>
<div>
<a className="nav-link" onClick={()=>{changePage("Work")}}>Work</a>
    </div>
    <div>
<a className="nav-link" onClick={()=>{changePage("Projects")}}>Projects</a>
    </div>
    <div>
<a className="nav-link" target="_blank" href="https://drive.google.com/file/d/1qsoYIsrqUj1G68-EB_4mOHJqQtDJlq2N/view?usp=sharing">Resume</a>
    </div>
    </div>
  );
}

export default Navigate;
