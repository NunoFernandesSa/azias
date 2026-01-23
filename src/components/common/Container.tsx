// ----- React/Next -----
import { JSX } from "react";

// ----- Components -----
import { ContainerProps } from "@/src/types/common";

/**
 * A wrapper component for the entire application.
 *
 * It wraps the entire content of the application and provides a consistent
 * layout and styling.
 *
 * @param {{ children: React.ReactNode, className?: string, id?: string }} props
 * @param {React.ReactNode} props.children - The content of the application.
 * @param {string} [props.className] - The CSS class name for the container.
 * @param {string} [props.id] - The ID of the container.
 *
 * @returns {JSX.Element} - The container element with the given children.
 *
 * @example
 * <Container>
 *   <div>Content</div>
 * </Container>
 */
export default function Container({
  children,
  className,
  id,
}: ContainerProps): JSX.Element {
  return (
    <div className={`${className}`} id={id}>
      {children}
    </div>
  );
}
