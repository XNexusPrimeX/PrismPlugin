import React from "react";

/**
 * Re-renderiza o componente quando o atalho Ctrl + K é pressionado e retorna um booleano,
 * a primeira vez é false, e as demais o retorno é invertido
 */
function useShortcut() {
	const [isShortcutPressed, setIsShortcutPressed] = React.useState(false);

	React.useEffect(() => {
		function handleKeyDown(event: KeyboardEvent) {
			if (event.ctrlKey && event.key === "m") {
				setIsShortcutPressed((prevState) => !prevState);
			}
		}

		window.addEventListener("keydown", handleKeyDown);

		return () => {
			window.removeEventListener("keydown", handleKeyDown);
		};
	}, []);

	return isShortcutPressed;
}

export default useShortcut;
