import React from 'react';
import PasswordArr from './PasswordArr';
import base from '../base';
// import passwordsArr from '../passwordsArr';
import AddPass from './AddPass';
import firebase from 'firebase/app';
import SignIn from './Auth/SignIn';

class App extends React.Component {
    state = {
        pass: {},
        passItems: {}
    };

    addPass = (pass) => {
        const passItems = { ...this.state.passItems };
        passItems[`pass${Date.now()}`] = pass;
        this.setState({ passItems });
    };

    updatePass = (key, updatePass) => {
        const passItems = { ...this.state.passItems };
        passItems[key] = updatePass;
        this.setState({ passItems });
    };

    deletePass = key => {
        const passItems = { ...this.state.passItems };
        passItems[key] = null;
        this.setState({ passItems });
    };

    // loadPass = () => {
    //     this.setState({passItems: passwordsArr});
    // };

    componentDidMount(){
        this.ref = base.syncState(`/`, {
            context: this,
            state: 'passItems'
        });
    }

    componentWillUnmount(){
        base.removeBinding(this.ref);
    }

    handleLogout = async () => {
        await firebase.auth().signOut();
        window.location.reload();
    };

    render() {
        return (
            <SignIn>
                <div>
                    <h2>Password Manager</h2>
                    <PasswordArr 
                    passItems={this.state.passItems} 
                    updatePass = {this.updatePass}
                    deletePass = {this.deletePass}
                    handleLogout = {this.handleLogout}
                    /> 
                    <AddPass addPass={this.addPass}/>               
                </div>
            </SignIn>   
        );
    }
}

export default App;