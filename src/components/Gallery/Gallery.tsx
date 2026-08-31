import "./Gallery.scss";

import { gallery } from "./galleryData";

import GalleryItem from "./GalleryItem";

export default function Gallery(){

    return(

        <section className="gallery">

            <h2>

                Наша история

            </h2>

            <p>

                Каждая фотография —
                воспоминание о самом счастливом дне нашей жизни.

            </p>

            <div className="gallery__grid">

                {gallery.map(photo=>(

                    <GalleryItem

                        key={photo.id}

                        image={photo.image}

                        title={photo.title}

                    />

                ))}

            </div>

        </section>

    );

}