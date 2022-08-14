import { ColorPicker as ColorPalette, useColor } from "react-color-palette";
import "react-color-palette/lib/css/styles.css";
import "./ColorPicker.css";

function ColorPicker() {
    const [color, setColor] = useColor("hex", "#121212");

    return (
        <main>
            <div className="container">
                <div className="header">
                    <div className="title">ColorPicker</div>
                </div>
                <div className="content">
                    <ColorPalette
                        width={456}
                        height={228}
                        color={color}
                        onChange={setColor}
                        hideHSV
                        dark
                    />
                </div>
            </div>
        </main>
    );
}

export default ColorPicker;
