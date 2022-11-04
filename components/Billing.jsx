import Image from "next/image";
import { apple, bill, google } from "../assets";
import styles, { layout } from "../pages/styles";

const Billing = () => (
  <section id="product" className={layout.sectionReverse}>
    <div className={layout.sectionImgReverse}>
      <Image src={bill} alt="bill" className="w-[100%] h-[100%] z-[5]" />
      <div className="absolute z-[3] -left-1/2 top-0 w-[50%] h-[50%] rounded-full white__gradient" />
      <div className="absolute z-[0] -left-1/2 bottom-0 w-[50%] h-[50%] rounded-full pink__gradient" />
    </div>
    <div className={layout.sectionInfo}>
      <h2 className={styles.heading2}>
        Easily control your <br className="sm:block hidden" />
        billing & invoicing.
      </h2>
      <p className={`${styles.paragraph} max-w-[470px] mt-5`}>
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quibusdam
        adipisci mollitia nesciunt distinctio nam corrupti eum est id? Ipsum id
        eius qui unde facilis, praesentium rem animi quam eum sit.
      </p>
      <div className="flex flex-row flex-wrap sm:mt-10 mt-6">
        <Image
          src={apple}
          alt="apple_store"
          className="w-[128px] h-[42px] object-contain mr-5 cursor-pointer"
        />
        <Image
          src={google}
          alt="google_play"
          className="w-[128px] h-[42px] object-contain ml-5 cursor-pointer"
        />
      </div>
    </div>
  </section>
);

export default Billing;
