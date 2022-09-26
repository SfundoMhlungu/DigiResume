import Pub from "../Pub"



function CardProject(work){

    return {
        tag: "div",
        attrs: {
            class: "card--project"
        },
        children: [
            {
                tag: "a",
                attrs: {
                    // href:"#",
                    onclick: () =>  Pub.notify("Router", {route: "project", data: work})
                },
                children: [
                    {
                        tag: "span",
                        children: [work.emo]
                    },
                    work.name + " - " + work.description
                ]
            }
        ]
    }
}






export function MoreWork(moreWork){
   
    return {
        tag: "div",
        attrs: {
            class: "section-page"
        },
        children: [{
            tag: "h2",
            children: ["Other Noteworthy Projects"]
        }, ...moreWork.map(CardProject)]
    }

}


