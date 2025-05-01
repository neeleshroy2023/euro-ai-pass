"use client";

import Button from "@/app/components/atoms/Button";
import Logo from "@/app/components/atoms/Logo";

const Navigation = () => {
  return (
    <nav className="flex flex-row items-center justify-between p-4">
      <Logo />
      <Button
        label="Login"
        state="idle"
        onClick={() => {
          console.log("Menu clicked");
        }}
        disabled={false}
        icon={null}
      />
    </nav>
  );
};

export default Navigation;
