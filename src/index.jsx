import React from "react";
import  ReactDOM  from "react-dom/client";
import Header from "./Header";
import Footer from "./Footer";
import "./Assets/index.css";


class App extends React.Component{


    render(){
        function shetyobineba(Text){ 
            window.alert (Text)
            }

        return(
            
            <div> 
               
                 <Header/>
                
                 <div>
                    <button onClick={() => shetyobineba("გამარჯობა მსოფლიო")}>Click</button>
                 </div>

                 <Footer/>

            </div>
           
        )
    }
}


var root = document.getElementById("root");
ReactDOM.createRoot(root).render(<App />);