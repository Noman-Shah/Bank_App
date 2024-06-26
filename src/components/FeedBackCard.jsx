import { quotes } from "../assets"

const FeedBackCard = (
  { content, name, img, title}
) => (
    <div className="flex justify-between flex-col px-10 py-12 rounded-[20px] max-w-[370px] md:mr-10 sm:mr-5 mr-0 my-5 feedback-card" >

      <img src={quotes} alt="quotes"  className="w-[40px] h-[27px] object-contain"/>
      <p className=" font-poppins text-[18px] text-white font-normal leading-[32px] my-10">{content}</p>

      <div className="flex flex-row">
        <img src={img} alt={name}  className="w-[48px] h-[48px] rounded-full"/>

        <div className="flex flex-col ml-4">
          <h4 className=" font-poppins text-[20px] text-white font-semibold leading-[32px] ">{name}</h4>
          <p className=" font-poppins text-[16px] text-dimWhite font-normal leading-[32px] ">{title}</p>

        </div>

      </div>

    </div>
  )

export default FeedBackCard