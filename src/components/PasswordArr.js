import React from 'react';
import EditPassItem from './EditPassItem';
import firebase from 'firebase/app';

class PasswordArr extends React.Component {
    state = {
        photo: '',
        user: ''
    };

    componentDidMount(){
        firebase.auth().onAuthStateChanged(user => {
            if(user){
                this.authHandler({ user });
            }
        });
    }

    authHandler = async authData => {
        const { email } = authData.user;
        this.setState({ user: email });
    };

    render() {
        const { user, photo } = this.state;
        const avatar = photo ? photo : '/images/avatar.png';
        return (
            <div>
                <div>
                    {user ? ( 
                    <div className='login-header'>
                        <div className='avatar'>
                            <img src={avatar} alt={user}/>
                        </div>
                        <button className='buttonLogout' onClick={this.props.handleLogout}>
                            Выйти
                        </button>
                    </div>
                    ) : null}
                </div>
            
            <div className="pass">
                {Object.keys(this.props.passItems).map(key => {
                    return <EditPassItem 
                    key={key} 
                    index={key}
                    passItems={this.props.passItems[key]}
                    deletePass={this.props.deletePass} 
                    updatePass={this.props.updatePass}
                    />
                })}
                {/* <button onClick={this.props.loadPass}>Load Passwords</button> */}
            </div>
        </div>
            
        );
    }
}

export default PasswordArr;