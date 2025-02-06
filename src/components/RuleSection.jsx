export const RuleSection = (props) => {
    
    const { title, points, index } = props;
    return (
        <div 
        className="mb-8 opacity-0 translate-y-4 animate-fadein"
        style={{
            animationDelay: `${index * 150}ms`,
        }}
        >
        <div className="text-xl font-bold mb-6 text-center border-b">
            {title}
        </div>
        {title === "ゲームの魅力" ? (
            <ul className="space-y-3 mb-12">
            {points.map((point, idx) => (
                <li
                key={idx}
                className="flex items-center space-x-3"
                >
                <span className="flex-shrink-0 w-1.5 h-1.5 rounded-full bg-main" />
                <span className="text-lg">{point}</span>
                </li>
            ))}
            </ul>
        ) : (
            <ol className="list-decimal list-inside space-y-3 mb-12">
            {points.map((point, idx) => (
                <li key={idx} className="text-lg indent-[-1em] pl-[1em]">
                {point}
                </li>
            ))}
            </ol>
        )}
        </div>
    );
};