import React from "react";

const Newsletter = () => {
  return (
    <div className=" w-[100%] mx-auto mt-12 lg:mt-24 bg-Newsletter">
      <div className="w-[80%] flex flex-col gap-y-4 py-20 mx-auto">
        <div>
          <h1 className="h1 mt-4 justify-center text-center leading-11  text-white">
            Seamless Relocation To{" "}
            <span className="font-bold font-tetiary text-lightblue">
              Rwanda:
            </span>{" "}
            Enroll Now!
          </h1>
          <p className="text-white-100 font-primary text-[13px] text-center">
            Enroll in the Relocating to Rwanda: Your Complete Guide course today
            and embark on a seamless and successful relocation to this vibrant
            African nation.
          </p>
        </div>
        <a href="#" className="justify-center mx-auto">
          <a href="https://paystack.com/pay/wcye6nwtfb" target="_blank">
            <button className="btn-secondary mt-6">Enrol Now</button>
          </a>
        </a>
      </div>
    </div>
  );
};

export default Newsletter;
