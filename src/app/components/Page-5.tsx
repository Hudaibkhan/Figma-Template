import Image from "next/image";

export default function Page5() {
  return (
    <div className="h-screen flex justify-center items-center py-10 px-10 gap-4">
      <div className="flex-1 flex justify-center">
        <div className="bg-[#C4DEFD]   w-[575px] h-[480px] "></div>
      </div>

      <div className="flex flex-col flex-1 gap-6 justify-center px-4 w-[669px] h-[411px]">
        <div>
          <h1 className="font-bold text-[72px]  relative inline-block">
            Customize it to your needs
          </h1>
          <Image
            src="/images/underline.png"
            alt="Element-image"
            width={400}
            height={31.47}
            className="underline-image -mt-8"
          />
        </div>

        <p className="font-normal text-[18px] text-left">
        Customise the app plugins, custom and multiple text editor&mdash;Rich Text or Markdown. Or create your own scripts and plugins using the Extension API.

        </p>

        <div className="mt-10">
          <button className="text-white w-[225px] h-[66px] rounded-md bg-[#4F9CF9] p-4">
            Let&#39;s Go→
          </button>
        </div>
        <div />
      </div>
    </div>
  );
}
