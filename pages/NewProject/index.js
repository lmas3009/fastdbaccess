import Slider from "./slider"

const NewProject = () => {
    return(
        <div className="p-5 bg-white text-black poppins">
            <div>
                <p className="text-lg">Create New Project</p>
                <input type="text" className="p-3 border-2 border-[#0A2D28] rounded mt-5 w-full text-sm" placeholder="New project name"/>
            </div>
            <div className="mt-10">
                <p className="text-lg">Select Storage Size <span className="text-xs font-medium">20MB left</span></p>
                <Slider/>
            </div>
            <div className="mt-2">
                <p className="text-lg">Select Templates</p>
                <div className="flex flex-wrap gap-5 mt-10">
                    <p>Templates</p>
                    <p>Templates</p>
                    <p>Templates</p>
                    <p>Templates</p>
                    <p>Templates</p>
                </div>
            </div>
            
        </div>
    )
}

export default NewProject