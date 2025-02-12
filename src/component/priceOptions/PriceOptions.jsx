import PriceOption from "../priceOption/PriceOption";

const PriceOptions = () => {
  const priceOptions = [
    {
      id: 1,
      name: "Basic Plan",
      price: 30,
      features: [
        "Access to gym equipment",
        "Locker room access",
        "Free WiFi",
        "1 fitness assessment per month",
      ],
    },
    {
      id: 2,
      name: "Standard Plan",
      price: 50,
      features: [
        "Access to gym equipment",
        "Locker room access",
        "Free WiFi",
        "Unlimited group fitness classes",
        "2 personal training sessions per month",
      ],
    },
    {
      id: 3,
      name: "Premium Plan",
      price: 80,
      features: [
        "Access to gym equipment",
        "Locker room access",
        "Free WiFi",
        "Unlimited group fitness classes",
        "5 personal training sessions per month",
        "Access to sauna and steam room",
        "Nutritional guidance",
      ],
    },
    {
      id: 4,
      name: "Elite Plan",
      price: 120,
      features: [
        "24/7 gym access",
        "Private locker with towel service",
        "Unlimited personal training sessions",
        "Unlimited group fitness classes",
        "Access to sauna and steam room",
        "Nutritional and diet consultation",
        "Priority booking for special events",
      ],
    },
    {
      "id": 5,
      "name": "Weekend Warrior Plan",
      "price": 20,
      "features": [
        "Gym access only on weekends",
        "Locker room access",
        "Free WiFi",
        "Access to group fitness classes"
      ]
    },
  ];

  return (
    <div>
      <div
        className="hero min-h-screen"
        style={{
          backgroundImage: "url(gym.jpg)",
        }}
      >
        <div className="hero-overlay bg-opacity-60"></div>
        <div className="hero-content text-neutral-content text-center">
          <div className="">
            <h1 className="mb-5 text-5xl font-bold">Hello there</h1>
            <p className="mb-5">
              Unleash your potential! Experience a world-class fitness center
              with state-of-the-art equipment, expert trainers, and a motivating
              environment. <br /> Strength, endurance, transformation—this is
              where goals become reality!
            </p>
            <button className="btn bg-emerald-200 hover:bg-emerald-500">
              Explore More
            </button>
          </div>
        </div>
      </div>

      <div className="my-14">
        <h2 className="text-4xl font-bold text-center">
          Choose Your Perfect Fitness Plan 💪🔥!!!
        </h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5 mx-12 mt-14">
          {priceOptions.map((priceOption) => (
            <PriceOption
              key={priceOption.id}
              priceOption={priceOption}
            ></PriceOption>
          ))}
        </div>
      </div>
    </div>
  );
};

export default PriceOptions;
