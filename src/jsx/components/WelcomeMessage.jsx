
import React from 'react';

function WelcomeMessage() {
    return (
        <section class="welcome-section">
            <div class="background-image"></div>
            <div className='d-flex just-content-end'>
                <div class="welcome-message">
                    <h1>Welcome, {localStorage.getItem("username")}!</h1>
                    <p>Empower yourself with data, start using the calculator today, and take a step towards a sustainable and greener tomorrow.</p>
                </div>

            </div>
        </section>
    );
}

export default WelcomeMessage;
