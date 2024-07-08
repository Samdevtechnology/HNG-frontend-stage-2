import Container from "../components/Container";
import BillingSection from "./components/Billing";
import PaymentSection from "./components/Payment";
import SummarySection from "./components/Summary";

const Page = () => {
  return (
    <Container className="flex gap-8">
      <div className="w-2/3">
        <BillingSection />
        <PaymentSection />
      </div>
      <aside className="w-1/3">
        <SummarySection />
      </aside>
    </Container>
  );
};

export default Page;
