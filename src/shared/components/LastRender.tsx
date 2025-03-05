import React from 'react';

export const LastRender = React.memo(() => {
    const [lastRender, setLastRender] = React.useState(Date.now());

    React.useEffect(() => {
        setLastRender(Date.now());
    });

    return (
        <div className="absolute -top-6 right-0 text-xs text-gray-400">
            Last render: {new Date(lastRender).toLocaleTimeString()}
        </div>
    );
});