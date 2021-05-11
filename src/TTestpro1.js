import React, { Profiler } from 'react';
import ReactDOM from 'react-dom';
import $ from 'jquery';  //import jquery 才可以用$$

const profile=()=>{
    class UserGithub extends React.Component {     
        constructor(props) {         
            super(props);         
            this.state = {  
                avatarUrl: '',           
                username: '',    
                login: '', 
                id: '', 
                node_id: "",        
                githubUrl: '',           
                public_repos: '',
                created_at:'',
                updated_at:'',
            }     
        }     
        componentDidMount() {
            $.get(this.props.source, (result) => {
                console.log(result);
                const data = result;             
                if (data) {               
                    this.setState({          
                        avatarUrl: data.avatar_url,           
                        username: data.name, 
                        login: data.login, 
                        id: data.id, 
                        node_id: data.node_id,                     
                        githubUrl: data.html_url,  
                        public_repos: data.public_repos,   
                        created_at:data.created_at,
                        updated_at:data.updated_at,

                    });
                }         
            });     
        }     
        render() {         
            return (           
                <div style={{position: 'absolute', left: '50%', top: '50%',transform: 'translate(-50%, -50%)'}}>  
                    <img src={this.state.avatarUrl} />           
                    <h1>My name is {this.state.username}.</h1> 
                    <h3>Login Name: {this.state.login}</h3>
                    <h3>Id: {this.state.id}</h3>
                    <h3>Node_id: {this.state.node_id}</h3>
                    <h2>I have {this.state.public_repos} public repositories.</h2> 
                    <a href={this.state.githubUrl}>Github Link</a>
                </div>         
            );     
        } 
    } 
    ReactDOM.render(<UserGithub source="https://api.github.com/users/Zi-Tao" />,   
        document.getElementById('root')
    );

    var output=[];
    output.push(<UserGithub />);
    return output;
}

export default profile;