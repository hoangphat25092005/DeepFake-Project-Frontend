const menuItems = [
  { text: "Home", left: 0, width: 123 },
  { text: "Detection Lab", left: 150, width: 175 },
  { text: "Feedback", left: 360, width: 123 },
  { text: "About Us", left: 520, width: 123 },
];

const Header = () => {
  const menuClass =
    "absolute h-[32px] font-[DM_Sans] text-[24px] leading-[20px] text-[#F8FAFC] flex items-center justify-end";

  return (
    <div className="relative w-[1920px] h-[76.43px]">
      {/* Khung header */}
      <div className="absolute w-[1920px] h-[76.43px] bg-[#16145C]"></div>

      {/* Avatar */}
      <div className="absolute w-[48px] h-[48px] bg-[#F8FAFC] rounded-full top-[14px] right-[40px]"></div>

      {/* Menu */}
      <div className="absolute w-[662px] h-[32px] top-[22px] left-[629px]">
        {menuItems.map((item) => (
          <div
            key={item.text}
            className={`${menuClass} w-[${item.width}px]`}
            style={{ left: `${item.left}px` }}
          >
            {item.text}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Header;
