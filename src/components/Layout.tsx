import React from 'react';

type LayoutProps = {
    children: React.ReactNode;
};

const Layout: React.FC<LayoutProps> = ({ children }) => {
    return (
        <div className="w-full h-full flex flex-col">
            <main className="w-full h-full flex-grow">
                {children}
            </main>
        </div>
    );
};

export default Layout;
