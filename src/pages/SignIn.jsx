import React, { useState } from 'react'
import { AiOutlineEye, AiOutlineEyeInvisible } from "react-icons/ai";
import { Link } from 'react-router-dom';
import OAuthButton from '../components/Buttons/OAuthButton';
import '../assets/css/styles.css';

export default function SignIn() {
    const [showPass, setShowPass] = useState(false);
    const [formData, setFormData] = useState({
        email: "",
        password: "",
    });
    const { email, password } = formData;
    function onChange(e){
        setFormData((prevState) => ({
            ...prevState,
            [e.target.id]: e.target.value,
        }));
    }
    return (
        <section className="main-form-section">
            <div className="form-section-wrapper">
                <form>
                    <div className="form-header"><h1>Sign In</h1></div>
                    {/* Email */}
                    <div className="form-wrapper">
                        <label htmlFor="email">Email Address *</label>
                        <div className="form-group">
                            <input type="text" className="form-input" id="email" name="email" placeholder="Email Address" value={email} onChange={onChange} required />
                        </div>
                    </div>
                    {/* Password */}
                    <div className="form-wrapper">
                        <label htmlFor="password">Password *</label>
                        <div className="form-group">
                            <input type={showPass ? "text" : "password"} className="form-input" id="password" name="password" placeholder="Password" value={password} onChange={onChange} required />
                            <i className="show-icon">{showPass ? <AiOutlineEyeInvisible onClick={()=>setShowPass((prevState) => !prevState)} /> : <AiOutlineEye onClick={()=>setShowPass((prevState) => !prevState)} />}</i>
                        </div>
                    </div>

                    <div className="sign-in-text">
                        <ul>
                            <li>Don't have an account? <Link to="/sign-up">Register</Link></li>
                        </ul>
                    </div>
                    <div className="s-btn-group">
                        <button className="submit-button" id="submit-button" type="button"> Sign In</button>
                        <span className="or-text">OR</span>
                        <OAuthButton />
                    </div>
                </form>
            </div>
        </section>
    )
}
