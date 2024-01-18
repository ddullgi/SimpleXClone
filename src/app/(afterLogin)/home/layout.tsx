export default async function HomeLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div>
      홈 레이아웃
      <div>{children}</div>
    </div>
  );
}
