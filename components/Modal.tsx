import ActionButton from "./ActionButtons";
import Input from "./Input";


export default function Modal() {

    return (
        <>
            <div className="flex justify-center items-center overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-neutral-100 bg-neutral-100 bg-opacity-70">
                <div className="relative w-full lg:w-3/6 my-6 mx-auto lg:max-w-3xl h-full lg:h-auto">
                    <div className="h-full lg:h-auto  border-0 rounded-lg shadow-lg relative flex flex-col w-full outline-none focus:outline-none">
                        {/* Header */}
                        <div className="flex items-center justify-between p-10 rounded-t">
                            <h3 className="text-3xl font-semibold">
                                Title
                            </h3>
                        </div>
                        {/* Body */}
                        <div className="relative p-10 flex-auto">
                            Body
                        </div>
                        {/* Fotter */}
                        <div className="flex flex-col gap-2 p-10">
                            <ActionButton label="Login" fullwidth secondary large />
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}