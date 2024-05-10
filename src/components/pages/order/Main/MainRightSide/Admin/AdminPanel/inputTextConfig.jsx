import { GiCupcake } from "react-icons/gi";
import { BsFillCameraFill } from "react-icons/bs"
import { MdOutlineEuro } from "react-icons/md"

export const getInputTextsConfig = (newProduct) => [
  {
    id: "0",
    name: "title",
    value: newProduct.title,
    type: "text",
    placeholder: "Nom du produit",
    Icon: <GiCupcake />,
    version: "minimalist",
  },
  {
    id: "1",
    name: "imageSource",
    value: newProduct.imageSource,
    type: "text",
    placeholder: "Lien URL d'une image (ex: https://la-photo-de-mon-produit.png)",
    Icon: <BsFillCameraFill />,
    version: "minimalist",
  },
  {
    id: "2",
    name: "price",
    value: newProduct.price ? newProduct.price : "",
    type: "text",
    placeholder: "Prix",
    Icon: <MdOutlineEuro />,
    version: "minimalist",
  },
]
