import { TPathRoute } from "@/types/gobal.types";
import { ReactNode } from "react";
export type TSideber = {
  key: string;
  label: ReactNode;
  children?: TSideber[];
};
export const SideberGenetor = (sideverItems: TPathRoute[]) => {
  const sidever = sideverItems.reduce((acc: TSideber[], item) => {
    if (item?.path && item?.element) {
      acc.push({
        key: item.name,
        label: item.path,
      });
    }

    if (item.children) {
      acc.push({
        key: item.name,
        label: item.name,
        children: item.children.map((chil) => ({
          key: chil.name,
          label: item.path,
        })),
      });
    }
    return acc;
  }, []);
  console.log(sidever);
  return sidever;
};
