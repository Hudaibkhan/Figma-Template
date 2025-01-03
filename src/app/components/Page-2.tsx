import Image from "next/image";

export default function Page2() {
  return (
    <div className="h-screen flex justify-center items-center">
      <div className="flex w-11/12 h-[465px]">
        <div className="flex flex-col flex-1 gap-4 justify-center px-4">
        <div>
          <h1 className="font-bold text-[72px] relative inline-block ">
            Project Management
          </h1>
          <Image
            src="/images/underline.png"
            alt="Element-image"
            width={500}
            height={20}
            className="underline-image -mt-8 "
          />
        </div>
       

          <p className="font-normal text-[18px]">
            Images, videos, PDFs and audio files are supported. Create math
            expressions and diagrams directly from the app. Take photos with the
            mobile app and save them to a note.
          </p>

          <button className="text-white w-[237px] h-[66px] rounded-lg bg-[#4F9CF9] p-4">
            Get Started ➔
          </button>
        </div>
        <div className="flex-1">
          <div className="bg-[#C4DEFD] w-[550px h-[500px]"></div>
        </div>
      </div>
    </div>
  );
}
