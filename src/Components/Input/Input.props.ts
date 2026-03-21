import type { Ref } from "react";

export interface InputProps {
  placeholder?: string;
  svg?: boolean;
  ref?: Ref<HTMLInputElement>;
  name?: string;
  id?: string;
  value?: string;
  onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
  onKeyDown?: (event: React.KeyboardEvent<HTMLInputElement>) => void;
}
