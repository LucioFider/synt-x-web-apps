import Image from "next/image";
import { card } from "../assets";
import styles, { layout } from "../pages/styles";
import Button from "./Button";

const CardDeal = () => (
  <section className={layout.section}>
    <div className={layout.sectionInfo}>
      <h2 className={styles.heading2}>
        Find a better card deal <br /> in few easy steps.
      </h2>
      <p className={`${styles.paragraph} max-w-[470px] mt-5`}>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi blanditiis
        quisquam rem quas, eum tempore explicabo molestiae maxime similique
      </p>
      <Button styles="mt-10" />
    </div>

    <div className={layout.sectionImg}>
      <Image src={card} alt="card" className="w-[100%] h-[100%]" />
    </div>
  </section>
);

export default CardDeal;
