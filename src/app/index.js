console.log("Hello World! ReactJS Basics")

import React from "react"; 
import { render } from "react-dom";

import { Header } from "./components/Header";
import { Home } from "./components/Home";

class App extends React.Component
{
    constructor()
    {
        super();
        this.state = {
            homeLink:"Home",
            homeMounted:true
        };
    }

    onGreet()
    {
        alert("Hello!");
    }

    onChangeLink(newName)
    {
        this.setState({
            homeLink:newName
        });
    }

    onChangeHomeMounted(newName)
    {
        this.setState({
            homeMounted:!this.state.homeMounted
        });
    }

    render()
    { 
      var user = {
            name: "Saravanan",
            hobbies: ["Sports", "watching movies", "listen to music"]
        };
        let homeCmp="";
        if(this.state.homeMounted)
            {
                homeCmp = (
                            <Home 
                                empId={51679384} 
                                initialAge={40} 
                                user={user} 
                                greet={this.onGreet}
                                changeLink={this.onChangeLink.bind(this)}
                                initialLinkName={this.state.homeLink}>

                                <p> This is paragrah contents using child element!!</p>
                        </Home>
                );
            }

        return(
            <div className="container">
                <div className="row">
                    <div className="col-xs-10 col-xs-offset-1">
                        <Header homeLink={this.state.homeLink}/>
                    </div>
                </div>
                <div className="row">
                    <div className="col-xs-10 col-xs-offset-1">
                        {homeCmp}
                    </div>
                </div>
                 <div className="row">
                    <div className="col-xs-10 col-xs-offset-1">
                        <button onClick={this.onChangeHomeMounted.bind(this)} className="btn btn-primary">(Un)Mount Home Component</button>
                    </div>
                </div>
            </div>
        );
    }
}

render(<App/>, window.document.getElementById("app"));