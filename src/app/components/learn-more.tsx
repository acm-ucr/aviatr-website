//color should be passed into the component as a hexcode. ex #ADD8E6
const LearnMore = (props: {color: string}) => {
    return (
         <button className="flex items-center bg-transparent hover:bg-gray-200 text-black py-1 px-1 text-xs rounded-lg">
            <span>LEARN MORE</span>
            <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                className="w-6 h-6 ml-2 rounded-full"
                style={{ backgroundColor: props.color }}
            >
                <circle cx="12" cy="12" r="12" fill={props.color} />
                <path
                    d="M6 12h12M12 6l6 6-6 6"
                    className="text-black"
                />
            </svg>
        </button>
    )
}

export default LearnMore;