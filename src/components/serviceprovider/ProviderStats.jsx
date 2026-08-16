function ProviderStats({ stats }) {
  const statCards = [
    {
      title: "Today's Requests",
      value: stats.todayRequests,
      icon: "📥",
      description: "Requests received today",
    },

    {
      title: "Pending",
      value: stats.pendingRequests,
      icon: "⏳",
      description: "Waiting for your response",
    },

    {
      title: "Completed Jobs",
      value: stats.completedJobs,
      icon: "✅",
      description: "Total completed services",
    },

    {
      title: "Total Reviews",
      value: stats.totalReviews,
      icon: "⭐",
      description: "Customer reviews",
    },
  ];

  return (
    <section>
      <div className="grid grid-cols-2 gap-3 xl:grid-cols-4">
        {statCards.map((item) => (
          <div
            key={item.title}
            className="
              rounded-[20px]
              border
              border-[#E5EDE8]
              bg-white
              p-4
              shadow-[0_4px_18px_rgba(15,23,42,0.04)]
              sm:p-5
            "
          >
            <div className="flex items-start justify-between">
              <div
                className="
                  flex
                  h-10
                  w-10
                  items-center
                  justify-center
                  rounded-xl
                  bg-[#ECFDF3]
                  text-lg
                "
              >
                {item.icon}
              </div>

              <span className="h-2 w-2 rounded-full bg-[#22C55E]" />
            </div>

            <h3 className="mt-4 text-2xl font-extrabold text-[#10231A]">
              {item.value}
            </h3>

            <p className="mt-1 text-xs font-bold text-[#334155] sm:text-sm">
              {item.title}
            </p>

            <p className="mt-1 hidden text-xs text-[#94A3B8] sm:block">
              {item.description}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}

export default ProviderStats;