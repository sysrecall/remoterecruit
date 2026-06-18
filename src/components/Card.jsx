export default function Card({ className }) {
  return (
    <div
      className={`
        w-100 h-120  
        rounded-[34px]
        border-t 
        border-gray-100 
        shadow-[14px_41px_100px_0px_rgba(49,89,211,0.12)]
        ${className}
      `}
    ></div>
  );
}
