import ReviewCard from "./ReviewCard";

const Review = () => {
  const reviews = [
    {
      content:
        "Thanks so much, Will…look forward to doing more work for you! Nice and Good Work",
      name: "Arif kamal",
      imgSrc: "/images/people-1.jpg",
      company: "LinkedIn",
    },
  ];
  return (
    <section id="reviews" className="section overflow-hidden">
      <div className="container">
        <h2 className="headline-2 mb-8 reveal-up">What our Customer say</h2>
        <div className="flex items-stretch gap-3 w-fit">
          {reviews.map(({ content, name, imgSrc, company }, key) => (
            <ReviewCard
              key={key}
              content={content}
              name={name}
              company={company}
              imgSrc={imgSrc}
              className="reveal-up"
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Review;
