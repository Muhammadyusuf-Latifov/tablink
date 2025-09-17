import { memo } from "react";
import { FaTelegramPlane } from "react-icons/fa";
import { Phone } from "lucide-react";
import { FaInstagram, FaRegMessage } from "react-icons/fa6";
import { FiMail } from "react-icons/fi";
import { IoLocationOutline } from "react-icons/io5";
import { TiArrowBack } from "react-icons/ti";


const Home = () => {
 
  return (
    <section className="w-full h-screen flex items-center justify-center">
      <div className="container ">
        <h2 className="ism text-[#0066cc] mt-[20px] text-center  text-[36px] font-medium">
          Abdulatifov Muhammadyusuf
        </h2>
        <p className="text-center mb-[30px] text-[#acacac]">Age: 17</p>
        <div className="max-w-[800px] mx-auto">
          <div className="grid grid-cols-2  gap-[10px] ">
            <a
              href="https://t.me/abdulatifo_v"
              target="_blank"
              rel="noopener noreferrer"
            >
              <button className="w-[100%] px-[22px] flex items-center gap-[8px] py-[12px]  bg-[dodgerblue] text-[white] rounded-[8px] justify-center duration-150 hover:opacity-[.9]">
                <FaTelegramPlane className="text-[19px]" /> Telegram
              </button>
            </a>
            <a
              href="https://instagram.com/m.ab_top"
              target="_blank"
              className=""
            >
              <button className="insta w-[100%] px-[20px]  flex justify-center items-center gap-[8px] py-[12px]  text-[white] rounded-[8px] duration-150 hover:opacity-[.9]">
                <FaInstagram className="text-[19px]" />
                Instagram
              </button>
            </a>
            <a href="tel:+998941210144" target="_blank" className="">
              <button className="bg-green-500 w-[100%] px-[20px] flex items-center justify-center gap-[8px] py-[12px]  text-[white] rounded-[8px] duration-150 hover:opacity-[.9]">
                <Phone className="w-[20px] h-[20px]" /> Phone
              </button>
            </a>
            <a
              href="mailto:muhammadyusuf_2008m1@icloud.com"
              target="_blank"
              className=""
            >
              <button className="mail w-[100%] px-[20px] flex items-center justify-center gap-[8px] py-[12px]  text-[white] rounded-[8px] duration-150 hover:opacity-[.9]">
                <FiMail className="text-[20px]" /> Mail
              </button>
            </a>
            <a
              href="https://www.google.com/maps/place/Tashkent,+Uzbekistan"
              target="_blank"
              rel="noopener noreferrer"
              className=""
            >
              <button className="bg-[#ec3b3b] w-[100%] px-[20px] flex items-center justify-center gap-[8px] py-[12px]  text-[white] rounded-[8px] duration-150 hover:opacity-[.9]">
                <IoLocationOutline className="text-[22px]" /> Location
              </button>
            </a>

            <a
              href="https://t.me/abdulatifoov_m"
              target="_blank"
              rel="noopener noreferrer"
            >
              <button className="w-[100%] px-[22px] flex items-center gap-[8px] py-[12px]  bg-[dodgerblue] text-[white] rounded-[8px] justify-center duration-150 hover:opacity-[.9]">
                <FaTelegramPlane className="text-[19px]" /> Channel
              </button>
            </a>
          </div>
          <div className="mt-[10px]">
            <a href="https://t.me/coder_fr">
              <button className="w-[100%] shadow-md py-[14px] flex items-center justify-center gap-[8px] bg-[#1cc2ff] mb-[10px] text-[#fff] rounded-[10px] duration-150 hover:opacity-[.9]">
                Send Message <FaRegMessage />
              </button>
            </a>
            <button
            
              className="w-[100%]  shadow-md py-[14px] flex items-center justify-center gap-[8px] bg-[#ececec] rounded-[10px] duration-150 hover:opacity-[.9]"
            >
              <TiArrowBack /> About me coming soon
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default memo(Home);

