import React from "react";
import InputField from "./InputField";
import fruitImage from  "./Style/img/fruit1.jpg";

function Heroes(){
    return   <div className="container-xxl my-5 heroes-container">
    <div className="row p-4 pb-0 pe-lg-0 pt-lg-5 align-items-center rounded-3 border shadow-lg">
      <div className="col-lg-7 p-3 p-lg-5 pt-lg-3">
        <h1 className="display-4 fw-bold lh-1 text-body-emphasis">Border hero with cropped image and shadows</h1>
        <p className="lead"> responsive grid system, extensive prebuilt components, and powerful JavaScript plugins.</p>
        <div className="d-grid gap-2 d-md-flex justify-content-md-start mb-4 mb-lg-3">
          <InputField/>
        </div>
      </div>
      <div className="col-lg-4 offset-lg-1 p-0 overflow-hidden">
          <img className="rounded-lg-3" src={fruitImage} alt="" width="320"/>
      </div>
    </div>
  </div>
}

export default Heroes;