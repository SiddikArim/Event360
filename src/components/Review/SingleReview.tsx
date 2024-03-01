interface TeamMemberData {
  id: number;
  position: string;
  image: string;
  name: string;
  review: string;
}
const SingleReview = (data: TeamMemberData) => {
  return (
    <div
      key={data.id}
      className="bg-gradient-to-r from-yellow-300 via-yellow-500 to-yellow-700 p-5 py-10 rounded-2xl max-h-[470px] "
    >
      <div className="flex content-center items-center gap-2">
        <div>
          <img
            className="max-w-[100px] h-[100px] rounded-full"
            src={data.image}
            alt=""
          />
        </div>
        <div className="flex flex-col mb-8 ml-4 ">
          <h1 className="text-3xl font-bold">{data.name}</h1>
          <p className="text-xl">{data.position}</p>
        </div>
      </div>
      <p className="px-5 mt-5">{data.review}</p>
    </div>
  );
};

export default SingleReview;
