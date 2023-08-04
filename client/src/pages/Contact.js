import { useState } from 'react';

function Contact() {

    // const [userName, setUserName] = useState('');
    // const [email, setEmail] = useState('');
    // const [message, setMessage] = useState('');
    const [formData, setFormData] = useState({
        userName: '',
        email: '',
        message: ''
    });

    const access_key = 'fbd441f7-46e2-4e4b-86b0-8af12d9843b9';

    const handleInputChange = event => {
        const stateProp = event.target.name;
        const value = event.target.value;

        setFormData({
            ...formData,
            [stateProp]: value
        })
    }

    return (
        <main>
            <h1 className="text-center">Contact Me</h1>

            <form 
                action="https://api.web3forms.com/submit" 
                method="POST" 
                className="column">
                <input 
                    type="hidden" 
                    name="access_key" 
                    value={access_key} />
                <input 
                    name='userName' 
                    onChange={handleInputChange} 
                    value={formData.userName} 
                    type="text" 
                    placeholder="Enter your name" />
                <input 
                    name='email' 
                    onChange={handleInputChange} 
                    value={formData.email} 
                    type="email" 
                    placeholder="Enter your email address" />
                <textarea 
                    name='message' 
                    onChange={handleInputChange} 
                    value={formData.message} 
                    cols="30" rows="10" 
                    placeholder="Enter your message"></textarea>
                <button>Submit</button>
            </form>
        </main>
    )
}

export default Contact;