export default async function AfterLogin({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div>
      에프터 로그인 레이아웃
      <div>{children}</div>
    </div>
  );
}
