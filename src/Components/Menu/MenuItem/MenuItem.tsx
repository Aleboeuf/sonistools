//LIBS
import { useEffect, createRef } from "react";
import { useNavigate } from "react-router-dom";

//STYLES
import "./MenuItem.css";

export type MenuItemProps = {
    name: string;
    imgUrl: string;
    navUrl: string;
};

function MenuItem({ name, imgUrl, navUrl }: MenuItemProps): JSX.Element {
    let navigate = useNavigate();

    const handleClick = () => {
        navigate(navUrl);
    };

    const ref = createRef<HTMLDivElement>();

    useEffect(() => {
        const N_menu_item = ref.current;

        N_menu_item?.addEventListener("click", handleClick);

        return () => {
            N_menu_item?.removeEventListener("click", handleClick);
        };
    });

    return (
        <div id="menu-item" ref={ref}>
            <div className="menu-item-name">{name}</div>
            <div className="menu-item-img-container">
                <img src={imgUrl} alt="logo"></img>
            </div>
        </div>
    );
}

export default MenuItem;
