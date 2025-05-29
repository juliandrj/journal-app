import { ImageList, ImageListItem } from "@mui/material";
import { ImageGalleryProps } from "../../interfaces";

export const ImageGallery = ({ note }: ImageGalleryProps) => {
    return (
        <ImageList sx={{ width: '100%' }} cols={4}>
            {note.images.map((img, index) => (
                <ImageListItem key={`${index}-${note.id}`}>
                    <img
                        srcSet={`${img}?w=164&h=164&fit=crop&auto=format&dpr=2 2x`}
                        src={`${img}?w=164&h=164&fit=crop&auto=format`}
                        alt={`${note.head}:${index}`}
                        loading="lazy"
                    />
                </ImageListItem>
            ))}
        </ImageList>
    )
}
