const Switch = ({ title, ...props }) => {
    return (
        <label
            title={title}
            className="relative inline-flex cursor-pointer items-center"
        >
            <input {...props} type="checkbox" className="peer sr-only" />
            <div className="peer peer-checked:bg-primary dark:peer-checked:bg-primary relative h-6 w-11 rounded-full bg-gray-200 after:absolute after:start-[2px] after:top-[2px] after:h-5 after:w-5 after:rounded-full after:border after:border-gray-300 after:bg-white after:transition-all after:content-[''] peer-checked:after:translate-x-full peer-checked:after:border-white rtl:peer-checked:after:-translate-x-full"></div>
        </label>
    );
};


export default Switch;



