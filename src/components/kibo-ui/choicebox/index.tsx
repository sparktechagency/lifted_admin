"use client";

import { Checkbox } from "@/components/ui/checkbox";
import { cn } from "@/lib/utils";
import {
  type ComponentProps,
  createContext,
  type HTMLAttributes,
  useContext,
} from "react";
import {
  Field,
  FieldContent,
  FieldDescription,
  FieldLabel,
  FieldTitle,
} from "@/components/ui/field";

export type CheckboxGroupProps = Omit<
  HTMLAttributes<HTMLDivElement>,
  "onChange"
> & {
  value?: string[];
  onValueChange?: (value: string[]) => void;
};

export const CheckboxGroup = ({ className, ...props }: CheckboxGroupProps) => (
  <div className={cn("w-full space-y-3", className)} {...props} />
);

type CheckboxGroupItemContextValue = {
  value: CheckboxGroupItemProps["value"];
  id?: CheckboxGroupItemProps["id"];
  checked?: boolean;
  onCheckedChange?: (checked: boolean) => void;
};

const CheckboxGroupItemContext =
  createContext<CheckboxGroupItemContextValue | null>(null);

const useCheckboxGroupItemContext = () => {
  const context = useContext(CheckboxGroupItemContext);

  if (!context) {
    throw new Error(
      "useCheckboxGroupItemContext must be used within a CheckboxGroupItem"
    );
  }

  return context;
};

export type CheckboxGroupItemProps = {
  value: string;
  id?: string;
  checked?: boolean;
  onCheckedChange?: (checked: boolean) => void;
  className?: string;
  children?: React.ReactNode;
};

export const CheckboxGroupItem = ({
  className,
  children,
  value,
  id,
  checked,
  onCheckedChange,
}: CheckboxGroupItemProps) => (
  <CheckboxGroupItemContext.Provider
    value={{ value, id, checked, onCheckedChange }}
  >
    <FieldLabel htmlFor={id}>
      <Field className={className} orientation="horizontal">
        {children}
      </Field>
    </FieldLabel>
  </CheckboxGroupItemContext.Provider>
);

export type CheckboxGroupItemHeaderProps = ComponentProps<typeof FieldContent>;

export const CheckboxGroupItemHeader = ({
  className,
  ...props
}: CheckboxGroupItemHeaderProps) => (
  <FieldContent className={className} {...props} />
);

export type CheckboxGroupItemTitleProps = ComponentProps<typeof FieldTitle>;

export const CheckboxGroupItemTitle = ({
  className,
  ...props
}: CheckboxGroupItemTitleProps) => (
  <FieldTitle className={className} {...props} />
);

export type CheckboxGroupItemSubtitleProps = HTMLAttributes<HTMLSpanElement>;

export const CheckboxGroupItemSubtitle = ({
  className,
  ...props
}: CheckboxGroupItemSubtitleProps) => (
  <span
    className={cn("font-normal text-muted-foreground text-xs", className)}
    {...props}
  />
);

export type CheckboxGroupItemDescriptionProps = ComponentProps<
  typeof FieldDescription
>;

export const CheckboxGroupItemDescription = ({
  className,
  ...props
}: CheckboxGroupItemDescriptionProps) => (
  <FieldDescription className={className} {...props} />
);

export type CheckboxGroupIndicatorProps = Partial<
  ComponentProps<typeof Checkbox>
>;

export const CheckboxGroupIndicator = (props: CheckboxGroupIndicatorProps) => {
  const context = useCheckboxGroupItemContext();

  return (
    <Checkbox
      {...props}
      checked={context.checked}
      onCheckedChange={context.onCheckedChange}
      id={context.id}
    />
  );
};
