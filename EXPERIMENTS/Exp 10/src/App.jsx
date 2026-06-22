import React, { useState, useEffect } from 'react';
import './App.css';

function App() {
  
  const [formData, setFormData] = useState({ name: '', email: '', password: '' });
  
  const [errors, setErrors] = useState({});
  
  const [isSubmitted, setIsSubmitted] = useState(false);
  
  const [userList, setUserList] = useState([]);

 
  useEffect(() => {
    
    console.log("Component loaded. useEffect is active.");
  }, []);

  
  const validate = () => {
    let tempErrors = {};
    if (!formData.name) tempErrors.name = "Name is required";
    if (!formData.email.includes("@")) tempErrors.email = "Valid email is required";
    if (formData.password.length < 6) tempErrors.password = "Password must be at least 6 characters";
    setErrors(tempErrors);
    return Object.keys(tempErrors).length === 0;
  };

  
  const handleSubmit = (e) => {
    e.preventDefault();
    if (validate()) {
      
      setUserList([...userList, formData]);
      setIsSubmitted(true);
    
      setFormData({ name: '', email: '', password: '' });
    }
  };

  return (
    <div className="container">
      <div className="registration-card">
        <h1>Registration Form</h1> 

        <form onSubmit={handleSubmit}>
          
          <div className="input-group">
            <input 
              type="text" 
              placeholder="Enter Name" 
              value={formData.name}
              onChange={(e) => setFormData({...formData, name: e.target.value})} 
            />
            {errors.name && <p className="error-msg">{errors.name}</p>}
          </div>

          <div className="input-group">
            <input 
              type="email" 
              placeholder="Enter Email" 
              value={formData.email}
              onChange={(e) => setFormData({...formData, email: e.target.value})} 
            />
            {errors.email && <p className="error-msg">{errors.email}</p>}
          </div>

          <div className="input-group">
            <input 
              type="password" 
              placeholder="Enter Password" 
              value={formData.password}
              onChange={(e) => setFormData({...formData, password: e.target.value})} 
            />
            {errors.password && <p className="error-msg">{errors.password}</p>}
          </div>

          <button type="submit" className="register-btn">Register</button> 
        </form>

        {isSubmitted && <p className="success-msg">Registration Successful!</p>} 

        
        <div className="registered-users-section">
          <h3>Registered Users</h3>
          {userList.length > 0 ? (
            <ul className="user-list">
              {userList.map((user, index) => (
                <li key={index}>
                  <strong>{user.name}</strong> - {user.email}
                </li>
              ))}
            </ul>
          ) : (
            <p>No users registered yet.</p>
          )}
        </div>
      </div>
    </div>
  );
}

export default App;