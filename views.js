import { Hero, Socials, Skills, techStack} from "./components/hero.js";
import {Work, linebreak, WorkWrapper} from "./components/work"
import { MoreWork } from "./components/moreWork.js";
import { clearEl, createElement } from "atomicus";
import { Project as P } from "./components/Project.js";
import Pub from "./Pub.js";
// where are the views coming from 
// components


// main view 


const innerEmptyDiv = document.createElement("div");
innerEmptyDiv.clientHeight = "100%"
innerEmptyDiv.clientWidth = "100%"



// only two routes 

// main satic site  append on inner empty div

// projects  directly to app

innerEmptyDiv.appendChild(createElement(Hero()))
innerEmptyDiv.appendChild(createElement(Socials()))
innerEmptyDiv.appendChild(createElement(Skills()))
innerEmptyDiv.appendChild(createElement(techStack()))



// Pub.subscribe("cleanDiv", ()=> {
//     clearEl(innerEmptyDiv)
// })

export function Main(projects, more){
    // clearEl(innerEmptyDiv)
    const wrapper = createElement(WorkWrapper())
    // console.log(wrapper, "DEBUG: wrapper")

    const workTree = Work(projects)
    workTree.forEach((obj, i)=> {
        wrapper.appendChild(createElement(linebreak()))
        wrapper.appendChild(createElement(obj))
    })
    innerEmptyDiv.appendChild(wrapper)

    //  console.log("should return a list of projects");
     innerEmptyDiv.appendChild(createElement(MoreWork(more)))

    return innerEmptyDiv
}


// project 

export function Project(project){

    // console.log("should return an object of project");
    return createElement(P(project))
}