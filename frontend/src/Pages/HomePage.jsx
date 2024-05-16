import { Link } from "react-router-dom";
import HomeLayout from "../layouts/HomeLayout";
import HomePageImage from "../assets/images/HomePageMainImage.png"

function HomePage(){
    {/*the div within homelayout here will be sent as children to the homelayout*/}
    return(
        
        <HomeLayout>
            <div className="pt-10 text-white  lg:flex items-center justify-center gap-10 px-10 min-h-[90vh] bg-black">
                <div className=" w-full mt-20 lg:mt-0 lg:w-1/2 space-y-6">
                    <h1 className=" text-4xl lg:text-5xl font-semibold">EduVenture:Find The Best  
                    <span className="text-yellow-500 font-bold">  Online Courses</span>
                    </h1>
                    <p className="text-xl text-gray-200">We Have A Large Library Of Courses Taught By highly Skilled And Qualified Faculties At A Very Afoordable Rate </p>
                    <div className="space-x-6 flex mt-7">
                    <Link to="/courses">
                        <button className="bg-yellow-500  mt-5 lg:mt-0 px-2 lg:px-5 py-2 lg:py-3 rounded-md font-semibold text-lg cursor-pointer hover:bg-yellow-600 transition-all ease-in-out duration-3">
                        Explore Courses
                        </button>
                    </Link>
                    <Link to="/contact">
                        <button className=" border border-yellow-500   mt-5 lg:mt-0 px-2 lg:px-5 py-2 lg:py-3 rounded-md font-semibold text-lg cursor-pointer hover:bg-yellow-600 transition-all ease-in-out duration-3">
                        Contact us
                        </button>
                    </Link>
                    </div>
                </div>
            <div className="w-full lg:w-1/2 mt-12 lg:mt-0 flex items-center justify-center">
                <img alt="homepage image" src={HomePageImage} />
            </div>

            </div>
        
        </HomeLayout>
    )

}
export default HomePage;