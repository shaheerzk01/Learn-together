"use client";
import React, { useState } from "react";
import DefaultBanner from "@/components/defaultBanner";
import PricingCard from "@/components/pricingCard";

const Pricing = () => {
  return (
    <>
      <DefaultBanner
        title="Pricing"
        description="Unlock the full potential of Learn Together with our flexible and affordable pricing plans. Whether you're here to browse study resources, contribute your own, or explore premium features, we have a plan tailored to your learning journey. Choose the plan that fits your needs and start leveling up today."
      />
      <div className="flex items-center justify-center mt-10 gap-10">
        <PricingCard
          title="Free Plan"
          price="PKR 0"
          description="Perfect for exploring the platform"
          features={["Access 3 links/day", "View only", "Community content"]}
        />
        <PricingCard
          title="Pro Learner"
          price="PKR 999/mo"
          description="Unlock all content and features"
          features={["Unlimited access", "Ad-free", "Bookmarks & Folders"]}
          isPopular
        />
        <PricingCard
          title="Institutional Access"
          price="Custom"
          description="Ideal for schools & coaching centers"
          features={["Bulk student access", "Admin Dashboard", "Priority Support"]}
        />
      </div>
    </>
  );
};

export default Pricing;
