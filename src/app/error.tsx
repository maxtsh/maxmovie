"use client";

import { Button } from "@nextui-org/react";

type Props = {
  error: Error & { digest?: string };
  reset: () => void;
};

const ErrorPage: React.FC<Props> = ({ error, reset }) => {
  return (
    <div className="flex h-[100dvh] flex-1 items-center justify-center">
      <div className="flex flex-col gap-2">
        <h1>Error:</h1>
        <p className="rounded-small bg-red-700 px-2 py-1 text-white">
          {error.message}
        </p>
        <Button
          size="md"
          radius="lg"
          color="default"
          variant="solid"
          onClick={reset}>
          Reset
        </Button>
      </div>
    </div>
  );
};

export default ErrorPage;
