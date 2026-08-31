import { motion } from "framer-motion";

type Props = {

    image: string;

    title: string;

};

export default function GalleryItem({

    image,

    title

}: Props){

    return(

        <motion.div

            className="gallery__item"

            whileHover={{

                scale:1.03

            }}

        >

            <img

                src={image}

                alt={title}

            />

        </motion.div>

    );

}