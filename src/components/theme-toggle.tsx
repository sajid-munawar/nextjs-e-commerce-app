"use Client";
import { RootState } from "@/store/store";
import { BsSun, BsFillMoonStarsFill } from "react-icons/bs";
import { useDispatch, useSelector } from "react-redux";
import { changeToDark, changeToLight } from "@/store/slices/themeSlice";

export function ThemeToggle() {
  const theme = useSelector((state: RootState) => state.themeSlice.value);
  const dispatch = useDispatch();

  const handleThemeChange = () => {
    if (theme === "light") {
      dispatch(changeToDark());
    } else {
      dispatch(changeToLight());
    }
  };

  return (
    <button onClick={handleThemeChange}>
      <span className="sr-only">Toggle theme</span>
      {theme === "light" ? (
        <BsFillMoonStarsFill size={25} />
      ) : (
        <BsSun size={25} />
      )}
    </button>
  );
}
