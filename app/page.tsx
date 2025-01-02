import Image from "next/image";
import Logo from "./logowtext.png";

export default function Home() {
  return (
    <main>
      <Image
        className="block m-auto w-96"
        src={Logo}
        alt="Hairsalon SixtyOne Logo"
        quality={100}
        placeholder="blur"
      ></Image>
      <div className="p-5 justify-center items-center bg-neutral-800 text-center text-white">
        <p>
          Hier komt binnenkort je favoriete webontwikkelaar online! We zijn hard
          bezig met het ontwikkelen van onze website, dus heel even geduld!
        </p>
      </div>
    </main>
  );
}
