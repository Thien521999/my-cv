interface ICardProps {
  children: any;
  color?: string;
  colorBorder?: string;
  bgColor?: string;
}

export const Card = ({ children, color, colorBorder, bgColor }: ICardProps) => {
  return (
    <span
      className="px-2 py-1 mr-2 text-xs"
      style={{ color: color, border: `1px solid ${colorBorder}`, backgroundColor: bgColor }}
    >
      {children}
    </span>
  );
};
