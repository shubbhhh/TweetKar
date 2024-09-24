import Editor from "@/components/Editor";
import Navbar from "@/components/Sidebar";


export default function() {
    return (
        <div className="">
            <Navbar />
            <div className="flex-col h-screen items-center w-full">
                <div className="h-full flex items-center justify-cente max-w-3xl">
                    <Editor />
                </div>
            </div>
        </div>
    )
}