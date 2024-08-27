export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>)
{
    return(
        <>
        <h2>I'm layout of docs folder</h2>
        {children}
        </>
    );
}