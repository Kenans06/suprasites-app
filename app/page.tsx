import Image from "next/image";
import Logo from "./logowtext.png";

export default function Home() {
  return (
    <div className="flex h-screen">
      <div className="m-auto">
        <Image
          className="block m-auto w-1/2"
          src={Logo}
          alt="Hairsalon SixtyOne Logo"
          quality={100}
          placeholder="blur"
        ></Image>
        <div className="block p-5 text-center text-3xl text-supra-white">
          Hier komt binnenkort je favoriete webontwikkelaar online! We zijn hard
          bezig met het ontwikkelen van onze website, dus heel even geduld!
        </div>
      </div>
    </div>
  );
}
