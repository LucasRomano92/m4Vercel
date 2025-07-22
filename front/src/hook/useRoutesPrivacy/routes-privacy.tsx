"use client";
import Loader from "@/components/ui/loader/loader";
import React from "react";
import useRoutesPrivacy from "../useRoutesPrivacy";

const RoutesPrivacy = ({ children }: { children: React.ReactNode }) => {
  const privacy = useRoutesPrivacy();
  const loading = privacy?.loading ?? false;

  if (loading) {
    return (
      <div className="flex items-center justify-center w-screen h-screen">
        <Loader />
      </div>
    );
  }
  return <>{children}</>;
};

export default RoutesPrivacy;
