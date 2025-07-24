import { assets } from "../assets/assets"
import sansaPhoto from '../assets/sansa.png'; // adjust path as needed

const Testimonial = () => {
    const dummyTestimonialData = [
        {
            image: sansaPhoto,
            name: 'Sanskar Verma',
            title: 'ECE Student, VIT Vellore',
            content: 'As a developer, I built StudentAi to solve real problems students face daily. From crafting perfect resumes to writing compelling articles, generating blog headlines, and creating stunning visuals with our AI-powered tools—I wanted to give students everything they need to succeed academically and professionally in one comprehensive platform.',
            
        },
        
    ]

    return (
        <div className='px-4 sm:px-20 xl:px-32 py-24'>
            <div className='text-center'>
                <h2 className='text-slate-700 text-[42px] font-semibold'>Developer</h2>
                <p className='text-gray-500 max-w-lg mx-auto'>Don't just take our word for it.</p>
            </div>
            <div className='flex flex-wrap mt-10 justify-center'>
                {dummyTestimonialData.map((testimonial, index) => (
                    <div key={index} className='p-8 m-4 max-w-xs rounded-lg bg-[#FDFDFE] shadow-lg border border-gray-100 hover:-translate-y-1 transition duration-300 cursor-pointer'>
                        
                        <p className='text-gray-500 text-sm my-5'>"{testimonial.content}"</p>
                        <hr className='mb-5 border-gray-300' />
                        <div className='flex items-center gap-4'>
                            <img src={testimonial.image} className='w-12 object-contain rounded-full' alt='' />
                            <div className='text-sm text-gray-600'>
                                <h3 className='font-medium'>{testimonial.name}</h3>
                                <p className='text-xs text-gray-500'>{testimonial.title}</p>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default Testimonial