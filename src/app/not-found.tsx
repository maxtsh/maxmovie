import Link from "next/link";

const NotFoundPage: React.FC = () => {
  return (
    <div className="flex h-[100dvh] flex-1 items-center justify-center">
      <div className="flex flex-col gap-2">
        <h1>Not Found 404</h1>
        <p>The requested page does not exist</p>
        <Link href="/">Go Home</Link>
      </div>
    </div>
  );
};

export default NotFoundPage;
