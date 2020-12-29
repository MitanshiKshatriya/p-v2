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
<a className="nav-link" href="https://drive.google.com/file/d/1-FAXLRnmsqx1awPnHp8TJH5RGFkHmz18/view?usp=sharing">Resume</a>
    </div>
    </div>
  );
}

export default Navigate;
