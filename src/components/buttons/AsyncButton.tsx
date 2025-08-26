import {AsyncButtonProps} from "./interface";
import Button from "./Button";

const AsyncButton = ({onComplete, method, body, endpoint, ...props}: AsyncButtonProps) => {

    const handleClickButton = async () => {
        try {
            const response = await fetch(endpoint, {
                method,
                headers: {"Content-Type": "application/json"},
                body: JSON.stringify(body)
            });

            const data = await response.json();
            if (onComplete) {
                onComplete(data);
            }
        } catch (e) {
            console.error(e);
        }
    };

    return <Button onClick={handleClickButton} {...props} />;
};

export default AsyncButton;