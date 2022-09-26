import {clearEl} from "atomicus"
import {Main, Project} from "./views.js"

import { projects, MoreWork } from "./Model.js";
import Pub from "./Pub.js";

const cache = new Map();
const app = document.getElementById("container--main");

function scrollTo(el){

    const l = setTimeout(() => {
        el.scrollTop = el.scrollHeight;
        // console.log(el.scrollHeight)
    //    cache['app'] = app.innerHTML;
           clearTimeout(l)
       }, 500);
 }
 
// app.appendChild(innerEmptyDiv);

const router = (state) => {
         
         if(cache.has(state.route)){
             if(app.innerHTML !== ""){
                 clearEl(app)
             }
              app.appendChild(cache.get(state.route)); 
              scrollTo(app);
            //   console.log("returning early")
            return
         }

    switch (state.route) {
        case "main":
            // clearEl(app);
             const m = Main(projects, MoreWork)
            app.appendChild(m)
            
            cache.set('main',m);
            // scrollTo(m)
            break;
    
        case "project":
             clearEl(app);

             app.appendChild(Project(state.data));

            //  (async function(){
            //     Pub.notify("cleanDiv", null)
            //  })()
            break;
        default:
            break;
    }
}



router({route: "main", data: null})


Pub.subscribe("Router", (data)=> {
    // console.log(data); 
    router(data)
})