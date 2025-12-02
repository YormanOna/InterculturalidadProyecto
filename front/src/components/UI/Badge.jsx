import clsx from 'clsx';

const Badge = ({ children, variant = 'primary', className = '' }) => {
    const variants = {
        primary: 'badge-primary',
        secondary: 'badge-secondary',
        success: 'badge-success',
        info: 'badge-info',
    };

    return (
        <span className={clsx(variants[variant], className)}>
            {children}
        </span>
    );
};

export default Badge;
