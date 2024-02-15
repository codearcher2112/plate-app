import { motion } from 'framer-motion';
import Image from 'next/image';
export default function Hero (){
    return(
        <section className="hero border-b border-solid border-slate-900/10 dark:border-slate-50[0.5]">
            <div className="hero__container container mx-auto px-4">
                <div className="hero__inner flex justify-center items-center gap-y-6 py-16 lg:py-24 flex-wrap lg:flex-nowrap lg:gap-y-0">
                    <div className=" grow-0 shrink basis-full lg:basis-2/5">
                        <motion.h1
                            className="text-3xl !leading-tight sm:text-5xl"
                            initial={ {
                                opacity:0,
                                transform:'translateY(20px)'
                            } }
                            animate = {{
                                opacity:1,
                                transform:'translateY(0)'
                            }}
                            exit={{
                                opacity:0,
                            }}
                            transition={{
                                duration:0.6,
                                ease:'easeInOut'
                            }}
                        >
                            <span className="text-red-600">
                                Plate
                            </span> is a web application designed to bring
                             a world of delicious recipes 
                             to your fingertips
                        </motion.h1>
                        <motion.p
                            className="mt-10"
                            initial={ {
                                opacity: 0,
                                transform: 'translateY(20px)'
                            } }
                            animate={ {
                                opacity: 1,
                                transform: 'translateY(0)'
                            } }
                            exit={ {
                                opacity: 0,
                            } }
                            transition={ { duration: 0.6, ease: 'easeInOut', delay: 0.4 } }
                        >
                            Plate provides endless inspiration and guidance, ensuring that every meal is a masterpiece waiting to be created. Say goodbye to culinary monotony and hello to a world of flavor with Plate.
                        </motion.p>
                    </div>
                    <motion.div
                        className='hero__bg-wrapper grow-0 shrink basis-full lg:basis-3/5'
                        initial={{
                            opacity:0,
                            transform:'translateX(20px)'
                        }}
                        animate={{
                            opacity:1,
                            transform:'translateX(0)'
                        }}
                        exit={{
                            opacity:0,
                        }}
                        transition={{
                            duration:0.6,
                            ease:"easeInOut",
                            delay:0.6
                        }}
                    >
                        <Image
                            priority={true}
                            width={1344}
                            height={756}
                            className="w-full object-contain"
                            src={'https://firebasestorage.googleapis.com/v0/b/plate-app-b93e5.appspot.com/o/hero%2Fhero.png?alt=media&token=92436b8f-0359-410e-92e8-ea4b029210d3'}
                            alt="Hero Image"
                        />
                    </motion.div>
                </div>
            </div>
        </section>
    )
}