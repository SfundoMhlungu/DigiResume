
function atag(href, text){
    return    {
        tag: "a",
        attrs:{
        href,
        target: "_blank"
        },
        children: [text]

    }
}


function li(text){
    return {
        tag: "li",
        children: [text]
    }
}

function cardTechStack(stack){
    return {
        tag: "div",
        attrs: {
            class: "card--techstack"
        },
        children: [
            {
                tag: "span",
                children: [stack]
            }
        ]
    }

}

export function Hero(){
       
    return {
        tag: "section",
        attrs: {
            class: "section--page",
            id: "wrapper--hero"
        },
        children: [
            // {
            //     tag: "img",
            //     attrs: {
            //         id: "profile-pic",
            //         src: ""
            //     }
            // },
            {
                tag: "div", 
                children: [
                    {
                        tag: "h1",
                        attrs: {
                            id: "user-name",

                        },
                        children: ["Sifundo Mhlungu"]
                    },
                    {
                        tag: "p", 
                        attrs: {
                            id: "bio"
                        },
                        children: [
                            "Front-end developer  ",
                            
                            ", ",
                            "Building robust and performant apps in JavaScript for all platforms. ",
                         

                        ]
                    },
                    {
                        tag: "p",
                        attrs: {
                            id: "email"
                        },
                        children: ["👉 mhlungusk@gmail.com"]
                    }
                ]
            }
        ]
    }

}

export function Socials(){
    return {
        tag: "section",
        attrs: {
            class: "section--page"
        },
        children: [
            {
                tag: "div",
                attrs: {
                    id: "socials--list"
                },
                children: [
                
                    atag("https://twitter.com/MhlunguSfundo", "Twitter"),
                    atag("https://www.linkedin.com/in/sfundo-mhlungu-331588168", "Linkedin"),
                    atag("https://github.com/SfundoMhlungu", "Github"),
                    atag("https://dev.to/sfundomhlungu", "dev.to"),
                    atag("/React-js-ts Resume.pdf", "Download Resume"),
                ]
            }
        ]
    }
}

export function Skills(){
    return {
        tag: "section",
        attrs: {
            class: "section--page"
        },
        children: [
            {
                tag: "ul",
                attrs: {
                    id: "qualifications--list"
                }, 
                children: [
                //   li("✔️ 7 Years experience with front & backend development"),
                  li("✔️ 5 years of coding experience in JavaScript, React and Ionic."),
                //   li("✔️ Extensive knowledge in API & Database Design."),
                  li("✔️ about a year of low level programming in wasm and Assemblyscript."),
                  li("✔️ Extensive knowledge in modular coding and design for JS and TS."),

                //   li("✔️ Experienced content creator on YouTube & community leader"),
                  li("✔️ Occasional technical writer on dev.to with over 8000 reads for 28 posts."),
                //   li("✔️ 7 Years experience with running Adwords campaigns & SEO")

                ]
            }
        ]

    }
}

export function techStack(){
    return {
        tag: "section",
        attrs: {
            class: "section--page"
        },
        children: [
            {
              tag: "h2",
              children: ["Tech stack"]
            },
            {
                tag: "div",
                attrs: {
                    id: "wrapper--techstack__items"
                },
                children: [
                         cardTechStack("JavaScript, Typescript, Assemblyscript"),
                         cardTechStack("Ionic, Capacitor, Neutralino.js, Electron"),
                         cardTechStack("React, Next JS"),
                         cardTechStack("Saas, Tailwind, framer-motion"),
                         cardTechStack("Supabase, netlify, Zig, C"),
                         cardTechStack("HTML, CSS")
                ]
            }
        ]
    }
} 