import { LucideProps } from "lucide-react";
import { ReactNode } from "react";

export type TRoute = {
  path: string;
  element: ReactNode;
  icon?: React.FC<LucideProps>;
};
export type TPathRoute = {
  name: string;
  path?: string;
  element?: ReactNode;
  icon?: React.FC<LucideProps>;
  children?: TPathRoute[];
};

export type TSideber = {
  key: string;
  label: ReactNode;
  icon?: React.FC<LucideProps>;
  children?: TSideber[];
};
