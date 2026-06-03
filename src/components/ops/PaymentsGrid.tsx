import type { PaymentItem } from "@/data/ops";

export function PaymentsGrid({ payments }: { payments: PaymentItem[] }) {
  return (
    <section className="ops-panel payments-panel" id="payments">
      <div className="ops-section-title">
        <div>
          <p>Payments</p>
          <h2>Upcoming payments</h2>
        </div>
      </div>

      <div className="ops-payment-grid">
        {payments.map((payment) => (
          <article key={`${payment.client}-${payment.label}`} className={`ops-payment-card${payment.next ? " next" : ""}`}>
            <span>{payment.label}</span>
            <h3>{payment.client}</h3>
            <strong>{payment.value}</strong>
            <p>{payment.note}</p>
          </article>
        ))}
      </div>
    </section>
  );
}
