import { CLIENT_REVIEWS } from "../../data/client-reviews";
import clsx from "clsx";
import { useState } from "react";
import { AiFillStar, AiOutlineStar } from "react-icons/ai";

const Review: React.FC<{ review: (typeof CLIENT_REVIEWS)[number] }> = ({
  review,
}) => {
  const [isExpanded, setIsExpanded] = useState(false);

  const toggleExpansion = () => {
    setIsExpanded((prev) => !prev);
  };

  const starRating = parseInt(review.rating, 10);

  return (
    <div
      className={clsx(
        "flex flex-wrap flex-row bg-blue-500 p-4 rounded-lg text-white mb-4",
        {
          "h-auto": isExpanded,
          "h-20": !isExpanded,
        }
      )}
    >
      <div className="flex justify-between items-center mb-2">
        <h3 className="text-lg font-bold">{review.authorName}</h3>
        <div className="flex space-x-1">
          {[1, 2, 3, 4, 5].map((index) => (
            <span key={index}>
              {index <= starRating ? <AiFillStar /> : <AiOutlineStar />}
            </span>
          ))}
        </div>
      </div>
      <p className={clsx("text-sm", { "overflow-hidden": !isExpanded })}>
        {review.review}
      </p>
      <button className="text-sm text-blue-200 mt-2" onClick={toggleExpansion}>
        {isExpanded ? "Read Less" : "Read More"}
      </button>
    </div>
  );
};

const ClientReviews: React.FC = () => {
  return (
    <div>
      {CLIENT_REVIEWS.map((review, index) => (
        <Review key={index} review={review} />
      ))}
    </div>
  );
};

export default ClientReviews;
