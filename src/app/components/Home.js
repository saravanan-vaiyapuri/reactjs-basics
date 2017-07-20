import React from "react";
import PropTypes from 'prop-types';

export class Home extends React.Component {

    constructor(props)
    {
        super();
        this.state = {
            age: props.initialAge,
            status: 0,
            homeLink: props.initialLinkName
        };
        setTimeout(() => {
            this.setState({
                status:1
            });
        },3000);
        console.log('Home Component Constructor!');
    }

    componentWillMount() {
      console.log('Component WILL MOUNT!');
   }

   componentDidMount() {
      console.log('Component DID MOUNT!');
   }

   componentWillReceiveProps(newProps) {    
      console.log('Component WILL RECIEVE PROPS!', newProps);
   }

   shouldComponentUpdate(newProps, newState) {
      console.log('SHOULD Component UPDATE !', newProps, newState);
      /*if(newState.status === 1)
        {
            return false;
        }*/
      return true;
   }

   componentWillUpdate(nextProps, nextState) {
      console.log('Component WILL UPDATE!', nextProps, nextState);
   }

   componentDidUpdate(prevProps, prevState) {
      console.log('Component DID UPDATE!', prevProps, prevState);
   }

   componentWillUnmount() {
      console.log('Component WILL UNMOUNT!');
   }

    onMakeOlder()
    {
        this.setState({
            age: this.state.age + 3
        });
    }

    onChangeLink()
    {
        this.props.changeLink(this.state.homeLink);
    }

    onHandleChange(event)
    {
        this.setState({
            homeLink: event.target.value
        });
    }

    render()
    {
        var text= "Here are some of my details";
        return(
            <div>
                <p>
                    Home Component!
                </p>
                <p>{text}</p>
                <p> Name: {this.props.user.name}</p>
                <p> Emp Id: {this.props.empId} </p>
                <p> Age: {this.state.age} </p>
                <p> Status: {this.state.status} </p>
                <div>
                    <h4> Hobbies </h4>
                    <ul>
                        {this.props.user.hobbies.map((hobby, i) => <li key={i}>{hobby}</li>)}
                    </ul>
                </div>
                <hr/>
                <button onClick={() => this.onMakeOlder()} className="btn btn-primary">Make me Older! </button>
                <hr/>
                 <button onClick={this.props.greet} className="btn btn-primary">Greet </button>
                <hr/>
                <input type="text" value={this.state.homeLink} 
                    onChange={(event) => this.onHandleChange(event)}/>
                 <button onClick={this.onChangeLink.bind(this)} className="btn btn-primary">Change Label! </button>
                <hr/>
                {this.props.children}
            </div>
        );
    }
}

Home.propTypes = {
    empId:React.PropTypes.number,
    initialAge:React.PropTypes.number,
    user:React.PropTypes.object,
    children:React.PropTypes.element.isRequired,
    greet:React.PropTypes.func,
    initialLinkName:React.PropTypes.string
}