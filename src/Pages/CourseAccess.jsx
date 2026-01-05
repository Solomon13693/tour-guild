import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { BsTelephone } from "react-icons/bs";
import { MdWhatsapp } from "react-icons/md";

const CourseAccess = () => {
  return (
    <div className="max-w-[1440px] w-full min-h-screen flex flex-col">
      <Navbar />
      <div className="flex-1 flex flex-col items-center justify-center py-12 px-6">
        <div className="max-w-[800px] w-full text-center space-y-8">
          {/* Product Name */}
          <div className="space-y-4">
            <div className="bg-lightblue rounded-[20px] w-fit mx-auto px-6 py-3">
              <p className="text-md font-primary text-darkblue">
                Blueprint: On relocation to Rwanda
              </p>
            </div>
            <h1 className="h1 mt-4 text-center leading-tight">
              Welcome to the Relocating to{" "}
              <span className="text-darkblue font-bold">Rwanda</span>:
              Blueprint!
            </h1>
            <p className="text-lg font-primary text-gray-700 mt-4">
              Thank you for your purchase! Click the button below to access your course.
            </p>
          </div>

          {/* Access Button */}
          <div className="pt-4">
            <a
              href="https://paystack.com/pay/wcye6nwtfb"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary inline-block text-center min-w-[250px]"
            >
              Access Course
            </a>
          </div>

          {/* Customer Support Details */}
          <div className="pt-8 border-t border-gray-200">
            <h2 className="h2 text-darkblue mb-6">Customer Support</h2>
            <div className="flex flex-col md:flex-row items-center justify-center gap-6 md:gap-8">
              <div className="flex flex-row items-center gap-3">
                <BsTelephone size={24} className="text-darkblue" />
                <div className="text-left">
                  <p className="font-primary text-sm text-gray-600">For Inquiries</p>
                  <a
                    href="tel:+250790137970"
                    className="font-primary text-base font-semibold text-darkblue hover:underline"
                  >
                    +2507 9013 7970
                  </a>
                </div>
              </div>
              <div className="flex flex-row items-center gap-3">
                <MdWhatsapp size={24} className="text-darkblue" />
                <div className="text-left">
                  <p className="font-primary text-sm text-gray-600">WhatsApp Support</p>
                  <a
                    href="https://wa.link/857kj5"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="font-primary text-base font-semibold text-darkblue hover:underline"
                  >
                    Chat with us
                  </a>
                </div>
              </div>
            </div>
            <p className="font-primary text-sm text-gray-600 mt-6">
              Need help? Our support team is here to assist you with any questions or issues.
            </p>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default CourseAccess;

