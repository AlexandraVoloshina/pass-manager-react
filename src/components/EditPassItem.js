import React from 'react';

class EditPassItem extends React.Component {

    handleChange = event => {
        const updatedPass = {
            ...this.props.passItem,
            [event.currentTarget.name]: event.currentTarget.value
        };
        this.props.updatePass(this.props.index, updatedPass);
    }

    showHide = event => {
        event.currentTarget.type = 'text';
    }

    hidePass = event => {
        event.currentTarget.type = 'password';
    }

    render() {
        // debugger;
        return (
            <div className="pass-edit">
                <input 
                    onChange={this.handleChange}
                    name="account" 
                    type='text' 
                    value={this.props.passItems.account} 
                />
                <input 
                    onChange={this.handleChange}
                    name="login" 
                    type='text'
                    value={this.props.passItems.login}
                />
                <input 
                    onChange={this.handleChange}
                    onClick={this.showHide}
                    onBlur={this.hidePass}
                    name="password" 
                    type={'password' || this.state.type} 
                    value={this.props.passItems.pass} 
                />
                <button
                onClick={() => this.props.deletePass(this.props.index)}
                >x</button>
            </div>
        )
    }
}

export default EditPassItem;