const TimerContainer = ({children}) => {
    return (
        <div className="max-w-4xl my-12 mx-auto flex items-center justify-center flex-wrap gap-y-8">
            {children}
        </div>
    );
} 

export default TimerContainer;