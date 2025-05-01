"use client";
import { DotLottieReact } from "@lottiefiles/dotlottie-react";

type LottieProps = {
  autoplay?: boolean;
  loop?: boolean;
  src?: string;
  style?: React.CSSProperties;
  className?: string;
};

export default function Lottie({
  autoplay = true,
  loop = true,
  src = "https://assets2.lottiefiles.com/packages/lf20_4j8v1g3x.json",
  style = { width: "70px", height: "70px" },
  className = "",
}: Readonly<LottieProps>) {
  return (
    <div className="flex items-center justify-center">
      <DotLottieReact
        autoplay={autoplay}
        loop={loop}
        src={src}
        style={{ width: "70px", height: "70px", ...style }}
        className={`mb-4 ${className}`}
      />
    </div>
  );
}
