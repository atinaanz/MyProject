import React, {Component} from 'react';

export default class Register extends Component {
    render(){
        return(
            <form>
                <h3>Sign Up</h3>

                <div className='form-group'>
                    <label>First Name</label>
                    <input type='text' className='from-control' placeholder="First Name"/>
                </div>

                <div className='form-group'>
                    <label>Last Name</label>
                    <input type='text' className='from-control' placeholder="Last Name"/>
                </div>

                <div className='form-group'>
                    <label>Email</label>
                    <input type='text' className='from-control' placeholder="Email"/>
                </div>

                <div className='form-group'>
                    <label>Password</label>
                    <input type='text' className='from-control' placeholder="Password"/>
                </div>

                <div className='form-group'>
                    <label>Confirm the password</label>
                    <input type='text' className='from-control' placeholder="Confirm the password"/>
                </div>

            </form>
        )
    }
}