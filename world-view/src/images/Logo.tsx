import Image from "next/image";

export const Logo = () => {
  return (
    <div className="img">
      <Image
        src="/earth.png"
        width={516}
        height={332}
        alt="Picture of the author"
      />
    </div>
  );
};
