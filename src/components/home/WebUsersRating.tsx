import { USERS_HEADING_DATA, RATING_LEFT_DATA, RATING_RIGHT_DATA } from "../common/Helper";
import ProgressBar from "../common/ProgressBar";
import Image from "next/image";

const WebUsersRating = () => {
  return (
    <div className="py-8 sm:py-16 px-4 md:px-0 sm:max-w-[700px] lg:max-w-[795px] xl:max-w-[864px] mx-auto">
      <h2 className="text-[#252339] text-2xl sm:text-[30px] font-bold pb-3 lg:pb-12">
        Rating
      </h2>
      <p className="text-[#3e3d41]">Other web-users rate our hotel</p>
      <div className="flex justify-center flex-wrap text-center mt-5 lg:mt-10">
        {USERS_HEADING_DATA.map((val) => (
          <div key={val.name} className="pe-6 lg:px-6 py-3">
            <div className="">
              <h3 className="hover:underline whitespace-nowrap">{val.name}</h3>
              <p>{val.value}</p>
            </div>
          </div>
        ))}
      </div>
      <div className="sm:flex pt-5">
        <div className="w-full">
          {RATING_LEFT_DATA.map((item, index) => (
            <div key={index} className="space-y-1 sm:pe-6 pb-4">
              <div className="flex items-center justify-between">
                <span className="text-gray-800 text-sm">{item.title}</span>
                <div className="flex items-center gap-2 text-gray-600">
                  <span className="text-sm">
                    {item.reviews.toLocaleString()} reviews
                  </span>
                  <span className="font-semibold text-black text-sm">
                    {item.score}/10
                  </span>
                </div>
              </div>
              <ProgressBar value={item.score} />
            </div>
          ))}
        </div>
        <div className="w-full">
          {RATING_RIGHT_DATA.map((item, index) => (
            <div key={index} className="space-y-1 sm:ps-6 pb-4">
              <div className="flex items-center justify-between">
                <span className="text-gray-800 text-sm">{item.title}</span>
                <div className="flex items-center gap-2 text-gray-600">
                  <span className="text-sm">
                    {item.reviews.toLocaleString()} reviews
                  </span>
                  <span className="font-semibold text-black text-sm">
                    {item.score}/10
                  </span>
                </div>
              </div>
              <ProgressBar value={item.score} />
            </div>
          ))}
        </div>
      </div>
      <div className="flex justify-end">
        <p className="text-sm text-[#6f6e77]">Powered by</p>
        <Image className="ps-2"
          src="/images/png/trustyou.png"
          alt="trust you"
          width={120}
          height={24}
        />
      </div>
    </div>
  );
};

export default WebUsersRating;
