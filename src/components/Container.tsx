import { cn } from "../utils/libs";

interface ContainerProps {
  className?: string;
  children: React.ReactNode;
}

function Container({ className, children }: ContainerProps) {
  return (
    <div
      className={cn(
        "mx-auto max-w-[1440px] w-full px-4 lg:px-12 xl:px-[120px]",
        className
      )}
    >
      {children}
    </div>
  );
}

export default Container;
