type AccordionHeaderProps = {
  children: React.ReactNode;
  setOpen: (open: boolean) => void;
  open: boolean;
};

export default function AccordionHeader({
  children,
  open,
  setOpen,
}: AccordionHeaderProps) {
  return (
    <button
      className="accordion-trigger"
      type="button"
      onClick={() => setOpen(!open)}
    >
      {children}
    </button>
  );
}
