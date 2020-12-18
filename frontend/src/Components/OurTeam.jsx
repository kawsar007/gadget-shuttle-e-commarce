import React from "react";

import kawsar from "./image/kawsar.jpg";
import arman from "./image/arman.jpg";
import faruk from "./image/faruk.jpg";
import salman from "./image/salman.jpg";
import damra from "./image/damra.jpg";


function OurTeam() {
  return (
    <div className="OurTeam">
      <h2 className="TeamHeader">Our Team</h2>
      <div className="Team_Card">
          <div className="Team_Card_Body">
              <div className="Team_Content">
                  <div className="Team_Image">
                    <img src={kawsar} alt="Kawsar" height="150px" width="150px"/>
                  </div>
                  <div className="personal_info">
                    <h3>KAWSAR MIA</h3>
                    <p>Full Stack Developer</p>
                  </div>
              </div>
              <div className="card_text">
                  <p>Hello! I'm Kawsar Mia, a passionate Web Developer. I develop web applications, mobile applications, and desktop applications.</p>
              </div>
          </div>
          <div className="Team_Card_Body">
              <div className="Team_Content">
                  <div className="Team_Image">
                    <img src={arman} alt="Arman" height="150px" width="150px"/>
                  </div>
                  <div className="personal_info">
                    <h3>NOOR MOHAMMOD ARMAN</h3>
                    <p>Front-end Developer</p>
                  </div>
              </div>
              <div className="card_text">
                  <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, corrupti dignissimos.</p>
              </div>
          </div>    

          <div className="Team_Card_Body">
              <div className="Team_Content">
                  <div className="Team_Image">
                    <img src={faruk} alt="Faruk" height="150px" width="150px"/>
                  </div>
                  <div className="personal_info">
                    <h3>MD OMAR FARUQUE</h3>
                    <p>Designer</p>
                  </div>
              </div>
              <div className="card_text">
                  <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, corrupti dignissimos.</p>
              </div>
          </div>    
          <div className="Team_Card_Body">
              <div className="Team_Content">
                  <div className="Team_Image">
                    <img src={salman} alt="Salman" height="150px" width="150px"/>
                  </div>
                  <div className="personal_info">
                    <h3>MD SAL MAN SHAH </h3>
                    <p>Web Designer</p>
                  </div>
              </div>
              <div className="card_text">
                  <p>He is a professional and a successful web designer and developer. He has a vast experience in web designing. </p>
              </div>
          </div>    
          <div className="Team_Card_Body">
              <div className="Team_Content">
                  <div className="Team_Image">
                    <img src={damra} alt="Kawsar" height="150px" width="150px"/>
                  </div>
                  <div className="personal_info">
                    <h3>MD ZAHIDUL HASAN</h3>
                    <p>Front-end Developer</p>
                  </div>
              </div>
              <div className="card_text">
                  <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, corrupti dignissimos.</p>
              </div>
          </div>    
      </div>
    </div>
  );
}

export default OurTeam;
