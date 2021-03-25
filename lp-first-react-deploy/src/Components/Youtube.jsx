import React from "react";

const Youtube = () => {
  return (
    <div>
      <hr></hr>
      <h2 className="text-center bg-info text-white ">
        Relaxing Music to rejuvenate your mind and body
      </h2>
      <hr></hr>
      <div className="row">
        {" "}
        <div className="  col -4">
          <iframe
            width="425"
            height="315"
            src="https://www.youtube.com/embed/StVO8lHfzkU"
            title="YouTube video player"
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowfullscreen
          ></iframe>
        </div>
        <div className=" col-4">
          <iframe
            width="425"
            height="315"
            src="https://www.youtube.com/embed/kRf_JiuG_-E"
            title="YouTube video player"
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowfullscreen
          ></iframe>
        </div>
        <div className=" col-4">
          <iframe
            width="425"
            height="315"
            src="https://www.youtube.com/embed/8uWXx9SO6fk"
            title="YouTube video player"
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowfullscreen
          ></iframe>
        </div>
        <div className=" col-4">
          <iframe
            width="425"
            height="315"
            src="https://www.youtube.com/embed/K8tMg38vO3E"
            title="YouTube video player"
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowfullscreen
          ></iframe>
        </div>
        <div className=" col-4">
          <iframe
            width="425"
            height="315"
            src="https://www.youtube.com/embed/SdC1gV2x8mI"
            title="YouTube video player"
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowfullscreen
          ></iframe>
        </div>
        <div className=" col-4">
          <iframe
            width="425"
            height="315"
            src="https://www.youtube.com/embed/Ap2E0RlLx24"
            title="YouTube video player"
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowfullscreen
          ></iframe>
        </div>
      </div>
    </div>
  );
};

export default Youtube;
