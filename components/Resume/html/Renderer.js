const View = ({ children, style }) => <div style={style}>{children}</div>;
const Text = ({ children, style }) => <p style={style}>{children}</p>;
const Link = ({ children, src, style }) => (
    <a href={src} style={style}>
        {children}
    </a>
);

export { View, Text, Link };
