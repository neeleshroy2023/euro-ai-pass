/**
 * A versatile Button component that manages four states: idle, pending, success, and error.
 * This stateful button is designed to provide visual feedback based on its current state.
 *
 * ## States:
 * - **Idle**: The default state of the button, ready for user interaction.
 * - **Pending**: Indicates that an action is in progress, typically showing a loading spinner.
 * - **Success**: Represents a successful action, often accompanied by a success icon or message.
 * - **Error**: Displays an error state, usually with an error message
 *
 * ## Props:
 * @prop {string} label - The text displayed on the button.
 * @prop {'idle' | 'pending' | 'success' | 'error'} state - The current state of the button.
 * @prop {() => void} onClick - Callback function triggered when the button is clicked.
 * @prop {boolean} [disabled=false] - Whether the button is disabled and non-interactive.
 *
 * ## Example Usage:
 * ```tsx
 * <Button
 *   label="Submit"
 *   state="idle"
 *   onClick={handleSubmit}
 *   disabled={isDisabled}
 * />
 * ```
 *
 * ## Accessibility:
 * - Ensure the button has an accessible label for screen readers.
 * - Use appropriate ARIA attributes to indicate the button's state (e.g., `aria-busy` for pending).
 */

"use client";
import { twMerge } from "tailwind-merge";

const Button = ({
  label,
  state,
  onClick,
  disabled = false,
  icon,
}: {
  label: string;
  state: "idle" | "pending" | "success" | "error";
  onClick: () => void;
  disabled?: boolean;
  icon?: React.ReactNode;
}) => {
  const buttonClass = twMerge(
    "flex items-center justify-center px-6 py-2 text-white font-semibold rounded-md transition duration-300 ease-in-out cursor-pointer",
    "focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500",
    "disabled:opacity-50 disabled:cursor-not-allowed",
    state === "idle" && "bg-blue-500 hover:bg-blue-600",
    state === "pending" && "bg-yellow-500 cursor-not-allowed",
    state === "success" && "bg-green-500 cursor-not-allowed",
    state === "error" && "bg-red-500 cursor-not-allowed"
  );
  return (
    <button
      onClick={onClick}
      disabled={disabled}
      className={buttonClass}
      aria-busy={state === "pending"}
      aria-live={state === "pending" ? "polite" : undefined}
      aria-atomic={state === "pending" ? "true" : undefined}
      aria-label={label}
    >
      {icon && <span className="mr-2">{icon}</span>}
      {state === "pending" && <span>Loading...</span>}
      {state === "success" && <span>Success!</span>}
      {state === "error" && <span>Error!</span>}
      {state === "idle" && <span>{label}</span>}
    </button>
  );
};
export default Button;
