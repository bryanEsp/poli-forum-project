import React from "react";

interface PaginatorProps {
    total: number;
    activeIndex: number;
    showArrows?: boolean;
    onChange?: (index: number) => void;
}

const Paginator: React.FC<PaginatorProps> = ({
    total,
    activeIndex,
    showArrows = false,
    onChange,
}) => {
    const handleClick = (index: number) => {
        if (onChange) onChange(index);
    };

    const goPrevious = () => {
        if (onChange && activeIndex > 0) onChange(activeIndex - 1);
    };

    const goNext = () => {
        if (onChange && activeIndex < total - 1) onChange(activeIndex + 1);
    };

    return (
        <div className="flex justify-center mt-6 gap-2 items-center">
            {showArrows && (
                <button
                    onClick={goPrevious}
                    className="text-red-500 hover:text-red-700 transition"
                >
                    <img
                        src="/storage/icon/arrow-left.svg"
                        className="w-14 h-10 object-contain"
                    />
                </button>
            )}
            {Array.from({ length: total }).map((_, i) => (
                <div
                    key={i}
                    onClick={() => handleClick(i)}
                    className={`rounded-full cursor-pointer transition-all ${i === activeIndex
                        ? "w-5 h-5 bg-red-600 scale-110 border-2 border-red-700"
                        : "w-3 h-3 bg-red-300"
                        }`}
                />
            ))}
            {showArrows && (
                <button
                    onClick={goNext}
                    className="text-red-500 hover:text-red-700 transition"
                >
                    <img
                        src="/storage/icon/arrow-right.svg"
                        alt="Kawasaki Ninja 400"
                        className="w-16 h-16 object-contain"
                    />
                </button>
            )}
        </div>
    );
};

export default Paginator;
