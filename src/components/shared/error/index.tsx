interface Props {
    className?: string;
    error: any
}
export default function Error({ error, className }: Props) {
    return (
        <div
            className={className}
            style={{
                height: 300,
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
            }}
        >
            <h4>{error.message}</h4>
        </div>
    );
}
