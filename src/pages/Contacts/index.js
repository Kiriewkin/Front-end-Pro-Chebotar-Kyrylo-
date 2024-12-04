import { React, useState } from 'react';

import './index.css'

export default function Contacts() {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        message: '',
    })

    const handleSumbit = (e) => {
        e.preventDefault();
        console.log('Данные', formData)
    }

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prevData) => ({
            ...prevData,
            [name]: value,
        }));
    };

    return (
        <div className="contact-page">
            <h1>Контакти</h1>
            <p>Ви можете зв'язатися зі мною через наступні канали:</p>

            <div className="contact-details">
                <div className="contact-item">
                    <h3>Email:</h3>
                    <p><a href="mailto:example@example.com">example@example.com</a></p>
                </div>

                <div className="contact-item">
                    <h3>Телефон:</h3>
                    <p>+380 123 456 789</p>
                </div>

                <div className="contact-item">
                    <h3>Адреса:</h3>
                    <p>Одеса, Україна</p>
                </div>
            </div>

            <p>Залиште повідомлення через форму нижче:</p>

            <form className="contact-form" onSubmit={handleSumbit}>
                <input
                    type="text"
                    id="name" 
                    name="name" 
                    value={formData.name} 
                    onChange={handleChange} 
                    placeholder="Ваше ім'я" />
                <input
                    type="email" 
                    id="email" 
                    name="email" 
                    value={formData.email}
                    onChange={handleChange} 
                    placeholder="Ваш email" />
                <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange} placeholder="Ваше повідомлення"></textarea>
                <button type="submit">Надіслати</button>
            </form>
        </div>
    );
}
