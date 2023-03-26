import React, { useEffect, useState } from "react";
import { Handle } from "react-flow-renderer";
import profile from "../../assets/images/profile.png";
import dots from '../../assets/images/dots.png'
import plus from '../../assets/images/plus.png'

const CustomNode = ({data}) => {
  const [imgLoaded, setImgLoaded] = useState(false);
  console.log(data)
  return (
    <div style={{ background: "#fff", }}>
      <div className="custom-node">
        <img src={dots} height={13} width={16} alt="dots" className="dots-image"/>
        <b className="profile-name">{data.employeeName}</b>
        <b className="designation-text">{data.designation}</b>
        <img
          src={profile}
          alt="profile"
          width={58}
          height={58}
          className="profile-image"
        />
        <img
          src={plus}
          alt="plus"
          width={20}
          height={20}
          className="plus-image"
        />
      </div>
      
      <Handle type="source" position="bottom" />
      {data.employeeName === "Dave Cooper" ?  <Handle type="target" position="left"/>:  <Handle type="target" position="top"/>}
    </div>
  );
};

export default CustomNode;