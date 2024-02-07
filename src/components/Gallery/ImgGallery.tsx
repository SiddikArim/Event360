import birthday from "../../assets/birthday.jpg";
import corporation from "../../assets/corporation.jpg";
import family from "../../assets/family.jpg";
import picnic from "../../assets/picnic.jpg";
import sports from "../../assets/sports.jpg";
import wed from "../../assets/wed.jpg";
import wed2 from "../../assets/wed2.jpg";
import anime from "../../assets/anime.jpg";
import anime2 from "../../assets/anime2.jpg";
import gather from "../../assets/gather.jpg";

const ImgGallery = () => {
  return (
    <div className="w-[636px] p-2 h-[651] grid grid-cols-12">
      <div className="col-span-3 my-auto ">
        <img
          className="py-1 ml-6 w-4/5 rounded-2xl"
          src={gather}
          alt="gathering"
        />
        <img className="pr-2 rounded-2xl h-52 w-50" src={anime2} alt="" />
      </div>
      <div className="col-span-3 max-w-[628px] gap-1">
        <img className="" src={wed} alt="" />
        <img className="py-1" src={wed2} alt="" />
        <img className="py-1" src={picnic} alt="" />
      </div>
      <div className="col-span-3 py-8">
        <img className="p-2 rounded-2xl" src={anime} alt="" />
        <img className="p-2 rounded-2xl" src={sports} alt="" />
        <img className="p-2 rounded-2xl" src={corporation} alt="" />
      </div>
      <div className="col-span-3 py-24">
        <img className="py-1" src={family} alt="" />
        <img className="py-1" src={birthday} alt="" />
      </div>
    </div>
  );
};

export default ImgGallery;
