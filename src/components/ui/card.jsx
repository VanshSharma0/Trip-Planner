import * as React from "react";
import PropTypes from 'prop-types';
import { cn } from "@/lib/utils";

// Main Card Component
const Card = React.forwardRef(({ className, ...props }, ref) => (
  <div
    ref={ref}
    className={cn("rounded-xl border bg-card text-card-foreground shadow", className)}
    {...props}
  />
));

Card.displayName = "Card";
Card.propTypes = {
  className: PropTypes.string,
  // `props` isn't strictly necessary to validate here as it's a catch-all for any other prop
};

// CardHeader Component
const CardHeader = React.forwardRef(({ className, ...props }, ref) => (
  <div
    ref={ref}
    className={cn("p-6 pt-0", className)}
    {...props}
  />
));

CardHeader.displayName = "CardHeader";
CardHeader.propTypes = {
  className: PropTypes.string,
};

// CardTitle Component
const CardTitle = React.forwardRef(({ className, ...props }, ref) => (
  <div
    ref={ref}
    className={cn("font-semibold leading-none tracking-tight", className)}
    {...props}
  />
));

CardTitle.displayName = "CardTitle";
CardTitle.propTypes = {
  className: PropTypes.string,
};

// CardDescription Component
const CardDescription = React.forwardRef(({ className, ...props }, ref) => (
  <div
    ref={ref}
    className={cn("text-sm text-muted-foreground", className)}
    {...props}
  />
));

CardDescription.displayName = "CardDescription";
CardDescription.propTypes = {
  className: PropTypes.string,
};

// CardContent Component
const CardContent = React.forwardRef(({ className, ...props }, ref) => (
  <div
    ref={ref}
    className={cn("p-6 pt-0", className)}
    {...props}
  />
));

CardContent.displayName = "CardContent";
CardContent.propTypes = {
  className: PropTypes.string,
};

// CardFooter Component
const CardFooter = React.forwardRef(({ className, ...props }, ref) => (
  <div
    ref={ref}
    className={cn("flex items-center p-6 pt-0", className)}
    {...props}
  />
));

CardFooter.displayName = "CardFooter";
CardFooter.propTypes = {
  className: PropTypes.string,
};

// Exporting all components
export { Card, CardHeader, CardFooter, CardTitle, CardDescription, CardContent };
