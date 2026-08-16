import ProviderSidebar from "../../components/serviceprovider/ProviderSidebar";
import ProviderTopBar from "../../components/serviceprovider/ProviderTopBar";
import ProviderBottomNav from "../../components/serviceprovider/ProviderBottomNav";

const reviews = [
  {
    id: 1,
    customer: "Amit Patil",
    rating: 5,
    comment:
      "Very good service. Electrician arrived on time and fixed the problem quickly.",
    date: "2 days ago",
  },

  {
    id: 2,
    customer: "Sagar Meshram",
    rating: 4,
    comment:
      "Good work and reasonable pricing.",
    date: "5 days ago",
  },
];

function ProviderReviewsPage() {
  return (
    <div className="min-h-screen bg-[#F7FAF8]">
      <div className="flex">
        <ProviderSidebar />

        <div className="min-w-0 flex-1">
          <ProviderTopBar />

          <main className="mx-auto max-w-4xl px-4 pb-28 pt-6 sm:px-6">
            <h1 className="text-2xl font-extrabold text-[#10231A]">
              Customer Reviews
            </h1>

            <p className="mt-1 text-sm text-[#64748B]">
              See what customers think about your services.
            </p>

            <div className="mt-6 space-y-4">
              {reviews.map((review) => (
                <article
                  key={review.id}
                  className="
                    rounded-[22px]
                    border
                    border-[#E5EDE8]
                    bg-white
                    p-5
                  "
                >
                  <div className="flex items-start justify-between">
                    <div>
                      <h2 className="font-bold text-[#10231A]">
                        {review.customer}
                      </h2>

                      <p className="mt-1 text-[#F59E0B]">
                        {"★".repeat(review.rating)}
                      </p>
                    </div>

                    <span className="text-xs text-[#94A3B8]">
                      {review.date}
                    </span>
                  </div>

                  <p className="mt-4 text-sm leading-6 text-[#64748B]">
                    {review.comment}
                  </p>
                </article>
              ))}
            </div>
          </main>
        </div>
      </div>

      <ProviderBottomNav />
    </div>
  );
}

export default ProviderReviewsPage;