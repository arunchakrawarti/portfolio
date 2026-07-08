import Link from "next/link";
import { twMerge } from "tailwind-merge";

const variantClasses = {
  default: "bg-gray-100 text-gray-500",
  outline: " bg-primary text-black",
  primary: "text-primary border border-primary",
  danger: "text-primary border-2 border-primary",
  gradient: "bg-primary",
};

function Button({
  children,
  variant = "default",
  bgColor,
  textColor,
  icon,
  iconPosition = "left",
  href,
  height = "h-11",
  width = "px-4",
  rounded = "rounded-[8px]",
  className,
  loading,
  ...props
}) {
  const baseClasses =
    "inline-flex items-center justify-center gap-2 font-montserrat font-medium text-[17px] leading-[100%] tracking-normal align-middle transition duration-200 focus:outline-none cursor-pointer disabled:cursor-not-allowed disabled:opacity-50";

  const variantClass =
    variantClasses[variant] || variantClasses.default;

  const classes = twMerge(
    baseClasses,
    variantClass,
    height,
    width,
    rounded,
    bgColor,
    textColor,
    className
  );

  const content = (
    <>
      {iconPosition === "left" && icon && (
        <i className={`ri-${icon} text-[1rem]`} />
      )}

      {children}

      {iconPosition === "right" && icon && (
        <i className={`ri-${icon} text-[1rem]`} />
      )}
    </>
  );

  if (href) {
    return (
      <Link href={href} className={classes} {...props}>
        {content}
      </Link>
    );
  }

  return (
    <button className={classes} {...props}>
      {content}
    </button>
  );
}

export default Button;