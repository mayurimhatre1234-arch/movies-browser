import { useDispatch, useSelector } from "react-redux";
import { toggleTheme, selectThemeMode } from "../../features/themeSlice";
import { ToggleButton } from "./styled";

export const ThemeToggle = () => {
  const dispatch = useDispatch();
  const mode = useSelector(selectThemeMode);

  return (
    <ToggleButton
      onClick={() => dispatch(toggleTheme())}
      title={mode === "light" ? "Switch to dark mode" : "Switch to light mode"}
    >
      {mode === "light" ? "\u{1F319}" : "\u{2600}\u{FE0F}"}
    </ToggleButton>
  );
};
