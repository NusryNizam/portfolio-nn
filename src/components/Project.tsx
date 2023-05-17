import { forwardRef, ForwardRefExoticComponent, RefAttributes } from "react";
import "./Project.css";

type ProjectProps = {
  color: string;
  cover: string;
  decorationImg: string;
  fontColor: string,
  title: string,
  description: string,
  theme: 'light' | 'dark',
};
const Project: ForwardRefExoticComponent<ProjectProps & RefAttributes<HTMLDivElement>> = forwardRef<HTMLDivElement, ProjectProps>((props, ref) => {  
  const { color, cover, decorationImg, fontColor } = props;

  return (
    <section ref={ref} className="project" style={{ backgroundColor: color, color: fontColor}}>
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
});

export default Project;
