import React from 'react'
import { Link } from 'react-router-dom'
export default  function About(props){
    return(
        <div className="container" style={{color: props.mode==='dark'?'white':'black'}}>
            <div className="container my-5 ">
                {/* <h2>About Us</h2> */}

                <h2>Welcome to TextUtils!</h2>
                <h2 className="my-3">Our Mission</h2>
                <p>
                    <strong>Empowering Your Text Experience:</strong> TextUtils is on a mission to empower individuals, writers, and businesses by providing a range of text manipulation and analysis tools. Whether you're a content creator, student, or professional, we've got the features you need to enhance your text-related tasks.
                </p>

                <h2 className="mb-3">What We Offer</h2>
                <div className="row">
                    <div className="col-md-6">
                    <h3 className="mb-3">Text Transformation:</h3>
                    <ul>
                        <li>Uppercase: Convert your text to uppercase for emphasis or consistency.</li>
                        <li>Lowercase: Transform text to lowercase for a uniform look or stylistic preference.</li>
                        <li>Sentence Case: Capitalize the first letter of each sentence effortlessly.</li>
                        <li>Remove Extra Space: Clean up your text by eliminating unnecessary spaces.</li>
                        <li>Clear Text: Start fresh with a clean slate by clearing your text area.</li>
                        <li>Copy Text: Copy your transformed text with a single click.</li>
                    </ul>
                    </div>
                    <div className="col-md-6">
                    <h3 className="mb-3">Text Analysis:</h3>
                    <ul>
                        <li>Word Counter: Get instant word counts to track your document's length.</li>
                        <li>Read Time: Estimate the time it takes to read your text for better planning.</li>
                    </ul>
                    </div>
                </div>

                <h2 className="my-3">How TextUtils Works</h2>
                <ul>
                    <li>Easy to Use: Our user-friendly interface makes it simple for anyone to transform and analyze text.</li>                   
                    <li>Instant Results: Experience real-time updates as you apply transformations or analyze your text.</li>
                    <li>Copy and Paste: Effortlessly copy your final text and paste it wherever you need it.</li>
                </ul>                   

                <h2 className="my-3">Meet the Team</h2>
                <p>
                    Behind TextUtils is a passionate team of developers and designers dedicated to creating tools that add value to your text-related endeavors. We're committed to continuous improvement and innovation to ensure TextUtils remains your preferred text companion.
                </p>

                <h2 className="my-3">Contact Us</h2>
                <p>
                    Have feedback, questions, or suggestions? We'd love to hear from you! Reach out to us at <Link To="mailto:rifsha.ashraf1@gmail.com" style={{color: props.mode==='dark'?'white':'black', textDecoration:'none', fontWeight:'bold'}}>contact@textutils.com</Link>. Your input is invaluable as we strive to enhance and expand the TextUtils experience.
                </p>

                <h2 className="my-3">Join the TextUtils Community</h2>
                <p>
                    Connect with us on social media to stay updated on the latest features, tips, and community stories. Follow us on <Link to="https://www.linkedin.com/in/rifshaashraf/" style={{color: props.mode==='dark'?'white':'black', textDecoration:'none', fontWeight:'bold'}} target="_blank" rel="noopener noreferrer">LinkedIn</Link> to become part of the TextUtils community.
                </p>

                <p>
                    Thank you for choosing TextUtils! We're excited to be a part of your text transformation journey.
                </p>
            </div>
        </div>
    );
 }

 