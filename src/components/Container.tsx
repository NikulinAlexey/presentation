interface ContainerProps {
  children: React.ReactNode;
}

function Container({ children }: ContainerProps) {
  return (
    <div className="mx-auto max-w-[1440px] w-full px-4 lg:px-12 xl:px-[120px]">
      {children}
    </div>
  );
}

export default Container;
