import Image from "next/image";

export default function Page9() {
  return (
    <div className="h-[538px] flex flex-col justify-center">
        <h1 className="lg:text-6xl text-2xl text-center font-bold relative inline-block">
          Our sponsors
        </h1>
        <div className="flex justify-center">
          <Image
            src="/images/underline.png"
            alt="Element-image"
            width={300.15}
            height={36.56}
            className="underline-image -mt-5 ml-44"
          />
        </div>

        <div className="flex justify-center">
          <Image
            src="/images/sponsors.png"
            alt="sponsors"
            width={1000.15}
            height={36.56}
            className="underline-image mt-20"
          />
        </div>
      </div>
  )
}