import Image from "next/image";

const Logo = () => {
  return (
    <div className="flex items-center">
      <Image
        src="https://res.cloudinary.com/dd8im2juc/image/upload/c_scale,w_250,h_250/v1745926414/logo_bcnrei.svg"
        alt="Logo"
        width={100}
        height={100}
        className="h-10 w-10 mr-2"
      />
      <div className="flex flex-col">
        <h2 className="text-md font-bold text-gray-800 md:text-2xl">
          Euro AI Pass
        </h2>
      </div>
    </div>
  );
};

export default Logo;
