function card_work(title, period, description, points){


    return {
        tag: "div", 
        attrs: {
            class: "card--work-history"
        },
        children: [
            {
                tag: "strong",
                children: [title]
            },
            {
                tag: "p",
                children: [period]
            },
            {
                tag: "p",
                children: [description]
            },
            {
                tag: "ul",
                children: points.map((point, i)=> {
                    return {
                        tag: "li",
                        children: [point]
                    }
                })
            }
        ]
    }
}


export function linebreak(){
    return {
        tag: "div",
        attrs: {
            class: "line-break"
        }
    }
}

export function WorkWrapper(){
    
    
    return {
        tag: "div",
        attrs: {
            id: "work-history-wrapper",
            class: "section--page"
        },
        children: [
            {
                tag: "h2",
                children: ['Experience']
            }
        ]
    }
}

export function Work(work){
    const workTree = []
    

    work.forEach((w, i)=> {
        workTree.push(card_work(w.title, w.period, w.description, w.points))

    })

    return workTree
}