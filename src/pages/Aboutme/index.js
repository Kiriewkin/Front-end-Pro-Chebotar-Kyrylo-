import React from 'react';

import './index.css'

export default function AboutMe() {
  return (
    <div className="about-page">
      <h1>Про мене</h1>
      <p>Привіт! Мене звати Кирило, і я фронтенд-розробник із Одеси, Україна. Моя мета — створювати красиві та функціональні веб-сайти, які приносять користь користувачам.</p>

      <h2>Мої навички:</h2>
      <ul>
        <li>JavaScript, HTML, CSS, SASS </li>
        <li>React, GitHub</li>
        <li>Webpack, Gulp</li>
      </ul>

      <h2>Мої захоплення:</h2>
      <ul>
        <li>Програмування</li>
        <li>Геймер</li>
      </ul>
    </div>
  );
}
