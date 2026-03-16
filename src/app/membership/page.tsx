import PricingTiers from "@/components/sections/Membership/PricingTiers";
import FeatureComparison from "@/components/sections/Membership/FeatureComparison";

export default function MembershipPage() {
  return (
    <main className="min-h-screen bg-black flex flex-col pt-20">
      <PricingTiers />
      <FeatureComparison />
    </main>
  );
}
