import "./Project.css";

type ProjectProps = {
  color: string;
  cover: string;
  decorationImg: string;
  fontColor: string,
  title: string,
  description: string,
  theme: 'light' | 'dark'
};
const Project: React.FC<ProjectProps> = (props) => {
  const color = props.color;
  const cover = props.cover;
  const decorationImg = props.decorationImg;
  const fontColor = props.fontColor;

  return (
    <section className="project" style={{ backgroundColor: color, color: fontColor}}>
      <div className="two-column-layout" style={{backgroundImage: `url("${decorationImg}"`}}>
        <div className="left">
          <h1 className="project-title">{props.title}</h1>
          <p className="project-description">
            {props.description}
          </p>
          <button className="button main-button">Open App</button>
          <button className="button secondary-button" style={props.theme === 'light' ? {backgroundColor: 'rgb(255 255 255 / 10%)'} : {backgroundColor: 'rgb(0 0 0 / 20%)'}}>Learn More</button>
        </div>
        <div className="right">
          <div className="cover-wrapper">
            <img className="cover" src={cover} alt="" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Project;
