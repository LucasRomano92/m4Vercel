import { routes } from "@/routes";
import { FC } from "react";
import { FaMusic } from "react-icons/fa6";

interface LayoutMainAuthProps {
  children: React.ReactNode;
}

const LayoutMainAuth: FC<LayoutMainAuthProps> = ({ children }) => {
  return (
    <div>
      <div className="flex min-h-screen">
        {/* Left side: white background with card */}
        <div className="flex flex-col items-center justify-center w-full text-black md:w-1/2">
          <div className="flex items-center justify-center space-x-3 rtl:space-x-reverse">
           <a href={routes.home} className="flex items-center gap-3">
                 <FaMusic size={28} className="text-white drop-shadow" />
                 <span className="text-3xl font-bold tracking-wide text-white">BEATLINE</span>
               </a>
          </div>
          <div>{children}</div>
        </div>

        {/* Right side: full image */}
        <div className="hidden md:block md:w-1/2">
          <img
            src="https://images.unsplash.com/photo-1509335919466-c196457ea95a?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            alt="Auth background"
            className="object-cover w-full h-screen"
          />
        </div>
      </div>
    </div>
  );
};
export default LayoutMainAuth;
