import { useEffect } from "react";

export function useOnClickOutside(ref: any, handler: any): void {
  useEffect(() => {
    const listener = (event: any): void => {
      if (!ref?.current || ref?.current?.contains(event.target)) {
        return;
      }
      handler(event);
    };
    document.addEventListener("mousedown", listener);
    document.addEventListener("touchstart", listener);
    return () => {
      document.removeEventListener("mousedown", listener);
      document.removeEventListener("touchstart", listener);
    };
  }, [ref, handler]);
}

// Usage
// function App() {
//     const ref = useRef();
//     const [isModalOpen, setModalOpen] = useState(false);
//     useOnClickOutside(ref, () => setModalOpen(false));
//     return (
//       <div>
//         {isModalOpen ? (
//           <div ref={ref}>
//             👋 Hey, I'm a modal. Click anywhere outside of me to close.
//           </div>
//         ) : (
//           <button onClick={() => setModalOpen(true)}>Open Modal</button>
//         )}
//       </div>
//     );
//   }
