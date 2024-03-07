import { PHONE_NUMBER } from "../constants/social-media";

export function formatPriceARS(price: any): any {
    if (typeof price === "number") {
        let priceFormatted = price.toFixed(2).replace(".", ",");

        let [entirePart, decimalPart] = priceFormatted.split(",");

        let regex = /\B(?=(\d{3})+(?!\d))/g;
        entirePart = entirePart.replace(regex, ".");

        priceFormatted = entirePart + "," + decimalPart;

        priceFormatted = priceFormatted;

        return priceFormatted;
    }
}

export const handleClickToWhatsApp = () => {
    window.open(
        `https://wa.me/${PHONE_NUMBER}`,
        "_blank"
    );
};