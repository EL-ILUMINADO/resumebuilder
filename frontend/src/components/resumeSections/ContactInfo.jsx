import React from "react";

const ContactInfo = ({ icon, iconBG, value }) => {
  return (
    <div className="flex items-center gap-3">
      <div
        style={{ backgroundColor: iconBG }}
        className="w-[30px] h-[30px] flex items-center justify-center rounded-full"
      >
        {icon}
      </div>

      <p className="flex-1 text-[12px] font-medium break-all">{value}</p>
    </div>
  );
};

export default ContactInfo;
