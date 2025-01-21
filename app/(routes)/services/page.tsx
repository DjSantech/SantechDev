import AvatarServices from "@/components/avatar-services";
import CircleImage from "@/components/circle-image";
import SliderServices from "@/components/slider-services";
import TransitionPage from "@/components/transition-page";

const ServicesPage = () => {
    return (
        <>
    
            <TransitionPage />
            <CircleImage />
            <AvatarServices />




            <div className="grid items-center justify-center h-screen max-w-5xl gap-6 mx-auto md:grid-cols-2">
                <div className="max-w-[450px] md-0">

                    <h1 className="text-2xl leading-tight text-center md:text-left md:text-4xl md:mb-5">My <span className="font-bold text-secondary"> services.</span></h1>
                    <p className="mb-3 text-xl text-gray-300">
                        
                        
                        
                I offer my services as a frontend developer specializing in creating dynamic and scalable web applications using Next.js and React.
                With experience in building modern interfaces, performance optimization, and responsive design, I can help you craft customized solutions tailored to your business needs.

                Whether you need an application built from scratch or improvements to your current project, my goal is to ensure your product stands out in design, functionality, and efficiency. Let’s turn your ideas into reality!</p>
                    
                </div>

                <div>
                    <SliderServices />
                </div>
            </div>
        </>
    );
}

export default ServicesPage;