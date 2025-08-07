import { PropsWithChildren } from 'react';

export const Container = ({ children }: PropsWithChildren) => {
    return (
        <div className={'px-4 sm:px-6 lg:px-8'}>
            <div className="mx-auto w-full max-w-7xl">{children}</div>
        </div>
    );
};
