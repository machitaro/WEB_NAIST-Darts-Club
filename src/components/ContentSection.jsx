import { Button } from "@/components/ui/button";
import { Link } from 'react-router-dom';

export const ContentSection = (props) => {
    const { id, title, img, content, page } = props;
    return (
        <section id={id}>
            <div className="container flex flex-col mx-auto pt-10 md:pt-20 items-center">
                <div className="font-medium">
                    <span className="text-2xl underline decoration-4 decoration-yellow-500">{title}</span>
                </div>
                <div className="mx-auto py-20 flex items-center flex-col md:flex-row">
                    <div className="md:w-1/2">
                        <div className="w-1/2 md:w-2/3 xl:w-1/2 mx-auto">
                            <img 
                            src={img}
                            alt="img"
                            />
                        </div>
                    </div>
                    <div className="md:w-1/2 px-20 md:px-5 mt-5 flex flex-col space-y-4">
                        <span style={{whiteSpace: "pre-line"}} className="md:text-xl">{content}</span>
                        <div className="flex justify-end">
                            <Button 
                                asChild
                                className="h-8 px-3 py-3 md:text-xl font-normal border border-transparent text-white bg-main hover:bg-white hover:text-main hover:border-main"
                            >
                                <Link to={page.link}>{page.title}</Link>
                            </Button>
                        </div>
                    </div>
                </div>                
            </div>
        </section>
    );
  };

