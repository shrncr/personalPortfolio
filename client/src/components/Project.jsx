import React from "react";


export default function Project(props){
    //each project has the same structure
    //same size, layout, animations
    //that means it should be its own component
    //the only thing that differs is the "innerhtml," w
    //which will be passed in as "props" 
    //components are lowkey just glorified classes
    //props is like the data you put in the constructor

    const title = props.title;
    const tech = props.tech.join(", ");
    const desc = props.desc;
    const img = props.img;
    console.log(img)
    const link = props.link;
    console.log(link);
    return(
        <a className="item" href={link} target="_blank" rel="noopener noreferrer">
            <figure className="overlay">
                <img src={"images/" + img}></img>
            </figure>
            <div className="innerHover">
                <span>
                    <p>Technologies Used:</p>
                    <p>{tech}</p>
                </span>
                <span>
                    <p>Description:</p>
                    <p>{desc}</p>
                </span>
            </div>
            <p className="titlep">{title}</p>
        </a>
    ) //I am returning the html layout of a single project
}