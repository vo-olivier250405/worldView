import { faBars, faHome, faSearch } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { HoverAnimation } from "@/app/Animations";

export const NavBar = () => {
  const [showButtons, setShowButtons] = useState(false);
  const variants = {
    open: { opacity: 1, x: 0 },
    closed: { opacity: 0, x: "-100%" },
  };

  return (
    <>
      <section className="container">
        <section className="nav-bar">
          {/* <HoverAnimation>
            <FontAwesomeIcon
              className="menu"
              icon={faBars}
              onClick={() => setShowButtons((showButtons) => !showButtons)}
            />
          </HoverAnimation>
          <motion.nav
            animate={showButtons ? "open" : "closed"}
            variants={variants}
          >
            <ButtonsOPtions showButtons={showButtons} />
          </motion.nav> */}
        </section>
      </section>
    </>
  );
};

export const ButtonsOPtions = ({ showButtons }: { showButtons: boolean }) => {
  const [showInput, setShowInput] = useState(false);
  return (
    <div className="buttons">
      <HoverAnimation>
        <button>
          <FontAwesomeIcon icon={faHome} />
        </button>
      </HoverAnimation>
      <HoverAnimation>
        <button onClick={() => setShowInput(!showInput)}>
          <FontAwesomeIcon icon={faSearch} />
        </button>
      </HoverAnimation>
    </div>
  );
};
