import Image from "next/image";

export default function Home() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 h-dvh p-4 bg-primary">
      <div className="flex justify-center items-center h-full">
        <Image
          src="https://res.cloudinary.com/dd8im2juc/image/upload/v1746275222/creative-home_tr6u8k.jpg"
          alt="Create european-style resumes with AI"
          width={300}
          height={200}
          className="w-full h-auto object-cover rounded-lg"
          priority
          fetchPriority="high"
          style={{ objectFit: "cover" }}
          loading="eager"
          placeholder="blur"
          blurDataURL="https://res.cloudinary.com/dd8im2juc/image/upload/v1746275222/creative-home_tr6u8k.jpg"
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          quality={100}
        />
      </div>
      <div className="flex flex-col justify-start md:justify-center items-start p-4">
        <h1 className="text-3xl md:text-4xl lg:text-6xl font-bold mb-4">
          Create European-style resumes with AI
        </h1>
        <p className="text-lg mb-8">
          Create professional European-style resumes instantly using AI.
          Customize your CV to meet EU standards and impress employers across
          Europe with sleek, ATS-friendly formats.
        </p>
        <button
          type="button"
          className="py-3 px-4 inline-flex items-center gap-x-2 text-sm font-medium rounded-lg border border-transparent bg-accent hover:bg-accent-dark focus:outline-hidden focus:bg-accent-dark disabled:opacity-50 disabled:pointer-events-none"
        >
          Signin with Google
        </button>
      </div>
    </div>
  );
}
