import React from 'react';
import ReactDOM from 'react-dom'
import $ from 'jquery';  //要npm install jquery 欸

class UserGithub extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            account: '',
            name:'',
            avatar_url: '',
            about:'',
            company:'',
            html_url:'',
        }
    }
    componentDidMount() {
        $.get(this.props.source,(result) => {
            console.log(result);
            const data = result;
            if (data) { 
                this.setState({
                    account: data.login,
                    name: data.name,
                    avatar_url: data.avatar_url,
                    about: data.bio,
                    company: data.company,
                    html_url: data.html_url,
                    created_at: data.created_at,
                    updated_at: data.updated_at,
                });
            }
        });
    }
    render() {
        return (
            <div>
                <h1>This is user from {this.state.account}</h1>
                <h3>My face like...<br />
                    <img src={this.state.avatar_url} alt=""></img><br/></h3>
                <h1>Who am I?<br />
                    My name is 廷
                    {this.state.name}</h1><br />
                <h3>This html ... <br />                    
                    {this.state.about}</h3><br/>
                <h3>find me? <br />
                    in {this.state.html_url}</h3><br />
                <h3>what I doing now ? <br />
                    I'm {this.state.company}</h3><br />
                <h3>created_at: {this.state.created_at} <br />
                    updated_at: {this.state.updated_at}</h3>
            </div>
        );
    }
}
ReactDOM.render(
    <UserGithub source="https://api.github.com/users/b0829065" />,
    document.getElementById('root')
);


export default UserGithub;