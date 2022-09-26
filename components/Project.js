import Pub from "../Pub";

const ul = (project) => ({
    tag: "ul",
    attrs: {
       style: "display:flex; cursor: pointer; width: 100%; justify-content: space-evenly;"
    },
    children: 
        project.live && project.source ? [ 
            {
            tag: "a",
            attrs: {
             href: project.live,
             target: "_blank"
            },
            children: ["Live Demo"]
          }, {
             tag: "a",
             attrs: {
              href: project.source,
              target: "_blank"
             },
             children: ["Source Code"]
          }
             
     ] : project.live ?  [{
         tag: "a",
         attrs: {
          href: project.live,
          target: "_blank"
         },
         children: ["Live Demo"]
       }] : project.source ? [{
         tag: "a",
         attrs: {
          href: project.source,
          target: "_blank"
         },
         children: ["Source Code"]
      }] : [""],

    
})


export function Project(project){
    // console.log(project, project.live)

       return {
           tag: "div",
           attrs: {
               id: "container--main"
           },
           children: [
               {
                   tag: "a",
                   attrs: {
                       
                       onclick: () => Pub.notify("Router", {route: "main", data: null})
                   },
                   children: ["👈🏽, Go Back"]
               },
               {
                   tag: "h1",
                   children: [project.name]
               },
               ul(project),
               {
                   tag: "p",
                   children: [project.description]

               },
               {
                tag: "ul",
                children: project.points.map((point, i)=> {
                    return {
                        tag: "li",
                        children: [point]
                    }
                })
            }
              
           ]
       } 



}