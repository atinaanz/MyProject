import React, {Component} from 'react';
import axios from 'axios';

export default class Register extends Component {

    handleSubmit= e=>{
        e.preventDefault();
        const data ={
            first_name: this.firstName,
            last_name: this.lastName,
            email: this.email,
            password: this.password,
            confirm_password: this.comfirmPassword
        };
        //console.log(data);
        axios.post('http://localhost:8000/register', data).then(
            res=>{
                console.log(res)
            }
        ).catch(
            err=>{
                console.log(err);
            }
        )
    };
    render(){
        return(
            <form onSubmit={this.handleSubmit}>
                <h3>Sign Up</h3>

                <div className='form-group'>
                    <label>First Name</label>
                    <input type='text' className='from-control' placeholder="First Name"
                    onChange={e => this.firstName= e.target.value}/>
                </div>

                <div className='form-group'>
                    <label>Last Name</label>
                    <input type='text' className='from-control' placeholder="Last Name"
                         onChange={e => this.lastName= e.target.value}/>
                </div>

                <div className='form-group'>
                    <label>Email</label>
                    <input type='email' className='from-control' placeholder="Email"
                         onChange={e => this.email= e.target.value}/>
                </div>

                <div className='form-group'>
                    <label>Password</label>
                    <input type='pasword' className='from-control' placeholder="Password"
                         onChange={e => this.password= e.target.value}/>
                </div>

                <div className='form-group'>
                    <label>Confirm the password</label>
                    <input type='password' className='from-control' placeholder="Confirm the password"
                         onChange={e => this.confirmPassword= e.target.value}/>
                </div>
                <button className='btn btn-primary btn-block'>Sign Up</button>
            </form>
        )
    }
}
