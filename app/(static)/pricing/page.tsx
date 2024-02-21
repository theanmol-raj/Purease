import React from "react";

type Props = {};

type Plan = { title: string; promo: string; price: 'Free' | number; features: string[] , isPremium : boolean };

const PaymentPlans: Readonly<Plan[]> = [
  {
    title: "Essential Wellness",
    promo: "Perfect for maintaining a balanced lifestyle.",
    price: 'Free',
    features: [
      "Access to basic fitness programs",
      "Guided meditation sessions",
      "Nutrition tips and recipes",
      "Weekly progress tracking",
      "Community support forum",
    ],
    isPremium : false
  },
  {
    title: "Premium Health",
    promo: "Ideal for those seeking personalized guidance.",
    price: 49.99,
    features: [
      "Customized workout plans",
      "Mindfulness and stress relief activities",
      "Dietary consultations with nutritionists",
      "24/7 chat support",
      "Exclusive access to live wellness events",
    ],
    isPremium : true
  },
  {
    title: "Total Wellbeing",
    promo: "Comprehensive solution for holistic health.",
    price: 99.99,
    features: [
      "Unlimited access to all fitness programs",
      "Full library of mental health resources",
      "Personalized coaching sessions",
      "Priority scheduling for expert consultations",
      "Extended support with access to premium content",
    ],
    isPremium :true
  },
] as const;

function page({}: Props) {
  return (
    <section className="">
      <div className="py-8 px-4 mx-auto max-w-screen-xl lg:py-16 lg:px-6">
        <div className="mx-auto max-w-screen-md text-center mb-8 lg:mb-12">
          <h2 className="mb-4 text-4xl tracking-tight font-extrabold text-gray-900 dark:text-white">
            Find The Right Plan For You!
          </h2>
          <p className="mb-5 font-light text-gray-500 sm:text-xl dark:text-gray-400">
            Join us in a journey of healing, recovery and growth.
          </p>
        </div>
        <div className="space-y-8 lg:grid lg:grid-cols-3 sm:gap-6 xl:gap-10 lg:space-y-0">
          {PaymentPlans.map((item ,index :number) => (
            <div
              key={item.title}
              className="flex flex-col p-6 mx-auto max-w-lg text-center text-gray-900 bg-white rounded-lg border border-gray-100 shadow dark:border-gray-600 xl:p-8 dark:bg-black dark:text-white"
            >
              <h3 className="mb-4 text-2xl font-semibold">{item.title}</h3>
              <p className="font-light text-gray-500 sm:text-lg dark:text-gray-400">
                {item.promo}
              </p>
              <div className="flex justify-center items-baseline my-8">
                <span className="mr-2 text-5xl font-extrabold">
                  {item.isPremium &&'$'}{item.price}
                </span>
                <span className="text-gray-500 dark:text-gray-400">{item.isPremium ?'/month' : '/forever'}</span>
              </div>
              <ul role="list" className="mb-8 space-y-4 text-left flex-1">
                {item.features.map((features: string) => (
                  <li key={features} className="flex items-center space-x-3">
                    <svg
                      className="flex-shrink-0 w-5 h-5 text-green-500 dark:text-green-400"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        fill-rule="evenodd"
                        d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                        clip-rule="evenodd"
                      ></path>
                    </svg>
                    <span>{features}</span>
                  </li>
                ))}
              </ul>
              <button
                className={`font-bold ${ item.isPremium ? (index & 1 ? 'bg-[#23fed6] text-black' : ' bg-gradient-to-br from-[#23fed6] to-[#06c9a5] text-black ' ) : 'bg-black text-white dark:text-black dark:bg-white' } focus:ring-4 focus:ring-primary-200  rounded-lg text-sm px-5 py-3.5 text-center  dark:focus:ring-primary-900`}
              >
                { item.isPremium ?  'Join Now'  : 'Get Started' }
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default page;
