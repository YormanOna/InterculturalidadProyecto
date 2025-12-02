import { Tooltip as ReactTooltip } from 'react-tooltip';

const Tooltip = ({ id, content, place = 'top', children }) => {
    return (
        <>
            <div data-tooltip-id={id} data-tooltip-content={content}>
                {children}
            </div>
            <ReactTooltip
                id={id}
                place={place}
                style={{
                    backgroundColor: '#7D3E29',
                    color: '#FDF5F3',
                    borderRadius: '0.5rem',
                    padding: '0.5rem 0.75rem',
                    fontSize: '0.875rem',
                    fontWeight: '500',
                    zIndex: 9999,
                }}
            />
        </>
    );
};

export default Tooltip;
