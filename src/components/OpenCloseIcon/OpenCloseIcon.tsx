interface OpenCloseIconProps {
  isSelected: boolean;
  size: "base" | "lg";
}

function OpenCloseIcon({isSelected, size = "base"}: OpenCloseIconProps) {
  return (
    <>
      {size === "base" && (
        <svg
          className={`w-4 h-4 text-gray-500 transition-transform duration-300
                        ${isSelected ? "rotate-180" : ""}`}
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
        </svg>
      )}
      {size === "lg" && (
        <svg
          className={`w-6 h-6 text-gray-500 transition-transform duration-300
                        ${isSelected ? "rotate-180" : ""}`}
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
        </svg>
      )}
    </>
  );
}

export default OpenCloseIcon;
