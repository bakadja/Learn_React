import React, { useState } from 'react';
import './FeedbackForm.css'; // Import CSS for styling

const FeedbackForm = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        feedback: '',
        rating: ''
    });

    const handleChange = (event) => {
        const { name, value } = event.target;
        setFormData({
            ...formData,
            [name]: value
        });
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        const confirmationMessage = `
          Name: ${formData.name}
          Email: ${formData.email}
          Feedback: ${formData.feedback}
          Rating: ${formData.rating}
        `;

        const isConfirmed = window.confirm(`Please confirm your details:\n\n${confirmationMessage}`);

        if (isConfirmed) {
            console.log('Submitting feedback:', formData);

            setFormData({
                name: '',
                email: '',
                feedback: '',
                rating:''
            });

            alert('Thank you for your valuable feedback!');
        }
    };

    return (
        <>
            <nav>
                Tell Us What You Think
            </nav>

            <form onSubmit={handleSubmit} className="feedback-form">

                <h2>We'd Love to Hear From You!</h2>
                <p>Please share your feedback with us.</p>

                <input
                    type="text"
                    name="name"
                    placeholder="Your Name"
                    value={formData.name}
                    onChange={handleChange}
                />
                <input
                    type="email"
                    name="email"
                    placeholder="Your Email"
                    value={formData.email}
                    onChange={handleChange}
                />
                <textarea
                    name="feedback"
                    placeholder="Your Feedback"
                    value={formData.feedback}
                    onChange={handleChange}
                ></textarea>

                <fieldset>
                    <legend>Rate Us:</legend>

                    <div>
                        <input  type="radio" id="first" name="rating" value="1" onChange={handleChange} />
                        <label for="first">1</label>
                    </div>

                    <div>
                        <input type="radio" id="second" name="rating" value="2" onChange={handleChange} />
                        <label for="second">2</label>
                    </div>

                    <div>
                        <input type="radio" id="third" name="rating" value="3" onChange={handleChange} />
                        <label for="third">3</label>
                    </div>
                    
                    <div>
                        <input type="radio" id="fourth" name="rating" value="4" onChange={handleChange} />
                        <label for="fourth">4</label>
                    </div>

                    <div>
                        <input type="radio" id="fifth" name="rating" value="5" onChange={handleChange}/>
                        <label for="fifth">5</label>
                    </div>
                  
                </fieldset>

                <button type="submit">Submit Feedback</button>

            </form>
        </>
    );
};

export default FeedbackForm;
