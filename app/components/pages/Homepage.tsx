"use client";

import Lottie from "@/app/components/atoms/Lottie";
import Button from "@/app/components/atoms/Button";

const Homepage = () => {
  return (
    <section className="flex flex-col items-center justify-center mt-12 p-4">
      <h1 className="text-4xl font-bold text-center mb-4 text-blue-800 md:text-7xl max-w-2xl">
        Create European Compliant Resumes with AI
      </h1>
      <Lottie src="https://lottie.host/fab84500-05d6-4d74-ad87-e46dd247def3/XgeM0GuWsJ.lottie" />
      <div className="mt-4">
        <Button
          label="Get Started"
          state="idle"
          onClick={() => {
            console.log("Button clicked");
          }}
          disabled={false}
          icon={null}
        />
      </div>
    </section>
  );
};

export default Homepage;
