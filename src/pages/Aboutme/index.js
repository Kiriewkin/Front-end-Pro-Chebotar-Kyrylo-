import React, { useEffect } from "react";
import { Image } from "antd";
import { DesktopOutlined, TrophyOutlined, GithubOutlined, JavaScriptOutlined, Html5Outlined } from "@ant-design/icons";

import avatar from '../../assets/img/IMG_3365.JPG';
import './index.css'

export default function AboutMe() {
  useEffect(() => {
    document.querySelectorAll(".skillbar").forEach(skillbar => {
      const percent = skillbar.getAttribute("data-percent");
      skillbar.querySelector(".skillbar-fill").style.width = percent;
    });
  }, []);

  return (
    <div className="about-page">
      <h1>About Me</h1>
      <div style={{ display: "flex", justifyContent: "space-between", gap: 30 }}>
        <div className="image-container">
          <Image src={avatar} alt="myAvatar" className="myavatar" />
        </div>
        <div className="text-container">
          <p style={{ textAlign: "center", fontWeight: "bold", fontSize: 18 }}>
            Hi! My name is Kyrylo, and I'm a front-end developer from Odessa, Ukraine. My goal is to create beautiful and functional websites that benefit users.
          </p>
          <h2>My Skills:</h2>
          <ul>
            <li>JavaScript <JavaScriptOutlined />, HTML <Html5Outlined />, CSS, SASS</li>
            <li>React, GitHub <GithubOutlined /></li>
            <li>React with library: Redux, Redux-toolkit, Formik, Ant design</li>
            <li>Webpack, Gulp</li>
          </ul>
          <h2>My hobbies:</h2>
          <ul>
            <li>Programming <DesktopOutlined /></li>
            <li>Gaming <TrophyOutlined /></li>
          </ul>
          <h2>My Education:</h2>
          <ul>
            <li>
              In 2021, I received a diploma from the State Educational Institution "Lyman Agrarian Lyceum" with a specialty in "Cook and Baker."
            </li>
            <li>
              In 2023, I earned a diploma as a Junior Bachelor of Hospitality and Restaurant Management from Sumy Vocational College of Economics and Trade.
            </li>
            <li>
              In 2024, I completed the Front-End Basic course at Hillel IT School.
              <ul>
                <li>Average grade for homework: 100</li>
                <li>Rank in the group: 2</li>
                <li>Certificate link: <a href="https://certificate.ithillel.ua/view/61492112?_gl=1*dsq5p6*_gcl_au*MTEyNjcxODEwNC4xNzMzNDg4Mzg4*_ga*MjA3NTk1MDg0NS4xNzE0MDM1NzU3*_ga_KVGD0SKTQC*MTczNDcxNzA2My4zNDMuMS4xNzM0NzE3MTEzLjEwLjAuMjAyNDMzMzExNg.." target="_blank" rel="noopener noreferrer">View Certificate</a></li>
              </ul>
            </li>
            <li>
              Currently, I am successfully studying in the Front-End Pro course at Hillel IT School.
            </li>
          </ul>
          <h2>Skills:</h2>
          <div className="skill-area">
            <div className="skillbar" data-percent="75%">
              <div className="skillbar-title">
                <span>CSS</span>
              </div>
              <div className="skillbar-bg">
                <div className="skillbar-fill"></div>
              </div>
              <div className="skillbar-percent">75%</div>
            </div>
            <div className="skillbar" data-percent="99%">
              <div className="skillbar-title">
                <span>HTML</span>
              </div>
              <div className="skillbar-bg">
                <div className="skillbar-fill"></div>
              </div>
              <div className="skillbar-percent">99%</div>
            </div>
            <div className="skillbar" data-percent="60%">
              <div className="skillbar-title">
                <span>JavaScript</span>
              </div>
              <div className="skillbar-bg">
                <div className="skillbar-fill"></div>
              </div>
              <div className="skillbar-percent">60%</div>
            </div>
            <div className="skillbar" data-percent="75%">
              <div className="skillbar-title">
                <span>React</span>
              </div>
              <div className="skillbar-bg">
                <div className="skillbar-fill"></div>
              </div>
              <div className="skillbar-percent">75%</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
