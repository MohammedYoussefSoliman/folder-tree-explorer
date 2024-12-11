import { useState } from "react";

import AccordionHeader from "./AccordionHeader";

import "./accordion.css";

type AccordionProps = {
  trigger: (({ open }: { open: boolean }) => React.ReactNode) | React.ReactNode;
  children: React.ReactNode;
};

export default function Accordion({ trigger, children }: AccordionProps) {
  const [open, setOpen] = useState(false);

  return (
    <div className="accordion--wrapper">
      <AccordionHeader open={open} setOpen={setOpen}>
        {typeof trigger === "function" ? trigger({ open }) : trigger}
      </AccordionHeader>
      <div className="content" data-open={open}>
        {children}
      </div>
    </div>
  );
}
