import React from "react";
import "./App.css"

const Youtube = () => {
  return (
    <div style={{backgroundColor:"	hsl(15, 100%, 5%)"} }>
      <hr></hr>
      <h2 className="text-center bg-info text-white ">
      <i class="fas fa-music"></i> Relaxing Music to rejuvenate your mind and body <i class="fas fa-music"></i>
      </h2>
      <hr></hr>
      <div className="row container-fluid text-center m ">
        {" "}
        <div className="  col mb-4 ">
          <iframe
          height="300"
          width="350"
            src="https://www.youtube.com/embed/StVO8lHfzkU"
            title="YouTube video player"
            
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          ></iframe>
        </div>
        <div className=" col">
          <iframe
           height="300"
            width="350"
            src="https://www.youtube.com/embed/kRf_JiuG_-E"
            title="YouTube video player"
            
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          ></iframe>
        </div>
        <div className=" col">
          <iframe
            height="300"
            width="350"
            src="https://www.youtube.com/embed/8uWXx9SO6fk"
            title="YouTube video player"
           
           allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          ></iframe>
        </div>
        <div className=" col">
          <iframe
            height="300"
            width="350"
            src="https://www.youtube.com/embed/K8tMg38vO3E"
            title="YouTube video player"
          
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          ></iframe>
        </div>
        <div className=" col">
          <iframe
           height="300"
            width="350"
            src="https://www.youtube.com/embed/SdC1gV2x8mI"
            title="YouTube video player"
           
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          ></iframe>
        </div>
        <div className=" col">
          <iframe
        height="300"
            width="350"
            src="https://www.youtube.com/embed/Ap2E0RlLx24"
            title="YouTube video player"
           
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          ></iframe>
        </div>
      </div>
    </div>
  );
};

export default Youtube;
