//STYLES
import "./Menu.css";

//IMAGES
import IMG_MenuItemColorPicker from "../../Assets/Images/menu-item-color-picker.png";

//COMPONENTS
import MenuItem from "./MenuItem/MenuItem";
import { MenuItemProps } from "./MenuItem/MenuItem";

const menuItemsProps: MenuItemProps[] = [
    {
        name: "Color Picker",
        imgUrl: IMG_MenuItemColorPicker,
        navUrl: "/colorpicker",
    },
    {
        name: "Calculator",
        imgUrl: "src/assets/images/menu-item-calculator.png",
        navUrl: "",
    },
    {
        name: "WebVitals",
        imgUrl: "src/assets/images/menu-item-calculator.png",
        navUrl: "",
    },
];

function Menu(): JSX.Element {
    const items: JSX.Element[] = [];

    for (const key in menuItemsProps) {
        const { name, imgUrl, navUrl } = menuItemsProps[key];
        items.push(
            <MenuItem key={key} name={name} imgUrl={imgUrl} navUrl={navUrl} />
        );
    }

    return <div id="menu">{items}</div>;
}

export default Menu;
