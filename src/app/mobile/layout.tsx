export default function MobileLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <section>
      <div className="">{children}</div>
    </section>
  );
}
