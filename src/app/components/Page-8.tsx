export default function Page8() {
  return (
    <div>
        <div className="flex flex-col flex-1 gap-4 justify-center px-4 w-[669px] h-[411px]">
          <h1 className="font-bold text-[72px] relative inline-block">
            100% your data</h1>
            <img
              src="/images/underline.png"
              alt="Element-image"
              width="350.15"
              height="36.56"
              className="underline-image -mt-14 ml-56 "
            />
          

          <p className="font-normal text-[18px] text-left">
            The app is open source and your notes are saved to an open format,
            so you'll always have acces to them. Uses End-To-End Encryption
            (E2EE) to source your notes and ensure no-one but yourself can
            access them.
          </p>

          <div className="mt-10">
            <button className="text-white w-[237px] h-[66px] bg-[#4F9CF9] p-4 rounded-md">
              Read more →
            </button>
          </div>
          <div />
        </div>
        <div className="relative w-full flex justify-end ">
          <img
            src="/images/side-image.png"
            alt="side-image"
            className="relative -mt-96"
            width="681"
            height="381.13"
          />
        </div>
      </div>
  )
}