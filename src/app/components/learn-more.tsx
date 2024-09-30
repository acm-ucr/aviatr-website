//color should be passed into the component as a hexcode. ex #ADD8E6
const LearnMore = (props: { color: string }) => {
  return (
    <button className="flex items-center rounded-lg bg-transparent px-1 py-1 text-xs text-black hover:bg-gray-200">
      <span>LEARN MORE</span>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
        className="ml-2 h-6 w-6 rounded-full"
        style={{ backgroundColor: props.color }}
      >
        <circle cx="12" cy="12" r="12" fill={props.color} />
        <path d="M6 12h12M12 6l6 6-6 6" className="text-black" />
      </svg>
    </button>
  );
};

export default LearnMore;
