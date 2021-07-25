import React from 'react';

class AddPass extends React.Component {
    accountRef = React.createRef();
    loginRef = React.createRef();
    pasRef = React.createRef();

    createPass = event => {
        event.preventDefault();
        const passItem = {
            account: this.accountRef.current.value,
            login: this.loginRef.current.value,
            pass: this.pasRef.current.value
        };
        this.props.addPass(passItem);
        event.currentTarget.reset();
    };
    

    render(){
        return (
            <div>
                <form className='pass-edit' onSubmit={this.createPass}>
                    <input ref={this.accountRef} name='account' type='text' placeholder='Account' autoComplete='off' />
                    <input ref={this.loginRef} name='login' type='text' placeholder='Login' autoComplete='off' />
                    <input ref={this.pasRef} name='password' type='password' placeholder='Password' autoComplete='off' />
                    <button type='submit'>Add account</button>
                </form>
            </div>
        );
    }
}

export default AddPass;