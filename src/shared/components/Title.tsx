interface TitleProps {
  children: React.ReactNode;
  className?: string;
}

export const Title = ({ children, className }: TitleProps) => {
  return (
    <h1
      className={`text-5xl font-bold ${className} bg-gradient-to-r from-teal-400 to-blue-500 inline-block text-transparent bg-clip-text`}
    >
      {children}
    </h1>
  );
};
