// import Header from "@/components/common/Header";




export default function RootLayout({
    children,
    }: Readonly<{
        children: React.ReactNode;
    }>) {
        return (
            <div className="max-w-[1200px] mx-auto ">
                {/* <Header type='other' /> */}
                <div className="mb-32 mt-20 px-8">
                    {children}
                </div>
            </div>
        );
}